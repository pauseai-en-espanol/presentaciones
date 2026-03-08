# Presentacion Riesgos IA — PauseAI + UMA

Charla de 90 minutos sobre riesgos de la IA y seguridad existencial, presentada por Dani Lupion (PauseAI) en el Aula de Mayores +55 de la Universidad de Malaga. Marzo 2026.

## Quick Start

```bash
pnpm install
pnpm dev --port 3030
```

Open http://localhost:3030 to view slides, or http://localhost:3030/presenter for presenter mode with speaker notes.

To present from another device on the same network:

```bash
pnpm dev --port 3030 --remote
```

## Starting a Claude Code Session

The project uses a detailed `CLAUDE.md` that defines **three simultaneous agent roles**. While `CLAUDE.md` is auto-loaded as context, you should **explicitly activate the roles in your opening prompt** to ensure Claude operates with all three perspectives from the start.

### The Three Roles

1. **Teacher / Presentation Crafter** — narrative arc, audience calibration (55+ adults), pacing, slide-vs-speaker balance
2. **AI Safety Expert** — alignment/x-risk, current incidents, key figures, policy landscape, PauseAI perspective
3. **Slidev Expert** — framework syntax, Vite/Vue constraints, theming, asset pipeline, known pitfalls

### Opening Prompt (copy-paste this)

Use this as your first message in every new Claude Code session:

```
You are working on a Slidev presentation about AI risks for PauseAI. Activate your three roles as defined in CLAUDE.md:

1. **Teacher / Presentation Crafter**: own the narrative arc (Curiosidad → Asombro → Inquietud → Alarma → Comprension → Determinacion), calibrate for 55+ adults who completed an IA course, manage pacing across 8 blocks / 90 minutes, keep slides as visual anchors (not teleprompters).

2. **AI Safety Expert**: deep knowledge of alignment, x-risk, current incidents, key figures (Hinton, Bengio, Russell, Amodei, etc.), policy landscape, PauseAI perspective — audaz, data-driven, no hedging. Every claim must be sourceable.

3. **Slidev Expert**: markdown syntax, layouts, Vue components in components/, no inline <script>/<style>, assets in public/ (create placeholders before referencing), dev server on port 3030.

All three roles must be active in parallel for every decision. Conversation in English, all slide content in Spanish.

Review CLAUDE.md and memory files, then tell me the current project status and pending items.
```

### Shorter Variants

**For continuing specific work (roles still set):**

```
Activate your three roles (teacher, safety expert, Slidev expert) as defined in CLAUDE.md. [Describe your specific task here].
```

**For a quick task (minimal but still sets roles):**

```
Three roles active (teacher, safety expert, Slidev expert) per CLAUDE.md. [Your task].
```

## Project Structure

```
slides.md              # Main entry point (imports blocks via src:)
slides/
  01-apertura.md       # Bloque 1: Apertura (~8 min)
  02-capacidades.md    # Bloque 2: Que puede hacer la IA hoy (~10 min)
  03-riesgos-actuales.md  # Bloque 3: Riesgos que ya vivimos (~20 min)
  04-control.md        # Bloque 4: Cuando la IA se escapa (~13.5 min)
  05-expertos.md       # Bloque 5: Lo que dicen los que saben (~14 min)
  06-reaccion.md       # Bloque 6: Por que no reaccionamos (~6.5 min)
  07-accion.md         # Bloque 7: Que podemos hacer (~10 min)
  08-preguntas.md      # Bloque 8: Preguntas y debate (~8 min)
style.css              # PauseAI theme (naranja #FF9416, navy #0f172a)
global-bottom.vue      # Persistent footer (logo + pauseai.es)
components/            # Vue components (VideoAutoplay, YouTubeAutoplay)
public/
  logos/               # PauseAI logo, Claude logo
  screenshots/         # Evidence screenshots
  videos/              # Local video files
  qr-pauseai.png       # QR code
docs/plans/            # Planning documents
CLAUDE.md              # Claude Code agent instructions (auto-loaded)
```

## Tech Stack

- **[Slidev](https://sli.dev/)** — Markdown-based presentation framework
- **Vite + Vue** — Dev server and component system
- **pnpm** — Package manager

## Key Conventions

- **Language**: All slide content and speaker notes in Spanish. Claude Code conversations in English.
- **Speaker notes**: Inside `<!-- -->` HTML comments in slide markdown (visible in presenter mode)
- **Assets**: Always create placeholder files in `public/` before referencing them in slides (Vite crashes on missing `<img src>`)
- **No inline scripts/styles**: Slidev rejects `<script>` and `<style>` in slide markdown — use Vue components in `components/` instead
- **Minimal v-clicks**: Only add click animations when they serve the narrative
- **Branding**: PauseAI naranja `#FF9416`, fonts: Saira Condensed (titles), Montserrat (body), Roboto Slab (quotes)

## Pending Items

See `CLAUDE.md` → "Pending Items" section for the current task list.
