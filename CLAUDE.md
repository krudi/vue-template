# Vue Template

Minimal Nuxt 4 + Vue 3 starter — the base for all new Nuxt projects in this workspace.

@AGENTS.md

## For Claude Code

### Slash commands

| Command | What it does |
|---------|---|
| `/test` | Run lint, typecheck, and build |

### Rules loaded automatically

| Rule file | Applied to |
|-----------|---|
| `.ai/rules/nuxt.md` | `**/*.vue`, `**/*.ts` |

### Constraints

- This is a template — keep it intentionally lean; do not add feature-specific code
- When scaffolding a new project from this template, remind the user to update `package.json` name, `nuxt.config.ts`, `app.vue`, and create a project-specific `AGENTS.md` and `.ai/config.json`
- Always use `@krudi/*` shared configs — do not add standalone ESLint/Prettier/TypeScript configs
