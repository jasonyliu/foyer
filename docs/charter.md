# Foyer — Project Charter

## Mission

- **Title:** Foyer
- **Key:** `foyer`
- **Description:** Jason's personal web portal at **psyphix.com** — the landing page his public posts point back to, showing what he is working on, who he is, and how to reach him for work or collaboration.
- **Scope:** The portal site and its delivery surface: the `jasonyliu/foyer` repository with full branching, CI, PR, branch-protection, and release flow, and the site deployed to psyphix.com. The first milestone stands up that delivery surface end to end with a skeletal site, doubling as the Principal's hands-on CI/CD training; content and design buildout follows in later milestones.

## Channel

| Channel | Purpose |
|---|---|
| Claude Code sessions in `~/Vork/claude` | Founding and training conduction; project direction and verdicts |

## Team

| Member | Role | Responsibilities |
|---|---|---|
| Jason | Principal | Direction, verdicts, charter acceptance; performs the consequential GitHub acts himself (PR approvals, rulesets, releases) |
| Claude Code | AI Lead | Conducts stages, authors records and code, explains each act before performing it |

No durable agents are required: this project deliberately runs without Heimdall audit gates or wakery routing — GitHub's own CI and branch protection are the gates being learned.

## Path

```text
~/Vork/projects/foyer/
├── main/                # canonical project repo (clone of jasonyliu/foyer)
├── products/            # local-only outcome surface: deployments/, jobs/
└── team/                # local-only per-actor clones
```

## Products

| Product | Description | Source |
|---|---|---|
| Portal site | Personal portal, live at https://psyphix.com | `main/apps/site/`, deployed `v2026.07.13` via Cloudflare Pages |

## Milestones

| Key | Description | Status | Date | Release | Path |
|---|---|---|---|---|---|
| _none — next milestone opens at Draft_ | | | | | |
| `milestone_v2026.07.13_delivery-surface` | Full delivery surface + skeletal site; Principal CI/CD training | Completed | completed 2026-07-14 | `v2026.07.13` | `docs/milestones/milestone_v2026.07.13_delivery-surface/` |

## Provision

- Node 22 (local: v22.22.1) with `typecheck` + `test` (vitest) scripts, mirroring the psyphix app stack.
- GitHub repository `jasonyliu/foyer` — public while rulesets require it on the free plan; Pro upgrade before any flip to private, else enforcement silently stops.
- GitHub access: per-command PAT binding from the keystore (`github/psyphix-claw.token` for agent writes, `jasonyliu.token` for admin acts) per TOOLS.md — no global `gh` sessions.
- Rulesets: `protect-main` (PR + 1 approval + `CI` + up-to-date), `protect-dev` (PR + `CI`); merge commits only; auto-merge + delete-on-merge.
- Hosting: Cloudflare Pages — production branch `main`, root `apps/site`, build `npm run build` → `dist`, `NODE_VERSION=22`; custom domain psyphix.com.
