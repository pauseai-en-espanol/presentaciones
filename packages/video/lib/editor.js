// `pnpm video editor <slug>`: abre en el navegador una página para decidir los cortes leyendo la transcripción.
// Sirve la grabación desde el disco (con rangos, para poder saltar) y guarda cortes, propuestas, secciones y notas en video.json.

import { execFile } from 'node:child_process';
import { createReadStream, existsSync } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { guardar } from './config.js';
import { duracion } from './medios.js';

const LIB = dirname(fileURLToPath(import.meta.url));
const PAGINA = join(LIB, '..', 'editor');
// Módulos de lib/ que usa también la página, para que corte igual que el render.
const COMPARTIDOS = ['/lib/alinear.js', '/lib/cortes.js', '/lib/tiempo.js'];
const TIPOS = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };

async function servirVideo(req, res, archivo) {
  const { size } = await stat(archivo);
  const rango = /bytes=(\d*)-(\d*)/.exec(req.headers.range ?? '');
  if (!rango) {
    res.writeHead(200, {
      'Content-Type': 'video/mp4',
      'Content-Length': size,
      'Accept-Ranges': 'bytes',
    });
    return createReadStream(archivo).pipe(res);
  }
  const inicio = rango[1] ? Number(rango[1]) : size - Number(rango[2]);
  const fin = rango[1] && rango[2] ? Math.min(Number(rango[2]), size - 1) : size - 1;
  res.writeHead(206, {
    'Content-Type': 'video/mp4',
    'Content-Length': fin - inicio + 1,
    'Content-Range': `bytes ${inicio}-${fin}/${size}`,
    'Accept-Ranges': 'bytes',
  });
  createReadStream(archivo, { start: inicio, end: fin }).pipe(res);
}

export async function editor(cfg, { puerto = 3999, abrir = true } = {}) {
  const leer = async (nombre) => {
    const archivo = join(cfg.out, nombre);
    if (!existsSync(archivo))
      throw new Error(`Falta ${nombre}: primero pnpm video preparar ${cfg.slug}`);
    return JSON.parse(await readFile(archivo, 'utf8'));
  };
  const datos = {
    slug: cfg.slug,
    titulo: cfg.meta.title,
    duracion: await duracion(cfg.pantalla),
    camara: Boolean(cfg.camara),
    palabras: await leer('palabras.json'),
    silencios: await leer('silencios.json'),
  };

  const servidor = createServer(async (req, res) => {
    try {
      const ruta = new URL(req.url, 'http://localhost').pathname;
      if (ruta === '/datos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ...datos, video: cfg.video }));
      }
      if (ruta === '/guardar' && req.method === 'POST') {
        let cuerpo = '';
        for await (const trozo of req) cuerpo += trozo;
        const { cortes, propuestas, secciones, notas } = JSON.parse(cuerpo);
        Object.assign(cfg.video, { cortes, propuestas, secciones, notas });
        await guardar(cfg);
        res.writeHead(204);
        return res.end();
      }
      if (ruta === '/energia') {
        res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
        return res.end(await readFile(join(cfg.out, 'energia.bin')));
      }
      if (COMPARTIDOS.includes(ruta)) {
        res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
        return res.end(await readFile(join(LIB, ruta.slice(5))));
      }
      if (ruta === '/media/pantalla') return await servirVideo(req, res, cfg.pantalla);
      if (ruta === '/media/camara' && cfg.camara) return await servirVideo(req, res, cfg.camara);
      const archivo = join(PAGINA, ruta === '/' ? 'index.html' : ruta.slice(1));
      const tipo = TIPOS[archivo.slice(archivo.lastIndexOf('.'))];
      if (!tipo || !archivo.startsWith(PAGINA) || !existsSync(archivo)) {
        res.writeHead(404);
        return res.end();
      }
      res.writeHead(200, { 'Content-Type': `${tipo}; charset=utf-8` });
      res.end(await readFile(archivo));
    } catch (error) {
      console.error(error);
      if (!res.headersSent) res.writeHead(500);
      res.end(String(error));
    }
  });
  // Solo en esta máquina: la página puede escribir en video.json.
  servidor.listen(puerto, '127.0.0.1', () => {
    const url = `http://localhost:${puerto}/`;
    console.log(
      `Editor de ${cfg.slug}: ${url}  (Ctrl+C para cerrar; cada cambio se guarda en video.json)`,
    );
    if (abrir && process.platform === 'darwin') execFile('open', [url]);
  });
}
