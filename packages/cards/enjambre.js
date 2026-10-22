// Fondo de las Charlas PauseAI: el enjambre de la charla del verano de 2026 (puntos naranjas y grises unidos por
// líneas). Devuelve el JS que lo pinta en un <canvas id="k">; con la misma semilla sale siempre igual.
//
//   intensidad: 1 en las portadas; menos en el marco del vídeo, que se ve durante toda la charla.

export const semillaDe = (texto) =>
  [...texto].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 2147483647, 7) || 7;

export const enjambre = ({ ancho, alto, puntos, semilla = 7, distancia = 150, intensidad = 1 }) => `
{
  const c = document.getElementById('k').getContext('2d');
  let s = ${semilla};
  const r = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  const P = Array.from({ length: ${puntos} }, () => ({ x: r() * ${ancho}, y: r() * ${alto}, a: r() < 0.58 }));
  c.lineWidth = 1;
  for (let i = 0; i < P.length; i++) for (let k = 0; k < 2; k++) {
    const a = P[i], b = P[Math.floor(r() * P.length)];
    if (Math.hypot(a.x - b.x, a.y - b.y) < ${distancia}) {
      c.strokeStyle = a.a && b.a ? 'rgba(255,148,22,${0.35 * intensidad})' : 'rgba(148,163,184,${0.22 * intensidad})';
      c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
    }
  }
  for (const p of P) {
    c.fillStyle = p.a ? 'rgba(255,148,22,${Math.min(1, intensidad)})' : 'rgba(203,213,225,${0.7 * intensidad})';
    c.beginPath(); c.arc(p.x, p.y, p.a ? 3 : 2.3, 0, 7); c.fill();
  }
}`;
