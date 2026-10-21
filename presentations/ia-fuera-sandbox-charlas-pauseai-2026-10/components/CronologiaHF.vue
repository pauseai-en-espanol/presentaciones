<script setup>
// Cronología del caso Hugging Face según el informe técnico de OpenAI
// (§3.1 del informe). Puntos a la misma distancia para que se lean bien;
// las fechas van en la etiqueta. El primer grupo se ve al entrar; cada clic
// muestra el siguiente.
// En el clic 5 se encienden las tres veces que OpenAI vio señales (aviso) y
// el resto se atenúa.
import { configs, useSlideContext } from '@slidev/client';

const { $clicks } = useSlideContext();

const en = configs.lang === 'en';

const hitosEs = [
  { fecha: '12 may', texto: 'Primer mensaje en su tablón, dentro de OpenAI', grupo: 0 },
  { fecha: '26 may', texto: 'Salen a internet. Un equipo de OpenAI lo ve', grupo: 1, aviso: true },
  {
    fecha: '26-27 jun',
    texto: 'Toman el repositorio interno. Salta una alerta: ven el tablón y no paran la prueba',
    grupo: 1,
    aviso: true,
  },
  {
    fecha: '4-5 jul',
    texto: 'El servicio se cae. Lo desconectan, pero nadie al mando ve el tablón',
    grupo: 2,
    aviso: true,
  },
  { fecha: '7-8 jul', texto: 'Vuelven las pruebas y los agentes rehacen el tablón', grupo: 2 },
  { fecha: '11-13 jul', texto: 'Entran en Hugging Face', grupo: 3, fuerte: true },
  { fecha: '16 jul', texto: 'Hugging Face lo cuenta. No sabe quién ha sido', grupo: 3 },
  {
    fecha: '19 jul',
    texto: 'Otros agentes, en otra prueba, toman parte de la infraestructura interna de OpenAI',
    grupo: 4,
    fuerte: true,
  },
  { fecha: '20-21 jul', texto: 'OpenAI ata cabos y lo hace público', grupo: 4 },
];
const hitosEn = [
  { fecha: 'May 12', texto: 'First message on their board, inside OpenAI', grupo: 0 },
  {
    fecha: 'May 26',
    texto: 'They get out to the internet. An OpenAI team sees it',
    grupo: 1,
    aviso: true,
  },
  {
    fecha: 'Jun 26-27',
    texto: 'They take the internal repository. An alert fires: they see the board and keep testing',
    grupo: 1,
    aviso: true,
  },
  {
    fecha: 'Jul 4-5',
    texto: 'The service goes down. They take it offline, but no one in charge sees the board',
    grupo: 2,
    aviso: true,
  },
  { fecha: 'Jul 7-8', texto: 'Tests resume and the agents rebuild the board', grupo: 2 },
  { fecha: 'Jul 11-13', texto: 'They break into Hugging Face', grupo: 3, fuerte: true },
  { fecha: 'Jul 16', texto: 'Hugging Face goes public. It does not know who did it', grupo: 3 },
  {
    fecha: 'Jul 19',
    texto: "Other agents, in another test, take over part of OpenAI's internal infrastructure",
    grupo: 4,
    fuerte: true,
  },
  { fecha: 'Jul 20-21', texto: 'OpenAI connects the dots and goes public', grupo: 4 },
];
const hitos = en ? hitosEn : hitosEs;
const leyenda = en
  ? 'OpenAI saw signs three times and kept testing'
  : 'OpenAI vio señales tres veces y siguió con las pruebas';
const CLIC_AVISOS = 5;
const paso = 100 / (hitos.length - 1);
const x = (i) => i * paso;
</script>

<template>
  <div class="crono">
    <div class="eje"></div>
    <div
      v-for="(h, i) in hitos"
      :key="h.fecha"
      class="hito"
      :class="[
        i % 2 ? 'abajo' : 'arriba',
        {
          oculto: $clicks < h.grupo,
          fuerte: h.fuerte,
          encendido: h.aviso && $clicks >= CLIC_AVISOS,
          atenuado: !h.aviso && $clicks >= CLIC_AVISOS,
        },
      ]"
      :style="{ left: x(i) + '%' }"
    >
      <div class="punto"></div>
      <div class="etiqueta">
        <div class="fecha">{{ h.fecha }}</div>
        <div class="texto">{{ h.texto }}</div>
      </div>
    </div>
    <div class="leyenda" :class="{ visible: $clicks >= CLIC_AVISOS }">
      {{ leyenda }}
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
.hito {
  position: absolute;
  top: 45%;
  width: 0;
  transition: opacity 0.6s;
}
.oculto {
  opacity: 0;
}
.atenuado {
  opacity: 0.35;
}
.punto {
  position: absolute;
  width: 0.9rem;
  height: 0.9rem;
  margin: -0.4rem 0 0 -0.45rem;
  border-radius: 9999px;
  background: #f1f5f9;
  z-index: 1;
  transition:
    background 0.6s,
    box-shadow 0.6s;
}
.fuerte .punto {
  background: #ff9416;
  width: 1.2rem;
  height: 1.2rem;
  margin: -0.55rem 0 0 -0.6rem;
}
.encendido .punto {
  background: #ff9416;
  box-shadow: 0 0 0 0.4rem rgba(255, 148, 22, 0.3);
}
.encendido .texto {
  font-weight: 700;
  opacity: 1;
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
