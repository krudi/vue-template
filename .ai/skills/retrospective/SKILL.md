---
name: retrospective
description:
    Capture project lessons after corrections, surprises, or substantial Vue Template sessions. Updates AGENTS.md
    (or README.md for operational facts).
---

# Session Retrospective

## When to use

- User corrects a wrong path, wrong stack assumption, or wrong approach
- A tool limitation or project constraint affects the workflow
- User says "remember this", "add to lessons", or "document that"
- End of a substantial session with reusable project knowledge

## Steps

1. Identify what would have prevented the issue
2. Read `AGENTS.md`
3. Put the lesson where it belongs:
    - a gotcha → `AGENTS.md` `## Lessons` (create it before `## AI workflow layout` if it is missing)
    - a convention → the matching part of `AGENTS.md` `## Conventions`
    - an operational fact (setup, scripts, environment) → `README.md`
4. Update existing entries instead of duplicating; remove stale or wrong ones
5. Keep it as current fact, not a narrated history of the session
6. Do not create a new documentation file

## What not to capture

- Trivial typo fixes
- One-off task details
- Information already obvious from the current code or the error message
