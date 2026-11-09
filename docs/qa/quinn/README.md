# Quinn: the DLM QA kit

Quinn 2.1, 2026-11-09.

Quinn is one QA kit for every DLM Innovations project. Start at [SKILL.md](SKILL.md).

## Files

| File | What it covers |
|---|---|
| [SKILL.md](SKILL.md) | What Quinn is, which part to read, which rule wins |
| [build-and-test.md](build-and-test.md) | Acceptance criteria, unit tests, test data, the code checklist, review, "done" |
| [ci-and-releases.md](ci-and-releases.md) | Red CI results, the flaky budget, release-blocking vs. nightly, shipping |
| [qa-pass.md](qa-pass.md) | The QA pass on a feature or a release candidate, and its report |
| [setup.md](setup.md) | Setting up Quinn in a new project, step by step |
| [profile-template.md](profile-template.md) | The template for a project's `profile.md` |
| `profile.md` | This project's specifics (only in a project's own copy) |

## Where the copies live

The master copy is `docs/qa/quinn/` in **DLM-Innovations/dlm-agent-hub**. Each DLM repository
keeps an identical copy of the shared files at the same path, plus its own `profile.md`:

- DLM-Innovations/ScanStation (the ScanStation app)
- Dwr73244/DLM-GetScanStation-Website (the ScanStation website)
- DLM-Innovations/sell-my-golf-clubs (Sell My Golf Clubs)
- DLM-Innovations/dlm-agent-hub (the hub; this is also the master)

Logie Joe's keeps its own copy, set up only in Logie Joe's own sessions. Every new DLM project or
consulting client gets Quinn before its first feature, following [setup.md](setup.md); the hub
creates a "Set up Quinn" task for each new DLM project automatically. Quinn is for DLM Innovations
projects only.

## Changing Quinn

1. Change the master copy, and bump the version line at the top of **every** shared file
   (the hub's tests check that they match).
2. Copy the shared files, unchanged, into each repository above, in a small PR per repository.
   Then run `npm run quinn:check` in the hub repo: it compares every listed copy with the master.
3. Don't edit a repository's copy of a shared file on its own. A project that needs something
   different puts it in its `profile.md` or its `AGENTS.md`.
4. Note what changed below.

## Changes

- **2.1, 2026-11-09.** Adds [setup.md](setup.md), the steps for giving a new project Quinn. The
  hub now opens a "Set up Quinn" task for every new DLM project, and `npm run quinn:check`
  catches a repo copy that is missing or out of date.
- **2.0, 2026-11-09.** The first Quinn. It folds the earlier QA kit (version 1.1) and the
  earlier test-first policy into one kit, and adds the CI failure rules, the release rules, the
  code checklist and the product-code bug review. Softer than before where the old rules
  stalled releases: tests are thorough and proportionate rather than "longer than the code",
  coverage is a measured and reported target rather than a gate, held QA items go to David for a
  decision rather than blocking a release, and evidence lives in the hub or the PR rather than in
  the product repository.
