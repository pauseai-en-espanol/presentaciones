# Changesets

The whole site (every presentation plus the landing index) ships as one image, and its version is the version of
`@pauseai-es/landing`: the other packages are ignored here (`config.json`). So every change that reaches the site
needs a changeset releasing `@pauseai-es/landing`: run `pnpm release:note`, pick it, and describe the change in a
sentence (e.g. "New talk: …", "Fixed the sources slide of …"). Changes that don't reach the site (docs, a
presentation's CLAUDE.md, CI) take an empty one: `pnpm release:empty`.

Releases flow from these notes: after CI passes on main, the version and changelog are bumped, the site's image is
built as `<version>.<short sha>` and its tag is written into `charts/static/values.yaml`, which Argo CD deploys. See
the [changesets docs](https://github.com/changesets/changesets).
