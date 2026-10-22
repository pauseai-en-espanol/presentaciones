// Lee y guarda la configuración del vídeo de una charla: presentations/<slug>/video.json (en git) junto a su
// presentation.json. Lo que se genera (audio, transcripción, marco, vídeos) va a packages/video/out/<slug>/, que
// git ignora.

import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const RAIZ = join(__dirname, '..', '..', '..');
const PRETTIER = join(RAIZ, 'node_modules', '.bin', 'prettier');

export const expandir = (ruta) => ruta.replace(/^~(?=\/)/, homedir());

export async function cargar(slug) {
  if (!slug)
    throw new Error('Falta el slug de la charla, p. ej. ia-fuera-sandbox-charlas-pauseai-2026-10');
  const dir = join(RAIZ, 'presentations', slug);
  const archivo = join(dir, 'video.json');
  if (!existsSync(archivo))
    throw new Error(`No existe ${archivo}. Mira el README (Vídeos de las charlas).`);
  const video = JSON.parse(await readFile(archivo, 'utf8'));
  const presentacion = JSON.parse(await readFile(join(dir, 'presentation.json'), 'utf8'));
  const lang = video.idioma ?? 'es';
  const out = join(__dirname, '..', 'out', slug);
  await mkdir(out, { recursive: true });
  return {
    slug,
    archivo,
    out,
    video,
    lang,
    meta: { ...presentacion, ...presentacion.languages?.[lang] },
    pantalla: expandir(video.grabacion.pantalla),
    camara: video.grabacion.camara ? expandir(video.grabacion.camara) : null,
  };
}

// Se guarda pasado por Prettier, que es quien decide el formato en el repo (pnpm format:check).
export async function guardar(cfg) {
  await writeFile(cfg.archivo, `${JSON.stringify(cfg.video, null, 2)}\n`);
  if (existsSync(PRETTIER))
    await promisify(execFile)(PRETTIER, ['--write', cfg.archivo]).catch(() => {});
}
