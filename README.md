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

6. Add a changeset so the next release puts it on the site: `pnpm release:note`, pick `@pauseai-es/landing` (it carries the version of the whole site) and describe the change in a sentence, e.g. "New talk: …". The same goes for any later change to a presentation. See [CI and releases](#ci-and-releases).

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

## CI and releases

GitHub Actions (`.github/workflows/`, modelled on the aiontheballot repo):

- **CI**, on every pull request and push to main: lint, formatting, the build of every presentation and the landing (a slide pointing at a missing asset fails it), and a Helm lint of both charts. Pull requests run on GitHub-hosted runners; pushes to main on the chapter's self-hosted runner.
- **Changesets**: the whole site ships as one image, versioned as `@pauseai-es/landing`; the other packages are ignored by changesets. Any change that reaches the site (a presentation, the shared addon, a dependency) needs a changeset releasing `@pauseai-es/landing`: `pnpm release:note`. Changes that don't (docs, a presentation's `CLAUDE.md`, CI) take an empty one: `pnpm release:empty`. CI checks both, and adds one to Renovate's PRs. See `.changeset/README.md`.
- **Release**, after CI passes on main: applies the changesets (version and `packages/landing/CHANGELOG.md`), builds the image as `harbor.danilupion.com/pauseai-es/presentaciones:<version>.<short sha>`, writes the tag into `charts/static/values.yaml` and commits it. Argo CD deploys the chart from main (gitops: `catalog/apps/pauseai-es-presentaciones`); the gitops values must not set `image.tag`.

To try the image locally (releases are built by CI, don't push by hand):

```bash
# All presentations in one nginx image, each under /presentaciones/<name>/
pnpm --filter @pauseai-es/landing run docker:build   # tags pauseai-es/presentaciones:<version>

# Or with another base path prefix
docker build --build-arg BASE_PREFIX=/other-prefix/ -t presentaciones:local .
```

## Tech Stack

- **[Slidev](https://sli.dev/)** — Markdown-based presentation framework
- **pnpm workspaces** — Monorepo management
- **Vite + Vue** — Dev server and component system
