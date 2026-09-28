// Slidev 52.15+ added a `slidev:slide-import-guard` Vite plugin that flags
// compiled imports like `import _x from '/logos/foo.png'` (emitted by the MDC
// compiler for `<img src="/logos/foo.png">` in slide markdown) because they
// resolve outside `server.fs.allow`. Setting `fs.strict: false` skips the
// guard while keeping the same runtime behaviour as 52.14.x.
// Track upstream: https://github.com/slidevjs/slidev (remove once fixed).
const viteConfig = {
  server: {
    allowedHosts: true,
    fs: {
      strict: false,
    },
  },
};

export default viteConfig;
