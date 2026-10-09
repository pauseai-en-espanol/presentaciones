import { copyFile, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const PRESENTATIONS_DIR = join(ROOT, 'presentations');
const DIST = join(__dirname, 'dist');

const MONTHS = {
  es: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

function escapeHtml(s) {
  return String(s ?? '').replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
}

// Strip em/en dashes from author-supplied card copy.
function stripDashes(s) {
  return String(s ?? '').replace(/\s*[–—]\s*/g, ', ');
}

function formatDate(iso, isApprox, lang) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  const months = MONTHS[lang] ?? MONTHS.es;
  const monthName = months[m - 1];
  if (isApprox) {
    return lang === 'en' ? `${monthName} ${y}` : `${monthName} de ${y}`;
  }
  return lang === 'en' ? `${monthName} ${d}, ${y}` : `${d} de ${monthName} de ${y}`;
}

async function loadPresentations() {
  const entries = await readdir(PRESENTATIONS_DIR, { withFileTypes: true });
  const presentations = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const jsonPath = join(PRESENTATIONS_DIR, slug, 'presentation.json');
    try {
      const raw = await readFile(jsonPath, 'utf-8');
      const meta = JSON.parse(raw);
      // `unlisted: true` keeps a talk out of the landing while it is still built and
      // served at /presentaciones/<slug>/ (e.g. before a session, to avoid spoilers).
      if (meta.unlisted) {
        console.log(`[landing] ${slug} is unlisted — skipping`);
        continue;
      }
      for (const lang of Object.values(meta.languages || {})) {
        if (lang && typeof lang === 'object') {
          for (const k of Object.keys(lang)) {
            if (typeof lang[k] === 'string') lang[k] = stripDashes(lang[k]);
          }
        }
      }
      presentations.push({ slug, ...meta });
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.warn(`[landing] No presentation.json in ${slug} — skipping`);
      } else {
        console.warn(`[landing] Could not read ${slug}/presentation.json: ${err.message}`);
      }
    }
  }
  presentations.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return presentations;
}

function pickCanonical(languages) {
  if (languages?.es) return { code: 'es', meta: languages.es };
  const first = Object.entries(languages || {})[0];
  return first ? { code: first[0], meta: first[1] } : null;
}

function renderCard(p) {
  const langs = p.languages || {};
  const canonical = pickCanonical(langs);
  if (!canonical) return '';

  const code = canonical.code;
  const meta = canonical.meta;
  const dateText = formatDate(p.date, !!p.dateApprox, code);

  const hrefFor = (lang) => `./${p.slug}/${lang === code ? '' : `${lang}/`}`;

  const i18nAttrs = (key) =>
    Object.entries(langs)
      .map(([lang, m]) => `data-${lang}="${escapeHtml(m[key] ?? '')}"`)
      .join(' ');

  const i18nHrefAttrs = () =>
    Object.keys(langs)
      .map((lang) => `data-${lang}="${escapeHtml(hrefFor(lang))}"`)
      .join(' ');

  const dateAttrs = Object.keys(langs)
    .map((lang) => `data-${lang}="${escapeHtml(formatDate(p.date, !!p.dateApprox, lang))}"`)
    .join(' ');

  const otherLangs = Object.keys(langs).filter((l) => l !== code);
  const langToggle =
    otherLangs.length > 0
      ? `<div class="card-langs" role="group" aria-label="language">
          ${Object.keys(langs)
            .map(
              (lang) =>
                `<button type="button" class="card-lang-btn${lang === code ? ' is-active' : ''}" data-set-lang="${lang}">${lang.toUpperCase()}</button>`,
            )
            .join('')}
        </div>`
      : '';

  return `<article class="card" data-lang="${code}">
  <div class="card-meta">
    <span class="card-date i18n-text" ${dateAttrs}>${escapeHtml(dateText)}</span>
    ${langToggle}
  </div>
  <h2 class="card-title">
    <a class="card-title-link i18n-href" ${i18nHrefAttrs()} href="${escapeHtml(hrefFor(code))}">
      <span class="i18n-text" ${i18nAttrs('title')}>${escapeHtml(meta.title || p.slug)}</span>
    </a>
  </h2>
  ${meta.subtitle ? `<p class="card-subtitle i18n-text" ${i18nAttrs('subtitle')}>${escapeHtml(meta.subtitle)}</p>` : ''}
  ${meta.venue ? `<p class="card-venue i18n-text" ${i18nAttrs('venue')}>${escapeHtml(meta.venue)}</p>` : ''}
  ${meta.description ? `<p class="card-description i18n-text" ${i18nAttrs('description')}>${escapeHtml(meta.description)}</p>` : ''}
  <a class="card-cta i18n-href" ${i18nHrefAttrs()} href="${escapeHtml(hrefFor(code))}">
    <span class="i18n-text" data-es="Abrir presentación →" data-en="Open presentation →">Abrir presentación →</span>
  </a>
</article>`;
}

