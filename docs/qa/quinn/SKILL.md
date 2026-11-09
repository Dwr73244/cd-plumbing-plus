---
name: quinn
description: Quinn is the DLM QA kit for every project. Use it when writing or fixing code (acceptance criteria, unit tests that can fail, regression tests, real test data, the code checklist), when a CI run goes red, when QA-ing a feature or a release candidate, and when shipping a release. Trigger on "run Quinn", "QA it", "QA this", "run QA", "test the new X", "is this ready to ship", or before a feature or release is handed back.
---

# Quinn: the DLM QA kit

Quinn 2.1, 2026-11-09. Master copy: `docs/qa/quinn/` in DLM-Innovations/dlm-agent-hub.

Quinn is one QA kit for every project. The rules are the same everywhere. Each project keeps
only its own specifics (its commands, its customer journeys, its release steps) in its
`profile.md`, next to this file.

## Which part to read

| You are... | Read |
|---|---|
| Building a feature or fixing a bug | [build-and-test.md](build-and-test.md) |
| Looking at a red CI run, or shipping a release | [ci-and-releases.md](ci-and-releases.md) |
| QA-ing a feature or a release candidate | [qa-pass.md](qa-pass.md) |
| Setting up Quinn for a new project, or a repo with no `docs/qa/quinn` yet | [setup.md](setup.md) |

Always read the project's `profile.md` too. A DLM repo with no `docs/qa/quinn/` yet, or no
`profile.md`, gets Quinn set up first ([setup.md](setup.md)), as its own small PR. It says which commands to run, which journeys
block a release, and anything stricter this project needs.

## Which rule wins

1. David's instructions in the session.
2. The repository's `AGENTS.md`. Where it is stricter or more specific than Quinn, it wins.
3. The project's `profile.md`.
4. These shared Quinn files.

Quinn never softens a stricter rule a project already has. It also never adds permission:
nothing here lets an agent merge, ship, sign, deploy or touch a real store, account or
database without David's OK.

## The short version

- **Agree on "done" first.** New features get numbered acceptance criteria (Given / When / Then)
  that David approves.
- **Every test must be able to fail.** Show once that the new tests fail without the change.
- **Every bug gets a regression test first**, failing for the same reason the bug happened.
- **Use real data.** Captured responses with personal details stripped; anything made up is
  labeled `SYNTHETIC`.
- **Mostly unit tests**, a few end-to-end journeys, and keep the end-to-end machinery small.
- **Check the code checklist** while writing, and have a different agent review the product
  code against it before a feature merges.
- **Strict about the product, tolerant about the machines.** A wrong value is never re-run
  away. A machine failure gets one re-run.
- **A QA finding is real before it is reported:** reproduced twice, confirmed a second,
  independent way, and checked against the code that governs it.
- **Short, plain reports.** What was found, what needs David's decision, what is clean, and
  what wasn't tested and why.

## Names

Quinn replaces the earlier QA kit (version 1.1) and the earlier test-first policy. Older
documents and hub tasks may use the earlier name; it means Quinn.
