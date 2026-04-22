<template>
  <footer class="footer-persistent footer-left">
    <img src="/logos/logo.png" class="h-5" />
    <span class="text-xs tracking-wide opacity-80">pauseai.es</span>
  </footer>
  <footer class="footer-persistent footer-right">
    <span class="text-xs tracking-wide opacity-80">Fundación Albor · Cádiz</span>
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
