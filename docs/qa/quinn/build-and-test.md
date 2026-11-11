# Quinn: building and testing a change

Quinn 2.3, 2026-11-11. Shared by every DLM project; the project's `profile.md` adds its
specifics.

Be thorough and proportionate. Test as much as the logic needs, and no more machinery than the
journey needs. If a change is too big to test properly in one go, split it. Never cut the tests
quietly to make it fit.

## 1. Agree on what "done" means

For a new feature, or a change in behavior a customer would notice:

- Write numbered acceptance criteria (`AC1`, `AC2`, ...) in Given / When / Then form, and get
  David's OK before building. Reuse criteria he has already approved; don't ask twice.
- Cover the cases that apply:
  - the normal case and the whole customer journey
  - empty, zero, null, missing and malformed values
  - boundaries: the first and last item, exactly at a limit, the largest real customer
  - errors: a provider down, a bad reply, a timeout, an expired login, a retry that half worked
  - accounts, roles and tiers, where they exist
  - money, duplicates, saving and restarting, where they apply
  - every platform, browser, OS or theme the code touches (the profile lists them)
- Ask about anything vague before starting. One round of questions at the start beats a rewrite.
- Map each AC to at least one named test, e.g. `test("AC3: a $0 giveaway keeps its $0 price")`.

Bug fixes, refactors and internal changes don't need David's sign-off on criteria. Their tests
are the record.

## 2. Unit tests

A unit test checks one piece of logic on its own, in milliseconds, with no ports, no app launch,
no real clock and no network. Aim for roughly 70% unit tests, 20% integration tests (a real
server, database or file system inside one process) and 10% end-to-end tests (the real app).

1. **Every test must be able to fail.** Write tests with or before the code. Before the PR is
   ready, show once that the new tests fail without the change: run them on the old code, or
   undo the change for a moment. Note the result in the PR. A new test that passes on the old
   code proves nothing until you know why.
2. **Every bug gets a regression test first.** It reproduces the bug and fails for the same
   reason the bug happened, not because of a typo or a missing tool. Then fix it. Name it after
   the hub task.
3. **Test what the code does, not how it does it.** Assert on what a customer would notice (the
   price, the saved record, the message shown), not on private helpers or how often a mock was
   called.
4. **Never weaken, skip or delete a valid test to get green.** If a test is wrong, explain why in
   the PR and get the change reviewed like product code.
5. **Cover the edges in a table.** One test loops over a table of cases (platforms, zero, null,
   huge, wrong type) instead of copy-pasted tests.
6. **Fast and steady.** Each unit test finishes well under a second, and a module's unit tests
   in under a minute. No sleeps, real timers, ports or network: use a fake clock and in-memory
   fakes. Every test cleans up after itself and passes in any order. A slow or flaky unit test
   is a bug.
7. **Measure coverage of the lines you changed and report it in the PR.** Target 80% of lines
   and 70% of branches, ideally 90% of lines; money, inventory and customer-data code aims for
   90% or more. Every new branch needs a test that takes it and checks its result. Overall
   coverage must not go down. A changed file missing from the coverage report is unmeasured,
   not covered. Coverage informs review; it isn't a gate a release fails by a point, unless the
   project's profile says otherwise.
8. **Fast feedback first.** Before pushing, run typecheck and the unit tests your change
   touches, then the suites the project's CI selects.

## 3. Test data

