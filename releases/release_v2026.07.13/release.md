# Release v2026.07.13

- **Tag:** `v2026.07.13`
- **Milestone:** milestone_v2026.07.13_delivery-surface
- **Review:** docs/milestones/milestone_v2026.07.13_delivery-surface/review_2026.07.13.18.05.35.md

## Features

- Skeletal portal site (`apps/site/`): Vite vanilla-TypeScript, `formatUpdated` relative-age module with vitest suite, `typecheck`/`test`/`build` scripts on Node 22.
- Tiered CI (`.github/workflows/ci.yml`): five event tiers per `PROJECT.md §Environments`, single always-reporting `CI` check.
- Delivery surface: branch protection rulesets on `main` (PR + 1 approval + CI + up-to-date) and `dev` (PR + CI); merge commits only; auto-merge with branch auto-delete.
- First production deploy: psyphix.com via Cloudflare Pages (production branch `main`, root `apps/site`, output `dist`).

## Fixes

- None — first release.
