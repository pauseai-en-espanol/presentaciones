// La cabecera (5 s) y el cierre (20 s) de las Charlas PauseAI, sin voz. La cabecera presenta la charla y funde con el
// primer fotograma; el cierre sale del último y deja libre la mitad derecha para los elementos de pantalla final de
// YouTube (vídeo siguiente, suscribirse), que se colocan en YouTube Studio.
//
// Cada capa se dibuja en HTML (las demás ocultas, para que todo quede en su sitio) y ffmpeg las anima con fundidos.

import { ASSETS, capturar, dataUri, escapar } from '@pauseai-es/cards/captura.js';
import { semillaDe } from '@pauseai-es/cards/enjambre.js';
import { fondo } from '@pauseai-es/cards/fondos.js';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { RAIZ } from './config.js';
import { fechaLarga } from './marco.js';
import { ffmpeg } from './medios.js';

export const CABECERA = 5;
export const CIERRE = 20;
const FUNDIDO = 0.6;

// Oscurece el centro de la cabecera para que el texto se lea sobre el enjambre.
const VELO =
  '<div style="position:absolute;inset:0;background:radial-gradient(ellipse 50% 45% at 50% 50%,rgba(10,16,32,.92),rgba(10,16,32,0))"></div>';

const FUENTES =
  '<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;700&family=Saira+Condensed:wght@700&display=swap" rel="stylesheet">';

// Con `pintar` (el JS de un fondo), la página lleva el azul de la marca y ese fondo detrás de `cuerpo`.
const pagina = (cuerpo, pintar) => `<!doctype html><html><head><meta charset="utf-8">${FUENTES}
<style>
html,body{margin:0;width:1920px;height:1080px;background:transparent;overflow:hidden}
canvas{position:absolute;inset:0}
.oculto{visibility:hidden}
.sf{font-family:'Saira Condensed';font-weight:700}
.rs{font-family:'Roboto Slab';font-weight:300}
.rsb{font-family:'Roboto Slab';font-weight:700}
</style></head><body>
${pintar ? '<canvas id="k" width="1920" height="1080"></canvas>' : ''}
${cuerpo}
${pintar ? `<script>{const c=document.getElementById('k').getContext('2d');c.fillStyle='#0a1020';c.fillRect(0,0,1920,1080);}${pintar}</script>` : ''}
</body></html>`;

function cuerpoCabecera(d, capa) {
  const v = (nombre) => (capa === nombre ? '' : 'oculto');
  return `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
<img class="${v('logo')}" src="${d.logo}" style="height:110px">
<div class="${v('titulo')}" style="margin-top:44px">
  <div class="rsb" style="color:#cbd5e1;font-size:28px;letter-spacing:.22em;text-transform:uppercase">${escapar(d.serie)}</div>
  <div class="sf" style="color:#ff9416;font-size:112px;line-height:.95;text-transform:uppercase;max-width:1600px;margin-top:22px">${d.titulo}</div>
  ${d.subtitulo ? `<div class="rs" style="color:#f1f5f9;font-size:42px;margin-top:26px">${escapar(d.subtitulo)}</div>` : ''}
</div>
<div class="${v('firma')}" style="margin-top:40px">
  <div style="width:120px;height:6px;border-radius:3px;background:#ff9416;margin:0 auto"></div>
  <div class="rs" style="color:#cbd5e1;font-size:32px;margin-top:28px">${escapar(d.firma)}</div>
</div></div>`;
}

