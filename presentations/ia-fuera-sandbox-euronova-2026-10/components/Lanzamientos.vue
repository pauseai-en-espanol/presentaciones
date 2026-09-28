<script setup>
// Lo que lanzaron las mismas empresas después de respaldar «We Must Pace the
// Frontier» (12 de septiembre de 2026). Eje: del 10 de septiembre al 2 de octubre.
// Fuentes: páginas de producto y prensa; ver informe §8c.
import { configs } from '@slidev/client';

const INICIO = 10;
const FIN = 32;
const x = (dia) => ((dia - INICIO) / (FIN - INICIO)) * 100;

const en = configs.lang === 'en';
const fecha = (dia) => (en ? `Sep ${dia}` : `${dia} sep`);

const hitos = [
  { dia: 21, modelo: 'Grok 4.7', empresa: 'xAI', arriba: true },
  {
    dia: 22,
    modelo: en ? 'GPT-6 Sol and Luna' : 'GPT-6 Sol y Luna',
    empresa: 'OpenAI',
    arriba: false,
  },
  { dia: 22, modelo: 'Claude Opus 5.5', empresa: 'Anthropic', arriba: true, alto: true },
  { dia: 28, modelo: 'Claude Sonnet 5.5', empresa: 'Anthropic', arriba: false },
  { dia: 29, modelo: 'GPT-6.1 Sol', empresa: 'OpenAI', arriba: true },
  {
    dia: 30,
    modelo: 'Gemini 4 Argon',
    empresa: en
      ? 'Google DeepMind, “new frontier model”'
      : 'Google DeepMind, «nuevo modelo de frontera»',
    arriba: false,
    alto: true,
    fuerte: true,
  },
];
</script>

<template>
  <div class="lanz">
    <div class="eje"></div>
    <div class="marca-ensayo" :style="{ left: x(12) + '%' }">
      <div class="punto-ensayo"></div>
      <div class="ensayo">
        <div class="fecha">{{ fecha(12) }}</div>
        <div v-if="en">Amodei calls for slowing down.<br />Altman, Hassabis and Musk back him.</div>
        <div v-else>Amodei pide bajar el ritmo.<br />Altman, Hassabis y Musk lo respaldan.</div>
      </div>
    </div>
    <div
      v-for="h in hitos"
      :key="h.modelo"
      class="hito"
      :class="[h.arriba ? 'arriba' : 'abajo', { alto: h.alto, fuerte: h.fuerte }]"
      :style="{ left: x(h.dia) + '%' }"
    >
      <div class="punto"></div>
      <div v-if="h.alto" class="palo"></div>
      <div class="etiqueta">
        <div class="fecha">{{ fecha(h.dia) }}</div>
        <div class="modelo">{{ h.modelo }}</div>
        <div class="empresa">{{ h.empresa }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lanz {
  position: relative;
  height: 20rem;
  margin: 0 3rem;
  font-family: 'Montserrat', sans-serif;
}
.eje {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(148, 163, 184, 0.4);
}
.marca-ensayo {
  position: absolute;
  top: 50%;
  width: 0;
}
.punto-ensayo {
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  margin: -0.65rem 0 0 -0.65rem;
  border-radius: 9999px;
  background: #f1f5f9;
}
.ensayo {
  position: absolute;
  bottom: 1.2rem;
  left: -1rem;
  width: 15rem;
  font-size: 0.95rem;
  line-height: 1.3;
}
.hito {
  position: absolute;
  top: 50%;
  width: 0;
}
.punto {
  position: absolute;
  width: 1rem;
  height: 1rem;
  margin: -0.5rem 0 0 -0.5rem;
  border-radius: 9999px;
  background: #ff9416;
}
.etiqueta {
  position: absolute;
  width: 10.5rem;
  left: -5.25rem;
  text-align: center;
}
.arriba .etiqueta {
  bottom: 1rem;
}
.arriba.alto .etiqueta {
  bottom: 5.6rem;
}
.abajo.alto .etiqueta {
  top: 5.6rem;
}
.abajo.alto .palo {
  bottom: auto;
  top: 0.5rem;
}
.fuerte .punto {
  width: 1.3rem;
  height: 1.3rem;
  margin: -0.65rem 0 0 -0.65rem;
  box-shadow: 0 0 0 4px rgba(255, 148, 22, 0.3);
}
.fuerte .modelo {
  color: #ff9416;
}
.palo {
  position: absolute;
  bottom: 0.5rem;
  left: -1px;
  width: 2px;
  height: 5rem;
  background: rgba(255, 148, 22, 0.5);
}
.abajo .etiqueta {
  top: 1rem;
}
.fecha {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #ff9416;
  line-height: 1.1;
}
.modelo {
  font-weight: 700;
  font-size: 1rem;
}
.empresa {
  font-size: 0.8rem;
  opacity: 0.7;
}
.dias {
  position: absolute;
  bottom: -2.2rem;
  text-align: center;
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #f1f5f9;
  border-top: 2px solid rgba(255, 148, 22, 0.6);
  padding-top: 0.3rem;
}
</style>
