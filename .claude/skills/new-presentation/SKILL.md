---
name: new-presentation
description: Scaffold a new Slidev presentation in this PauseAI España monorepo from a PDF, PPTX, or ODP source file. Creates the `presentations/<topic>-<venue>-<YYYY>-<MM>/` workspace (package.json, slides.md, style.css, logos, CLAUDE.md) using the repo's established conventions, wires it to the shared `slidev-addon-pauseai` addon for common components, extracts text and images from the source, and generates the individual slide files in PauseAI voice. TRIGGER when the user provides a path to a .pdf, .pptx, or .odp and asks to "migrate", "import", "convert", or "create a new presentation from" it.
---

# new-presentation

Import a PDF or PPTX as a new Slidev workspace in `presentations/`, matching the existing conventions of this monorepo.

You (Claude) are the engine: the shell scripts in `scripts/` handle mechanical extraction and scaffolding, but the quality of the generated slides — tone, structure, pacing, PauseAI voice — comes from your judgment while reading the extracted content.

## When invoked

The user will typically say something like:

- "Migrate this PDF as a new presentation: /path/to/file.pdf"
- "Nueva presentacion desde /Users/.../slides.pptx"
- "Crea una presentacion desde este PDF para la charla de UMA en abril"

Parse the source file path from the user's message. If the path is missing or ambiguous, ask for it via `AskUserQuestion` before doing anything.

## Step 1 — Collect inputs

Use `AskUserQuestion` to fill in anything the user hasn't already stated. Ask in one batch (multiple questions in a single tool call). Collect:

1. **Topic slug** (kebab-case, 1–3 words, e.g. `riesgos-ia`, `etica-ia`, `ia-farmacia`).
2. **Venue slug** (short, e.g. `uma`, `albor`, `ispln`).
3. **Date YYYY-MM** — default to the current month.
4. **Audience one-liner** (goes into CLAUDE.md).
5. **Duration** in minutes.
6. **Theme**: `dark` (default — matches most presentations) or `light`.
7. **Venue display name** (e.g. "Aula de Mayores +55") — optional.
8. **Venue logo path** (absolute path to a .png the user has somewhere, or empty).

Skip questions the user already answered. Do not ask about speaker — default to "Dani Lupión, miembro de PauseAI" unless the user has said otherwise.

## Step 2 — Derive + validate

- `DIRNAME = <topic>-<venue>-<YYYY>-<MM>`.
- `TARGET = presentations/$DIRNAME`. Abort if it exists.
- Validate source file: must exist, extension must be `.pdf`, `.pptx`, or `.odp` (case-insensitive).
- Get the port: `bash .claude/skills/new-presentation/scripts/next-port.sh` (outputs next free port ≥3030).

## Step 3 — Scaffold the workspace

Run `scaffold.sh` with all values. It takes 19 positional args — pass them in this order:

```
bash .claude/skills/new-presentation/scripts/scaffold.sh \
  "$DIRNAME" "$PORT" "$THEME" \
  "$TITLE" "$INFO" "$HEADLINE" \
  "$VENUE_LINE" "$SPEAKER" "$DATE_DISPLAY" \
  "$VENUE_NAME" "$VENUE_LOGO_FILENAME" \
  "$OVERVIEW" "$FORMAT" "$AUDIENCE" "$DURATION" \
  "$VENUE_FULL" "$TONE" "$NARRATIVE_ARC" \
  "$SOURCE_FILE"
```

Field guidance:

