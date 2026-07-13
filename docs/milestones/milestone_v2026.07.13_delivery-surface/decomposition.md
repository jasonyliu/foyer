# Decomposition: milestone_v2026.07.13_delivery-surface

## Approach

The milestone divides along the curriculum's own seams. Repo-changing work becomes three features, one per delivery-surface layer: the site skeleton (the thing CI tests), the basic CI workflow (the thing protection requires), and the tiered CI (the full event matrix). Each is one feature ↔ one branch ↔ one integration; none needed subdivision under the Anti-rule — each is a single verifiable outcome an agent can hold whole. GitHub- and Cloudflare-side configuration (rulesets, auto-merge, Pages/DNS) changes no repo content, so it carries as operational Tasks (OP#) without branches — deliberately Principal-assigned: performing these acts by hand is the training's point. Release and hotfix need no Execution Tasks: the milestone's own Release stage exercises the release flow, and a scripted post-release hotfix exercises `DELIVERY.md §Hotfix` during Operation. The scope-#10 decision memo is authored at Review, where the hands-on evidence is complete.

Sequencing follows the training handoff: tests exist before CI runs them, CI reports before protection requires it, protection exists before auto-merge arms against it, the full tier matrix lands last.

## Features

| Feature | Description | Branch | Tasks |
|---|---|---|---|
| Site skeleton | Minimal TypeScript portal site with vitest tests, green locally | `feature/milestone_v2026.07.13_delivery-surface/site-skeleton` | E1, I1 |
| Basic CI | Minimal `ci.yml`: push + PR trigger, typecheck + test, single `CI` check | `feature/milestone_v2026.07.13_delivery-surface/ci-basic` | E2, I2 |
| Tiered CI | `ci.yml` branched by event per `PROJECT.md §Environments` CI table | `feature/milestone_v2026.07.13_delivery-surface/ci-tiered` | E3, I3 |

## Fixes

None carried from Draft. The Operation-stage hotfix exercise creates its `hotfix/<slug>` lane when it runs (post-Release by design).

## Dependencies

```text
E1 → I1 → E2 → I2 → OP1 → OP2 → E3 → I3 → [Release stage] → OP3 → [hotfix exercise]
                (rulesets) (auto-merge)                    (Pages/DNS)
Critical path is the whole chain — serial by pedagogy, not by necessity.
```

## Tasks

### E1 — Build the site skeleton

- **Type:** `execution`
- **Assignee:** AI Lead (walkthrough)
- **Branch:** `feature/milestone_v2026.07.13_delivery-surface/site-skeleton`
- **Relations:** Blocking I1
- **Objective:** A minimal site the delivery surface can carry: something to typecheck, test, build, and eventually deploy.
- **Scope:** `apps/site/` — package.json (Node 22, `typecheck`/`test`/`build` scripts), TypeScript config, one page, one small pure module with vitest tests.
- **Constraints:** Skeletal by charter — flow over content; no framework beyond what static hosting needs.
- **Primary Specification:** milestone.md deliverable 1; training handoff curriculum step 1.
- **Deliverable:** `apps/site/` green on `npm run typecheck` and `npm test` locally.
- **Verification:** Principal watches both commands pass locally and can state what each checks.

### I1 — Integrate site skeleton

- **Type:** `project_integration`
- **Assignee:** Principal (merge act), AI Lead (conduction)
- **Branch:** `feature/milestone_v2026.07.13_delivery-surface/site-skeleton` → `dev`
- **Relations:** Blocked-by E1; Blocking E2
- **Objective:** Land the site skeleton on `dev` by PR — the first code integration, pre-CI.
- **Primary Specification:** `PROJECT.md §Branching`; `DELIVERY.md §Integration`.
- **Deliverable:** Merge commit on `dev`; branch deleted.
- **Verification:** `dev` carries `apps/site/`, history shows the `--no-ff` bubble.

### E2 — Basic CI workflow

- **Type:** `execution`
- **Assignee:** AI Lead (walkthrough)
- **Branch:** `feature/milestone_v2026.07.13_delivery-surface/ci-basic`
- **Relations:** Blocked-by I1; Blocking I2
- **Objective:** The first remote check: CI runs the same two commands on every push and PR.
- **Scope:** `.github/workflows/ci.yml` — checkout, Node 22 setup, install, typecheck, test; one job reporting as `CI`.
- **Constraints:** Single always-reporting check named `CI` (the required-check contract rulesets will bind to).
- **Primary Specification:** milestone.md deliverable 2; curriculum step 3.
- **Deliverable:** Green run on the branch push; one deliberately broken test observed failing, then reverted.
- **Verification:** Principal watches a live run succeed and a live run fail, and can read the log of each step.