function renderHTML(presentations, todayIso) {
  const cards = presentations.map(renderCard).filter(Boolean).join('\n');
  const count = presentations.length;
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Presentaciones · PauseAI en Español</title>
  <meta name="description" content="Charlas y conferencias de PauseAI en Español. Riesgos de la IA avanzada, política, ética y movimiento por una pausa." />
  <meta property="og:title" content="Presentaciones · PauseAI en Español" />
  <meta property="og:description" content="Charlas y conferencias de PauseAI en Español." />
  <meta property="og:type" content="website" />
  <link rel="icon" type="image/png" href="./logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Saira+Condensed:wght@500;700;900&family=Roboto+Slab:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <nav class="topbar">
    <a class="brand" href="https://pauseai.es">
      <img src="./logo.png" alt="PauseAI en Español" />
      <span>pauseai.es</span>
    </a>
    <a class="back" href="https://pauseai.es">← Volver a pauseai.es</a>
  </nav>

  <header class="hero">
    <img src="./logo-completo.png" alt="PauseAI en Español" class="hero-logo" />
    <h1>Presentaciones</h1>
    <p class="hero-subtitle">Charlas y conferencias de <strong>PauseAI en Español</strong> sobre riesgos de la IA avanzada, ética, política y movimiento por una pausa.</p>
    <p class="hero-count">${count === 1 ? '1 presentación' : `${count} presentaciones`}</p>
  </header>

  <main class="container">
    <section class="grid">
      ${cards}
    </section>
  </main>

  <footer class="footer">
    <p><strong>PauseAI en Español.</strong> Pausemos la IA, sociedad civil por una pausa al desarrollo de IA avanzada.</p>
    <p class="small">
      <a href="https://pauseai.es">pauseai.es</a>
      <span class="divider">·</span>
      <a href="https://pauseai.info">pauseai.info (internacional)</a>
      <span class="divider">·</span>
      <a href="https://github.com/pauseai-en-espanol/presentaciones">GitHub</a>
    </p>
    <p class="small muted">Actualizado ${formatDate(todayIso, false, 'es')}</p>
  </footer>

  <script>
    document.querySelectorAll('.card').forEach((card) => {
      const buttons = card.querySelectorAll('.card-lang-btn');
      if (!buttons.length) return;
      buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const lang = btn.dataset.setLang;
          if (!lang || card.dataset.lang === lang) return;
          card.dataset.lang = lang;
          buttons.forEach((b) => b.classList.toggle('is-active', b.dataset.setLang === lang));
          card.querySelectorAll('.i18n-text').forEach((el) => {
            const v = el.dataset[lang];
            if (v != null) el.textContent = v;
          });
          card.querySelectorAll('.i18n-href').forEach((el) => {
            const v = el.dataset[lang];
            if (v != null) el.setAttribute('href', v);
          });
        });
      });
    });
  </script>
</body>
</html>
`;
}

const STYLE_CSS = `:root {
  --pauseai-navy: #0f172a;
  --pauseai-navy-light: #1e293b;
  --pauseai-navy-lighter: #273347;
  --pauseai-orange: #ff9416;
  --pauseai-orange-dim: rgba(255, 148, 22, 0.15);
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 148, 22, 0.4);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
  background: var(--pauseai-navy);
  color: var(--text-primary);
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  line-height: 1.55;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ---------- Topbar ---------- */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  color: var(--text-secondary);
  transition: color 0.15s;
}

.brand:hover {
  color: var(--pauseai-orange);
}

.brand img {
  height: 24px;
  width: 24px;
  border-radius: 50%;
}

.back {
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: color 0.15s;
}

.back:hover {
  color: var(--pauseai-orange);
}

/* ---------- Hero ---------- */
.hero {
  text-align: center;
  padding: 3.5rem 2rem 2.5rem;
  max-width: 760px;
  margin: 0 auto;
}

