// Genera los QR de la slide de cierre en public/, a partir de qr/urls.json.
// Si una dirección todavía es null, escribe un recuadro de «pendiente» para que
// la slide no se rompa. Uso: pnpm qr
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderSVG } from 'uqr';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const urls = JSON.parse(readFileSync(join(root, 'qr', 'urls.json'), 'utf8'));

const pendiente = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 370"><rect width="370" height="370" fill="#ffffff"/><rect x="20" y="20" width="330" height="330" fill="none" stroke="#94a3b8" stroke-width="6" stroke-dasharray="18 12"/><text x="185" y="195" font-family="Montserrat, sans-serif" font-size="34" fill="#64748b" text-anchor="middle">Pendiente</text></svg>`;

for (const [name, url] of Object.entries(urls)) {
  const svg = url
    ? renderSVG(url, { ecc: 'M', border: 4, whiteColor: '#ffffff', blackColor: '#0f172a' })
    : pendiente;
  writeFileSync(join(root, 'public', `${name}.svg`), svg);
  console.log(`${name}.svg: ${url ?? 'pendiente'}`);
}
