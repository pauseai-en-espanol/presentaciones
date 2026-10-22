#!/usr/bin/env bash
# Every change to what the site's image contains must come with a changeset releasing it, or CD won't rebuild the
# image. The repo has one deployable, the presentations site (charts/static): one image (Dockerfile) with every
# presentation and the landing index, versioned as @pauseai-es/landing (the other packages are ignored by changesets,
# .changeset/config.json). Its inputs are listed in IMAGE_INPUTS below: keep them in step with the Dockerfile's COPY
# lines. A presentation's CLAUDE.md and README.md are notes for authors, not part of the build, so they don't count.
# Nor do the tools for the talks' covers and videos (packages/cards, packages/video) and each talk's video.json: the
# Dockerfile copies them with the rest of packages/, but nothing the site serves comes out of them.
#
# It changed if a commit since the merge-base with the base touched one of those paths (uncommitted work doesn't count,
# since it isn't being pushed). It is released if the changesets added since the base bump it (changeset status).
#
# Usage: scripts/check-deployables-released.sh <base-ref>              fail if the changed deployable isn't released
#        scripts/check-deployables-released.sh --affected <base-ref>   print the deployable if it changed
set -euo pipefail
mode=check
if [ "${1:-}" = --affected ]; then
  mode=affected
  shift
fi
base="${1:?usage: $0 [--affected] <base-ref>}"
deployable=@pauseai-es/landing

IMAGE_INPUTS=(
  Dockerfile package.json pnpm-lock.yaml pnpm-workspace.yaml
  packages presentations
  ':(exclude,glob)presentations/*/CLAUDE.md' ':(exclude,glob)presentations/*/README.md'
  ':(exclude)packages/cards' ':(exclude)packages/video' ':(exclude,glob)presentations/*/video.json'
)

# After a force push the previous tip is on no branch, so the clone lacks it; GitHub still serves it by SHA.
if [[ "$base" =~ ^[0-9a-f]{40}$ ]] && ! git rev-parse --verify --quiet "$base^{commit}" > /dev/null; then
  git fetch --quiet --no-tags origin "$base" || true
fi
if ! git rev-parse --verify --quiet "$base^{commit}" > /dev/null; then
  echo "Base $base isn't in this clone (a new branch or a force push?), so releases can't be checked" >&2
  exit 1
fi

changed=$(git diff --name-only "$(git merge-base "$base" HEAD)" HEAD -- "${IMAGE_INPUTS[@]}")

if [ "$mode" = affected ]; then
  [ -z "$changed" ] || echo "$deployable"
  exit 0
fi
if [ -z "$changed" ]; then
  echo "Nothing the site's image contains changed"
  exit 0
fi

plan=$(mktemp)
errors=$(mktemp)
trap 'rm -f "$plan" "$errors"' EXIT
if ! pnpm exec changeset status --since="$base" --output="$plan" > /dev/null 2> "$errors"; then
  # Typically packages changed with no changeset at all: say so, and check against an empty plan.
  cat "$errors" >&2
  echo '{"releases": []}' > "$plan"
fi
released=$(PLAN="$plan" NAME="$deployable" node -p "JSON.parse(require('node:fs').readFileSync(process.env.PLAN,
  'utf8')).releases.some((r) => r.name === process.env.NAME && r.type !== 'none')")

if [ "$released" != true ]; then
  echo "The site's image changed but no changeset releases $deployable, so it wouldn't be rebuilt:" >&2
  head -20 <<< "$changed" | sed 's/^/  /' >&2
  echo "Run 'pnpm release:note' and include $deployable." >&2
  exit 1
fi
echo "The changed site is in the release plan"
