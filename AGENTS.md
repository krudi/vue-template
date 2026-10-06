# Agent instructions

This file is the canonical instruction source for every coding agent. `CLAUDE.md` only imports it, because Claude Code
does not read `AGENTS.md` by itself. Start every agent session at the repository root: Claude Code expands the
`@AGENTS.md` import only for the working directory's `CLAUDE.md`, and Codex started inside a subdirectory loads only
that directory's `AGENTS.md` and none of the repository skills. Skills, adapters and nested instruction files point
here; they never restate rules.

Vue Template is a minimal Nuxt 4 + Vue 3 starter template, intentionally lean — only core dependencies. Use it as the
base when starting a new Nuxt project.

## Where knowledge lives

| Question                                   | Source                                                 |
| ------------------------------------------ | ------------------------------------------------------ |
| Setup and the npm scripts                  | `README.md`                                            |
| Conventions, commands, verification        | this file                                              |
| Repeatable workflows (commit, PR, test, …) | `.ai/skills/<name>/SKILL.md` — pick by its description |

Do not create competing documentation; update the owner instead.

## Non-negotiables

- This is a template — keep it intentionally lean; do not add feature-specific code.
- When scaffolding a new project from this template, remind the user of the steps in "Creating a project from this
  template" below.
- Never read or print `.env` values or other secrets.
- Do not add explanatory or rationale comments in code; explain in chat or in docs instead.

## Conventions

### Creating a project from this template

1. Clone and rename the directory and the `package.json` `name` field
2. Update `app.vue` and `nuxt.config.ts` with project metadata
3. Add project-specific dependencies
4. Rewrite `AGENTS.md` with the project's stack and domain context

### Stack and tooling

- Nuxt 4, Vue 3, TypeScript.
- Lint and format with oxlint + oxfmt (root `.oxlintrc.json` / `.oxfmtrc.json`); oxfmt also formats CSS, oxlint does not
  lint it.
- TypeScript config is local to this project, not a shared package: `tsconfig.json` only references the generated
  `.nuxt/tsconfig.{app,server,shared,node}.json` projects, as the official Nuxt 4 starter does. Never add `include` or
  `compilerOptions` there; set compiler options in `nuxt.config.ts` (`typescript.tsConfig`, `typescript.sharedTsConfig`,
  `typescript.nodeTsConfig`, `nitro.typescript.tsConfig`).
- Type-aware oxlint rules (`oxlint-tsgolint`) read the generated `.nuxt/tsconfig.*.json`, so run `npm run prepare:nuxt`
  after a fresh install. They cover `.ts` files only, not `<script>` blocks in `.vue` files; `npm run typecheck`
  (`vue-tsc`) is the type gate for those.

### Structure and naming

- File-based routing in `pages/`; layouts in `layouts/`, composables in `composables/`, server routes in `server/api/`
  and `server/routes/`.
- `<script setup lang="ts">` for every component — no Options API.
- Components are PascalCase files (`PageHeader.vue`) and auto-imported from `components/`; pages are kebab-case
  (`user-profile.vue`).
- Composables export a `use`-prefixed function (`usePageSeo`) from a kebab-case file (`use-page-seo.ts`) and are
  auto-imported from `composables/`.

### Styling

- Global styles live in `assets/styles/` (`variables.css`, `base/`, `elements/`, `utilities/` partials); component
  styles use `<style scoped>` in the `.vue` file.
- Use CSS custom properties for design tokens — never hard-code colours or spacing.
- Mobile-first: base styles for mobile, breakpoints for larger screens.
- No `!important` unless overriding a third-party library; keep selector nesting to at most two levels.

## Working rules

- Run commands from the repository root with the Node version in `.nvmrc`; use the npm scripts in `package.json`.
- Git hooks come from `lefthook.yml` (`npm run install:lefthook` once per clone); never bypass them with `--no-verify`.
  When a hook fails, fix the staged files or report the failure — do not work around the hook.
- Never commit, amend or push unless asked. Stage only files that belong to the task; leave unrelated dirty files,
  owner-local files and untracked scratch exactly as found — never restore, reset or stash them to make a task easier.
- Generated output (`.nuxt/`, `.output/`, `dist/`) is never committed.
- Never start, stop or restart the owner's dev server (`npm run dev`, `npm run preview`). Reuse a healthy one; if it is
  missing, report the exact command for the owner and stop that step. Only terminate processes started by the current
  workflow, by their exact PID — never by process name or port.
- Do not modify unrelated files solely to make a repository-wide check pass, and never silently skip a failing check:
  report the exact command, the failure, and whether it looks related.

## Verification

Verification is proportional to the change. While iterating, run the row(s) that match the files you touched; before
declaring a change complete, widen to every area it crosses. CI runs `lint:ox`, `format:ox:check`, `typecheck`, `knip`
and `build`.

| Changed area                    | While iterating                        | Before completion, when applicable                               |
| ------------------------------- | -------------------------------------- | ---------------------------------------------------------------- |
| `.vue`, `.ts`, `nuxt.config.ts` | `npm run typecheck && npm run lint:ox` | `npm run lint`; `npm run build`                                  |
| CSS, Markdown, JSON, YAML       | `npm run format:ox:check`              | `npm run lint`                                                   |
| static output (`nuxt generate`) | `npm run build`                        | `npm run generate`                                               |
| cross-cutting / tooling         | `npm run lint && npm run typecheck`    | `npm run verify:static` (typecheck, lint, knip); `npm run build` |

## AI workflow layout

| Path                                          | Holds                                                                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `.ai/skills/<name>/`                          | Project skills — the only copy of each; generated files go to the skill's own `output/`, ignored by a skill-local `.gitignore` |
| `.agents/skills/`                             | Third-party skills managed by `npx skills` (`skills-lock.json`), plus a symlink per project skill so Codex discovers it        |
| `.claude/skills/`                             | Symlinks only — Claude Code's discovery path into both of the above                                                            |
| `.claude/settings.json`, `.codex/config.toml` | Per-agent settings only; keep their environment policy in sync                                                                 |
| `.ai/audits/<YYYY-MM-DD>-<slug>/README.md`    | An audit lives here only while it holds unresolved work                                                                        |

## Project skills

All Vue Template-owned skills live canonically under `.ai/skills/`.

Agent-specific skill directories such as `.claude/skills/` and `.agents/skills/` must contain only adapters or symlinks
to those project skills when required for tool discovery (`ln -s ../../.ai/skills/<name>` in both).

Never maintain duplicate copies of a Vue Template-owned `SKILL.md`.

When an audit is done, move its durable conclusions into `AGENTS.md` or `README.md`, carry any open item to a tracked
place, and delete the folder — git history is the archive. Audits carry no screenshots or raw dumps.