- **Use real captured data at every provider boundary.** Build fixtures from real responses (a
  test store, a sandbox account, the project's own files), with personal details, tokens and
  real transaction IDs stripped. Note the source, endpoint and capture date beside the fixture.
- Include the ugly real cases: nulls, missing fields, numbers sent as strings, empty lists,
  cancelled and refunded orders.
- Anything made up is labeled `SYNTHETIC`. Never pass a made-up payload off as a real one. Pure
  logic can use made-up inputs.
- Don't contact a live customer account or provider just to get a fixture. If you can't get a
  real sample within what David has allowed, say so and label the fallback.
- Fake only at the network edge (the HTTP client). Never fake our own logic. For database
  behavior, use the project's disposable database or emulator, not a mock that returns the
  expected answer.
- Never reuse another project's fixtures, accounts or test records.

## 4. Other tests

- **Integration tests** for connected routes, workers and storage inside the test environment.
- **Contract tests at every boundary.** When two parts talk (an app and its website, an app and a
  provider's API, a backend and its client), one shared real sample is checked on both sides.
- **End-to-end tests only for the few journeys a unit test can't cover.** A feature adds a
  handful, not dozens.
- **Wait for events, not deadlines.** An end-to-end test waits for the real thing to happen (the
  row appears, the response arrives). Its timeout only catches a hang: set it at 3 times or more
  the measured time. Never assert that something happens within an exact number of milliseconds.
- **Speed goals live in benchmarks** with a clear margin (at least 3 times the typical time), or
  they're reported rather than blocking. A limit David asked for keeps its margin from the
  measured value.
- **Keep the end-to-end machinery small.** If a PR's harness (launchers, fake servers, drivers,
  watchers) grows bigger than the feature, stop and simplify before pushing. Big harnesses have
  their own bugs and turn releases into failure loops.
- **UI changes** use the project's own design system, tokens and components, and are tested in
  their loading, empty, error and success states, in each supported theme and width.

## 5. The code checklist

Check it while writing and again in review. Each rule comes from a real bug that reached a
release candidate. If a rule applies to your change, cover it with a test.

1. **A step in the middle can fail.** For paged, multi-step or retried reads, test that step N
   fails and later recovers. Save progress (a cursor, "seen" marks, "done") only after the step
   it covers has fully succeeded.
2. **Limits come from real customer numbers** on the project's hub page, with at least twice that
   as headroom, and a test at the real number. Read only what you need.
3. **Ask the source of truth.** Never save a permanent state guessed from elapsed time or from
   something being absent. A guess that can't be avoided must be reversible.
4. **No silent drops.** Everything filtered out is shown with a reason, and a test checks the
   counts against the complete view.
5. **Two paths to one result** (CSV and API, live and ended, Windows and Mac) need a parity test.
6. **Map IDs across sources explicitly** (every form an ID takes), tested with a real sample from
   each source.
7. **Every money field** (discounts, coupons, fees, refunds, shipping, tax) is used, or
   deliberately ignored with a comment. Integer cents. A real $0 is not missing.
8. **State that matters survives a restart** of the process holding it. Test across the restart.
9. **Background polls and reloads never overwrite a save in progress.** One mechanism serializes
   them, tested deterministically.
10. **The core action still works** on every new screen and pop-up (the profile names it, e.g. a
    barcode scan during a show).
11. **Never clear what the user typed** from a background refresh.
12. **Nothing new or optional can stop the app or site from starting.** Fall back and log.
13. **Strict on what we write, tolerant on what we read.** Judge each record on its own, never
    fail a whole batch over one optional field, and accept every valid timestamp format.
14. **Test provider integrations with real captured samples**; made-up ones are `SYNTHETIC`.
15. **Every error state a user can reach has a way out** without contacting support.
16. **Changes apply live.** Anything a user saves shows everywhere it's used within seconds,
    without a restart. If it truly can't apply to work in progress, the screen says when it will.
    Test that an already-open screen updates after a save.

## 6. Review

- **A different agent reviews every PR** before it counts: it reads the diff, reruns the selected
  tests, checks that each test proves something and isn't likely to flake, and sees CI green.
- **A separate product-code bug review before any feature merges.** A different agent reads the
  product code (not the tests or the evidence) against the checklist above and asks: "What goes
  wrong for a real customer?" Findings come with file:line and a concrete scenario.

## 7. Scope, branches and PRs

- One task per PR, ideally under about 1,500 changed lines. Branch off the repository's real base
  branch (the profile says which), named the way the repo names branches.
- Stay in scope. List unrelated problems you noticed at the end, or log them on the hub as
  backlog; don't fix them in the same PR.
- Product branches hold product code, tests and docs only. Logs, reports, receipts and evidence
  screenshots go in the hub or the PR description, never in the product repo.

## 8. Done means

Say each of these in the PR, briefly and in plain English:

- [ ] The acceptance criteria (for a feature) and the tests that cover each one.
- [ ] The new tests were seen failing without the change, and passing with it.
- [ ] A regression test for each bug fixed.
- [ ] The suites that ran, with real counts, and any failures or skips.
- [ ] Coverage of the changed lines.
- [ ] Where the test data came from, and which fixtures are `SYNTHETIC`.
- [ ] The code checklist items that applied, and how each is covered.
- [ ] What is not tested, and why.

Then hand the change to a QA pass ([qa-pass.md](qa-pass.md)) before it ships.
