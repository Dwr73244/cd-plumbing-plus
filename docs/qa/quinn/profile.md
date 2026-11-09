# Quinn profile: C&D Plumbing Plus website

This repository's specifics for Quinn. The shared rules are in the other files in this folder;
the master copy is in DLM-Innovations/dlm-agent-hub.

## Project

- Project: a website build for C&D Plumbing Plus, a plumber in Rochester, NY. DLM Innovations
  consulting work, currently a mockup to show the client.
- Repository: Dwr73244/cd-plumbing-plus (public). Base branch `main`; branches `dwr/*`.
- Release means a merge to `main`, after David's OK: GitHub Pages publishes the repo at
  https://dwr73244.github.io/cd-plumbing-plus/ within a few minutes. A real launch on the client's
  own domain is a separate step (`README.md`, "What needs to be wired before launch").
- The core action: a visitor can call the plumber. Every phone number is a working `tel:` link,
  and the sticky call bar shows on phones.

## Commands

- Install: nothing to install; no dependencies, no build step.
- Typecheck, unit tests, coverage: **none yet.** There is no test suite and no CI. The first change
  that adds real behavior (for example wiring the contact form to a service) adds a small test.
- Run locally: `python -m http.server 8080` in the repo, then open http://localhost:8080.
- It's really this build: the page title starts "Plumber Rochester NY | 24-Hr Emergency |
  C&D Plumbing Plus".

## Test environment

- Local server only. The contact form currently fakes a successful submit (`main.js`); it sends
  nothing anywhere.
- When the form is wired to a real service, tests use a test endpoint and never send to the
  client's real inbox.

## Journeys

Before each merge, check by hand (until there are automated checks):

- The page loads with no console errors and no broken images, at phone (375 px), tablet and
  desktop widths.
- Every phone number and the sticky call bar dial (585) 520-2522.
- The mobile menu opens and closes, and the in-page links land below the sticky header.
- The contact form refuses missing required fields, and shows its success message on a valid
  entry.
- The JSON-LD in `index.html` is valid, and its rating numbers match the ones shown on the page.

Supported: current desktop and phone browsers.

## Real numbers

- None yet: no traffic or leads. Business facts on the page (reviews, ratings, awards) must match
  their public sources (`research/`).

## Stricter rules for this project

- Public repo: never commit secrets, private client information, or anything not meant to be
  public. Every file in the repo is published by GitHub Pages unless `_config.yml` excludes it.
- Nothing invented about the client: quotes, ratings, awards and licence details come from the
  client or their public listings, and the README's pre-launch list says which still need checking.

## Known issues and by-design answers

- The contact form doesn't send yet (by design for the mockup; listed in `README.md` before
  launch).
- The `research/` notes are published on the Pages site along with the mockup.
