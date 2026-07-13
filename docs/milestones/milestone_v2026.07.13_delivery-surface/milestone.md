# Milestone: Delivery Surface (`milestone_v2026.07.13_delivery-surface`)

**Status:** Active (started 2026-07-13)

## Scope

Stand up Foyer's complete delivery surface on `jasonyliu/foyer`, end to end: a skeletal portal site (TypeScript, Node 22, vitest) as the app under delivery; GitHub Actions CI tiered by event per `PROJECT.md §Environments`; the PR flow into `dev` and `main` with branch protection rulesets and auto-merge; one full Release and one Hotfix exercised; the site deployed to **psyphix.com** via Cloudflare Pages. The milestone doubles as the Principal's hands-on CI/CD training, conducted in walkthrough mode — each mechanism is explained before it is exercised, and the Principal performs the consequential acts himself.

Excluded: site content and design buildout (later milestones); Heimdall audit gates and wakery routing (deliberately absent — GitHub's own gates are the subject).

## Deliverables

1. `apps/site/` — skeletal TypeScript site with `typecheck` + `test` (vitest) scripts, green locally.
2. `.github/workflows/ci.yml` — tiered CI: fast on `feature/**`/`fix/**` push, full on PR→`dev`, release on PR `dev`→`main`, focused on `hotfix/**`→`main`, back-merge validation on `main`→`dev`; single always-reporting required check.
3. Branch protection rulesets on `main` and `dev`: PR required, `CI` check required, merge commits only.
4. Auto-merge enabled and exercised (PR lands itself on green).
5. One Release (`dev`→`main`, tag, release record) and one Hotfix (`hotfix/**` off `main`, forward-merge to `dev`) exercised.
6. Site live at psyphix.com through Cloudflare Pages deploy-on-merge.
7. Decision memo for psyphix scope #10: the five held configuration decisions (CI shape, ruleset staging, CD deferral, merge methods, Postgres service container) verdicted from hands-on experience.

## Verification

The Principal can explain and operate each mechanism unassisted; every branch lane has been exercised with green CI; psyphix.com serves the site; the five scope-#10 decisions are verdicted and recorded for return to the psyphix milestone.

## Research

- `psyphix:docs/milestones/milestone_framework-autonomy_v2026.06.13/cicd-training-handoff.md` — the founding brief and curriculum.
- `psyphix:docs/research/research_20260614_cicd-development-flow/research.md` — the design source the CI table derives from.

## Specs

- None — the training handoff's curriculum serves as the governing specification for this milestone; Foyer's first native specs are expected at the next milestone (site content and design).
