// Whisper da los tiempos de las palabras con hasta 0,3 s de error y a veces mete palabras dentro de una pausa. Aquí
// se sacan de las pausas: cada palabra pertenece al tramo con voz entre dos pausas (según su punto medio) y se
// recorta a ese tramo; si se queda pegada a la anterior, se corre detrás. Las demás conservan el tiempo de whisper.
// Lo usa el editor, en el navegador.

const medio = (x) => (x.t0 + x.t1) / 2;
const MINIMO = 0.05;

export function alinear(palabras, silencios) {
  const grupos = [[]];
  let j = 0;
  for (const p of palabras) {
    while (j < silencios.length && medio(silencios[j]) < medio(p)) {
      j++;
      grupos.push([]);
    }
    grupos.at(-1).push({ ...p });
  }
  // grupos[k] va entre el silencio k - 1 y el k.
  return grupos.flatMap((g, k) => {
    const r0 = k > 0 ? silencios[k - 1].t1 : -Infinity;
    const r1 = k < silencios.length ? silencios[k].t0 : Infinity;
    g.forEach((p, i) => {
      p.t0 = Math.min(Math.max(p.t0, r0, i ? g[i - 1].t1 : -Infinity), r1);
      p.t1 = Math.min(Math.max(p.t1, p.t0 + MINIMO), Math.max(r1, p.t0 + MINIMO));
    });
    // Si al correrlas se pasan del tramo, se aprietan dentro de él.
    const fin = g.at(-1)?.t1;
    if (g.length && fin > r1 && Number.isFinite(r0)) {
      const a = g[0].t0;
      const f = (r1 - a) / (fin - a);
      g.forEach((p) => {
        p.t0 = a + (p.t0 - a) * f;
        p.t1 = a + (p.t1 - a) * f;
      });
    }
    return g;
  });
}