- **TITLE**: full prose title (e.g. "Riesgos de la IA — PauseAI").
- **INFO**: one-sentence summary for `<meta>`/slide notes.
- **HEADLINE**: the big orange title on the intro slide. HTML `<br/>` is allowed to break lines (e.g. "Riesgos de la<br/>Inteligencia Artificial"). Keep it to 2–3 words per line.
- **VENUE_LINE**: subtitle under the headline (e.g. "Aula de Mayores +55 · Universidad de Málaga").
- **SPEAKER**: default "Dani Lupión".
- **DATE_DISPLAY**: human-readable date (e.g. "Marzo 2026").
- **VENUE_LOGO_FILENAME**: if the user provided a logo path, copy it manually into `$TARGET/public/logos/` (with a short kebab-case name, e.g. `uma.png`) AFTER scaffold.sh returns, and pass the bare filename here. If no logo, pass an empty string — the right-side footer will still show the `VENUE_NAME` text alone. Footer text color is chosen from `$THEME` automatically (dark → white with drop-shadow, light → slate-700).
- **OVERVIEW / FORMAT / AUDIENCE / DURATION / VENUE_FULL / TONE / NARRATIVE_ARC**: CLAUDE.md body fields. Write 1–3 sentences each in Spanish.

If the user provided a venue logo file:

1. Run `scaffold.sh` with the logo filename (e.g. `uma.png`).
2. `cp "$USER_LOGO_PATH" presentations/$DIRNAME/public/logos/uma.png`.

## Step 4 — Extract content from source

Pick the right extractor by extension:

**PDF**:

```
bash .claude/skills/new-presentation/scripts/extract-pdf.sh \
  "$SOURCE_FILE" "presentations/$DIRNAME/_extracted"
```

Produces: `_extracted/text/page-NNN.txt`, `_extracted/images/img-NNN-*.{png,jpg,…}`, `_extracted/full.txt`.

**PPTX**:

```
bash .claude/skills/new-presentation/scripts/extract-pptx.sh \
  "$SOURCE_FILE" "presentations/$DIRNAME/_extracted"
```

Produces: `_extracted/text/slide-NNN.txt`, `_extracted/notes/slide-NNN.txt` (if present), `_extracted/images/*` (preserving original filenames like `image1.png`).

**ODP** (OpenDocument Presentation — LibreOffice Impress, Keynote "Export to ODP", etc.):

```
bash .claude/skills/new-presentation/scripts/extract-odp.sh \
  "$SOURCE_FILE" "presentations/$DIRNAME/_extracted"
```

Parses the ODP zip directly (`content.xml` + `Pictures/`) using Python stdlib — no LibreOffice required, so it works even when LibreOffice is open in the GUI. Output shape matches the PPTX path: `_extracted/text/slide-NNN.txt`, `_extracted/notes/slide-NNN.txt` (if present), `_extracted/images/*`.

`_extracted/` is gitignored at the repo root — it's scratch space. You clean it up at the end.

## Step 5 — Generate the slide files

This is the creative step. Read everything in `_extracted/` and produce clean Slidev slides in PauseAI voice.

**Process:**

1. Read `_extracted/full.txt` (PDF) or concatenate `_extracted/text/slide-*.txt` (PPTX) to understand the overall shape of the source.
2. Decide logical sections — 5–9 is typical (see `presentations/riesgos-ia-uma-2026-03/slides.md` for a reference count). Don't slavishly follow a 1-page-to-1-slide mapping; group related pages into sections.
3. For each section, create `presentations/$DIRNAME/slides/NN-<kebab-title>.md` using the Slidev patterns below.
4. Move the images you want to reference from `_extracted/images/` into `presentations/$DIRNAME/public/screenshots/`, renaming them to descriptive kebab-case (e.g. `lucia-velasco-tweet.png`). Images you don't use: move the whole batch to `public/screenshots/unsorted/` so the user can review — do NOT delete them.
5. After all section files exist, append `src:` imports to `presentations/$DIRNAME/slides.md` in order. Each import block is a standalone YAML frontmatter separator:

```
---
src: ./slides/01-<name>.md
---

---
src: ./slides/02-<name>.md
---
```

### Slide patterns — use these

**Section divider** (use at the start of each major block):

