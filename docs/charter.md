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
| Portal site | Personal portal at psyphix.com | `main/apps/site/` — pending first release |

## Milestones

| Key | Description | Status | Date | Release | Path |
|---|---|---|---|---|---|
| _none yet — first milestone opens at Draft_ | | | | | |

## Provision

- Node 22 (local: v22.22.1) with `typecheck` + `test` (vitest) scripts, mirroring the psyphix app stack.
- GitHub private repository `jasonyliu/foyer` — pending creation.
- `gh` CLI authenticated as `jasonyliu` — pending login.
- Domain `psyphix.com` — ownership/registration to confirm.
- Hosting for the deployed site — to decide; Cloudflare Pages proposed (existing Cloudflare footprint), GitHub Pages the simpler alternative.
