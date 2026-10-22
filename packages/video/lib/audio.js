// `pnpm video audio <slug>`: el audio de la charla para un podcast (iVoox, o Spotify sin vídeo). Sale del vídeo ya
// montado, sin la cabecera ni el cierre (son mudos, y un silencio al empezar un episodio parece un fallo), a -16 LUFS
// (lo habitual en podcasts; el vídeo va a -14, como YouTube) y en MP3 con título, ponente y la portada de Luma.

import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { RAIZ } from './config.js';
import { duracion, ffmpeg } from './medios.js';
import { CABECERA, CIERRE } from './piezas.js';

export async function audio(cfg, { borrador = false } = {}) {
  const { video, meta, slug, out } = cfg;
  const nombre = borrador ? 'borrador' : slug;
  const mp4 = join(out, `${nombre}.mp4`);
  if (!existsSync(mp4)) throw new Error(`Falta el vídeo: pnpm video render ${slug}`);
  const desde = video.cabecera === false ? 0 : CABECERA;
  const hasta = (await duracion(mp4)) - (video.cierre === false ? 0 : CIERRE);
  const trozo = ['-ss', String(desde), '-to', String(hasta), '-i', mp4];

  console.log('Midiendo el volumen…');
  const medida = await ffmpeg([
    ...trozo,
    '-vn',
    '-af',
    'loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json',
    '-f',
    'null',
    '-',
  ]);
  const m = JSON.parse(/\{[^{}]*"input_i"[^{}]*\}/.exec(medida)[0]);

  // La portada cuadrada de Luma (pnpm card <slug>), si está hecha.
  const portada = join(RAIZ, 'packages', 'cards', 'out', `${slug}.png`);
  const conPortada = existsSync(portada);
  if (!conPortada) console.warn(`Sin portada: hazla con pnpm card ${slug} y repite.`);
  const salida = join(out, `${nombre}.mp3`);
  await ffmpeg([
    ...trozo,
    ...(conPortada
      ? ['-i', portada, '-map', '1:v', '-c:v', 'mjpeg', '-disposition:v', 'attached_pic']
      : []),
    '-map',
    '0:a',
    '-af',
    `loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true`,
    '-ar',
    '44100',
    '-c:a',
    'libmp3lame',
    '-b:a',
    '192k',
    '-id3v2_version',
    '3',
    '-metadata',
    `title=${meta.title}`,
    '-metadata',
    `artist=${meta.speaker}`,
    '-metadata',
    `album=${video.serie ?? 'Charlas PauseAI'}`,
    '-metadata',
    `date=${meta.date.slice(0, 4)}`,
    '-metadata',
    `comment=Las diapositivas y todas las fuentes: ${video.enlace ?? `pauseai.es/presentaciones/${slug}`}`,
    salida,
  ]);
  console.log(`Audio: ${salida} (${Math.round((hasta - desde) / 60)} min)`);
}
