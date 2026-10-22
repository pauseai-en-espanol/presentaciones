// Montaje de los vídeos de las Charlas PauseAI. La configuración de cada charla está en
// presentations/<slug>/video.json; lo generado, en packages/video/out/<slug>/ (ignorado por git).
//
//   pnpm video preparar <slug>     transcribe, busca las pausas y sincroniza la cámara
//   pnpm video editor <slug>       página para decidir los cortes leyendo la transcripción
//   pnpm video render <slug>       el vídeo final (1440p), con subtítulos y capítulos
//   pnpm video render <slug> --borrador          720p, para revisar
//   pnpm video render <slug> --desde 4:30 --hasta 6:00   solo un trozo
//   pnpm video subtitulos <slug> [--borrador]  rehace los subtítulos de un vídeo ya montado
//   pnpm video audio <slug>        el audio para un podcast (MP3, sin cabecera ni cierre)
//
// Necesita ffmpeg, whisper-cpp (brew install ffmpeg whisper-cpp) y Chrome.

import { join } from 'node:path';
import { parseArgs } from 'node:util';

import { audio } from './lib/audio.js';
import { cargar } from './lib/config.js';
import { editor } from './lib/editor.js';
import { preparar } from './lib/preparar.js';
import { render } from './lib/render.js';
import { subtitulos } from './lib/subtitulos.js';

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    borrador: { type: 'boolean', default: false },
    desde: { type: 'string' },
    hasta: { type: 'string' },
    puerto: { type: 'string', default: '3999' },
    'sin-abrir': { type: 'boolean', default: false },
    sincronizar: { type: 'boolean', default: false },
    transcribir: { type: 'boolean', default: false },
  },
});

const [orden, slug] = positionals;
const ordenes = {
  preparar: (cfg) => preparar(cfg, values),
  editor: (cfg) => editor(cfg, { puerto: Number(values.puerto), abrir: !values['sin-abrir'] }),
  render: (cfg) => render(cfg, values),
  audio: (cfg) => audio(cfg, values),
  subtitulos: async (cfg) => {
    const nombre = values.borrador ? 'borrador' : cfg.slug;
    console.log(`Subtítulos: ${await subtitulos(cfg, join(cfg.out, `${nombre}.mp4`), nombre)}`);
  },
};
if (!ordenes[orden]) {
  console.error(
    'Uso: pnpm video <preparar|editor|render|subtitulos|audio> <slug> [opciones]. Mira la cabecera de packages/video/video.js.',
  );
  process.exit(1);
}
try {
  await ordenes[orden](await cargar(slug));
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
