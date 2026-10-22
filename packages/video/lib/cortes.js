// De los cortes de video.json (tiempos de la grabación) a los tramos que se quedan en el vídeo.
//
// Los tiempos de video.json se usan tal cual, redondeados a un fotograma para que la imagen y el sonido se corten a
// la vez. Quien los coloca en el silencio es el editor (con `ajustar`), así que lo que se oye al editar es lo que
// sale en el vídeo. Lo usan también el editor en el navegador, así que no importa nada de Node.

import { segundos } from './tiempo.js';

const FPS = 30;
const aFotograma = (t) => Math.round(t * FPS) / FPS;

// Silencio: 15 dB por encima del ruido de fondo de la grabación.
export const umbralSilencio = (energia) =>
  Float32Array.from(energia).sort()[Math.floor(energia.length * 0.05)] + 15;

// Pausas: al menos `minimo` segundos en silencio. Un golpe de menos de 60 ms (un clic, una respiración) no
// corta la pausa.
export function silencios(energia, minimo = 0.5, umbral = umbralSilencio(energia)) {
  const lista = [];
  let inicio = null;
  let ruido = 0;
  for (let i = 0; i <= energia.length; i++) {
    if (i < energia.length && energia[i] < umbral) {
      if (inicio === null) inicio = i;
      ruido = 0;
    } else if (inicio !== null && (++ruido > 6 || i === energia.length)) {
      const fin = i - ruido + 1;
      if ((fin - inicio) / 100 >= minimo) lista.push({ t0: inicio / 100, t1: fin / 100 });
      inicio = null;
      ruido = 0;
    }
  }
  return lista;
}

// Lleva t al centro del hueco de silencio (80 ms o más) más cercano, a menos de medio segundo: whisper da los tiempos
// de las palabras con un error de hasta 0,3 s. Si no hay ninguno, al momento más callado a menos de 0,2 s.
export function ajustar(t, energia, umbral) {
  const c = Math.round(t * 100);
  const a = Math.max(0, c - 50);
  const b = Math.min(energia.length - 1, c + 50);
  let mejor = null;
  for (let i = a; i <= b; i++) {
    if (energia[i] >= umbral) continue;
    let j = i;
    while (j <= b && energia[j] < umbral) j++;
    const medio = (i + j - 1) / 2;
    if (j - i >= 8 && (mejor === null || Math.abs(medio - c) < Math.abs(mejor - c))) mejor = medio;
    i = j;
  }
  if (mejor === null) {
    mejor = c;
    for (let i = Math.max(0, c - 20); i <= Math.min(energia.length - 1, c + 20); i++) {
      if (energia[i] < energia[mejor]) mejor = i;
    }
  }
  return aFotograma(mejor / 100);
}

// Tramos [desde, hasta] que se conservan, ordenados y sin solaparse.
export function tramos(cortes, total) {
  const quitados = cortes
    .map((c) => [
      aFotograma(Math.max(0, segundos(c.desde))),
      c.hasta === 'fin' ? total : Math.min(total, aFotograma(segundos(c.hasta))),
    ])
    .filter(([a, b]) => b > a)
    .sort((x, y) => x[0] - y[0]);
  const fusion = [];
  for (const c of quitados) {
    const ultimo = fusion.at(-1);
    if (ultimo && c[0] <= ultimo[1]) ultimo[1] = Math.max(ultimo[1], c[1]);
    else fusion.push([...c]);
  }
  const quedan = [];
  let t = 0;
  for (const [a, b] of fusion) {
    if (a - t > 1 / FPS) quedan.push([t, a]);
    t = b;
  }
  if (total - t > 1 / FPS) quedan.push([t, aFotograma(total)]);
  return quedan;
}

// Tiempo de la grabación → tiempo en el vídeo final (null si cae en un corte).
export function aSalida(t, quedan) {
  let acumulado = 0;
  for (const [a, b] of quedan) {
    if (t < a) return null;
    if (t <= b) return acumulado + (t - a);
    acumulado += b - a;
  }
  return null;
}

// Como aSalida, pero si cae en un corte devuelve el principio del tramo siguiente (para secciones y capítulos).
export function aSalidaSiguiente(t, quedan) {
  let acumulado = 0;
  for (const [a, b] of quedan) {
    if (t <= b) return acumulado + Math.max(0, t - a);
    acumulado += b - a;
  }
  return acumulado;
}
