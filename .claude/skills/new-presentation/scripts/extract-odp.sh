#!/usr/bin/env bash
# Extract text (per slide, in document order), speaker notes, and media images from an ODP.
# Parses the ODP zip directly (content.xml + Pictures/) — no LibreOffice required,
# which avoids conflicts when LibreOffice is open in the GUI.
# Usage: extract-odp.sh <input.odp> <out_dir>
# Output:
#   <out_dir>/text/slide-NNN.txt    (one file per slide, text in document order)
#   <out_dir>/notes/slide-NNN.txt   (speaker notes, if present)
#   <out_dir>/images/*              (every picture, preserving original filename)
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "usage: $0 <input.odp> <out_dir>" >&2
  exit 2
fi

src="$1"
out="$2"

if [[ ! -f "$src" ]]; then
  echo "error: source not found: $src" >&2
  exit 1
fi

for bin in unzip python3; do
  if ! command -v "$bin" >/dev/null 2>&1; then
    echo "error: $bin not installed" >&2
    exit 1
  fi
done

mkdir -p "$out/text" "$out/notes" "$out/images"

raw="$(mktemp -d)"
trap 'rm -rf "$raw"' EXIT

unzip -o -q "$src" -d "$raw"

# Copy Pictures as-is (preserves original filenames)
if [[ -d "$raw/Pictures" ]]; then
  cp -R "$raw/Pictures/." "$out/images/" 2>/dev/null || true
fi

python3 - "$raw" "$out" <<'PY'
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

raw = Path(sys.argv[1])
out = Path(sys.argv[2])

NS = {
    "office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
}

content_xml = raw / "content.xml"
if not content_xml.exists():
    sys.exit(f"error: {content_xml} not found — not a valid ODP?")

tree = ET.parse(content_xml)
root = tree.getroot()

def text_of(element):
    """Extract text from all <text:p> children, respecting <text:line-break>."""
    parts = []
    for para in element.iter(f"{{{NS['text']}}}p"):
        line = []
        for node in para.iter():
            tag = node.tag.split("}")[-1]
            if tag in ("span", "p", "h") and node.text:
                line.append(node.text)
            elif tag == "t" and node.text:
                line.append(node.text)
            elif tag == "line-break":
                line.append("\n")
            if node.tail and node.tail.strip():
                line.append(node.tail)
        text = "".join(line).strip()
        if text:
            parts.append(text)
    return "\n".join(parts) + ("\n" if parts else "")

pages = list(root.iter(f"{{{NS['draw']}}}page"))
for idx, page in enumerate(pages, start=1):
    padded = f"{idx:03d}"
    notes_elements = page.findall(f".//{{{NS['presentation']}}}notes")
    notes_text = "".join(text_of(n) for n in notes_elements)

    # Slide text: everything EXCEPT notes. Temporarily detach notes to extract cleanly.
    parents = []
    for n in notes_elements:
        for parent in page.iter():
            for child in list(parent):
                if child is n:
                    parents.append((parent, n, list(parent).index(n)))
                    parent.remove(n)
                    break
    slide_text = text_of(page)
    # Restore notes for correctness (not strictly necessary since we don't use page again)
    for parent, n, i in parents:
        parent.insert(i, n)

    (out / "text" / f"slide-{padded}.txt").write_text(slide_text, encoding="utf-8")
    if notes_text.strip():
        (out / "notes" / f"slide-{padded}.txt").write_text(notes_text, encoding="utf-8")

print(f"extracted {len(pages)} slides into {out}/", file=sys.stderr)
PY
