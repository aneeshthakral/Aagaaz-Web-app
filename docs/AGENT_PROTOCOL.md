# Aagaaz Agent Collaboration Protocol

These rules are non-negotiable. Both agents read this file before starting work.

1. **One source of truth.** `docs/TASK_LEDGER.md` holds every task with an ID, owner, status, files touched, and notes. Both agents read it before any action and update it after. Statuses: TODO, IN PROGRESS, READY FOR REVIEW, FIXING, DONE.
2. **File ownership zones.** Claude Code writes in `app/` (pages), `components/`, `lib/content/`, `lib/constants.js`, styling, and image art direction. Codex writes in config files, `app/sitemap.js`, `app/robots.js`, `lib/seo.js`, `scripts/`, and `docs/` QA notes. Codex only edits a feature file to fix a logged bug, never to add features.
3. **File locks.** Before editing any file, an agent marks it locked in the ledger with its name and a timestamp. The other agent never touches a locked file. Locks clear when the task moves to READY FOR REVIEW or DONE.
4. **Handoff rhythm.** Claude Code builds a section to READY FOR REVIEW, then stops touching those files. Codex picks up READY FOR REVIEW items, audits and fixes, and marks them DONE or kicks them back with notes. The two never edit the same file at the same time.
5. **No duplicate components.** Before creating any component, both agents check `components/` and the ledger. Codex actively scans for duplication and dead code every phase.
6. **One installer at a time.** Never run `npm install` in both terminals at once. Coordinate every dependency add through the ledger. Claude Code installs build deps, Codex installs tooling deps, and they announce it in the ledger before running.
7. **Git from day one.** Initialize git locally in Phase 0, long before the GitHub push. Small, frequent commits with clear prefixes: `feat:`, `fix:`, `chore:`, `a11y:`, `perf:`, `seo:`, `docs:`. This gives you history and rollback while building. For any large refactor, the acting agent uses a short-lived branch and merges when green.
8. **Verify live docs.** For React Bits and shadcn commands, check the official docs at run time. Do not trust pasted commands.
