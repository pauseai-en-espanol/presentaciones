#!/usr/bin/env bash
# Renovate PRs don't write changesets. Add a patch changeset for the site (@pauseai-es/landing, the only package
# changesets versions here) when its image changes (scripts/check-deployables-released.sh: any dependency bump in a
# presentation, a shared package or the root changes it), or an empty one when it doesn't (same approach as
# aiontheballot).
# Usage: scripts/renovate-changeset.sh <base-ref>
set -euo pipefail
base="${1:?usage: $0 <base-ref>}"
if pnpm release:check > /dev/null 2>&1 && scripts/check-deployables-released.sh "$base" > /dev/null 2>&1; then
  echo "No changeset needed: one exists and releases the changed site, or the site didn't change"
  exit 0
fi
names=$(scripts/check-deployables-released.sh --affected "$base")
if [ -z "$names" ]; then
  pnpm changeset add --empty
  exit 0
fi
file=".changeset/renovate-$(git rev-parse --short HEAD).md"
{
  echo '---'
  # Single quotes, as in the rest of the repo's changesets: this file reaches main unchecked by the PR's own run (it is
  # amended in after the checks).
  while read -r name; do
    echo "'$name': patch"
  done <<< "$names"
  echo '---'
  echo
  echo 'Dependencies bump'
} > "$file"
cat "$file"