```md
---
layout: section
---

# Título de la sección

<div class="text-xl opacity-70 mt-2">Subtítulo opcional</div>

---
```

**Centered title slide**:

```md
---
layout: center
class: text-center
---

# Idea grande

<div class="mt-6">Apoyo visual / dato ancla</div>

---
```

**Default layout with image**:

```md
---
layout: default
---

# Título

<img src="/screenshots/nombre-descriptivo.png" class="mx-auto mt-4 rounded-xl" />

<!--
- Nota para el ponente: contexto, datos, cómo lo introduces.
- Nunca pongas notas en la pantalla, siempre en bloques de comentario.
-->

---
```

**Embedded video** (the components are provided by `slidev-addon-pauseai`, already wired via the `addons:` frontmatter — no per-presentation component files needed):

```md
<YouTubeAutoplay videoId="XXXXXXXXXXX" :start="10" :end="60" className="mx-auto rounded-xl" />
<VideoAutoplay src="/videos/nombre.mp4" className="mx-auto rounded-xl" />
```

If you need a one-off component specific to this presentation, create `components/MyComponent.vue` in the presentation dir — Slidev merges per-presentation `components/` with the addon's components, and the addon provides the shared ones.

**Speaker notes**: every non-trivial slide should have an HTML-comment block with 2–5 bullets for the ponente. The source PPTX's `_extracted/notes/slide-NNN.txt` is gold — use it directly when available.

### PauseAI voice rules (from the root CLAUDE.md)

- Español siempre.
- Factual con ejemplos — cada afirmación con un dato o caso real.
- Lenguaje simple, sin jerga innecesaria.
- Audaz, directo, sin suavizar. No partisan framing.
- **Cada dato necesita fuente**. Si el PDF/PPTX no cita, añade `<!-- TODO source: describir la afirmación que necesita verificación -->` en la slide. Listarás estos TODOs en el informe final.

### Handling PPTX notes

PPTX speaker notes are frequently the real content — the bullet points on the slide are just aide-memoire. When the notes file is non-empty and substantive, **the notes are often closer to the final slide content** than what's on the visual slide. Use your judgment.

## Step 6 — Clean up

```
rm -rf "presentations/$DIRNAME/_extracted"
```

Do NOT touch the original source file — leave it wherever the user put it.

## Step 7 — Report to the user

Print a concise summary:

1. **Path**: `presentations/$DIRNAME/`.
2. **Port**: `$PORT`.
3. **Next step**: `cd presentations/$DIRNAME && pnpm install && pnpm dev`.
4. **Pending verifications**: every `TODO source:` marker you left, with slide file + line. If there are >10, summarise by category instead.
5. **Unsorted images**: count + path (`public/screenshots/unsorted/`) if any remain.
6. **Known gaps**: anything you couldn't migrate (e.g. embedded fonts, complex animations, charts that didn't export as images).

## Error handling

- **Source file missing**: abort before creating anything. Tell the user the exact path you tried.
- **Target dir exists**: abort (scaffold.sh also refuses). Ask the user to pick a different slug or delete the existing dir.
- **Unsupported extension**: only `.pdf`, `.pptx`, and `.odp` are supported. Refuse `.key` (Keynote native), `.ppt` (legacy binary), Google Slides URLs, etc. with a friendly message suggesting the user export to one of the supported formats first.
- **Extraction script returns non-zero**: report the error, clean up any partial `_extracted/` dir, but leave the scaffolded workspace (the user may want to populate it manually).
- **No images extracted**: fine — just note it. Generate slides without images.

## What this skill does NOT do

- Does not run `pnpm install` or `pnpm dev` — the user runs those (respects their pnpm workspace state).
- Does not commit to git — the user reviews and commits manually.
- Does not verify URLs or fact-check claims — you leave `TODO source:` markers for human verification.
- Does not generate a QR code for `pauseai.es` — the user adds it manually if needed.
- Does not modify any existing presentation.
