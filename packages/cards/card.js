// Genera la portada de una charla: cuadrada de 1080×1080 (Luma, redes) o la miniatura de YouTube de 1280×720.
// Usa el Chrome instalado en modo headless, sin dependencias.
//
//   pnpm card ia-fuera-sandbox-euronova-2026-10
//   pnpm card ia-fuera-sandbox-euronova-2026-10 --subtitulo "La IA de frontera se sale del sandbox" --foto ~/dani.jpg
//   pnpm card --titulo "Otra charla | en dos líneas" --ponente "Nombre" --afiliacion "PauseAI España"
//   pnpm card ia-fuera-sandbox-charlas-pauseai-2026-10 --formato youtube --texto "Ya ha|pasado" --subtitulo "Verano 2026" --foto ~/dani.jpg
//
// El título salta de línea tras los dos puntos, o donde se ponga «|».
// Sin --titulo, el título y el ponente salen del presentation.json de la charla.
// En la miniatura, --texto son las dos o tres palabras grandes («|» separa líneas; la última va en naranja). Una foto
// JPG o HEIC se recorta sola (Vision de macOS); un PNG se usa tal cual, así que puede ser un recorte ya hecho.
// La imagen se guarda en packages/cards/out/ (ignorado por git), salvo que se pase --out.

import { execFile } from 'node:child_process';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs, promisify } from 'node:util';

import { ASSETS, capturar, dataUri, escapar } from './captura.js';
import { semillaDe } from './enjambre.js';
import { fondo } from './fondos.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
// pnpm ejecuta el script desde packages/cards; las rutas relativas se resuelven
// desde donde se lanzó el comando.
const CWD = process.env.INIT_CWD ?? process.cwd();

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    formato: { type: 'string', default: 'luma' },
    fondo: { type: 'string' },
    lang: { type: 'string', default: 'es' },
    titulo: { type: 'string' },
    subtitulo: { type: 'string' },
    texto: { type: 'string' },
    ponente: { type: 'string' },
    afiliacion: { type: 'string', default: 'PauseAI España' },
    serie: { type: 'string', default: 'Charlas PauseAI' },
    foto: { type: 'string' },
    out: { type: 'string' },
  },
});

if (!['luma', 'youtube'].includes(values.formato)) {
  console.error('--formato es «luma» (por defecto) o «youtube».');
  process.exit(1);
}

const slug = positionals[0];
let meta = {};
if (slug) {
  const file = join(ROOT, 'presentations', slug, 'presentation.json');
  const json = JSON.parse(await readFile(file, 'utf8'));
  const langMeta = json.languages?.[values.lang] ?? {};
  meta = {
    titulo: langMeta.title,
    subtitulo: langMeta.subtitle,
    ponente: json.speaker,
    fondo: json.fondo,
  };
}

const datos = {
  serie: values.serie,
  titulo: values.titulo ?? meta.titulo,
  subtitulo: values.subtitulo ?? meta.subtitulo,
  ponente: values.ponente ?? meta.ponente,
  afiliacion: values.afiliacion,
};
if (!datos.titulo) {
  console.error('Falta el título: pasa el slug de una charla o --titulo.');
  process.exit(1);
}
if (values.formato === 'youtube' && !values.texto) {
  console.error(
    'La miniatura necesita --texto: dos o tres palabras grandes, con «|» entre líneas.',
  );
  process.exit(1);
}

const logo = await dataUri(join(ASSETS, 'pauseai-es-on-dark.svg'));

// Una foto que no sea PNG se recorta con Vision; el PNG se da por recortado.
async function prepararFoto(ruta, recortar) {
  if (!recortar) return dataUri(ruta);
  const tmp = await mkdtemp(join(tmpdir(), 'recorte-'));
  const png = join(tmp, 'recorte.png');
  try {
    await promisify(execFile)('swift', [join(__dirname, 'recorte.swift'), ruta, png]);
    return await dataUri(png);
  } finally {
    await rm(tmp, { recursive: true, force: true });
  }
}
const rutaFoto = values.foto ? resolve(CWD, values.foto.replace(/^~/, process.env.HOME)) : null;
const foto = rutaFoto
  ? await prepararFoto(
      rutaFoto,
      values.formato === 'youtube' && extname(rutaFoto).toLowerCase() !== '.png',
    )
  : null;

// Salto de línea tras los dos puntos, o donde se ponga «|» en el título.
const tituloHtml = escapar(datos.titulo).includes('|')
  ? escapar(datos.titulo).replace(/\s*\|\s*/g, '<br>')
  : escapar(datos.titulo).replace(/:\s+/, ':<br>');

// El fondo de la charla (presentation.json o --fondo) y su semilla, a partir del título: cada charla tiene el suyo.
const tema = values.fondo ?? meta.fondo;
const semilla = semillaDe(datos.titulo);

