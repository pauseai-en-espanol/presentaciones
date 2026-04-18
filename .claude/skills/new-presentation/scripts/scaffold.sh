#!/usr/bin/env bash
# Scaffold a new Slidev presentation workspace from templates.
# Usage:
#   scaffold.sh <dirname> <port> <theme> <title> <info> <headline> <venue_line> <speaker> <date_display> <venue_name> <venue_logo_filename> <overview> <format> <audience> <duration> <venue_full> <tone> <narrative_arc> <source_file>
#
# Long positional-arg list is deliberate: this script is called by Claude from the
# skill, not by humans. Claude already has all the values from the user conversation.
# venue_logo_filename may be empty — if empty, produces the "solo" footer (no right side).
set -euo pipefail

if [[ $# -ne 19 ]]; then
  echo "usage: $0 <dirname> <port> <theme> <title> <info> <headline> <venue_line> <speaker> <date_display> <venue_name> <venue_logo_filename> <overview> <format> <audience> <duration> <venue_full> <tone> <narrative_arc> <source_file>" >&2
  exit 2
fi

DIRNAME="$1"; PORT="$2"; THEME="$3"; TITLE="$4"; INFO="$5"; HEADLINE="$6"
VENUE_LINE="$7"; SPEAKER="$8"; DATE_DISPLAY="$9"; VENUE_NAME="${10}"
VENUE_LOGO="${11}"; OVERVIEW="${12}"; FORMAT="${13}"; AUDIENCE="${14}"
DURATION="${15}"; VENUE_FULL="${16}"; TONE="${17}"; NARRATIVE_ARC="${18}"
SOURCE_FILE="${19}"

SKILL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(cd "$SKILL_DIR/../../.." && pwd)"
TARGET="$REPO_ROOT/presentations/$DIRNAME"
TEMPLATES="$SKILL_DIR/templates"
ASSETS="$SKILL_DIR/assets"

if [[ -e "$TARGET" ]]; then
  echo "error: $TARGET already exists — pick a different dirname or remove it first" >&2
  exit 1
fi

if [[ "$THEME" != "dark" && "$THEME" != "light" ]]; then
  echo "error: theme must be 'dark' or 'light' (got '$THEME')" >&2
  exit 1
fi

THEME_DESCRIPTION="Slidev default + PauseAI branding"
if [[ "$THEME" == "dark" ]]; then
  THEME_DESCRIPTION="fondo navy #0f172a, acento orange #ff9416"
else
  THEME_DESCRIPTION="fondo blanco, acento orange #ff6600"
fi

COLOR_SCHEMA="$THEME"
IMPORT_DATE="$(date +%Y-%m-%d)"

# Build VENUE_LOGO_LINE and FOOTER_RIGHT_LINE for CLAUDE.md
if [[ -n "$VENUE_LOGO" ]]; then
  VENUE_LOGO_LINE=", \`$VENUE_LOGO\` (logo institucion)"
  FOOTER_RIGHT_LINE=", $VENUE_NAME + logo institucion (derecha)"
else
  VENUE_LOGO_LINE=""
  FOOTER_RIGHT_LINE=""
fi

# Substitute {{KEY}} placeholders in a template file using Python (safe for any chars).
# Usage: substitute <infile> <outfile> <KEY1> <VAL1> [<KEY2> <VAL2> ...]
substitute() {
  local infile="$1" outfile="$2"
  shift 2
  mkdir -p "$(dirname "$outfile")"
  python3 - "$infile" "$outfile" "$@" <<'PY'
import sys
infile, outfile, *pairs = sys.argv[1:]
if len(pairs) % 2 != 0:
    sys.exit("substitute: odd number of key/val args")
with open(infile, encoding="utf-8") as f:
    content = f.read()
for i in range(0, len(pairs), 2):
    k, v = pairs[i], pairs[i + 1]
    content = content.replace("{{" + k + "}}", v)
with open(outfile, "w", encoding="utf-8") as f:
    f.write(content)
PY
}

# --- Create dir structure ---
# Shared components live in packages/slidev-addon-pauseai (loaded via `addons:` in
# slides.md), so no per-presentation components/ dir is needed by default.
mkdir -p "$TARGET/slides" "$TARGET/public/logos" \
         "$TARGET/public/screenshots" "$TARGET/public/videos" "$TARGET/public/fotos"

# --- Copy shared assets ---
cp "$ASSETS/logos/logo.png" "$TARGET/public/logos/"
cp "$ASSETS/logos/logo-completo.png" "$TARGET/public/logos/"

# --- package.json ---
substitute "$TEMPLATES/package.json.tmpl" "$TARGET/package.json" \
  NAME "$DIRNAME" \
  DESCRIPTION "$TITLE" \
  PORT "$PORT"

# --- slides.md ---
substitute "$TEMPLATES/slides.md.tmpl" "$TARGET/slides.md" \
  TITLE "$TITLE" \
  INFO "$INFO" \
  COLOR_SCHEMA "$COLOR_SCHEMA" \
  HEADLINE "$HEADLINE" \
  VENUE_LINE "$VENUE_LINE" \
  SPEAKER "$SPEAKER" \
  DATE_DISPLAY "$DATE_DISPLAY"

# --- style.css ---
cp "$TEMPLATES/style.$THEME.css" "$TARGET/style.css"

# --- global-bottom.vue ---
if [[ -n "$VENUE_LOGO" ]]; then
  substitute "$TEMPLATES/global-bottom.full.vue.tmpl" "$TARGET/global-bottom.vue" \
    VENUE_NAME "$VENUE_NAME" \
    VENUE_LOGO "$VENUE_LOGO"
else
  cp "$TEMPLATES/global-bottom.solo.vue.tmpl" "$TARGET/global-bottom.vue"
fi

# --- vite.config.js ---
cp "$TEMPLATES/vite.config.js" "$TARGET/vite.config.js"

# --- CLAUDE.md ---
substitute "$TEMPLATES/CLAUDE.md.tmpl" "$TARGET/CLAUDE.md" \
  TITLE "$TITLE" \
  OVERVIEW "$OVERVIEW" \
  SPEAKER "$SPEAKER" \
  FORMAT "$FORMAT" \
  AUDIENCE "$AUDIENCE" \
  DURATION "$DURATION" \
  DATE_DISPLAY "$DATE_DISPLAY" \
  VENUE_FULL "$VENUE_FULL" \
  TONE "$TONE" \
  VENUE_LOGO_LINE "$VENUE_LOGO_LINE" \
  FOOTER_RIGHT_LINE "$FOOTER_RIGHT_LINE" \
  COLOR_SCHEMA "$COLOR_SCHEMA" \
  THEME_DESCRIPTION "$THEME_DESCRIPTION" \
  NARRATIVE_ARC "$NARRATIVE_ARC" \
  SOURCE_FILE "$SOURCE_FILE" \
  IMPORT_DATE "$IMPORT_DATE"

echo "scaffolded $TARGET (port $PORT, theme $THEME)" >&2
