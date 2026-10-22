// El marco de las Charlas PauseAI: las slides a la izquierda, la cámara a la derecha con el nombre debajo y, bajo el
// nombre, la sección en la que va la charla. Se dibuja en HTML a 1920×1080 (al doble de resolución, para que el logo
// y el texto salgan nítidos) con huecos transparentes donde van las slides y la cámara.

import { ASSETS, capturar, dataUri, escapar } from '@pauseai-es/cards/captura.js';
import { semillaDe } from '@pauseai-es/cards/enjambre.js';
import { fondo, necesitaCalma } from '@pauseai-es/cards/fondos.js';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ffmpeg } from './medios.js';

export const CON_CAMARA = {
  slide: { x: 48, y: 135, w: 1440, h: 810, r: 14 },
  camara: { x: 1520, y: 135, w: 352, h: 500, r: 14 },
};
export const SIN_CAMARA = { slide: { x: 240, y: 135, w: 1440, h: 810, r: 14 } };

const FUENTES =
  '<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;700&family=Saira+Condensed:wght@700&display=swap" rel="stylesheet">';
const BASE =
  'html,body{margin:0;width:1920px;height:1080px;background:transparent;overflow:hidden}';

export const fechaLarga = (iso) =>
  new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(iso));

function htmlMarco({ serie, titulo, ponente, fecha, L, logo, semilla, tema }) {
  // Con un fondo con mucho detalle, sin nada detrás del texto, para que se lea bien.
  const calma = necesitaCalma(tema)
    ? `// Sin enjambre detrás del texto, para que se lea bien.
const calma = (x, y, w, h) => { c.save(); c.shadowColor = '#0a1020'; c.shadowBlur = 30; c.fillStyle = '#0a1020'; c.beginPath(); c.roundRect(x, y, w, h, 20); c.fill(); c.restore(); };
calma(40, 30, 300, 82); calma(1500, 44, 390, 64); calma(${L.slide.x - 8}, 960, 900, 70); calma(1360, 964, 530, 60);
${L.camara ? `c.fillStyle = 'rgba(10,16,32,.85)'; c.beginPath(); c.roundRect(${L.camara.x - 16}, ${L.camara.y + L.camara.h + 8}, ${L.camara.w + 32}, ${945 - L.camara.y - L.camara.h + 8}, 14); c.fill();` : ''}
`
    : '';
  const huecos = [L.slide, L.camara].filter(Boolean);
  return `<!doctype html><html><head><meta charset="utf-8">${FUENTES}<style>${BASE}
canvas{position:absolute;inset:0}
.t{position:absolute;font-family:'Saira Condensed';font-weight:700}
.logo{position:absolute;left:48px;top:34px;height:70px}
.serie{right:48px;top:52px;color:#cbd5e1;font-size:30px;letter-spacing:.22em;text-transform:uppercase;display:flex;align-items:center;gap:16px}
.serie i{display:block;width:40px;height:5px;border-radius:3px;background:#ff9416}
.titulo{left:${L.slide.x}px;top:968px;color:#f1f5f9;font-size:36px;letter-spacing:.01em}
.fecha{right:48px;top:976px;font-family:'Roboto Slab';font-weight:300;color:#94a3b8;font-size:24px}
.ponente{left:1520px;top:658px;width:352px;color:#fff;font-size:44px;line-height:1;text-transform:uppercase}
</style></head><body>
<canvas id="k" width="1920" height="1080"></canvas>
<img class="logo" src="${logo}">
<div class="t serie"><i></i>${escapar(serie)}</div>
<div class="t titulo">${escapar(titulo)}</div>
<div class="t fecha">${escapar(L.camara ? fecha : [ponente, fecha].join(' · '))}</div>
${L.camara ? `<div class="t ponente">${escapar(ponente)}</div>` : ''}
<script>
const c = document.getElementById('k').getContext('2d');
c.fillStyle = '#0a1020'; c.fillRect(0, 0, 1920, 1080);
${fondo(tema, { ancho: 1920, alto: 1080, puntos: 900, semilla, intensidad: 0.5 })}
const huecos = ${JSON.stringify(huecos)};
const rr = (b, pad = 0) => { c.beginPath(); c.roundRect(b.x - pad, b.y - pad, b.w + 2 * pad, b.h + 2 * pad, b.r + pad); };
${calma}// Sombra, hueco y borde: gris fino para las slides, naranja para la cámara.
for (const b of huecos) { c.save(); c.shadowColor = 'rgba(0,0,0,.6)'; c.shadowBlur = 40; c.fillStyle = '#000'; rr(b); c.fill(); c.restore(); }
c.globalCompositeOperation = 'destination-out';
for (const b of huecos) { rr(b); c.fill(); }
c.globalCompositeOperation = 'source-over';
c.lineWidth = 2; c.strokeStyle = 'rgba(148,163,184,.28)'; rr(huecos[0], 1); c.stroke();
if (huecos[1]) { c.lineWidth = 3; c.strokeStyle = '#ff9416'; rr(huecos[1], 1.5); c.stroke(); }
</script></body></html>`;
}

