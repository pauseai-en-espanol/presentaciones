# PauseAI España — Presentaciones

Coleccion de presentaciones de PauseAI España, construidas con [Slidev](https://sli.dev/).

## Presentaciones

| Directorio                              | Titulo                          | Ponente                 | Fecha      |
| --------------------------------------- | ------------------------------- | ----------------------- | ---------- |
| `presentations/riesgos-ia-uma-2026-03/` | Riesgos de la IA                | Dani Lupion             | Marzo 2026 |
| `presentations/etica-ia-ispln-2026-03/` | IA, Etica y la Ausencia de Esta | Alvaro Torres de Miguel | Marzo 2026 |

## Quick Start

```bash
pnpm install

# Run a specific presentation
cd presentations/riesgos-ia-uma-2026-03
pnpm dev --port 3030

# Or from the root
pnpm --filter riesgos-ia-uma-2026-03 dev -- --port 3030
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
  etica-ia-ispln-2026-03/
    ...

charts/                    # Helm charts for Kubernetes deployment
```

## Adding a New Presentation

1. Create a directory in `presentations/` following the naming convention: `<topic>-<YYYY>-<MM>`
2. Add a `package.json` with Slidev as a dev dependency
3. Create `slides.md`, `slides/`, `public/`, `style.css`, `global-bottom.vue`
4. Add a `CLAUDE.md` with audience, structure, and sources

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
