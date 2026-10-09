# PauseAI España — Presentaciones

Coleccion de presentaciones de PauseAI España, construidas con [Slidev](https://sli.dev/).

## Presentaciones

Las presentaciones se sirven en https://pauseai.es/presentaciones/. El listado completo se genera dinámicamente desde los `presentation.json` de cada presentación; ver `packages/landing/`.

## Quick Start

```bash
pnpm install

# Run a specific presentation
cd presentations/riesgos-ia-uma-2026-03
pnpm dev --port 3030

# Or from the root
pnpm --filter riesgos-ia-uma-2026-03 dev -- --port 3030

# Build & preview the landing index locally
cd packages/landing
pnpm dev   # builds + serves on http://localhost:8080
```

Open http://localhost:3030 for slides, http://localhost:3030/presenter for presenter mode.

## Project Structure

```
package.json               # Root workspace (shared linting/formatting)
pnpm-workspace.yaml        # Workspace definitions
CLAUDE.md                  # Project-wide Claude Code instructions

presentations/
  riesgos-ia-uma-2026-03/  # Each presentation is a self-contained Slidev project
    package.json            # Slidev deps + scripts
    slides.md               # Entry point
    slides/                 # Slide sections (one file per block)
    public/                 # Assets (logos, screenshots, videos)
    style.css               # Theme overrides
    global-bottom.vue       # Persistent footer
    CLAUDE.md               # Presentation-specific instructions
    presentation.json       # Metadata for the landing index
  etica-ia-ispln-2026-03/
    ...

packages/
  slidev-addon-pauseai/    # Shared Slidev components (videos, etc.)
  landing/                  # Generator for the /presentaciones/ index page

charts/                    # Helm charts for Kubernetes deployment
```

## Adding a New Presentation

1. Create a directory in `presentations/` following the naming convention: `<topic>-<venue>-<YYYY>-<MM>` (slug in the canonical language).
2. Add a `package.json` with Slidev as a dev dependency (use `slidev-addon-pauseai` for shared components).
3. Create `slides.md` (canonical), `slides/<lang>/`, `public/`, `style.css`, `global-bottom.vue`.
4. Add a `CLAUDE.md` with audience, structure, and sources.
5. Add a `presentation.json` so the landing index picks it up:

```json
{
  "speaker": "Speaker name",
  "date": "YYYY-MM-DD",
  "dateApprox": false,
  "languages": {
    "es": {
      "title": "Título",
      "subtitle": "Subtítulo opcional",
      "venue": "Lugar · ubicación",
      "description": "Descripción de una línea para la tarjeta del listado."
    }
  }
}
```

Set `"unlisted": true` to keep a presentation out of the landing while it is still built and served at `/presentaciones/<slug>/` (useful before a session, so the slides are reachable only through their link or QR). Remove the field to list it.

Set `dateApprox: true` when only the month is known (the landing renders "abril de 2026" instead of "15 de abril de 2026").

### Adding a second language

Bilingual presentations keep one directory per talk. The canonical language lives at `/<slug>/`; translations live at `/<slug>/<lang>/`.

1. In `slides/`, create per-language subdirs: `slides/es/01-…md`, `slides/en/01-…md`.
2. Keep `slides.md` as the canonical entry, add `slides-<lang>.md` for each translation. Each entry sets `lang: es` / `lang: en` in its frontmatter and references its own `./slides/<lang>/*.md`.
3. Make `global-bottom.vue` lang-aware if any text differs (read `configs.lang` from `@slidev/client`).
4. In `package.json`, add per-language scripts:

```json
{
  "scripts": {
    "dev": "slidev --remote --port 3030",
    "dev:en": "slidev slides-en.md --remote --port 3031",
    "build": "slidev build",
    "build:en": "slidev build slides-en.md --out dist/en"
  }
}
```

5. Extend `presentation.json` with a second entry under `languages`:

```json
{
  "languages": {
    "es": { "title": "…", "subtitle": "…", "venue": "…", "description": "…" },
    "en": { "title": "…", "subtitle": "…", "venue": "…", "description": "…" }
  }
}
```

Slide structure, click reveals and image references must mirror 1:1 between languages — only prose is translated. The Docker build auto-detects `slides-en.md` and serves the EN build under `/<slug>/en/`.

## Portadas para Luma y redes

`pnpm card <slug>` genera una portada cuadrada de 1080×1080 en `packages/cards/out/` (ignorado por git). Toma el título y el ponente del `presentation.json`; el resto, de las opciones. Usa el Chrome instalado en modo headless, sin dependencias.

```bash
pnpm card ia-fuera-sandbox-euronova-2026-10 --subtitulo "La IA de frontera se sale del sandbox"
pnpm card ia-fuera-sandbox-euronova-2026-10 --foto ~/fotos/dani.jpg
pnpm card --titulo "Otra charla | en dos líneas" --ponente "Nombre" --afiliacion "PauseAI España"
```

Opciones: `--lang`, `--titulo`, `--subtitulo`, `--ponente`, `--afiliacion` (por defecto «PauseAI España»), `--serie` (por defecto «Charlas PauseAI en Español»), `--foto`, `--out`. El título salta de línea tras los dos puntos o donde se ponga `|`. Si Chrome no está en la ruta habitual de macOS, indícala con la variable `CHROME`.

## Docker Build

```bash
# Build all presentations into a single nginx image
# Each presentation is served under /presentaciones/<name>/ by default
docker build --platform linux/amd64 \
  -t harbor.danilupion.com/pauseai-es/presentaciones:latest .

# Override the base path prefix if needed
docker build --platform linux/amd64 \
  --build-arg BASE_PREFIX=/other-prefix/ \
  -t harbor.danilupion.com/pauseai-es/presentaciones:latest .
```

## Tech Stack

- **[Slidev](https://sli.dev/)** — Markdown-based presentation framework
- **pnpm workspaces** — Monorepo management
- **Vite + Vue** — Dev server and component system
