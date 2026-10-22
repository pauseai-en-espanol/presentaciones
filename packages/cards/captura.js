// Captura una página HTML como PNG con el Chrome instalado en modo headless, sin dependencias.
// La usan las portadas (card.js) y el marco de los vídeos (packages/video).

import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

export const ASSETS = join(dirname(fileURLToPath(import.meta.url)), 'assets');

const MIME = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

export const dataUri = async (path) =>
  `data:${MIME[extname(path).toLowerCase()] ?? 'image/png'};base64,${(await readFile(path)).toString('base64')}`;

export const escapar = (s = '') =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// `escala` multiplica la resolución (2 = el doble de píxeles, para que el texto y el logo salgan nítidos al reducir).
// Con `transparente`, lo que la página no pinta queda transparente en el PNG.
export async function capturar(html, salida, { ancho, alto, escala = 1, transparente = false }) {
  if (!existsSync(CHROME)) {
    throw new Error(`No encuentro Chrome en ${CHROME}. Indica la ruta con la variable CHROME.`);
  }
  await mkdir(dirname(salida), { recursive: true });
  const tmp = await mkdtemp(join(tmpdir(), 'captura-'));
  const pagina = join(tmp, 'pagina.html');
  await writeFile(pagina, html);
  try {
    await promisify(execFile)(CHROME, [
      '--headless=new',
      '--hide-scrollbars',
      `--force-device-scale-factor=${escala}`,
      `--window-size=${ancho},${alto}`,
      ...(transparente ? ['--default-background-color=00000000'] : []),
      '--virtual-time-budget=8000',
      `--screenshot=${salida}`,
      pathToFileURL(pagina).href,
    ]);
  } finally {
    await rm(tmp, { recursive: true, force: true });
  }
  return salida;
}