// Izquierda: gracias y dos QR (unirse y la charla). Derecha: dónde van los elementos de pantalla final de YouTube,
// del tamaño que tienen allí (vídeo o lista 16:9 y el círculo de suscribirse) y dentro del margen del 10 % que pide.
function cuerpoCierre(d) {
  const fila = (
    qr,
    titulo,
    texto,
  ) => `<div style="display:flex;gap:32px;align-items:center;margin-top:44px">
  ${qr ? `<img src="${qr}" style="width:180px;height:180px;border-radius:14px;background:#fff;padding:10px">` : ''}
  <div>
    <div class="sf" style="color:#ff9416;font-size:44px;line-height:1.05;text-transform:uppercase">${escapar(titulo)}</div>
    <div class="rs" style="color:#f1f5f9;font-size:30px;margin-top:8px">${escapar(texto)}</div>
  </div></div>`;
  const etiqueta = (texto, arriba) =>
    `<div class="rsb" style="position:absolute;left:1088px;top:${arriba}px;width:640px;color:#cbd5e1;font-size:24px;letter-spacing:.18em;text-transform:uppercase">${escapar(texto)}</div>`;
  const hueco = 'border:2px solid rgba(203,213,225,.35);background:rgba(10,16,32,.6)';
  return `<div style="position:absolute;left:140px;top:0;bottom:0;width:860px;display:flex;flex-direction:column;justify-content:center">
<img src="${d.logo}" style="height:84px;align-self:flex-start">
<div class="sf" style="color:#fff;font-size:150px;line-height:1;text-transform:uppercase;margin-top:36px">Gracias</div>
${fila(d.qrInscripcion, 'Únete a PauseAI España', d.inscripcion)}
${fila(d.qr, 'La charla y todas las fuentes', d.enlace)}
</div>
${etiqueta(d.siguiente, 128)}
<div style="position:absolute;left:1088px;top:172px;width:640px;height:360px;border-radius:16px;${hueco}"></div>
<div style="position:absolute;left:1088px;top:600px;width:300px;height:300px;border-radius:50%;${hueco}"></div>
<div class="rsb" style="position:absolute;left:1430px;top:736px;color:#cbd5e1;font-size:24px;letter-spacing:.18em;text-transform:uppercase">Suscríbete</div>`;
}

async function capa(html, dir, nombre, { ancho, alto }) {
  const grande = join(dir, `${nombre}@2x.png`);
  const final = join(dir, `${nombre}.png`);
  await capturar(html, grande, { ancho: 1920, alto: 1080, escala: 2, transparente: true });
  await ffmpeg(['-i', grande, '-vf', `scale=${ancho}:${alto}:flags=lanczos,format=rgba`, final]);
  return final;
}

// Mismos parámetros que los tramos de la charla, para unirlo todo sin volver a codificar.
const codificacion = (borrador, d) => [
  '-c:v',
  'h264_videotoolbox',
  '-b:v',
  borrador ? '3M' : '16M',
  '-profile:v',
  'high',
  '-g',
  '60',
  '-c:a',
  'pcm_s16le',
  '-t',
  String(d),
];

const imagen = (png, d) => ['-loop', '1', '-framerate', '30', '-t', String(d), '-i', png];
const silencio = (d) => ['-f', 'lavfi', '-t', String(d), '-i', 'anullsrc=r=48000:cl=stereo'];

async function fotograma(video, salida, { ultimo = false } = {}) {
  await ffmpeg([
    ...(ultimo ? ['-sseof', '-0.1'] : []),
    '-i',
    video,
    '-frames:v',
    '1',
    '-update',
    '1',
    salida,
  ]);
  return salida;
}

