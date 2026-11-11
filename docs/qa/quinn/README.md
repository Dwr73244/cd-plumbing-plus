# Quinn: the DLM QA kit

Quinn 2.3, 2026-11-11.

Quinn is one QA kit for every DLM Innovations project. Start at [SKILL.md](SKILL.md).

## Files

| File | What it covers |
|---|---|
| [SKILL.md](SKILL.md) | What Quinn is, which part to read, which rule wins |
| [build-and-test.md](build-and-test.md) | Acceptance criteria, unit tests, test data, the code checklist, review, "done" |
| [ci-and-releases.md](ci-and-releases.md) | Red CI results, the flaky budget, release-blocking vs. nightly, shipping (fix forward, the release freeze) |
| [qa-pass.md](qa-pass.md) | The QA pass on a feature or a release candidate, and its report |
| [setup.md](setup.md) | Setting up Quinn in a new project, step by step |
| [profile-template.md](profile-template.md) | The template for a project's `profile.md` |
| `profile.md` | This project's specifics (only in a project's own copy) |

## Where the copies live

The master copy is `docs/qa/quinn/` in **DLM-Innovations/dlm-agent-hub**. Each DLM repository
keeps an identical copy of the shared files at the same path, plus its own `profile.md`. The list
of those repositories is `docs/qa/quinn-copies.md` in the hub repository, outside the kit, so
adding a repository never changes these shared files.

Logie Joe's keeps its own copy, set up only in Logie Joe's own sessions. Every new DLM project or
consulting client gets Quinn before its first feature, following [setup.md](setup.md); the hub
creates a "Set up Quinn" task for each new DLM project automatically. Quinn is for DLM Innovations
projects only.

## Changing Quinn

1. Change the master copy, and bump the version line at the top of **every** shared file
   (the hub's tests check that they match).
2. Copy the shared files, unchanged, into each repository in the hub's `docs/qa/quinn-copies.md`,
   in a small PR per repository.
   Then run `npm run quinn:check` in the hub repo: it compares every listed copy with the master.
3. Don't edit a repository's copy of a shared file on its own. A project that needs something
   different puts it in its `profile.md` or its `AGENTS.md`.
4. Note what changed below.

## Changes

- **2.3, 2026-11-11.** The new release process (David, 2026-11-11), in
  [ci-and-releases.md](ci-and-releases.md): fix forward (pause with the stop button, ship a higher
  fixed version, never roll back); the release gate proves the upgrades customers actually do,
  including the in-app hand-over, plus upgrade-safe data, while rollback proofs run nightly as
  advisory only; a release freeze posted to all agents on the hub; the rollout is David's choice
  each release, with the stop button ready first; and an update-success signal watched where a
  project has one. The CI failure rules are unchanged. The profile template asks for the stop
  button, the versions customers run and the update-success signal.
- **2.2, 2026-11-09.** The list of repositories that keep a copy moves out of this README into the
  hub's `docs/qa/quinn-copies.md`, so registering a new repository no longer changes a shared file.
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
