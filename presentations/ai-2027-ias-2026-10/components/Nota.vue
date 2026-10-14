<script setup>
// La nota de una predicción en «Todo AI 2027». Se ve como una etiqueta; al pulsarla se abre
// una ventana con el porqué y las fuentes (lo que va dentro del componente). Se cierra
// pulsando fuera, en la «×» o con Escape. La ventana se lleva al <body> (Teleport) para que no
// herede la opacidad de las filas de 2027 ni quede debajo de las filas siguientes.
import { onBeforeUnmount, onMounted, ref } from 'vue';

defineProps({
  nota: { type: String, required: true },
  // acerto, adelanto, retraso, fallo, discutible, nosabe, asoma
  tipo: { type: String, default: 'discutible' },
  titulo: { type: String, default: '' },
});

const abierta = ref(false);
const cerrar = (e) => {
  if (e.key === 'Escape') abierta.value = false;
};
onMounted(() => window.addEventListener('keydown', cerrar));
onBeforeUnmount(() => window.removeEventListener('keydown', cerrar));
</script>

<template>
  <span class="nota-pop">
    <button type="button" class="nota-chip" :class="'n-' + tipo" @click.stop="abierta = true">
      {{ nota }}
    </button>
    <Teleport to="body">
      <div v-if="abierta" class="nota-fondo" @click.self="abierta = false">
        <div class="nota-ventana" role="dialog" :aria-label="titulo || nota">
          <button type="button" class="nota-cerrar" aria-label="Cerrar" @click="abierta = false">
            ×
          </button>
          <div class="nota-cab">
            <span class="nota-chip" :class="'n-' + tipo">{{ nota }}</span>
            <span v-if="titulo" class="nota-titulo">{{ titulo }}</span>
          </div>
          <div class="nota-texto enlaces"><slot /></div>
        </div>
      </div>
    </Teleport>
  </span>
</template>

<style scoped>
.nota-pop {
  margin-left: auto;
  flex-shrink: 0;
  padding-left: 0.3rem;
}
.nota-chip {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.56rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.08rem 0.4rem;
  border-radius: 999px;
  border: 1px solid currentColor;
  background: transparent;
  cursor: pointer;
  white-space: nowrap;
}
.nota-chip:focus-visible {
  outline: 2px solid #ff9416;
  outline-offset: 2px;
}
.n-acerto {
  color: #4ade80;
}
.n-adelanto {
  color: #c084fc;
}
.n-asoma {
  color: #c084fc;
  border-style: dashed;
}
.n-retraso {
  color: #fbbf24;
}
.n-fallo {
  color: #f87171;
}
.n-discutible {
  color: #93c5fd;
}
.n-nosabe {
  color: #94a3b8;
}
.nota-fondo {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(8, 12, 20, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.nota-ventana {
  position: relative;
  width: min(58vw, 92vw);
  background: #172033;
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 10px;
  padding: 1.6vw 1.9vw 1.5vw;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: max(15px, 1.15vw);
  line-height: 1.55;
  color: #e2e8f0;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}
.nota-cab {
  display: flex;
  align-items: center;
  gap: 0.9vw;
  margin-bottom: 1vw;
  padding-right: 2vw;
}
.nota-cab .nota-chip {
  cursor: default;
  font-size: max(11px, 0.75vw);
  padding: 0.2vw 0.6vw;
}
.nota-titulo {
  font-weight: 600;
  font-size: max(16px, 1.25vw);
  line-height: 1.3;
}
.nota-cerrar {
  position: absolute;
  top: 0.4rem;
  right: 0.6rem;
  font-size: max(22px, 1.7vw);
  line-height: 1;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
}
.nota-texto :deep(p) {
  margin: 0 0 0.8vw;
}
.nota-texto :deep(.fuentes-nota) {
  font-size: max(12px, 0.9vw);
  opacity: 0.75;
  margin-top: 0.9vw;
}
</style>
