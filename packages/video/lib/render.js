// `pnpm video render <slug>`: monta el vídeo con el marco, quitando los cortes.
//
// Cada tramo que se queda se monta por separado (slides + cámara + marco + sección) y luego se unen sin volver a
// codificar la imagen. El sonido se iguala al volumen que usa YouTube (-14 LUFS) en dos pasadas.
//
//   --borrador          720p y más rápido, para revisar el montaje
//   --desde/--hasta     solo un trozo (tiempos de la grabación), para probar
//
// Los tramos ya montados se guardan con una huella de todo lo que los define (tiempos, marco, sección, recorte…):
// al repetir el render solo se montan los que han cambiado.

import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { aSalidaSiguiente, tramos } from './cortes.js';
import { CON_CAMARA, dibujar, SIN_CAMARA } from './marco.js';
import { duracion, ffmpeg } from './medios.js';
import { CABECERA, CIERRE, piezas } from './piezas.js';
import { subtitulos } from './subtitulos.js';
import { capitulo, segundos, texto } from './tiempo.js';

const FONDO = '0x0f172a';
const EN_PARALELO = 3;

export async function render(cfg, { borrador = false, desde, hasta } = {}) {
  const { video, out } = cfg;
  const prueba = desde !== undefined || hasta !== undefined;
  const nombre = prueba ? 'prueba' : borrador ? 'borrador' : cfg.slug;
  const dir = join(out, prueba ? 'prueba' : borrador ? 'borrador' : 'final');
  await mkdir(join(dir, 'tramos'), { recursive: true });

  const [ancho, alto] = borrador ? [1280, 720] : [2560, 1440];
  const f = ancho / 1920;
  const L = cfg.camara ? CON_CAMARA : SIN_CAMARA;
  const caja = (b) => ({
    x: Math.round(b.x * f),
    y: Math.round(b.y * f),
    w: Math.round(b.w * f),
    h: Math.round(b.h * f),
  });

  const total = await duracion(cfg.pantalla);
  const todos = tramos(video.cortes ?? [], total);
  const limite = [
    desde === undefined ? 0 : segundos(desde),
    hasta === undefined ? total : segundos(hasta),
  ];
  const quedan = todos
    .map(([a, b]) => [Math.max(a, limite[0]), Math.min(b, limite[1])])
    .filter(([a, b]) => b - a > 0.05);

  console.log('Dibujando el marco…');
  const graficos = await dibujar(cfg, { ancho, alto, dir });
  const secciones = (cfg.camara ? (video.secciones ?? []) : []).map((s, i, lista) => ({
    png: graficos[`seccion-${i + 1}`],
    desde: segundos(s.desde),
    hasta: i + 1 < lista.length ? segundos(lista[i + 1].desde) : total,
  }));

  const desfase = video.camara?.desfase ?? 0;
  const recorte = video.camara?.recorte;
  const pista = video.grabacion.pistaAudio ?? 0;
  const s = caja(L.slide);
  const c = L.camara && caja(L.camara);

  const argumentos = ([a, b], salida) => {
    const d = Number((b - a).toFixed(4));
    const entradas = ['-ss', String(a), '-t', String(d), '-i', cfg.pantalla];
    if (cfg.camara)
      entradas.push('-ss', String(Math.max(0, a + desfase)), '-t', String(d), '-i', cfg.camara);
    const imagen = (png) =>
      entradas.push('-loop', '1', '-framerate', '30', '-t', String(d), '-i', png);
    imagen(graficos.marco);
    const activas = secciones.filter((x) => x.hasta > a && x.desde < b);
    activas.forEach((x) => imagen(x.png));

    const tapar = (video.tapar ?? [])
      .map(
        (t) =>
          `drawbox=x=${t.x}:y=${t.y}:w=${t.ancho}:h=${t.alto}:color=${t.color ?? FONDO}:t=fill,`,
      )
      .join('');
    const grafo = [
      `color=c=${FONDO}:s=${ancho}x${alto}:r=30:d=${d}[fondo]`,
      `[0:v]${tapar}scale=${s.w}:${s.h}:flags=lanczos,setsar=1,fps=30[slides]`,
      `[fondo][slides]overlay=${s.x}:${s.y}[v0]`,
    ];
    let ultimo = 'v0';
    let n = 1;
    if (cfg.camara) {
      const r = recorte ? `crop=${recorte.ancho}:${recorte.alto}:${recorte.x}:${recorte.y},` : '';
      grafo.push(`[1:v]${r}scale=${c.w}:${c.h}:flags=lanczos,setsar=1,fps=30[cam]`);
      grafo.push(`[${ultimo}][cam]overlay=${c.x}:${c.y}[v1]`);
      ultimo = 'v1';
      n = 2;
    }
    grafo.push(`[${ultimo}][${n}:v]overlay=0:0[m]`);
    ultimo = 'm';
    activas.forEach((x, i) => {
      const ini = Math.max(0, x.desde - a).toFixed(3);
      const fin = Math.min(d, x.hasta - a).toFixed(3);
      grafo.push(`[${ultimo}][${n + 1 + i}:v]overlay=0:0:enable='between(t,${ini},${fin})'[e${i}]`);
      ultimo = `e${i}`;
    });
    grafo.push(`[${ultimo}]format=yuv420p[v]`);
    // Un fundido de 8 ms en cada borde para que los cortes no hagan clic.
    grafo.push(
      `[0:a:${pista}]aresample=48000,afade=t=in:d=0.008,afade=t=out:st=${Math.max(0, d - 0.008).toFixed(4)}:d=0.008[a]`,
    );

    return [
      ...entradas,
      '-filter_complex',
      grafo.join(';'),
      '-map',
      '[v]',
      '-map',
      '[a]',
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
      salida,
    ];
  };

  // Huella de cada tramo: sus argumentos de ffmpeg, con cada PNG cambiado por la huella de su HTML.
  const huellas = Object.fromEntries(
    await Promise.all(
      Object.values(graficos).map(async (png) => [
        png,
        await readFile(png.replace(/\.png$/, '.huella'), 'utf8'),
      ]),
    ),
  );
  const lista = quedan.map((t) => {
    const clave = argumentos(t, '').map((x) => huellas[x] ?? x);
    const huella = createHash('sha1').update(JSON.stringify(clave)).digest('hex').slice(0, 16);
    return join(dir, 'tramos', `${huella}.mov`);
  });
  const pendientes = quedan.map((t, i) => [t, lista[i]]).filter(([, mov]) => !existsSync(mov));
  if (pendientes.length < quedan.length) {
    console.log(
      `Reutilizo ${quedan.length - pendientes.length} de ${quedan.length} tramos ya montados.`,
    );
  }
  let hechos = 0;
  const cola = pendientes.map(([t, mov]) => async () => {
    // Primero a un temporal: un render interrumpido no deja tramos a medias que luego se reutilicen.
    const temporal = mov.replace(/\.mov$/, '.tmp.mov');
    await ffmpeg(argumentos(t, temporal));
    await rename(temporal, mov);
    process.stdout.write(`\rTramos: ${++hechos} de ${pendientes.length}   `);
  });
  await Promise.all(
    Array.from({ length: EN_PARALELO }, async () => {
      while (cola.length) await cola.shift()();
    }),
  );
  process.stdout.write('\n');

  // Cabecera y cierre, salvo en las pruebas de un trozo.
  const extra = prueba
    ? {}
    : await piezas(cfg, { ancho, alto, dir, borrador, primero: lista[0], ultimo: lista.at(-1) });
  const inicio = extra.cabecera ? CABECERA : 0;
  const todas = [extra.cabecera, ...lista, extra.cierre].filter(Boolean);

  const concat = join(dir, 'tramos.txt');
  await writeFile(concat, todas.map((p) => `file '${p}'`).join('\n'));
  const charla = quedan.reduce((acc, [a, b]) => acc + (b - a), 0);
  const finalSeg = inicio + charla + (extra.cierre ? CIERRE : 0);

  console.log('Midiendo el volumen…');
  const medida = await ffmpeg([
    '-f',
    'concat',
    '-safe',
    '0',
    '-i',
    concat,
    '-vn',
    '-af',
    'loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json',
    '-f',
    'null',
    '-',
  ]);
  const m = JSON.parse(/\{[^{}]*"input_i"[^{}]*\}/.exec(medida)[0]);
  const salida = join(out, `${nombre}.mp4`);
  await ffmpeg(
    [
      '-f',
      'concat',
      '-safe',
      '0',
      '-i',
      concat,
      '-c:v',
      'copy',
      '-af',
      `loudnorm=I=-14:TP=-1.5:LRA=11:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true`,
      '-ar',
      '48000',
      '-c:a',
      'aac_at',
      '-b:a',
      borrador ? '128k' : '256k',
      '-movflags',
      '+faststart',
      salida,
    ],
    { progreso: 'Uniendo', total: finalSeg },
  );
  // Fuera los tramos que ya no se usan (de cortes que han cambiado).
  for (const archivo of await readdir(join(dir, 'tramos'))) {
    if (!lista.includes(join(dir, 'tramos', archivo))) await rm(join(dir, 'tramos', archivo));
  }

  // Subtítulos y capítulos, con los tiempos del vídeo final.
  if (!prueba) {
    const srt = await subtitulos(cfg, salida, nombre);
    const capitulos = (video.secciones ?? []).map((x, i) => {
      const t = i === 0 ? 0 : inicio + aSalidaSiguiente(segundos(x.desde), quedan);
      return `${capitulo(t)} ${x.titulo}`;
    });
    await writeFile(join(out, `${nombre}-capitulos.txt`), `${capitulos.join('\n')}\n`);
    console.log(`Subtítulos: ${srt}`);
    console.log(`Capítulos: ${join(out, `${nombre}-capitulos.txt`)}`);
  }
  console.log(
    `Vídeo: ${salida} (${texto(finalSeg, 0)}; se han quitado ${texto(total - charla, 0)} de la grabación)`,
  );
}
