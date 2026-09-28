<script setup>
// El enjambre del caso Hugging Face (datos de METR, §3.1 del informe).
// Clic 0: unos 1.200 agentes aislados.
// Clic 1: 700 participan en el ataque (se vuelven naranjas).
// Clic 2: se ven las conexiones entre ellos y los mensajes circulando por ellas
// (más de 70.000 mensajes).
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useSlideContext } from '@slidev/client';

const { $clicks } = useSlideContext();
const lienzo = ref(null);
const mensajes = ref(0);

const ANCHO = 900;
const ALTO = 360;
const TOTAL = 1200;
const ATACANTES = 700;

let semilla = 7;
const azar = () => {
  semilla = (semilla * 16807) % 2147483647;
  return (semilla - 1) / 2147483646;
};

const puntos = Array.from({ length: TOTAL }, (_, i) => ({
  x: 10 + azar() * (ANCHO - 20),
  y: 10 + azar() * (ALTO - 20),
  ataca: false,
  orden: azar(),
}));
[...puntos]
  .sort((a, b) => a.orden - b.orden)
  .slice(0, ATACANTES)
  .forEach((p) => (p.ataca = true));

const enlaces = [];
for (let i = 0; i < TOTAL; i++) {
  for (let k = 0; k < 2; k++) {
    const j = Math.floor(azar() * TOTAL);
    const a = puntos[i];
    const b = puntos[j];
    if (Math.hypot(a.x - b.x, a.y - b.y) < 140) enlaces.push([a, b]);
  }
}

let conexion = 0;
let ataque = 0;
let frame = 0;
let escala = 1;
// Mensajes en tránsito: puntos de luz que recorren los enlaces.
const mensajesEnVuelo = [];
const MAX_EN_VUELO = 900;

function dibujar() {
  const c = lienzo.value;
  if (!c) return;
  const ctx = c.getContext('2d');
  ctx.setTransform(escala, 0, 0, escala, 0, 0);
  const fase = $clicks.value;
  conexion += ((fase >= 2 ? 1 : 0) - conexion) * 0.03;
  ataque += ((fase >= 1 ? 1 : 0) - ataque) * 0.03;
  mensajes.value = conexion > 0.995 ? 70000 : Math.round(conexion * 70000);

  ctx.clearRect(0, 0, ANCHO, ALTO);
  const visibles = Math.floor(enlaces.length * conexion);
  ctx.lineWidth = 1;
  for (let i = 0; i < visibles; i++) {
    const [a, b] = enlaces[i];
    const naranja = ataque > 0.5 && a.ataca && b.ataca;
    ctx.strokeStyle = naranja ? 'rgba(255,148,22,0.5)' : 'rgba(148,163,184,0.32)';
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }
  // Nuevos mensajes en cuanto hay conexiones
  if (visibles > 50) {
    for (let n = 0; n < 30 && mensajesEnVuelo.length < MAX_EN_VUELO; n++) {
      mensajesEnVuelo.push({
        e: Math.floor(Math.random() * visibles),
        t: 0,
        v: 0.015 + Math.random() * 0.03,
        ida: Math.random() < 0.5,
      });
    }
  }
  for (let i = mensajesEnVuelo.length - 1; i >= 0; i--) {
    const m = mensajesEnVuelo[i];
    m.t += m.v;
    if (m.t >= 1 || m.e >= visibles) {
      mensajesEnVuelo.splice(i, 1);
      continue;
    }
    const [a, b] = enlaces[m.e];
    const [o, d] = m.ida ? [a, b] : [b, a];
    const naranja = ataque > 0.5 && a.ataca && b.ataca;
    ctx.fillStyle = naranja ? '#ffd9a8' : '#f8fafc';
    ctx.beginPath();
    ctx.arc(o.x + (d.x - o.x) * m.t, o.y + (d.y - o.y) * m.t, 1.7, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const p of puntos) {
    const encendido = p.ataca && p.orden < ataque;
    ctx.fillStyle = encendido ? '#ff9416' : 'rgba(203,213,225,0.75)';
    ctx.beginPath();
    ctx.arc(p.x, p.y, encendido ? 2.4 : 1.8, 0, Math.PI * 2);
    ctx.fill();
  }
  frame = requestAnimationFrame(dibujar);
}

onMounted(() => {
  // Resolución nítida en pantallas de alta densidad
  escala = window.devicePixelRatio || 1;
  lienzo.value.width = ANCHO * escala;
  lienzo.value.height = ALTO * escala;
  frame = requestAnimationFrame(dibujar);
});
onBeforeUnmount(() => cancelAnimationFrame(frame));
</script>

<template>
  <div class="enjambre">
    <canvas ref="lienzo" class="lienzo" />
    <div class="etiquetas">
      <div class="etq"><span class="cifra-peq">1.200</span> agentes teóricamente aislados</div>
      <div class="etq" :class="{ oculto: $clicks < 1 }">
        <span class="cifra-peq naranja">700</span> participaron
      </div>
      <div class="etq" :class="{ oculto: $clicks < 2 }">
        <span class="cifra-peq"
          >{{ mensajes === 70000 ? '+' : '' }}{{ mensajes.toLocaleString('es-ES') }}</span
        >
        mensajes
      </div>
    </div>
  </div>
</template>

<style scoped>
.enjambre {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lienzo {
  width: 100%;
  max-width: 900px;
  aspect-ratio: 900 / 360;
}
.etiquetas {
  display: flex;
  gap: 2.5rem;
  margin-top: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}
.etq {
  white-space: nowrap;
  transition: opacity 0.6s;
}
.oculto {
  opacity: 0;
}
.cifra-peq {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #f1f5f9;
  margin-right: 0.3rem;
}
.naranja {
  color: #ff9416;
}
</style>
