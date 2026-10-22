// `pnpm video preparar <slug>`: saca el audio, lo transcribe con whisper (palabra a palabra), busca las pausas y
// mide el desfase entre la cámara y la pantalla. Es lo que necesitan el editor y el render.
//
// La transcripción tarda unos minutos, así que si ya está hecha se reutiliza; --transcribir la repite.

import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { promisify } from 'node:util';

import { guardar } from './config.js';
import { silencios } from './cortes.js';
import { duracion, envolvente, ffmpeg } from './medios.js';
import { leerPalabras, transcribir } from './whisper.js';

export async function preparar(cfg, { sincronizar = false, transcribir: repetir = false } = {}) {
  const { out, video } = cfg;
  const info = { pantalla: await duracion(cfg.pantalla) };
  if (cfg.camara) info.camara = await duracion(cfg.camara);

  const wav = join(out, 'audio.wav');
  console.log('Sacando el audio…');
  await ffmpeg([
    '-i',
    cfg.pantalla,
    '-map',
    `0:a:${video.grabacion.pistaAudio ?? 0}`,
    '-ac',
    '1',
    '-ar',
    '16000',
    '-c:a',
    'pcm_s16le',
    wav,
  ]);

  const base = join(out, 'whisper');
  let palabras;
  if (existsSync(`${base}.json`) && !repetir) {
    console.log('Reutilizo la transcripción que ya había (--transcribir para repetirla).');
    palabras = await leerPalabras(base);
  } else {
    console.log('Transcribiendo (unos minutos)…');
    palabras = await transcribir(cfg, wav, base);
  }
  await writeFile(join(out, 'palabras.json'), JSON.stringify(palabras));
  console.log(`${palabras.length} palabras.`);

  const db = envolvente(await readFile(wav));
  await writeFile(join(out, 'energia.bin'), Buffer.from(db.buffer));
  await writeFile(join(out, 'silencios.json'), JSON.stringify(silencios(db)));

  if (cfg.camara && (sincronizar || video.camara?.desfase === undefined)) {
    console.log('Midiendo el desfase de la cámara…');
    const desfase = await medirDesfase(cfg, info.pantalla);
    video.camara = { ...video.camara, desfase };
    await guardar(cfg);
    console.log(
      `Desfase de la cámara: ${(desfase * 1000).toFixed(0)} ms (guardado en video.json).`,
    );
  }
  await writeFile(join(out, 'info.json'), JSON.stringify(info, null, 2));
  console.log(`Listo. Ahora: pnpm video editor ${cfg.slug}`);
}

// Compara la envolvente del audio de la cámara con la de la pantalla en tres puntos de la grabación.
// Devuelve cuánto hay que sumar al tiempo de la pantalla para tener el de la cámara.
async function medirDesfase(cfg, total) {
  const extraer = async (archivo, desde) => {
    const { stdout } = await promisify(execFile)(
      'ffmpeg',
      [
        '-v',
        'error',
        '-ss',
        String(desde),
        '-t',
        '60',
        '-i',
        archivo,
        '-map',
        '0:a:0',
        '-ac',
        '1',
        '-ar',
        '1000',
        '-f',
        's16le',
        '-',
      ],
      { encoding: 'buffer', maxBuffer: 1 << 24 },
    );
    const s = new Int16Array(
      stdout.buffer.slice(stdout.byteOffset, stdout.byteOffset + stdout.length),
    );
    const e = [];
    for (let i = 0; i + 5 <= s.length; i += 5) {
      let suma = 0;
      for (let j = i; j < i + 5; j++) suma += s[j] * s[j];
      e.push(Math.sqrt(suma / 5));
    }
    const media = e.reduce((a, b) => a + b, 0) / e.length;
    return e.map((x) => x - media);
  };
  const medidas = [];
  for (const f of [0.25, 0.5, 0.75]) {
    const a = await extraer(cfg.pantalla, total * f);
    const b = await extraer(cfg.camara, total * f);
    let mejor = { suma: -Infinity, lag: 0 };
    for (let lag = -200; lag <= 200; lag++) {
      let suma = 0;
      for (let i = 200; i < a.length - 200; i++) suma += a[i] * (b[i + lag] ?? 0);
      if (suma > mejor.suma) mejor = { suma, lag };
    }
    medidas.push(mejor.lag * 0.005);
  }
  medidas.sort((x, y) => x - y);
  if (medidas[2] - medidas[0] > 0.02) {
    console.warn(
      `Las medidas del desfase no coinciden (${medidas.join(', ')} s): revísalo a mano.`,
    );
  }
  return Number(medidas[1].toFixed(3));
}
