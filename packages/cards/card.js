// Genera una portada cuadrada de 1080×1080 (Luma, redes) para una charla.
// Usa el Chrome instalado en modo headless, sin dependencias.
//
//   pnpm card ia-fuera-sandbox-euronova-2026-10
//   pnpm card ia-fuera-sandbox-euronova-2026-10 --subtitulo "La IA de frontera se sale del sandbox" --foto ~/dani.jpg
//   pnpm card --titulo "Otra charla | en dos líneas" --ponente "Nombre" --afiliacion "PauseAI España"
//
// El título salta de línea tras los dos puntos, o donde se ponga «|».
// Sin --titulo, el título y el ponente salen del presentation.json de la charla.
// La imagen se guarda en packages/cards/out/ (ignorado por git), salvo que se pase --out.

import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs, promisify } from 'node:util';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
// pnpm ejecuta el script desde packages/cards; las rutas relativas se resuelven
// desde donde se lanzó el comando.
const CWD = process.env.INIT_CWD ?? process.cwd();
const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    lang: { type: 'string', default: 'es' },
    titulo: { type: 'string' },
    subtitulo: { type: 'string' },
    ponente: { type: 'string' },
    afiliacion: { type: 'string', default: 'PauseAI España' },
    serie: { type: 'string', default: 'Charlas PauseAI en Español' },
    foto: { type: 'string' },
    out: { type: 'string' },
  },
});

const slug = positionals[0];
let meta = {};
if (slug) {
  const file = join(ROOT, 'presentations', slug, 'presentation.json');
  const json = JSON.parse(await readFile(file, 'utf8'));
  const langMeta = json.languages?.[values.lang] ?? {};
  meta = { titulo: langMeta.title, subtitulo: langMeta.subtitle, ponente: json.speaker };
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

const MIME = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
};
const dataUri = async (path) =>
  `data:${MIME[extname(path).toLowerCase()] ?? 'image/png'};base64,${(await readFile(path)).toString('base64')}`;

const logo = await dataUri(join(ROOT, 'packages', 'landing', 'assets', 'logo-completo.png'));
const foto = values.foto
  ? await dataUri(resolve(CWD, values.foto.replace(/^~/, process.env.HOME)))
  : null;

const escapar = (s = '') =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// Salto de línea tras los dos puntos, o donde se ponga «|» en el título.
const tituloHtml = escapar(datos.titulo).includes('|')
  ? escapar(datos.titulo).replace(/\s*\|\s*/g, '<br>')
  : escapar(datos.titulo).replace(/:\s+/, ':<br>');

// Semilla del enjambre a partir del título: cada charla tiene su propio fondo.
const semilla = [...datos.titulo].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 2147483647, 7) || 7;

const html = `<!doctype html><html><head><meta charset="utf-8">
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
// Fondo: el enjambre de la charla del verano de 2026.
const c = document.getElementById('k').getContext('2d');
let s = ${semilla};
const r = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
const P = Array.from({ length: 1200 }, () => ({ x: r() * 1080, y: r() * 1080, a: r() < 0.58 }));
c.lineWidth = 1;
for (let i = 0; i < 1200; i++) for (let k = 0; k < 2; k++) {
  const a = P[i], b = P[Math.floor(r() * 1200)];
  if (Math.hypot(a.x - b.x, a.y - b.y) < 150) {
    c.strokeStyle = a.a && b.a ? 'rgba(255,148,22,.35)' : 'rgba(148,163,184,.22)';
    c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
  }
}
for (const p of P) { c.fillStyle = p.a ? '#ff9416' : 'rgba(203,213,225,.7)'; c.beginPath(); c.arc(p.x, p.y, p.a ? 3 : 2.3, 0, 7); c.fill(); }
// Títulos largos: se reduce la letra hasta que quepan en 3 líneas.
document.fonts.ready.then(() => {
  const t = document.getElementById('t');
  let px = 104;
  while (px > 56 && t.getBoundingClientRect().height > px * 0.98 * 3 + 2) t.style.fontSize = (px -= 4) + 'px';
});
</script></body></html>`;

const out = values.out
  ? resolve(CWD, values.out)
  : join(
      __dirname,
      'out',
      `${slug ?? 'portada'}${values.lang === 'es' ? '' : '-' + values.lang}.png`,
    );
await mkdir(dirname(out), { recursive: true });

if (!existsSync(CHROME)) {
  console.error(`No encuentro Chrome en ${CHROME}. Indica la ruta con la variable CHROME.`);
  process.exit(1);
}
const tmp = await mkdtemp(join(tmpdir(), 'card-'));
const pagina = join(tmp, 'card.html');
await writeFile(pagina, html);
try {
  await promisify(execFile)(CHROME, [
    '--headless=new',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1080,1080',
    '--virtual-time-budget=8000',
    `--screenshot=${out}`,
    pathToFileURL(pagina).href,
  ]);
} finally {
  await rm(tmp, { recursive: true, force: true });
}
console.log(`Portada: ${out}`);