export async function piezas(cfg, { ancho, alto, dir, borrador, primero, ultimo }) {
  const { video, meta, slug } = cfg;
  const t = { ancho, alto };
  const logo = await dataUri(join(ASSETS, 'pauseai-es-on-dark.svg'));
  const semilla = semillaDe(meta.title);
  const pintar = (intensidad) =>
    fondo(meta.fondo, { ancho: 1920, alto: 1080, puntos: 1500, semilla, intensidad });
  const titulo = escapar(meta.title).replace(/:\s+/, ':<br>');
  const d = {
    logo,
    serie: video.serie ?? 'Charlas PauseAI',
    titulo,
    subtitulo: video.subtitulo ?? meta.subtitle,
    firma: `${meta.speaker} · ${fechaLarga(meta.date)}`,
  };
  const resultado = {};

  if (video.cabecera !== false) {
    const [fondo, ...capas] = await Promise.all([
      capa(pagina(VELO, pintar(1)), dir, 'cabecera-fondo', t),
      ...['logo', 'titulo', 'firma'].map((c) =>
        capa(pagina(cuerpoCabecera(d, c)), dir, `cabecera-${c}`, t),
      ),
    ]);
    const inicio = await fotograma(primero, join(dir, 'primer-fotograma.png'));
    const mantener = CABECERA - FUNDIDO;
    const salida = (mantener - 0.5).toFixed(2);
    // Fondo desde negro; logo, título (subiendo un poco) y firma, uno detrás de otro. El texto se va antes de fundir
    // con la charla, para que no se monte con el título de la primera slide.
    const grafo = [
      `[0:v]fade=t=in:st=0:d=0.4[f]`,
      `[1:v]fade=t=in:st=0.2:d=0.5:alpha=1,fade=t=out:st=${salida}:d=0.4:alpha=1[l]`,
      `[2:v]fade=t=in:st=0.6:d=0.5:alpha=1,fade=t=out:st=${salida}:d=0.4:alpha=1[ti]`,
      `[3:v]fade=t=in:st=1.0:d=0.5:alpha=1,fade=t=out:st=${salida}:d=0.4:alpha=1[fi]`,
      `[f][l]overlay=0:0[a]`,
      `[a][ti]overlay=0:'max(0,${Math.round(24 * (ancho / 1920))}*(1-(t-0.6)/0.5))'[b]`,
      `[b][fi]overlay=0:0,format=yuv420p,setsar=1[tarjeta]`,
      `[4:v]format=yuv420p,setsar=1[charla]`,
      `[tarjeta][charla]xfade=transition=fade:duration=${FUNDIDO}:offset=${mantener}[v]`,
    ];
    resultado.cabecera = join(dir, 'cabecera.mov');
    await ffmpeg([
      ...imagen(fondo, CABECERA),
      ...capas.flatMap((c) => imagen(c, CABECERA)),
      ...imagen(inicio, FUNDIDO),
      ...silencio(CABECERA),
      '-filter_complex',
      grafo.join(';'),
      '-map',
      '[v]',
      '-map',
      '5:a',
      ...codificacion(borrador, CABECERA),
      resultado.cabecera,
    ]);
  }

  if (video.cierre !== false) {
    const qr = join(RAIZ, 'presentations', slug, video.qr ?? 'public/qr-presentacion.png');
    const datos = {
      logo,
      // El QR de la marca lleva a pauseai.es; con otra dirección, su QR en qrInscripcion (o ninguno).
      inscripcion: video.inscripcion ?? 'pauseai.es',
      qrInscripcion: video.qrInscripcion
        ? await dataUri(join(RAIZ, 'presentations', slug, video.qrInscripcion))
        : video.inscripcion
          ? null
          : await dataUri(join(ASSETS, 'qr-pauseai-es.svg')),
      enlace: video.enlace ?? `pauseai.es/presentaciones/${slug}`,
      qr: existsSync(qr) ? await dataUri(qr) : null,
      siguiente: video.siguiente ?? 'Más Charlas PauseAI',
    };
    const [fondo, texto] = await Promise.all([
      capa(pagina('', pintar(0.7)), dir, 'cierre-fondo', t),
      capa(pagina(cuerpoCierre(datos)), dir, 'cierre-texto', t),
    ]);
    const fin = await fotograma(ultimo, join(dir, 'ultimo-fotograma.png'), { ultimo: true });
    const grafo = [
      `[2:v]fade=t=in:st=${FUNDIDO}:d=0.6:alpha=1[tx]`,
      `[1:v][tx]overlay=0:0,format=yuv420p,setsar=1[tarjeta]`,
      `[0:v]format=yuv420p,setsar=1[charla]`,
      `[charla][tarjeta]xfade=transition=fade:duration=${FUNDIDO}:offset=0,fade=t=out:st=${CIERRE - 0.5}:d=0.5[v]`,
    ];
    resultado.cierre = join(dir, 'cierre.mov');
    await ffmpeg([
      ...imagen(fin, FUNDIDO),
      ...imagen(fondo, CIERRE),
      ...imagen(texto, CIERRE),
      ...silencio(CIERRE),
      '-filter_complex',
      grafo.join(';'),
      '-map',
      '[v]',
      '-map',
      '3:a',
      ...codificacion(borrador, CIERRE),
      resultado.cierre,
    ]);
  }
  return resultado;
}
