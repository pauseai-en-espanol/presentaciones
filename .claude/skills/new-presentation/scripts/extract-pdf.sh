#!/usr/bin/env bash
# Extract text (per page) and images from a PDF.
# Usage: extract-pdf.sh <input.pdf> <out_dir>
# Output:
#   <out_dir>/text/page-NNN.txt   (one file per page, layout-preserved text)
#   <out_dir>/images/img-NNN-*.*  (every embedded image, prefixed with source page)
#   <out_dir>/full.txt            (concatenated text — quick scan)
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "usage: $0 <input.pdf> <out_dir>" >&2
  exit 2
fi

src="$1"
out="$2"

if [[ ! -f "$src" ]]; then
  echo "error: source not found: $src" >&2
  exit 1
fi

for bin in pdftotext pdfimages pdfinfo; do
  if ! command -v "$bin" >/dev/null 2>&1; then
    echo "error: $bin not installed (brew install poppler)" >&2
    exit 1
  fi
done

mkdir -p "$out/text" "$out/images"

pdftotext -layout "$src" "$out/full.txt"

pages=$(pdfinfo "$src" | awk '/^Pages:/ {print $2}')
if [[ -z "$pages" ]]; then
  echo "error: could not read page count from $src" >&2
  exit 1
fi

for ((i = 1; i <= pages; i++)); do
  padded=$(printf '%03d' "$i")
  pdftotext -layout -f "$i" -l "$i" "$src" "$out/text/page-$padded.txt"
done

pdfimages -all -p "$src" "$out/images/img"

echo "extracted $pages pages into $out/" >&2
