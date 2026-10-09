#!/bin/sh
# Genera salas/sala.docx a partir de salas/sala.md (el documento de las salas) para subirlo a Google Drive
# («Abrir con Documentos de Google»). Las tablas y los enlaces se conservan.
set -e
cd "$(dirname "$0")"
pandoc sala.md --from gfm --to docx --output sala.docx
