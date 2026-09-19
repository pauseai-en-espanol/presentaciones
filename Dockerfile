# Builds ALL presentations + landing index into a single nginx image.
#
# Auto-discovers every directory under presentations/ that has a package.json.
# Each presentation is served under /<base-prefix>/<presentation-name>/.
# The landing index (packages/landing) is served at /<base-prefix>/.
#
# Usage:
#   docker build --platform linux/amd64 \
#     -t harbor.danilupion.com/pauseai-es/presentaciones:latest .
#
#   All presentations are served under /presentaciones/<name>/ by default,
#   with the landing at /presentaciones/. Override the base prefix if needed:
#     --build-arg BASE_PREFIX=/other-prefix/

ARG NODE_IMAGE=node:26.7.0-alpine@sha256:aadf416b2cdce311a8811ba3f0608a61b77dbf997500e2eafe781b51f6a0b019
# Pin pnpm here to match the root package.json `packageManager` field.
# Node 26 dropped the bundled corepack shim, so install pnpm directly via npm.
ARG PNPM_VERSION=11.22.0

# ------ build ------
FROM ${NODE_IMAGE} AS build

ARG PNPM_VERSION
RUN npm install -g pnpm@${PNPM_VERSION}

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY presentations ./presentations
RUN PACKAGED=true pnpm install --frozen-lockfile

ARG BASE_PREFIX=/presentaciones/

# Build each presentation with its absolute base path so internal asset URLs resolve correctly.
# Bilingual presentations expose `slides-en.md` alongside `slides.md`; the EN build lands in dist/en/.
RUN for dir in presentations/*/; do \
      name=$(basename "$dir"); \
      if [ ! -f "$dir/package.json" ]; then continue; fi; \
      echo "=== Building $name (es) ===" && \
      (cd "$dir" && pnpm build --base "${BASE_PREFIX}${name}/") || exit 1; \
      if [ -f "$dir/slides-en.md" ]; then \
        echo "=== Building $name (en) ===" && \
        (cd "$dir" && pnpm build:en --base "${BASE_PREFIX}${name}/en/") || exit 1; \
      fi; \
    done

# Build the landing index (reads each presentation.json, emits static HTML/CSS + logos)
RUN echo "=== Building landing ===" && \
    (cd packages/landing && node build.js)

# Collect all outputs mirroring BASE_PREFIX so container filesystem matches external URLs.
# Order matters: presentations first (into subdirs), then landing files at the prefix root.
RUN mkdir -p "/output${BASE_PREFIX}" && \
    for dir in presentations/*/; do \
      name=$(basename "$dir"); \
      if [ -d "$dir/dist" ]; then \
        cp -r "$dir/dist" "/output${BASE_PREFIX}$name"; \
      fi; \
    done && \
    cp -r packages/landing/dist/. "/output${BASE_PREFIX}" && \
    # Ensure every file is world-readable. Some assets get copied in with 600
    # permissions from the source; the nginx worker (non-root) cannot read them
    # and returns 404 even though the file is in the image. This avoids that.
    chmod -R a+rX /output

# ------ serve ------
FROM nginx:alpine@sha256:62ff2089abf5a9ed33bd232895bef5e22f7bb4b200675cec49a5ebc48e3d4ac8

COPY --from=build /output /usr/share/nginx/html

EXPOSE 80
