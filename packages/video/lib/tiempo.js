// Tiempos: en video.json se escriben como «m:ss.ss» (o «h:mm:ss.ss»), que se leen mejor que los segundos.

export function segundos(valor) {
  if (typeof valor === 'number') return valor;
  const partes = String(valor).trim().split(':').map(Number);
  if (partes.some(Number.isNaN)) throw new Error(`Tiempo no válido: «${valor}»`);
  return partes.reduce((total, p) => total * 60 + p, 0);
}

export function texto(s, decimales = 2) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const resto = (s % 60).toFixed(decimales).padStart(decimales ? 3 + decimales : 2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${resto}` : `${m}:${resto}`;
}

// «4:39» para los capítulos de YouTube.
export const capitulo = (s) => texto(Math.floor(s), 0);

export function srt(s) {
  const ms = Math.round(s * 1000);
  const p = (n, l = 2) => String(n).padStart(l, '0');
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`;
}
