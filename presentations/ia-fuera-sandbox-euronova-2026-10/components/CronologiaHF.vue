<script setup>
// Cronología del caso Hugging Face según el informe técnico de OpenAI
// (§3.1 del informe). Puntos a la misma distancia para que se lean bien;
// las fechas van en la etiqueta. El primer grupo se ve al entrar; cada clic
// muestra el siguiente.
// En el último clic se ilumina el tramo del 12 de mayo al 19 de julio.
import { useSlideContext } from '@slidev/client';

const { $clicks } = useSlideContext();

const hitos = [
  {
    fecha: '20 abr',
    texto: 'Primeras escrituras de los agentes en un repositorio interno de OpenAI',
    grupo: 0,
  },
  { fecha: '12 may', texto: 'Primer mensaje en su tablón', grupo: 0 },
  { fecha: '26 may', texto: 'Salen a internet', grupo: 1 },
  { fecha: '26 jun', texto: 'Toman el control del repositorio interno', grupo: 1 },
  {
    fecha: '4-5 jul',
    texto:
      'El servicio se cae. OpenAI ve un intruso, lo desconecta y revoca accesos. No ve el tablón',
    grupo: 2,
  },
  {
    fecha: '8 jul',
    texto: 'Tras la reparación, otros agentes vuelven a entrar y rehacen el tablón',
    grupo: 2,
  },
  { fecha: '11-13 jul', texto: 'Entran en Hugging Face', grupo: 3, fuerte: true },
  { fecha: '19 jul', texto: 'OpenAI se da cuenta de que eran sus agentes', grupo: 4, fuerte: true },
  { fecha: '21 jul', texto: 'Lo hace público', grupo: 4 },
];
const CLIC_TRAMO = 5;
const paso = 100 / (hitos.length - 1);
const x = (i) => i * paso;
</script>

<template>
  <div class="crono">
    <div class="eje"></div>
    <div
      class="tramo"
      :class="{ visible: $clicks >= CLIC_TRAMO }"
      :style="{ left: x(1) + '%', width: x(7) - x(1) + '%' }"
    ></div>
    <div
      v-for="(h, i) in hitos"
      :key="h.fecha"
      class="hito"
      :class="[i % 2 ? 'abajo' : 'arriba', { oculto: $clicks < h.grupo, fuerte: h.fuerte }]"
      :style="{ left: x(i) + '%' }"
    >
      <div class="punto"></div>
      <div class="etiqueta">
        <div class="fecha">{{ h.fecha }}</div>
        <div class="texto">{{ h.texto }}</div>
      </div>
    </div>
    <div class="leyenda" :class="{ visible: $clicks >= CLIC_TRAMO }">
      Más de dos meses sin que OpenAI supiera lo que pasaba
    </div>
  </div>
</template>

<style scoped>
.crono {
  position: relative;
  height: 19rem;
  margin: 0 4.5rem;
  font-family: 'Montserrat', sans-serif;
}
.eje {
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(148, 163, 184, 0.4);
}
.tramo {
  position: absolute;
  top: calc(45% - 3px);
  height: 8px;
  border-radius: 4px;
  background: #ff9416;
  opacity: 0;
  transition: opacity 0.8s;
}
.tramo.visible {
  opacity: 1;
}
.hito {
  position: absolute;
  top: 45%;
  width: 0;
  transition: opacity 0.6s;
}
.oculto {
  opacity: 0;
}
.punto {
  position: absolute;
  width: 0.9rem;
  height: 0.9rem;
  margin: -0.4rem 0 0 -0.45rem;
  border-radius: 9999px;
  background: #f1f5f9;
  z-index: 1;
}
.fuerte .punto {
  background: #ff9416;
  width: 1.2rem;
  height: 1.2rem;
  margin: -0.55rem 0 0 -0.6rem;
}
.etiqueta {
  position: absolute;
  width: 9.5rem;
  left: -4.75rem;
  text-align: center;
}
.arriba .etiqueta {
  bottom: 1rem;
}
.abajo .etiqueta {
  top: 1rem;
}
.fecha {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: #ff9416;
  line-height: 1.1;
}
.texto {
  font-size: 0.8rem;
  line-height: 1.25;
  opacity: 0.85;
}
.fuerte .texto {
  font-weight: 700;
  opacity: 1;
}
.leyenda {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #ff9416;
  opacity: 0;
  transition: opacity 0.8s 0.4s;
}
.leyenda.visible {
  opacity: 1;
}
</style>
