<script setup>
// Lista de los seis comportamientos que se predijeron. Se va tachando a lo
// largo de la charla. `tachados`: los ya tachados al entrar en la slide.
// `nuevos`: los que se tachan en esta slide, a partir del clic `clicNuevo`.
// `dudas`: los que no se tachan y se marcan con «?» (todavía no ha pasado del
// todo), a partir del clic `clicDuda`.
import { computed } from 'vue';
import { useSlideContext } from '@slidev/client';

const props = defineProps({
  tachados: { type: Array, default: () => [] },
  nuevos: { type: Array, default: () => [] },
  clicNuevo: { type: Number, default: 1 },
  compacto: { type: Boolean, default: false },
  dudas: { type: Array, default: () => [] },
  clicDuda: { type: Number, default: 0 },
});

const { $clicks } = useSlideContext();

const items = [
  'Escaparía de su entorno de pruebas',
  'Se coordinaría con otras IA',
  'Engañaría a personas',
  'Esquivaría los intentos de frenarla',
  'Conseguiría accesos que nadie le dio',
  'Se mejoraría a sí misma',
];

const estado = computed(() =>
  items.map((texto, i) => {
    const n = i + 1;
    const esNuevo = props.nuevos.includes(n);
    const tachado = props.tachados.includes(n) || (esNuevo && $clicks.value >= props.clicNuevo);
    const duda = props.dudas.includes(n) && $clicks.value >= props.clicDuda;
    return { n, texto, tachado, esNuevo, duda };
  }),
);
</script>

<template>
  <div :class="['lista', { compacto }]">
    <div v-if="!compacto" class="lista-titulo">Se predijo que la IA...</div>
    <div
      v-for="it in estado"
      :key="it.n"
      :class="['fila', { tachado: it.tachado, destacado: it.esNuevo, duda: it.duda }]"
    >
      <span class="num">{{ it.n }}</span>
      <span class="texto">{{ it.texto }}</span>
      <span class="interrogante" :class="{ visible: it.duda }">?</span>
    </div>
  </div>
</template>

<style scoped>
.lista {
  font-family: 'Montserrat', sans-serif;
}
.lista-titulo {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: #ff9416;
  margin-bottom: 1rem;
}
.fila {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 1.5rem;
  padding: 0.35rem 0;
  transition: opacity 0.6s;
}
.num {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  color: #ff9416;
  width: 1.2rem;
}
.texto {
  text-decoration-line: line-through;
  text-decoration-color: transparent;
  text-decoration-thickness: 3px;
  transition: text-decoration-color 0.7s ease-out;
}
.tachado .texto {
  text-decoration-color: #ff9416;
}
.tachado {
  opacity: 0.55;
}
.tachado.destacado {
  opacity: 1;
}
.interrogante {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  color: #ff9416;
  font-size: 1.3em;
  line-height: 1;
  opacity: 0;
  transform: scale(0.4);
  transition:
    opacity 0.6s,
    transform 0.6s;
}
.interrogante.visible {
  opacity: 1;
  transform: scale(1);
}
.duda .texto {
  color: #ff9416;
}
.compacto .fila {
  font-size: 0.8rem;
  padding: 0.1rem 0;
  gap: 0.5rem;
}
.compacto .texto {
  text-decoration-thickness: 2px;
  white-space: nowrap;
}
.compacto {
  width: max-content;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 0.5rem;
  padding: 0.6rem 0.8rem;
}
</style>
