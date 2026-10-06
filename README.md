# vue-template

A template with [Nuxt 4](https://github.com/nuxt/nuxt) built on [Vue 3](https://github.com/vuejs/core) with focus on
performance and best practices.

## Quick start

> [!NOTE]
>
> You need to have [Node.js](https://github.com/nodejs) >= 24.19.0 and npm >= 12.0.0 installed on your computer before
> running this project.

1. First clone this repository and navigate into your project directory
2. `cp .env.example .env` - copy the **.env** file
3. Install the dependencies: `npm install`
4. Generate the Nuxt types (`.nuxt/`) for the editor and type-aware linting: `npm run prepare:nuxt`
5. Install the Git hooks: `npm run install:lefthook`
6. Run the development server: `npm run dev`

## Starting development mode

To launch the project in development mode with hot module replacement.

- `npm run dev`: to compile the [Vue 3](https://github.com/vuejs/core) and [Nuxt 4](https://github.com/nuxt/nuxt)
  application and serve it to the browser

_You can view the development server at <http://localhost:3000>_

## Starting production mode

Build and optimize your application with [Vite](https://github.com/vitejs/vite) for production.

- `npm run build`: build for production with minification

## Generating server (production files)

Build the application, generate every route as a HTML file and statically export to **dist/** directory.

- `npm run generate`: to generate static project files

## Starting preview mode

The option shows the current changes, that are made in development mode to check that everything works before deploying
the code to production.

- `npm run preview`: shows a live project preview

## Starting server with production files

Start the production server (after running `npm run build`).

- `npm run start`: starts a web-server with a preview of your project

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
