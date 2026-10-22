<!--
  Iconos con enlace a la grabación de la charla (YouTube, Spotify, iVoox), sacados del presentation.json de la
  presentación (`grabacion` en su idioma). Sale solo lo que haya; sin grabación, no sale nada. Va en la portada:

    <Grabacion class="mt-8" />
-->
<script setup>
import { configs } from '@slidev/client';

import { PLATAFORMAS } from '../grabacion.js';

// La raíz de Vite es la carpeta de la presentación, así que «/presentation.json» es el suyo.
const [presentacion] = Object.values(
  import.meta.glob('/presentation.json', { eager: true, import: 'default' }),
);
const lang = configs.lang ?? 'es';
const grabacion = presentacion?.languages?.[lang]?.grabacion ?? {};
const enlaces = PLATAFORMAS.filter((p) => grabacion[p.clave]);
</script>

<template>
  <div v-if="enlaces.length" class="grabacion">
    <span class="grabacion-titulo">{{ lang === 'en' ? 'Recording' : 'Grabación' }}</span>
    <a
      v-for="p in enlaces"
      :key="p.clave"
      :href="grabacion[p.clave]"
      :title="p.nombre"
      :aria-label="p.nombre"
      target="_blank"
      rel="noopener"
    >
      <svg :viewBox="p.viewBox" fill="currentColor" fill-rule="evenodd" aria-hidden="true">
        <path :d="p.d" />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.grabacion {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}
.grabacion-titulo {
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-right: 0.25rem;
}
.grabacion a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: inherit;
  text-decoration: none;
}
.grabacion svg {
  width: 1.05rem;
  height: 1.05rem;
}
.grabacion a:hover {
  border-color: #ff9416;
  color: #ff9416;
}
</style>
