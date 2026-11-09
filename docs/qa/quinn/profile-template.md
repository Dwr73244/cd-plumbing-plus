# Quinn project profile template

Quinn 2.1, 2026-11-09. Copy this into the project's `docs/qa/quinn/profile.md` and fill it in
from the real repository. Keep it short: facts an agent needs, not a log of past runs. Past
results go in the hub. Never copy filled-in values from another project, and never put secret
values here (name where they come from instead).

## Project

- Project and hub project id:
- Repository and base branch (check, don't assume `main`); branch naming:
- What "release" means here (an installer, a deploy, a published page) and who approves it:
- The core action (the one thing that must always work):

## Commands

- Install:
- Typecheck:
- Unit and integration tests:
- Coverage of changed lines:
- Build for production, and run it locally:
- How to tell it's really this project's build (a page title, version or health reply):

## Test environment

- Test or staging target, and how to reach it:
- Test accounts and roles (names only; no passwords):
- Where test data and fixtures live, and which are real captures:
- What tests must never touch (production, real customers, real stores, real payments):

## Journeys

- Critical customer journeys:
- Release-blocking end-to-end journeys (saved data survives, first screen works, core action
  works, plus any others):
- Nightly-only checks:
- Supported platforms, browsers, OSs, themes and widths:

## Real numbers

- The largest real customer numbers (from the project's hub page), used for limits and tests:

## Stricter rules for this project

- Anything stricter than shared Quinn (a coverage gate, an extra release check):

## Known issues and by-design answers

- (Added as QA passes find them, with file:line or the decision.)
