// Fondos de las Charlas PauseAI: lo que va detrás de la portada de Luma, la miniatura, el marco del vídeo, la cabecera
// y el cierre. Cada charla elige el suyo en su presentation.json («fondo»); sin él, «neutro». El color, las fuentes,
// el logo y la composición son siempre los mismos: el fondo es lo único que cambia de una charla a otra.
//
// Un fondo devuelve el JS que lo pinta en el <canvas id="k"> de la página, encima del azul de la marca. Para un tema
// nuevo, basta con añadir aquí otra función. Tiene que dejar el contexto como estaba (c.save() y c.restore()): el
// marco recorta después los huecos de las slides y la cámara con el relleno que haya.

import { enjambre } from './enjambre.js';

const FONDOS = {
  // El de la charla del verano de 2026: un enjambre de agentes.
  enjambre,
  // Sin motivo: el azul de la marca con un brillo naranja suave arriba a la derecha y otro, más tenue, abajo.
  neutro: ({ ancho, alto, intensidad = 1 }) => `
{
  const c = document.getElementById('k').getContext('2d');
  c.save();
  for (const [x, y, r, a] of [[${ancho * 0.85}, ${alto * 0.1}, ${ancho * 0.7}, ${0.2 * intensidad}], [${ancho * 0.1}, ${alto * 1.05}, ${ancho * 0.55}, ${0.1 * intensidad}]]) {
    const g = c.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255,148,22,' + a + ')');
    g.addColorStop(1, 'rgba(255,148,22,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, ${ancho}, ${alto});
  }
  c.restore();
}`,
};

export const NOMBRES = Object.keys(FONDOS);

// Los fondos con mucho detalle necesitan una zona lisa detrás del texto pequeño del marco.
const CON_DETALLE = new Set(['enjambre']);
export const necesitaCalma = (nombre = 'neutro') => CON_DETALLE.has(nombre);

export function fondo(nombre = 'neutro', opciones) {
  if (!FONDOS[nombre]) {
    throw new Error(`No hay un fondo «${nombre}». Los que hay: ${NOMBRES.join(', ')}.`);
  }
  return FONDOS[nombre](opciones);
}