.hero-logo {
  height: 110px;
  max-width: min(520px, 90%);
  width: auto;
  margin-bottom: 1.75rem;
  opacity: 0.95;
}

.hero h1 {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 6vw, 4rem);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--pauseai-orange);
  margin: 0 0 0.5rem;
  line-height: 1;
}

.hero-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin: 0.5rem auto 0;
  max-width: 600px;
}

.hero-subtitle strong {
  color: var(--text-primary);
  font-weight: 600;
}

.hero-count {
  margin-top: 1.25rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.03em;
}

/* ---------- Grid ---------- */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  flex: 1;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

/* ---------- Card ---------- */
.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--pauseai-navy-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-2px);
  border-color: var(--border-hover);
  background: var(--pauseai-navy-lighter);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.03em;
  margin-bottom: 0.75rem;
}

.card-date {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.card-langs {
  display: inline-flex;
  margin-left: auto;
  gap: 2px;
  background: rgba(255, 255, 255, 0.04);
  padding: 2px;
  border-radius: 999px;
  position: relative;
  z-index: 2;
}

.card-lang-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font: inherit;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.card-lang-btn:hover {
  color: var(--text-primary);
}

.card-lang-btn.is-active {
  background: var(--pauseai-orange);
  color: var(--pauseai-navy);
}

.card-title {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: var(--pauseai-orange);
  margin: 0 0 0.35rem;
  line-height: 1.15;
}

.card-title-link {
  color: inherit;
  display: inline;
}

.card-title-link::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

.card-subtitle {
  font-family: 'Roboto Slab', serif;
  font-size: 0.95rem;
  color: var(--text-primary);
  margin: 0 0 0.85rem;
  line-height: 1.4;
}

.card-venue {
  font-size: 0.82rem;
  color: var(--text-primary);
  margin: 0 0 0.85rem;
  padding: 0.35rem 0.6rem;
  border-left: 2px solid var(--pauseai-orange);
  background: var(--pauseai-orange-dim);
  border-radius: 0 4px 4px 0;
  line-height: 1.35;
}

.card-description {
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin: 0 0 1rem;
  line-height: 1.5;
  flex: 1;
}

.card-cta {
  font-size: 0.8rem;
  color: var(--pauseai-orange);
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-top: auto;
  position: relative;
  z-index: 2;
}

/* ---------- Footer ---------- */
.footer {
  text-align: center;
  padding: 2.5rem 1.5rem 3rem;
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.15);
}

.footer p {
  margin: 0.35rem 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.footer .small {
  font-size: 0.78rem;
}

.footer .muted {
  color: var(--text-muted);
  margin-top: 0.85rem;
}

.footer a {
  color: var(--text-primary);
  border-bottom: 1px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}

.footer a:hover {
  color: var(--pauseai-orange);
  border-bottom-color: var(--pauseai-orange);
}

.footer .divider {
  margin: 0 0.5rem;
  color: var(--text-muted);
}

/* ---------- Responsive ---------- */
@media (max-width: 640px) {
  .topbar {
    padding: 0.75rem 1rem;
  }

  .hero {
    padding: 2.5rem 1rem 1.5rem;
  }

  .hero-logo {
    height: 80px;
  }

  .container {
    padding: 0 1rem 3rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 1.25rem;
  }
}
`;

async function copyAssets() {
  const ASSETS = join(__dirname, 'assets');
  for (const name of ['logo.png', 'logo-completo.png']) {
    const src = join(ASSETS, name);
    const dest = join(DIST, name);
    try {
      await copyFile(src, dest);
    } catch (err) {
      console.warn(`[landing] Could not copy ${src}: ${err.message}`);
    }
  }
}

async function main() {
  await mkdir(DIST, { recursive: true });
  const todayIso = new Date().toISOString().slice(0, 10);
  const presentations = await loadPresentations();
  const html = renderHTML(presentations, todayIso);
  await writeFile(join(DIST, 'index.html'), html, 'utf-8');
  await writeFile(join(DIST, 'style.css'), STYLE_CSS, 'utf-8');
  await copyAssets();
  console.log(
    `[landing] Generated ${presentations.length} card${presentations.length === 1 ? '' : 's'} at ${DIST}`,
  );
}

main().catch((err) => {
  console.error('[landing] Build failed:', err);
  process.exit(1);
});
