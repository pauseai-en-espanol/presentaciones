<script setup>
// Evaluación del AISI publicada el 28 sep 2026 (§3.3b del informe):
// porcentaje de simulaciones con ataque no autorizado a la cadena de suministro.
// GPT-6 Astra aparece en el clic `clicAstra`.
import { useSlideContext } from '@slidev/client';

defineProps({ clicAstra: { type: Number, default: 1 } });
const { $clicks } = useSlideContext();

const MAXIMO = 30;
const modelos = [
  { nombre: 'GPT-5.5', valor: 0, texto: '0 %' },
  { nombre: 'GPT-5.6 Sol', valor: 6.3, texto: '6,3 %' },
  { nombre: 'GPT-6 Astra', valor: 29.2, texto: '29,2 %', ultimo: true },
];
</script>

<template>
  <div class="barras">
    <div v-for="m in modelos" :key="m.nombre" class="columna">
      <div class="zona">
        <div
          class="barra"
          :class="{ ultimo: m.ultimo }"
          :style="{
            height:
              (m.ultimo && $clicks < clicAstra ? 0 : Math.max(m.valor / MAXIMO, 0.01) * 100) + '%',
          }"
        >
          <span class="valor" :class="{ oculto: m.ultimo && $clicks < clicAstra }">{{
            m.texto
          }}</span>
        </div>
        <div v-if="m.ultimo && $clicks < clicAstra" class="interrogante">?</div>
      </div>
      <div class="nombre">{{ m.nombre }}</div>
    </div>
  </div>
</template>

<style scoped>
.barras {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2.5rem;
  height: 16rem;
  font-family: 'Montserrat', sans-serif;
}
.columna {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 7.5rem;
}
.zona {
  position: relative;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid rgba(148, 163, 184, 0.4);
}
.barra {
  position: relative;
  width: 100%;
  background: rgba(148, 163, 184, 0.55);
  border-radius: 0.4rem 0.4rem 0 0;
  transition: height 1.2s ease-out;
}
.barra.ultimo {
  background: #ff9416;
}
.valor {
  position: absolute;
  top: -2.4rem;
  left: 0;
  right: 0;
  text-align: center;
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.9rem;
  color: #f1f5f9;
  transition: opacity 0.6s 0.8s;
}
.oculto {
  opacity: 0;
}
.interrogante {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  text-align: center;
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 4rem;
  color: #ff9416;
}
.nombre {
  margin-top: 0.6rem;
  font-size: 1.05rem;
}
</style>
