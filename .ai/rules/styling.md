---
description: CSS and styling conventions for this project
globs: ["**/*.css", "**/*.vue"]
alwaysApply: true
---

# Styling Conventions

- Scoped styles in `.vue` files (`<style scoped>`) for component-level styles
- Use CSS custom properties for design tokens — never hardcode colors or spacing
- Mobile-first: base styles for mobile, breakpoints for larger screens
- No `!important` unless overriding a third-party library
- Stylelint enforced via `@krudi/stylelint-config` — run `npm run lint` to check
- Keep selector specificity flat — avoid nesting more than 2 levels deep
