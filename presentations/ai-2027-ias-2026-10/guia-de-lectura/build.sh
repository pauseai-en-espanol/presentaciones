#!/bin/sh
# Genera public/guia-de-lectura.pdf a partir de guia-de-lectura.html con Chrome
# en modo headless. En otra máquina: CHROME=/ruta/a/chrome pnpm guia
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf=public/guia-de-lectura.pdf "file://$PWD/guia-de-lectura/guia-de-lectura.html" 2>/dev/null
