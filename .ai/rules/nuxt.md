---
description: Nuxt 4 / Vue 3 conventions for this template
globs: ["**/*.vue", "**/*.ts"]
alwaysApply: false
---

# Nuxt / Vue Conventions

## Router

- Nuxt 4 file-based routing in `pages/`
- Layouts in `layouts/`, composables in `composables/`
- Server routes in `server/api/` and `server/routes/`

## Components

- `<script setup lang="ts">` for all components — no Options API
- PascalCase component names, kebab-case filenames
- Auto-imported from `components/` — no need to import manually

## Composables

- Prefix with `use` (`useUserSession`, `useCart`)
- Auto-imported from `composables/` — no need to import manually

## File naming

- Pages: kebab-case (`user-profile.vue`)
- Components: PascalCase filename (`UserProfile.vue`)
- Composables: camelCase with `use` prefix (`useUserSession.ts`)

## Shared configs (from `@krudi/*`)

- ESLint: `@krudi/eslint-config` · TypeScript: `@krudi/typescript-config`
- Prettier: `@krudi/prettier-config` · Stylelint: `@krudi/stylelint-config`

## Commands

```bash
npm run dev        # dev server
npm run build      # production build
npm run generate   # static site generation
npm run lint       # eslint + prettier + stylelint
npm run typecheck  # vue-tsc --noEmit
```
