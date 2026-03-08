ARG NODE_IMAGE=node:24.14.0-alpine

# ------ deps ------
FROM ${NODE_IMAGE} AS deps

ENV COREPACK_HOME=/opt/corepack
RUN corepack enable && corepack prepare pnpm@10.31.0

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN PACKAGED=true pnpm install --frozen-lockfile

# ------ runtime ------
FROM ${NODE_IMAGE}

ENV COREPACK_HOME=/opt/corepack
COPY --from=deps /opt/corepack /opt/corepack
RUN corepack enable

WORKDIR /app

COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node . .

USER node

EXPOSE 3030
ENTRYPOINT ["sh", "-c", "tail -f /dev/null | pnpm slidev --remote=\"$SLIDEV_PASSWORD\" --port 3030"]
