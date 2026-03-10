<template>
  <footer class="footer-persistent footer-left">
    <img src="/logos/logo.png" class="h-5 rounded-full" />
    <span class="text-xs tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
      >pauseai.es</span
    >
  </footer>
  <footer class="footer-persistent footer-right">
    <span class="text-xs tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
      >Aula de Mayores +55</span
    >
    <img src="/logos/uma.png" class="h-5" style="filter: brightness(0) invert(1)" />
  </footer>
</template>

<style>
.footer-persistent {
  position: fixed;
  bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
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
