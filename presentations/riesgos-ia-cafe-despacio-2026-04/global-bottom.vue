<template>
  <footer class="footer-persistent footer-left">
    <img src="/logos/logo.png" class="h-5 rounded-full" />
    <span class="text-xs tracking-wide text-slate-700">pauseai.es</span>
  </footer>
  <footer class="footer-persistent footer-right">
    <span class="text-xs tracking-wide text-slate-700">Café dEspacio</span>
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