const htmlSeccion = (
  n,
  total,
  nombre,
) => `<!doctype html><html><head><meta charset="utf-8">${FUENTES}<style>${BASE}
.s{position:absolute;left:1520px;width:352px;bottom:135px}
.k{font-family:'Roboto Slab';font-weight:700;color:#ff9416;font-size:20px;letter-spacing:.2em;text-transform:uppercase}
.n{font-family:'Saira Condensed';font-weight:700;color:#f1f5f9;font-size:38px;line-height:1.05;margin-top:8px;text-transform:uppercase}
.bar{width:100%;height:2px;background:rgba(148,163,184,.28);margin-bottom:20px}
</style></head><body><div class="s"><div class="bar"></div><div class="k">Parte ${n} de ${total}</div><div class="n">${escapar(nombre)}</div></div></body></html>`;

// Dibuja el marco y una etiqueta por sección, ya a la resolución del vídeo, y devuelve sus rutas. Junto a cada PNG
// queda la huella de su HTML (.huella): si no ha cambiado, no se vuelve a dibujar, y el render la usa para saber qué
// tramos ya tiene hechos.
export async function dibujar(cfg, { ancho, alto, dir }) {
  const L = cfg.camara ? CON_CAMARA : SIN_CAMARA;
  const datos = {
    serie: cfg.video.serie ?? 'Charlas PauseAI',
    titulo: cfg.meta.title,
    ponente: cfg.meta.speaker,
    fecha: fechaLarga(cfg.meta.date),
    L,
    logo: await dataUri(join(ASSETS, 'pauseai-es-on-dark.svg')),
    semilla: semillaDe(cfg.meta.title),
    tema: cfg.meta.fondo,
  };
  const secciones = cfg.camara ? (cfg.video.secciones ?? []) : [];
  const paginas = [
    ['marco', htmlMarco(datos)],
    ...secciones.map((s, i) => [
      `seccion-${i + 1}`,
      htmlSeccion(i + 1, secciones.length, s.titulo),
    ]),
  ];
  return Object.fromEntries(
    await Promise.all(
      paginas.map(async ([nombre, html]) => {
        const grande = join(dir, `${nombre}@2x.png`);
        const final = join(dir, `${nombre}.png`);
        const huella = createHash('sha1').update(`${ancho}x${alto}\n${html}`).digest('hex');
        const archivoHuella = join(dir, `${nombre}.huella`);
        if (
          existsSync(final) &&
          existsSync(archivoHuella) &&
          (await readFile(archivoHuella, 'utf8')) === huella
        ) {
          return [nombre, final];
        }
        await capturar(html, grande, { ancho: 1920, alto: 1080, escala: 2, transparente: true });
        await ffmpeg([
          '-i',
          grande,
          '-vf',
          `scale=${ancho}:${alto}:flags=lanczos,format=rgba`,
          final,
        ]);
        await writeFile(archivoHuella, huella);
        return [nombre, final];
      }),
    ),
  );
}
