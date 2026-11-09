# Working rules for coding agents (Codex, Claude and any other AI)

This is the C&D Plumbing Plus website build: DLM Innovations LLC consulting work for a Rochester, NY plumber. It is published as a mockup by GitHub Pages from `main`.
Read these rules before your first commit.

- Branches `dwr/*`, one task per PR. Nothing merges or deploys without David's explicit OK.
- If you work through the DLM Agent Hub, follow its protocol: claim the task, declare the paths,
  and put "Hub task: T<id>" in the PR.
- Never print or commit secrets.
- This is a public repository, and GitHub Pages publishes it. Never commit secrets, private client
  details or anything that shouldn't be public. `_config.yml` keeps the agent and QA files off the
  site; add any new non-site folder to its `exclude` list.

## QA: run Quinn

**Quinn** is the DLM QA kit: [docs/qa/quinn/SKILL.md](docs/qa/quinn/SKILL.md). When anyone says
"QA it", "run QA" or "run Quinn", follow it together with this repo's
[profile](docs/qa/quinn/profile.md). It covers acceptance criteria, unit testing, test data, the
code checklist and review, the CI and release rules, and the QA pass with its short report.

The shared files in `docs/qa/quinn/` are a copy of the master in DLM-Innovations/dlm-agent-hub.
Change the master, then copy it here; only `profile.md` belongs to this repo.
