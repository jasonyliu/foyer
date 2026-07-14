# Release v2026.07.14

- **Tag:** `v2026.07.14`
- **Milestone:** — (hotfix re-release; no milestone)
- **Review:** — (hotfix; defect and direction recorded on the hotfix Task)

## Features

- None.

## Fixes

- `apps/site/wrangler.jsonc`: minimal Workers config (assets directory `./dist`) so git-driven Cloudflare deploys (`wrangler deploy` / `wrangler versions upload`) succeed; previously the deploy step failed with "Missing entry-point to Worker script or to assets directory". Supersedes Cloudflare bot PR #23 (plugin-based variant declined for now).