### I2 — Integrate basic CI

- **Type:** `project_integration`
- **Assignee:** Principal (merge act), AI Lead (conduction)
- **Branch:** `feature/milestone_v2026.07.13_delivery-surface/ci-basic` → `dev`
- **Relations:** Blocked-by E2; Blocking OP1
- **Objective:** First PR with live checks in the merge box — merge on green.
- **Primary Specification:** `PROJECT.md §Branching` merge gate; curriculum step 4.
- **Deliverable:** Merge commit on `dev` with the `CI` check green on the merge-result ref (`refs/pull/N/merge`).
- **Verification:** Principal can explain what ref the check ran against and why that matters.

### OP1 — Branch protection rulesets

- **Type:** `operational`
- **Assignee:** Principal (hands-on), AI Lead (guide)
- **Relations:** Blocked-by I2; Blocking OP2
- **Objective:** `main` and `dev` refuse direct pushes and require PR + green `CI`.
- **Scope:** GitHub → Settings → Rules → two rulesets; then a deliberately attempted direct push, rejected; admin-bypass understood.
- **Primary Specification:** milestone.md deliverable 3; curriculum step 5.
- **Deliverable:** Both rulesets active; rejection observed.
- **Verification:** Principal creates the rulesets himself and triggers the rejection himself.
- **Contingency:** Rulesets can be disabled (not deleted) if they block training flow — the psyphix staging decision (#2) gets its evidence here.

### OP2 — Auto-merge

- **Type:** `operational`
- **Assignee:** Principal (hands-on), AI Lead (guide)
- **Relations:** Blocked-by OP1; Blocking E3
- **Objective:** A PR that lands itself on green — the mechanism `DELIVERY.md §Integration` assumes.
- **Scope:** Repo setting: allow auto-merge; disable squash + rebase (merge commits only); exercise on a real PR.
- **Primary Specification:** milestone.md deliverable 4; curriculum step 6.
- **Deliverable:** One PR observed arming, waiting for checks, merging unattended.
- **Verification:** Principal arms it and watches it land.

### E3 — Tiered CI

- **Type:** `execution`
- **Assignee:** AI Lead (walkthrough)
- **Branch:** `feature/milestone_v2026.07.13_delivery-surface/ci-tiered`
- **Relations:** Blocked-by OP2; Blocking I3
- **Objective:** CI cost proportional to event risk: the full `PROJECT.md §Environments` CI table.
- **Scope:** `ci.yml` — fast lane on `feature/**`/`fix/**` push, full on PR→`dev`, release CI on PR `dev`→`main`, focused on `hotfix/**`→`main`, back-merge validation on `main`→`dev`; still one always-reporting `CI` check.
- **Primary Specification:** milestone.md deliverable 2 (tiered form); curriculum step 7; psyphix decision #1.
- **Deliverable:** Each tier demonstrated firing on its event.
- **Verification:** Principal can name which tier a given push/PR triggers and why.

### I3 — Integrate tiered CI

- **Type:** `project_integration`
- **Assignee:** Principal (merge act), AI Lead (conduction)
- **Branch:** `feature/milestone_v2026.07.13_delivery-surface/ci-tiered` → `dev`
- **Relations:** Blocked-by E3
- **Objective:** Land the final CI shape; integration set complete — Release stage may proceed.
- **Primary Specification:** `DELIVERY.md §Integration`, `§Chaining`.
- **Deliverable:** Merge commit on `dev`; auto-merge used.
- **Verification:** Lands unattended on green.

### OP3 — Cloudflare Pages + psyphix.com

- **Type:** `operational`
- **Assignee:** Principal (hands-on), AI Lead (guide)
- **Relations:** Blocked-by I3 (runs around the Release stage)
- **Objective:** Deploy-on-merge to real hosting; psyphix.com serves the site.
- **Scope:** Cloudflare Pages project bound to `jasonyliu/foyer`, production branch `main`; custom domain psyphix.com on the parked DNS zone.
- **Primary Specification:** milestone.md deliverable 6; curriculum step 9 made concrete.
- **Deliverable:** Merge to `main` → site live at psyphix.com.
- **Verification:** Principal performs the Cloudflare-side setup and loads the domain.
- **Contingency:** Pages project can be deleted and DNS re-parked without touching the repo.
