# Builds ALL presentations into a single nginx image.
#
# Auto-discovers every directory under presentations/ that has a package.json.
# Each presentation is served under /<presentation-name>/
#
# Usage:
#   docker build --platform linux/amd64 \
#     -t harbor.danilupion.com/pauseai-es/presentaciones:latest .
#
#   All presentations are served under /presentaciones/<name>/ by default.
#   Override the base path prefix if needed:
#     --build-arg BASE_PREFIX=/other-prefix/

ARG NODE_IMAGE=node:24.15.0-alpine

# ------ build ------
FROM ${NODE_IMAGE} AS build

ENV COREPACK_HOME=/opt/corepack
RUN corepack enable && corepack prepare pnpm@10.31.0

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY presentations ./presentations
RUN PACKAGED=true pnpm install --frozen-lockfile

ARG BASE_PREFIX=/presentaciones/

RUN for dir in presentations/*/; do \
      name=$(basename "$dir"); \
      if [ -f "$dir/package.json" ]; then \
        echo "=== Building $name ===" && \
        (cd "$dir" && pnpm build --base "${BASE_PREFIX}${name}/") || exit 1; \
      fi; \
    done

# Collect all dist/ outputs mirroring BASE_PREFIX so container filesystem matches external URLs
RUN mkdir -p "/output$(echo "${BASE_PREFIX}" | sed 's:/$::')" && \
    for dir in presentations/*/; do \
      name=$(basename "$dir"); \
      if [ -d "$dir/dist" ]; then \
        cp -r "$dir/dist" "/output${BASE_PREFIX}$name"; \
      fi; \
    done

# ------ serve ------
FROM nginx:alpine

COPY --from=build /output /usr/share/nginx/html

EXPOSE 80
