ARG NODE_IMAGE=node:26.1.0-alpine@sha256:e71ac5e964b9201072425d59d2e876359efa25dc96bb1768cb73295728d6e4ea

# ------ deps ------
FROM ${NODE_IMAGE} AS deps

ENV COREPACK_HOME=/opt/corepack
RUN corepack enable && corepack prepare pnpm@10.31.0

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY presentations/riesgos-ia-uma-2026-03/package.json ./presentations/riesgos-ia-uma-2026-03/
RUN PACKAGED=true pnpm install --frozen-lockfile

# ------ runtime ------
FROM ${NODE_IMAGE}

ENV COREPACK_HOME=/opt/corepack
COPY --from=deps /opt/corepack /opt/corepack
RUN corepack enable

WORKDIR /app

COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --from=deps --chown=node:node /app/presentations/riesgos-ia-uma-2026-03/node_modules ./presentations/riesgos-ia-uma-2026-03/node_modules
COPY --chown=node:node package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY --chown=node:node presentations/riesgos-ia-uma-2026-03 ./presentations/riesgos-ia-uma-2026-03

USER node
WORKDIR /app/presentations/riesgos-ia-uma-2026-03

EXPOSE 3030
ENTRYPOINT ["sh", "-c", "tail -f /dev/null | pnpm slidev --remote=\"$SLIDEV_PASSWORD\" --port 3030"]
