<script setup>
import { configs } from '@slidev/client';
import { computed } from 'vue';

const isEn = computed(() => configs.lang === 'en');
const domain = computed(() => (isEn.value ? 'pauseai.info' : 'pauseai.es'));
const venueLabel = computed(() =>
  isEn.value
    ? 'AI Policy & Safety Reading Club · Session 2'
    : 'AI Policy and Safety Reading Club · Sesión 2',
);
</script>

<template>
  <footer class="footer-persistent footer-left">
    <img src="/logos/logo.png" class="h-5 rounded-full" />
    <span class="text-xs tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{{
      domain
    }}</span>
  </footer>
  <footer class="footer-persistent footer-right">
    <span
      class="text-xs tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] opacity-70"
      >{{ venueLabel }}</span
    >
  </footer>
</template>

<style>
.footer-persistent {
  position: fixed;
  bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.6;
  z-index: 100;
  pointer-events: none;
}
.footer-left {
  left: 16px;
}
.footer-right {
  right: 16px;
}
</style>
