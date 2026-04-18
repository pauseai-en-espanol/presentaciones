#!/usr/bin/env bash
# Print the next free port for a new Slidev presentation.
# Scans presentations/*/package.json for `--port NNNN` lines, returns max+1 (floor 3030).
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
PRES_DIR="$REPO_ROOT/presentations"

if [[ ! -d "$PRES_DIR" ]]; then
  echo 3030
  exit 0
fi

max_port=3029
while IFS= read -r port; do
  if (( port > max_port )); then
    max_port=$port
  fi
done < <(grep -hoE -- '--port [0-9]+' "$PRES_DIR"/*/package.json 2>/dev/null | awk '{print $2}')

echo $(( max_port + 1 ))
