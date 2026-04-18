#!/usr/bin/env bash
# Extract text (per slide, in display order), speaker notes, and media images from a PPTX.
# Usage: extract-pptx.sh <input.pptx> <out_dir>
# Output:
#   <out_dir>/text/slide-NNN.txt    (one file per slide, text in document order)
#   <out_dir>/notes/slide-NNN.txt   (speaker notes, if present)
#   <out_dir>/images/*              (every media asset, preserving original filename)
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "usage: $0 <input.pptx> <out_dir>" >&2
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

# Copy media as-is (preserves image1.png, image2.jpg, etc.)
if [[ -d "$raw/ppt/media" ]]; then
  cp -R "$raw/ppt/media/." "$out/images/" 2>/dev/null || true
fi

python3 - "$raw" "$out" <<'PY'
import os
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

raw = Path(sys.argv[1])
out = Path(sys.argv[2])

A_NS = "http://schemas.openxmlformats.org/drawingml/2006/main"
P_NS = "http://schemas.openxmlformats.org/presentationml/2006/main"
R_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"

def extract_text(xml_path):
    if not xml_path.exists():
        return ""
    tree = ET.parse(xml_path)
    parts = []
    for para in tree.iter(f"{{{A_NS}}}p"):
        line = []
        for node in para.iter():
            tag = node.tag.split("}")[-1]
            if tag == "t" and node.text:
                line.append(node.text)
            elif tag == "br":
                line.append("\n")
        text = "".join(line).strip()
        if text:
            parts.append(text)
    return "\n".join(parts) + ("\n" if parts else "")

# --- Map slideN.xml to display order via presentation.xml + rels ---
pres_xml = raw / "ppt" / "presentation.xml"
pres_rels = raw / "ppt" / "_rels" / "presentation.xml.rels"

slide_order = []
if pres_xml.exists() and pres_rels.exists():
    rels_tree = ET.parse(pres_rels)
    rid_to_target = {
        r.get("Id"): r.get("Target")
        for r in rels_tree.iter()
        if r.tag.endswith("Relationship")
    }
    pres_tree = ET.parse(pres_xml)
    for sldId in pres_tree.iter(f"{{{P_NS}}}sldId"):
        rid = sldId.get(f"{{{R_NS}}}id")
        target = rid_to_target.get(rid, "")
        if target.startswith("slides/"):
            slide_order.append(Path("ppt") / target)

if not slide_order:
    # Fallback: natural sort slide*.xml
    slides_dir = raw / "ppt" / "slides"
    if slides_dir.exists():
        slide_order = sorted(
            slides_dir.glob("slide*.xml"),
            key=lambda p: int(re.search(r"(\d+)", p.stem).group(1)),
        )
        slide_order = [p.relative_to(raw) for p in slide_order]

for display_idx, slide_rel in enumerate(slide_order, start=1):
    slide_path = raw / slide_rel
    padded = f"{display_idx:03d}"

    slide_text = extract_text(slide_path)
    (out / "text" / f"slide-{padded}.txt").write_text(slide_text, encoding="utf-8")

    # Notes: via slide's _rels/slideN.xml.rels → notesSlide target
    notes_text = ""
    slide_rels = slide_path.parent / "_rels" / (slide_path.name + ".rels")
    if slide_rels.exists():
        rels_tree = ET.parse(slide_rels)
        for r in rels_tree.iter():
            if not r.tag.endswith("Relationship"):
                continue
            target = r.get("Target", "")
            if "notesSlide" in target:
                notes_path = (slide_path.parent / target).resolve()
                try:
                    notes_text = extract_text(notes_path)
                except Exception:
                    notes_text = ""
                break
    if notes_text.strip():
        (out / "notes" / f"slide-{padded}.txt").write_text(notes_text, encoding="utf-8")

print(f"extracted {len(slide_order)} slides into {out}/", file=sys.stderr)
PY
