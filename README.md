# About this app

This is a small portfolio site built with modern web tooling.

## Tech stack

- **Framework:** React
- **Tooling / Bundler:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Font Awesome (`@fortawesome/react-fontawesome`)
- **Routing:** `react-router`
- **Deployment:** `gh-pages` (publishes the `dist` folder to GitHub Pages)
- **Linting:** ESLint
- **Formatting:** Prettier (with `prettier-plugin-tailwindcss`)
- **Vite React plugin:** `@vitejs/plugin-react-swc`

## Available commands

Run these from the project root after installing dependencies with `npm install`.

- `npm run dev`: Starts the Vite development server for local development.
- `npm run build`: Runs TypeScript build (`tsc -b`) and then `vite build` to produce a production `dist` folder.
- `npm run preview`: Serves the production build locally using `vite preview` so you can check the built site.
- `npm run lint`: Runs ESLint across the project to detect linting issues.
- `npm run format`: Runs Prettier in check mode (`prettier --check .`) to show formatting issues.
- `npm run format:fix`: Runs Prettier to write formatting changes (script uses a Node wrapper to execute Prettier with `--write`).
- `npm run predeploy`: Runs the `build` script (this is configured to run automatically before `deploy`).
- `npm run deploy`: Publishes the `dist` folder to GitHub Pages using `gh-pages -d dist`.

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Start local development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Deploy to GitHub Pages:

```bash
npm run deploy
```
