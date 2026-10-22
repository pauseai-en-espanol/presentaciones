// Subtítulos .srt para subirlos a YouTube aparte: no se queman en el vídeo. Se transcribe el audio del vídeo ya
// montado, así que los tiempos son los del vídeo y lo cortado no aparece. Las correcciones de video.json
// («POSE AI» → «PauseAI») se aplican palabra a palabra, antes de partir el texto en subtítulos.

import { existsSync } from 'node:fs';
import { rm, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ffmpeg } from './medios.js';
import { srt } from './tiempo.js';
import { leerPalabras, transcribir } from './whisper.js';

const LINEA = 42;
const PUNTUACION = /[.,;:?!…»]+$/;

function dosLineas(frase) {
  if (frase.length <= LINEA) return frase;
  const mitad = frase.length / 2;
  let mejor = -1;
  for (let i = frase.indexOf(' '); i !== -1; i = frase.indexOf(' ', i + 1)) {
    if (mejor === -1 || Math.abs(i - mitad) < Math.abs(mejor - mitad)) mejor = i;
  }
  return mejor === -1 ? frase : `${frase.slice(0, mejor)}\n${frase.slice(mejor + 1)}`;
}

// Por si whisper se inventa etiquetas de quién habla («Dani Lupión:»): fuera el nombre del ponente seguido de dos
// puntos, aunque lo escriba algo distinto.
function sinEtiquetas(palabras, ponente) {
  const base = (s) =>
    s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  const [nombre, apellido = ''] = base(ponente).split(' ');
  return palabras.filter((p, i) => {
    const w = base(p.w);
    const etiqueta = (x) => x.endsWith(':') && x.startsWith(apellido.slice(0, 4));
    if (w === nombre && etiqueta(base(palabras[i + 1]?.w ?? ''))) return false;
    return !(etiqueta(w) && base(palabras[i - 1]?.w ?? '') === nombre);
  });
}

// Una corrección de varias palabras junta esas palabras en una; la puntuación del final se conserva.
function corregir(palabras, correcciones) {
  const lista = Object.entries(correcciones).map(([mal, bien]) => [mal.split(' '), bien]);
  const salida = [];
  for (let i = 0; i < palabras.length; i++) {
    const regla = lista.find(([mal]) =>
      mal.every((m, k) => {
        const p = palabras[i + k]?.w;
        return p === m || (k === mal.length - 1 && p?.replace(PUNTUACION, '') === m);
      }),
    );
    if (!regla) {
      salida.push(palabras[i]);
      continue;
    }
    const [mal, bien] = regla;
    const ultima = palabras[i + mal.length - 1];
    salida.push({
      w: bien + (PUNTUACION.exec(ultima.w)?.[0] ?? ''),
      t0: palabras[i].t0,
      t1: ultima.t1,
    });
    i += mal.length - 1;
  }
  return salida;
}

function agrupar(palabras) {
  const grupos = [];
  let actual = [];
  for (const p of palabras) {
    const previa = actual.at(-1);
    const largo = actual.map((x) => x.w).join(' ').length;
    if (
      previa &&
      (p.t0 - previa.t1 > 0.8 ||
        largo + p.w.length + 1 > LINEA * 2 ||
        p.t1 - actual[0].t0 > 6 ||
        (/[.?!…»]$/.test(previa.w) && largo > 20) ||
        (/[,;:]$/.test(previa.w) && largo > LINEA * 1.4))
    ) {
      grupos.push(actual);
      actual = [];
    }
    actual.push(p);
  }
  if (actual.length) grupos.push(actual);
  return grupos;
}

export async function subtitulos(cfg, video, nombre) {
  // Si el vídeo no ha cambiado desde la última vez, se reutiliza su transcripción: así, corregir un nombre en
  // video.json y rehacer los subtítulos es cuestión de segundos.
  const base = join(cfg.out, `${nombre}-whisper`);
  let crudas;
  if (
    existsSync(`${base}.json`) &&
    (await stat(`${base}.json`)).mtimeMs > (await stat(video)).mtimeMs
  ) {
    crudas = await leerPalabras(base);
  } else {
    console.log('Transcribiendo el vídeo para los subtítulos…');
    const wav = join(cfg.out, `${nombre}-audio.wav`);
    await ffmpeg(['-i', video, '-vn', '-ac', '1', '-ar', '16000', '-c:a', 'pcm_s16le', wav]);
    crudas = await transcribir(cfg, wav, base);
    await rm(wav, { force: true });
  }
  const palabras = corregir(sinEtiquetas(crudas, cfg.meta.speaker), cfg.video.correcciones ?? {});

  const grupos = agrupar(palabras);
  const bloques = grupos.map((g, i) => {
    const fin = Math.min(Math.max(g.at(-1).t1, g[0].t0 + 1), grupos[i + 1]?.[0].t0 ?? Infinity);
    const frase = g.map((x) => x.w).join(' ');
    return `${i + 1}\n${srt(g[0].t0)} --> ${srt(fin)}\n${dosLineas(frase)}\n`;
  });
  // Con otro nombre que el vídeo, para que los reproductores no los carguen solos.
  const salida = join(cfg.out, `subtitulos-${nombre}.srt`);
  await writeFile(salida, bloques.join('\n'));
  return salida;
}
