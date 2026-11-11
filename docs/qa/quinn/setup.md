# Quinn: setting up a new project

Quinn 2.3, 2026-11-11. Every DLM Innovations project gets Quinn before its first feature: a new
product, a client site, a consulting job, an internal tool. The hub creates a "Set up Quinn" task
for every new DLM project automatically; this file is how to do it.

Do it as its own small PR, before other code work in the repo. It needs no product code.

## 1. Find the repo, or make it in the right place

- New DLM repositories go in the **DLM-Innovations** GitHub organization. That keeps them apart
  from other businesses, and Git then commits there with the DLM identity automatically.
- Set the hub project's `repo` field to the repository (`update_project`), so every agent can
  find it.

## 2. Copy the shared files

Copy these files from the master (`docs/qa/quinn/` in DLM-Innovations/dlm-agent-hub) into the
new repo's `docs/qa/quinn/`, **unchanged**:

`README.md`, `SKILL.md`, `build-and-test.md`, `ci-and-releases.md`, `qa-pass.md`, `setup.md`,
`profile-template.md`

Never edit these copies on their own. Anything this project needs differently goes in its
`profile.md` or its `AGENTS.md`.

## 3. Write the project's profile

Create `docs/qa/quinn/profile.md` from [profile-template.md](profile-template.md). Fill it from
the real repository: read its package scripts, CI workflows, deploy setup and docs, and run its
commands once to check them. Where something doesn't exist yet (no tests, no CI, no staging),
write that plainly, e.g. "No CI yet", rather than guessing. Never put secret values in it.

A small project can have a short profile. It still needs: what "release" means, the core action,
how to run the tests, what tests must never touch, and the real customer numbers if there are any.

## 4. Point the repo's agent files at Quinn

- **`AGENTS.md`** (create it if the repo has none). It must contain this section:

  ```
  ## QA: run Quinn

  **Quinn** is the DLM QA kit: [docs/qa/quinn/SKILL.md](docs/qa/quinn/SKILL.md). When anyone says
  "QA it", "run QA" or "run Quinn", follow it together with this repo's
  [profile](docs/qa/quinn/profile.md). It covers acceptance criteria, unit testing, test data, the
  code checklist and review, the CI and release rules, and the QA pass with its short report.

  The shared files in `docs/qa/quinn/` are a copy of the master in DLM-Innovations/dlm-agent-hub.
  Change the master, then copy it here; only `profile.md` belongs to this repo.
  ```

- **`CLAUDE.md`** (create it if missing): one line telling Claude to read and follow `AGENTS.md`
  first, including its "QA: run Quinn" section.
- **`.github/pull_request_template.md`**: include `Hub task: T` and these checkboxes:

  ```
  - [ ] New tests were seen failing before the change, and passing after it.
  - [ ] Bug fix: a regression test reproduces the bug.
  - [ ] Code checklist (docs/qa/quinn/build-and-test.md section 5): each rule that applies is covered.
  - [ ] A different agent did a product-code bug review against the checklist (link or summary):
  - [ ] CI: any re-run was for a *machine* failure only, noted here with the reason:
  - [ ] Releases: nothing here softens a check that protects money, sales or saved data.
  - [ ] QA: a feature or release candidate had a Quinn QA pass (docs/qa/quinn/qa-pass.md); link or summary:
  ```

## 5. Register the copy

In a small PR to DLM-Innovations/dlm-agent-hub, add the repo to `docs/qa/quinn-copies.md`. Then
run `npm run quinn:check` there: it compares every listed repo's copy with the master and fails on
anything missing or different.

## 6. Done means

- [ ] `docs/qa/quinn/` has the unchanged shared files and a real `profile.md`.
- [ ] `AGENTS.md`, `CLAUDE.md` and the PR template point at Quinn.
- [ ] The hub project's `repo` field is set, and the repo is listed in the hub's
      `docs/qa/quinn-copies.md`.
- [ ] `npm run quinn:check` passes in the hub repo.
- [ ] The "Set up Quinn" task is handed off with the PR links.
