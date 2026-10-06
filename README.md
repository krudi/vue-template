# vue-template

A template with [Nuxt 4](https://github.com/nuxt/nuxt) built on [Vue 3](https://github.com/vuejs/core),
[Tailwind CSS v4](https://tailwindcss.com) and [shadcn-vue](https://www.shadcn-vue.com) with focus on performance and
best practices.

## Quick start

> [!NOTE]
>
> You need [Node.js](https://github.com/nodejs) >= 24.19.0 and npm >= 12.0.0.

1. Clone this repository and navigate into the project directory
2. `cp .env.example .env` - copy the **.env** file
3. `npm install` - install the dependencies
4. `npm run prepare:nuxt` - generate the Nuxt types (`.nuxt/`) for the editor and type-aware linting
5. `npm run install:lefthook` - install the Git hooks
6. `npm run dev` - start the development server at <http://localhost:3000>

Build for production with `npm run build` and serve the result with `npm run start`; `npm run generate` exports a static
site and `npm run preview` previews the build.

## Commands for linting/fixing files

Navigate into your project directory and start linting your files.

- `npm run lint`: runs the Oxlint and Oxfmt checks
- `npm run lint:ox`: lints JavaScript and TypeScript
    - `npm run lint:ox:fix`: fixes supported Oxlint findings
- `npm run format:ox`: formats supported repository files
    - `npm run format:ox:check`: checks formatting without writing files
- `npm run typecheck`: type-checks the project with `vue-tsc`
- `npm run knip`: reports unused files, exports and dependencies
- `npm run verify:static`: runs `typecheck`, `lint` and `knip`
- `npm run prepare:nuxt`: regenerates the Nuxt types in `.nuxt/`
