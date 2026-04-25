# Vue Template

Minimal Nuxt 4 + Vue 3 starter template. Intentionally lean — only core dependencies. Use as base when starting a new Nuxt project.

## Stack

- Nuxt 4, Vue 3, TypeScript
- Shared configs: `@krudi/eslint-config`, `@krudi/typescript-config`, `@krudi/prettier-config`, `@krudi/stylelint-config`

## Commands

```bash
npm run dev        # start dev server (localhost:3000)
npm run build      # production build
npm run generate   # static site generation
npm run preview    # preview production build
npm run lint       # eslint + prettier + stylelint
npm run typecheck  # vue-tsc --noEmit
```

## When creating from this template

1. Clone and rename the directory and `package.json` `name` field
2. Update `app.vue` and `nuxt.config.ts` with project metadata
3. Add project-specific dependencies
4. Create project `AGENTS.md` with stack and domain context
5. Create `.ai/config.json` with project metadata

---

## Cross-project context

- **Uses config from:** `shared-configs` (`@krudi/eslint-config`, `@krudi/typescript-config`, `@krudi/prettier-config`, `@krudi/stylelint-config`)
- When `shared-configs` publishes a new version, update `package.json` in this template

---

## Rules

@.ai/rules/nuxt.md

---

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
