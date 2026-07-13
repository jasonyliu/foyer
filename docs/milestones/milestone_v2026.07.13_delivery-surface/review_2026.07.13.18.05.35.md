# Review: milestone_v2026.07.13_delivery-surface — 2026.07.13.18.05.35

## Summary

Deliverables 1–4 of 7 complete and verified on `dev`; 5–6 are Release-stage acts by design (the milestone's own Release exercises them); 7 is drafted below with one sub-question deferred to psyphix's first real CI run. The milestone is **deployable**: everything that can complete before Release has.

## Evaluation

Measured against `milestone.md`:

1. **Site skeleton** — `apps/site/` green on typecheck + 5 vitest tests, locally (Principal-run) and in CI. Met.
2. **Tiered CI** — one workflow, five event tiers, single always-reporting `CI` check. Fast tier observed on branch push (Build skipped, 11s warm), full tier on PR merge refs (Build ran). Release / focused / back-merge tiers fire at Release and the Operation-stage hotfix exercise. Met for all pre-Release tiers.
3. **Branch protection** — `protect-main` (PR + 1 approval + `CI` + up-to-date) and `protect-dev` (PR + 0 approvals + `CI`) Active, built by the Principal; direct push personally rejected. Met.
4. **Auto-merge** — enabled with merge-commits-only and delete-on-merge; exercised on PR #16: armed by the Principal while checks pended, landed unattended on green. Met.
5. **Release + hotfix** — pending: the Release stage itself and the post-release hotfix exercise.
6. **psyphix.com via Cloudflare Pages** — pending: OP3, sequenced after the release merge so the first Pages build picks up released `main`.
7. **Scope-#10 decision memo** — verdicts below, carried back to psyphix at milestone close.

Verification process: every integration verified by API state (a lesson bought mid-milestone: I3's first close was inferred, wrong, and corrected on record — see #15). Training walkthrough conducted per the handoff; the Principal personally performed repo creation, both merges pre- and post-protection, ruleset construction, the rejected direct push, auto-merge arming, and both merge-method settings.

### Scope-#10 verdicts (for jasonyliu/psyphix)

1. **CI shape:** one tiered workflow, single always-reporting `CI` check — confirmed by hands-on; the required-check-never-reports trap and the tier-not-duplicate insight (push=fast vs PR=full) both observed live. Foyer's `ci.yml` is the template.
2. **Ruleset staging:** confirmed — `main` ruleset Active now; `dev` ruleset created but **disabled** until the framework-autonomy milestone closes (direct-commit working mode). Foyer's rulesets export as JSON via `GET /repos/{o}/{r}/rulesets/{id}` → foundry templates.
3. **CD deferral:** confirmed CI-only for psyphix Actions; deploys stay operator-performed (no hosted-runner path to the local worktree). Foyer's Pages CD is the contrast case, not the model.
4. **Merge methods:** merge commits only, squash/rebase disabled at repo settings (structural, not conventional); auto-merge enabled. **Approvals settled by the Principal:** `main` = 1 (agent-authored PRs, Principal approves — GitHub forbids self-approval, so agent identity separation is load-bearing), `dev` = 0 (AI Lead authors integrations).
5. **Postgres service container for wakery CI:** unanswered here by design — foyer has no DB; answer on psyphix's first real run.

Settled alongside: foundry scaffolds under the Principal's token (admin acts: repo create, settings PATCH, ruleset POST, collaborator PUT); agents arrive as Write collaborators; per-command PAT binding per TOOLS.md, no global gh sessions.

## Incomplete

- Deliverables 5–6: Release-stage and Operation-stage acts, sequenced there by the decomposition. Not gaps — pending stages.

## Deployment

1. Merge the release PR `dev → main` (release-tier CI gates it; requires 1 Principal approval; auto-merge recommended).
2. Tag the merge commit `v2026.07.13` and publish release notes from `releases/release_v2026.07.13/release.md`.
3. Connect Cloudflare Pages to `jasonyliu/foyer`: production branch `main`, build command `npm run build`, build output `apps/site/dist`, root directory `apps/site` (OP3, Principal-performed).
4. Add custom domain `psyphix.com` in the Pages project; Cloudflare auto-creates the DNS record in the parked zone.
5. Smoke: `curl -sI https://psyphix.com` → 200 and the page renders name + tagline.
6. Rollback: Pages keeps every deployment — "Rollback to this deployment" in the dashboard reverts the site without touching git; a bad release on `main` reverts by hotfix lane per `DELIVERY.md §Hotfix`.

## Reference

- Tasks: E1 #6, I1 #7, E2 #9, I2 #10, OP1 #12, OP2 #13, E3 #14, I3 #15; Stage Tasks: Inception #1, Draft #2, Decomposition #4.
- PRs: #3 (draft), #5 (decomposition), #8 (site), #11 (basic CI), #16 (tiered CI, auto-merged).
- CI evidence: first run 29234684519 (green), 29234747560 (deliberate red, pinned to `format.test.ts#12`), 29239641466 (fast tier).
- Governing: `milestone.md`, `decomposition.md`, psyphix `cicd-training-handoff.md`, deployed policy `v2026.07.12`.
