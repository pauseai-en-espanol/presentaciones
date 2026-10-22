<!--
  Enlaces a la grabación de la charla (YouTube, Spotify, iVoox), sacados del presentation.json de la presentación
  (`grabacion` en su idioma). Sale solo lo que haya; sin grabación, no sale nada. Va en la portada:

    <Grabacion class="mt-8" />
-->
<script setup>
import { configs } from '@slidev/client';

// La raíz de Vite es la carpeta de la presentación, así que «/presentation.json» es el suyo.
const [presentacion] = Object.values(
  import.meta.glob('/presentation.json', { eager: true, import: 'default' }),
);
const lang = configs.lang ?? 'es';
const grabacion = presentacion?.languages?.[lang]?.grabacion ?? {};
const enlaces = [
  ['youtube', 'YouTube'],
  ['spotify', 'Spotify'],
  ['ivoox', 'iVoox'],
].filter(([clave]) => grabacion[clave]);
</script>

<template>
  <div v-if="enlaces.length" class="grabacion">
    <span class="grabacion-titulo">{{ lang === 'en' ? 'Recording' : 'Grabación' }}</span>
    <a
      v-for="[clave, nombre] in enlaces"
      :key="clave"
      :href="grabacion[clave]"
      target="_blank"
      rel="noopener"
      >{{ nombre }}</a
    >
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  padding: 0.15rem 0.8rem;
  color: inherit;
  text-decoration: none;
}
.grabacion a:hover {
  border-color: #ff9416;
  color: #ff9416;
}
</style>
