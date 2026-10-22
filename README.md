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

## Portadas para Luma, redes y YouTube

`pnpm card <slug>` genera una portada cuadrada de 1080×1080 en `packages/cards/out/` (ignorado por git). Toma el título y el ponente del `presentation.json`; el resto, de las opciones. Usa el Chrome instalado en modo headless, sin dependencias.

```bash
pnpm card ia-fuera-sandbox-euronova-2026-10 --subtitulo "La IA de frontera se sale del sandbox"
pnpm card ia-fuera-sandbox-euronova-2026-10 --foto ~/fotos/dani.jpg
pnpm card --titulo "Otra charla | en dos líneas" --ponente "Nombre" --afiliacion "PauseAI España"
```

Opciones: `--lang`, `--titulo`, `--subtitulo`, `--ponente`, `--afiliacion` (por defecto «PauseAI España»), `--serie` (por defecto «Charlas PauseAI», como la lista de YouTube), `--foto`, `--out`. El título salta de línea tras los dos puntos o donde se ponga `|`. Si Chrome no está en la ruta habitual de macOS, indícala con la variable `CHROME`.

El fondo de la portada sale del `presentation.json` de la charla (`"fondo"`, ver [Fondos](#fondos)); `--fondo` lo cambia para una portada.

Con `--formato youtube` sale la miniatura del vídeo (1280×720): dos o tres palabras grandes (`--texto`, con `|` entre líneas; la última va en naranja), una línea pequeña debajo (`--subtitulo`) y la persona recortada a la derecha. Una foto JPG o HEIC se recorta sola con Vision de macOS; un PNG se usa tal cual. Si el PNG pasa de 2 MB (el límite de YouTube), deja también un JPG.

```bash
pnpm card ia-fuera-sandbox-charlas-pauseai-2026-10 --formato youtube --texto "Ya ha|pasado" --subtitulo "Verano 2026" --foto ~/fotos/dani.jpg
```

## Grabaciones

Cuando una charla está grabada, sus enlaces van en su `presentation.json`, en el idioma de la grabación:

```json
{
  "languages": {
    "es": {
      "title": "…",
      "grabacion": {
        "youtube": "https://youtu.be/…",
        "spotify": "https://open.spotify.com/episode/…",
        "ivoox": "https://www.ivoox.com/…"
      }
    }
  }
}
```

Solo salen los que haya, y se pueden ir añadiendo de uno en uno. La landing los pone en la tarjeta de la charla y la presentación, en la portada, si lleva el componente `<Grabacion />` del addon (`packages/slidev-addon-pauseai`), que lee ese mismo `presentation.json`. Sin grabación no sale nada, así que se puede poner en la portada antes de tenerla. Cambiar los enlaces cambia el sitio: lleva changeset de `@pauseai-es/landing`.

## Fondos

La portada de Luma, la miniatura de YouTube, el marco del vídeo, la cabecera y el cierre llevan el mismo fondo, que cada charla elige en su `presentation.json`:

```json
{ "fondo": "enjambre" }
```

Sin `fondo`, va `neutro`: el azul de la marca con un brillo naranja suave. `enjambre` es el de las charlas del verano de 2026 (un enjambre de agentes). El color, las fuentes, el logo y la composición no cambian: son la marca y lo que hace reconocible la serie. Los fondos están en `packages/cards/fondos.js`; uno nuevo es una función más ahí, que pinta en un `<canvas>` y deja el contexto como estaba.

## Vídeos de las charlas

`pnpm video` monta la grabación de una charla para YouTube con el marco de las Charlas PauseAI: las slides a la izquierda, la cámara a la derecha con el nombre y la sección en la que va la charla. Empieza con una cabecera de 5 s (logo, «Charlas PauseAI», título, subtítulo, ponente y fecha) que funde con la charla, y acaba con un cierre de 20 s («Gracias», cómo unirse a PauseAI España y el QR y el enlace de la charla) que deja libre la mitad derecha para los elementos de pantalla final de YouTube (lista, vídeo siguiente, suscribirse), que se colocan en YouTube Studio. Saca también los subtítulos (.srt, para subirlos aparte: no se queman en el vídeo) y los capítulos para la descripción. Necesita ffmpeg y whisper-cpp (`brew install ffmpeg whisper-cpp`), el modelo `ggml-large-v3-turbo.bin` en `~/.cache/whisper/` (`preparar` dice cómo bajarlo), Chrome e internet (las fuentes salen de Google Fonts).

Cada charla lleva un `video.json` junto a su `presentation.json`, de donde salen el título, el ponente y la fecha:

- `grabacion`: los vídeos de la pantalla y de la cámara (por ejemplo, los dos ficheros de OBS) y qué pista de audio usar. No están en git: hay que conservarlos donde diga esta ruta.
- `camara`: el recorte de la cámara (`x`, `y`, `ancho`, `alto`, en proporción 352×500) y su `desfase` en segundos respecto a la pantalla, que mide `preparar`.
- `tapar`: rectángulos de la pantalla que se tapan con el fondo de las slides (el punto verde de la cámara de macOS, por ejemplo).
- `subtitulo`: la línea bajo el título en la cabecera.
- `secciones`: dónde empieza cada parte (`desde`, tiempo de la grabación) y su `titulo`. Salen bajo el nombre y son los capítulos de YouTube.
- `cortes`: lo que se quita (`desde`, `hasta` o `"fin"`, y un `motivo`). Se usan tal cual: el editor ya coloca cada borde en el silencio más cercano.
- `propuestas`: cortes sugeridos, que el editor enseña subrayados y no se quitan hasta aceptarlos.
- `notas`: avisos para quien edita, que el editor marca en el texto.
- `correcciones`: palabras que whisper escribe mal y cómo van en los subtítulos («POSE AI»: «PauseAI»). Pueden ser de varias palabras.
- `vocabulario`: nombres propios que se le dan a whisper para que los escriba bien.
- `siguiente`: el título sobre el hueco del vídeo o la lista que se enlaza en la pantalla final (por defecto «Más Charlas PauseAI»). El enlace solo puede llevar a un vídeo o una lista de YouTube.
- Opcionales: `"cabecera": false` o `"cierre": false` para quitarlos; `serie` (por defecto «Charlas PauseAI»); en el cierre, `qr` (por defecto `public/qr-presentacion.png` de la charla) y `enlace` (`pauseai.es/presentaciones/<slug>`) para la charla, e `inscripcion` (`pauseai.es`, con el QR de la marca) y `qrInscripcion` para unirse.

Los tiempos van como `m:ss.ss`. Lo generado queda en `packages/video/out/<slug>/` (ignorado por git) y se puede rehacer con `preparar`.

```bash
pnpm video preparar <slug>              # audio, transcripción palabra a palabra, pausas y desfase de la cámara
pnpm video editor <slug>                # los cortes, sobre el texto (se guardan en video.json)
pnpm video render <slug> --borrador     # 720p para revisar (se ve peor: es solo para el montaje)
pnpm video render <slug> --desde 4:30 --hasta 6:00    # solo un trozo, sin cabecera ni cierre
pnpm video render <slug>                # el definitivo, en 1440p (YouTube da mejor calidad a partir de 1440p)
pnpm video subtitulos <slug> [--borrador]    # rehace los subtítulos tras cambiar `correcciones`
pnpm video audio <slug>                 # MP3 para un podcast (iVoox, Spotify sin vídeo)
```

`audio` saca del vídeo final un MP3 sin la cabecera ni el cierre (que son mudos), a -16 LUFS, que es lo habitual en podcasts (el vídeo va a -14, como YouTube), con título, ponente y la portada de Luma (`pnpm card <slug>`) como carátula.

`preparar` reutiliza la transcripción si ya está (`--transcribir` la repite) y mide el desfase de la cámara la primera vez (`--sincronizar` lo repite). Los subtítulos se transcriben del vídeo ya montado, así que lo cortado no aparece; si el vídeo no ha cambiado, `subtitulos` reutiliza esa transcripción y tarda un segundo.

En el editor, la transcripción está al lado de la grabación. Un clic en una palabra la marca y lleva ahí; «Empieza aquí» y «Acaba aquí» cortan lo que hay antes o después de ella. Para cortar un trozo, se selecciona el texto (clic en la primera palabra y mayúsculas+clic en la última) y se pulsa <kbd>X</kbd>; cada corte tiene ‹ › para mover sus bordes 0,1 s. Un clic en una pausa la deja en 0,3 s y otro la devuelve. Con «Saltar los cortes», el reproductor se los salta y se oye cómo quedará el vídeo. `--sin-abrir` arranca el editor sin abrir el navegador.

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
