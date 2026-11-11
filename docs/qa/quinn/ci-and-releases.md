# Quinn: when CI fails, and shipping a release

Quinn 2.3, 2026-11-11. Shared by every DLM project; the project's `profile.md` lists which
journeys block its release and what "release" means there (an installer, a deploy, a published
page).

These rules exist so testing protects customers without trapping a release in an endless loop.

## 1. What never gets softened

- The checks that protect customers' money, sales and saved data, including the upgrades
  customers actually do and upgrade-safe data (section 3).
- The first screen works, and the core action works.
- The stop button, and a staged rollout when David picks one, where the project has them.
- A regression test that fails before the fix, for every real bug.
- Secrets never appear in a file, log, backup or message.
- Nothing merges to the main branch, ships, signs, deploys or touches a real store or database
  without David's explicit OK.

An existing test is never weakened to make a change pass.

## 2. When CI fails: strict about the product, tolerant about the machines

Every red result goes in exactly one of two buckets, and the bucket decides what happens next.

1. **Read the log and sort it.**
   - **Product failure:** a value was observed and it was wrong. A wrong price or buyer, a lost or
     changed record or setting, a crash, a startup that refused with an error, an assertion
     comparing real values.
   - **Machine failure:** nothing wrong was observed. A wait timed out while the app was still
     alive, or the runner, disk or network failed, or a port was taken by another job.
   - **Not sure:** treat it as a product failure.
2. **Product failure:** fix it, with a regression test that fails first. Never re-run it away.
3. **Machine failure:** post one line saying which bucket and why, then re-run once on the same
   commit. This applies to every test, including the protected checks above. On a release
   candidate, re-run the **whole workflow** (`gh run rerun <id>`, not `--failed`).
   - **Passes on the re-run:** the candidate is qualified. Open one task for the flaky test, with
     both logs and an owner, to fix in the next release. No diagnostic tasks, reports or release
     holds for it.
   - **Fails again the same way:** treat it as a product failure.
4. **Two different failures on one candidate:** stop. Don't start a third run or open new
   diagnostic tasks. Send David a short plain-English note: what failed, which bucket, what you
   think it is, and the options.
5. **Flaky budget.** A check that fails for machine reasons in more than 1 of 20 runs is fixed,
   or moved out of the release gate to a nightly run, within a week. Its customer promise stays
   covered by a unit or integration test in the meantime. A test that cries wolf is worse than
   no test.
6. **Timeouts come from measurement.** Measure how long the thing really takes on CI and set the
   wait at 3 times that or more. A wait with no measurement behind it is a bug in the test.
7. **Fix the cause, not the symptom.** Don't widen a timeout or loosen a check without saying
   why it was wrong. Waits that were never measured (rule 6) are the exception.

## 3. Release-blocking vs. nightly

- **Release-blocking:** typecheck, the unit and integration tests, and the few end-to-end
  journeys only they can catch: saved data survives the change, the first screen works, and the
  core action works. The profile names the exact journeys.
- **The gate proves the upgrades customers actually do** (David, 2026-11-11), where the project
  installs or stores data on the customer's side:
  - the upgrade from the versions customers really run (the profile names them), including the
    in-app hand-over from the old app to the new installer;
  - **upgrade-safe data:** the previous release can still read whatever the new one saves.
- **Nightly:** rare edge cases, legacy paths and anything over its flaky budget. A nightly
  failure gets a task the next morning. It blocks the next release only if it's a product
  failure.
- **Rollback proofs** (going back to an older version and returning) run nightly as advisory
  only. A failure gets a task, but it never blocks a release, because we fix forward (section 4).

## 4. Shipping

- **Ship small and often.** One task per PR, and a release every one to two weeks rather than
  one giant candidate. Put a large new feature behind its beta flag and ship it in pieces.
- **Scope freeze.** Once a release candidate is in testing, new features wait for the next
  release unless David says otherwise.
- **One release lead.** One agent leads a release at a time and is named on the hub. Others don't
  push to, dispatch on or cancel the main branch without asking the lead.
- **Release freeze.** Before starting release runs, the release lead posts a freeze to all agents
  on the hub (`send_message` to "all"). Until the lead lifts it, after the release is live and
  verified, no agent merges to the main branch, even with a standing "merge when green". The
  scope freeze only keeps new features out of the candidate; the release freeze stops every
  merge to the main branch.
- **Fix forward, never roll back.** A bad release is paused with the project's stop button (the
  profile names it) and replaced by a higher, fixed version. This is standard for installed apps.
- **The rollout is David's choice each release:** staged or everyone at once. There is no
  default. Where the project has a stop button, it must be ready before anything is published.
- **Know quickly when updates fail.** Where the project has an anonymous update-success signal
  (versions, OS and result only, and only once the privacy policy says so), the release lead
  watches it after each release.
- **A short release record:** the commit, the CI run links and the release or deploy receipt.
  No hashed report chains, checkpoint files or reviews of reviews.
- **A QA pass is evidence, not permission.** Shipping still needs David's OK.