const luma = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Saira+Condensed:wght@800&display=swap" rel="stylesheet">
<style>
html,body{margin:0;width:1080px;height:1080px;background:#0f172a;overflow:hidden}
canvas{position:absolute;inset:0}
.c{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center}
.box{width:840px;background:rgba(15,23,42,.82);border-radius:28px;padding:56px 60px;box-shadow:0 0 80px 40px rgba(15,23,42,.8)}
.logo{height:110px}
.serie{font-family:Montserrat;font-weight:600;color:#cbd5e1;font-size:28px;letter-spacing:.18em;text-transform:uppercase;margin-top:40px}
h1{font-family:'Saira Condensed';font-weight:800;color:#ff9416;text-transform:uppercase;font-size:104px;line-height:.98;margin:18px 0 0;letter-spacing:.01em}
.sub{font-family:Montserrat;color:#f1f5f9;font-size:38px;margin-top:26px;opacity:.9}
.bar{width:110px;height:6px;background:#ff9416;border-radius:3px;margin:36px auto 0}
.by{display:flex;align-items:center;justify-content:center;gap:22px;font-family:Montserrat;font-weight:600;color:#cbd5e1;font-size:30px;margin-top:30px}
.foto{width:96px;height:96px;border-radius:50%;object-fit:cover;border:3px solid #ff9416}
</style></head><body>
<canvas id="k" width="1080" height="1080"></canvas>
<div class="c"><div class="box">
<img class="logo" src="${logo}">
${datos.serie ? `<div class="serie">${escapar(datos.serie)}</div>` : ''}
<h1 id="t">${tituloHtml}</h1>
${datos.subtitulo ? `<div class="sub">${escapar(datos.subtitulo)}</div>` : ''}
<div class="bar"></div>
${datos.ponente ? `<div class="by">${foto ? `<img class="foto" src="${foto}">` : ''}<span>${escapar([datos.ponente, datos.afiliacion].filter(Boolean).join(' · '))}</span></div>` : ''}
</div></div>
<script>
${fondo(tema, { ancho: 1080, alto: 1080, puntos: 1200, semilla })}
// Títulos largos: se reduce la letra hasta que quepan en 3 líneas.
document.fonts.ready.then(() => {
  const t = document.getElementById('t');
  let px = 104;
  while (px > 56 && t.getBoundingClientRect().height > px * 0.98 * 3 + 2) t.style.fontSize = (px -= 4) + 'px';
});
</script></body></html>`;

// Miniatura: pocas palabras muy grandes a la izquierda y la persona recortada a la derecha, sobre un halo naranja.
// Tiene que leerse a 250 px de ancho, que es como se ve en el móvil.
const lineas = (values.texto ?? '').split('|').map((l) => escapar(l.trim()));
const youtube = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&family=Saira+Condensed:wght@700&display=swap" rel="stylesheet">
<style>
html,body{margin:0;width:1280px;height:720px;background:#0a1020;overflow:hidden}
canvas,.halo,.foto{position:absolute}
.halo{right:-120px;bottom:-260px;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,rgba(255,148,22,.55),rgba(255,148,22,0) 65%)}
.foto{right:0;bottom:0;width:700px;height:690px;object-fit:contain;object-position:bottom center;filter:drop-shadow(0 0 18px rgba(0,0,0,.6))}
.serie{position:absolute;left:56px;top:52px;background:#ff9416;color:#111;font-family:'Saira Condensed';font-weight:700;font-size:34px;letter-spacing:.12em;text-transform:uppercase;padding:4px 18px;border-radius:8px}
h1{position:absolute;left:52px;top:150px;margin:0;font-family:'Saira Condensed';font-weight:700;text-transform:uppercase;font-size:190px;line-height:.86;color:#fff;text-shadow:0 6px 30px rgba(0,0,0,.7)}
h1 span{color:#ff9416}
.sub{position:absolute;left:58px;font-family:'Roboto Slab';font-weight:700;font-size:46px;color:#f1f5f9;text-shadow:0 4px 20px rgba(0,0,0,.8)}
.logo{position:absolute;left:56px;bottom:44px;height:62px}
</style></head><body>
<canvas id="k" width="1280" height="720"></canvas>
${foto ? `<div class="halo"></div><img class="foto" src="${foto}">` : ''}
${datos.serie ? `<div class="serie">${escapar(datos.serie)}</div>` : ''}
<h1 id="t">${lineas.map((l, i) => (i === lineas.length - 1 && lineas.length > 1 ? `<span>${l}</span>` : l)).join('<br>')}</h1>
${values.subtitulo ? `<div class="sub" id="s">${escapar(values.subtitulo)}</div>` : ''}
<img class="logo" src="${logo}">
<script>
${fondo(tema, { ancho: 1280, alto: 720, puntos: 700, semilla, distancia: 130 })}
// Con foto, el texto no debe pisarla; si no cabe, se reduce la letra.
document.fonts.ready.then(() => {
  const t = document.getElementById('t'), s = document.getElementById('s');
  const max = ${foto ? 660 : 1180};
  let px = 190;
  while (px > 90 && (t.getBoundingClientRect().width > max || t.getBoundingClientRect().bottom > ${values.subtitulo ? 520 : 600})) t.style.fontSize = (px -= 6) + 'px';
  if (s) s.style.top = t.getBoundingClientRect().bottom + 24 + 'px';
});
</script></body></html>`;

const yt = values.formato === 'youtube';
const out = values.out
  ? resolve(CWD, values.out)
  : join(
      __dirname,
      'out',
      `${slug ?? 'portada'}${values.lang === 'es' ? '' : '-' + values.lang}${yt ? '-youtube' : ''}.png`,
    );
await capturar(
  yt ? youtube : luma,
  out,
  yt ? { ancho: 1280, alto: 720 } : { ancho: 1080, alto: 1080 },
);
console.log(`${yt ? 'Miniatura' : 'Portada'}: ${out}`);

// YouTube no admite miniaturas de más de 2 MB: si el PNG se pasa, se deja también un JPG con sips (macOS).
if (yt && (await stat(out)).size > 2 * 1024 * 1024) {
  const jpg = out.replace(/\.png$/, '.jpg');
  await promisify(execFile)('sips', [
    '-s',
    'format',
    'jpeg',
    '-s',
    'formatOptions',
    '90',
    out,
    '--out',
    jpg,
  ]);
  console.log(`El PNG pasa de 2 MB, que es el límite de YouTube. Sube este: ${jpg}`);
}
