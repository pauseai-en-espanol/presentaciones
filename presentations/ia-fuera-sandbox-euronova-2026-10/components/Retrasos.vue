<script setup>
// Cuándo pasó cada incidente y cuándo se supo (§2 y §4 del informe).
// `incierto`: no hay fechas públicas de cuándo pasó; se dibuja con borde
// discontinuo y un «?».
// Todas las filas a la vez. Eje: del 1 de mayo al 30 de septiembre de 2026.
import { configs } from '@slidev/client';

const en = configs.lang === 'en';
const INICIO = Date.UTC(2026, 4, 1);
const FIN = Date.UTC(2026, 8, 30);
const pos = (m, d) => ((Date.UTC(2026, m - 1, d) - INICIO) / (FIN - INICIO)) * 100;

const filasEs = [
  {
    caso: 'Hugging Face',
    desde: pos(7, 9),
    hasta: pos(7, 13),
    supo: pos(7, 21),
    hueco: '8 días',
    nota: 'lo detectó Hugging Face',
  },
  {
    caso: 'DseWiki',
    desde: pos(5, 11),
    hasta: pos(7, 2),
    supo: pos(9, 4),
    hueco: '2 meses',
    nota: 'lo destaparon investigadores externos',
  },
  {
    caso: 'Gemini, 3 empresas',
    desde: pos(5, 1),
    hasta: pos(5, 31),
    supo: pos(9, 18),
    hueco: '4 meses',
    nota: 'Google lo confirmó cuando preguntó el WSJ',
  },
  {
    caso: 'Medicare, Australia',
    desde: pos(6, 18),
    hasta: pos(6, 19),
    supo: pos(9, 23),
    hueco: '3 meses',
    nota: 'OpenAI avisó al Gobierno en septiembre',
  },
  {
    caso: 'Webs de EE. UU.',
    desde: pos(6, 1),
    hasta: pos(8, 31),
    supo: pos(9, 25),
    hueco: 'sin fecha',
    nota: 'OpenAI solo dice «este verano»; parte lo destapó Transluce',
    incierto: true,
  },
];
const textosEn = [
  { caso: 'Hugging Face', hueco: '8 days', nota: 'Hugging Face caught it' },
  { caso: 'DseWiki', hueco: '2 months', nota: 'outside researchers exposed it' },
  {
    caso: 'Gemini, 3 companies',
    hueco: '4 months',
    nota: 'Google confirmed it when the WSJ asked',
  },
  {
    caso: 'Medicare, Australia',
    hueco: '3 months',
    nota: 'OpenAI told the government in September',
  },
  {
    caso: 'US websites',
    hueco: 'no date',
    nota: 'OpenAI only says “this summer”; Transluce exposed part of it',
  },
];
const filas = en ? filasEs.map((f, i) => ({ ...f, ...textosEn[i] })) : filasEs;
const t = en
  ? { paso: 'when it happened', supo: 'when it came out' }
  : { paso: 'cuándo pasó', supo: 'cuándo se supo' };

const meses = (en ? ['may', 'jun', 'jul', 'aug', 'sep'] : ['may', 'jun', 'jul', 'ago', 'sep']).map(
  (nombre, i) => ({
    nombre,
    x: pos(5 + i, 1),
  }),
);
</script>

<template>
  <div class="retrasos">
    <div class="cabecera">
      <div class="col-caso"></div>
      <div class="eje">
        <span v-for="m in meses" :key="m.nombre" class="mes" :style="{ left: m.x + '%' }">{{
          m.nombre
        }}</span>
      </div>
      <div class="col-hueco"></div>
    </div>
    <div v-for="f in filas" :key="f.caso" class="fila">
      <div class="col-caso">{{ f.caso }}</div>
      <div class="eje pista">
        <div
          class="paso"
          :class="{ incierto: f.incierto }"
          :style="{ left: f.desde + '%', width: Math.max(f.hasta - f.desde, 0.8) + '%' }"
        >
          <span v-if="f.incierto">?</span>
        </div>
        <div
          v-if="!f.incierto"
          class="espera"
          :style="{ left: f.hasta + '%', width: f.supo - f.hasta + '%' }"
        ></div>
        <div class="supo" :style="{ left: f.supo + '%' }"></div>
      </div>
      <div class="col-hueco">
        <div class="hueco">{{ f.hueco }}</div>
        <div class="nota">{{ f.nota }}</div>
      </div>
    </div>
    <div class="leyenda">
      <span><i class="m-paso"></i> {{ t.paso }}</span>
      <span><i class="m-supo"></i> {{ t.supo }}</span>
    </div>
  </div>
</template>

<style scoped>
.retrasos {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
}
.cabecera,
.fila {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.fila {
  margin: 0.9rem 0;
  transition: opacity 0.6s;
}
.col-caso {
  width: 13rem;
  text-align: right;
  font-size: 1rem;
}
.col-hueco {
  width: 15rem;
}
.eje {
  position: relative;
  flex: 1;
  height: 1.4rem;
}
.pista {
  border-bottom: 1px dashed rgba(148, 163, 184, 0.3);
}
.mes {
  position: absolute;
  font-size: 0.75rem;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.paso.incierto {
  background: transparent;
  border: 2px dashed rgba(255, 148, 22, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;
  color: #ff9416;
}
.paso {
  position: absolute;
  top: 0.2rem;
  height: 1rem;
  background: #ff9416;
  border-radius: 0.25rem;
}
.espera {
  position: absolute;
  top: 0.6rem;
  height: 0.2rem;
  background: rgba(148, 163, 184, 0.45);
}
.supo {
  position: absolute;
  top: 0.15rem;
  width: 1.1rem;
  height: 1.1rem;
  margin-left: -0.55rem;
  border-radius: 9999px;
  background: #f1f5f9;
}
.hueco {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #ff9416;
  line-height: 1;
}
.nota {
  font-size: 0.75rem;
  opacity: 0.6;
}
.leyenda {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
  font-size: 0.85rem;
  opacity: 0.7;
}
.leyenda i {
  display: inline-block;
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.3rem;
  vertical-align: middle;
}
.m-paso {
  background: #ff9416;
  border-radius: 0.2rem;
}
.m-supo {
  background: #f1f5f9;
  border-radius: 9999px;
}
</style>
