# React + Vite Project Rules

## Tech Stack

- **React 19** with Vite.
- **TypeScript** is mandatory for all files.
- **SCSS Modules** for styling. Files must be named `[ComponentName].module.scss`.
- **Fonts:** Managed via **@fontsource-variable** packages (Space Grotesk, Manrope). Use variable versions exclusively.
- **Mono Font:** Strictly use the system monospace stack (ui-monospace, Consolas, "Courier New", monospace).
- **No External CDNs:** DO NOT add Google Font `<link>` tags to `index.html`.
- **Font Naming:** Reference fonts in SCSS as `'Space Grotesk Variable'` and `'Manrope Variable'`.
- **Vite Smart Auto-Inject:** Tokens from `@/styles/tokens` are auto-injected. **DO NOT** manually `@use` tokens in component modules.

## Coding Standards

- **HMR & Pure Component Files:** To ensure Vite Fast Refresh (HMR) works, `.tsx` files must **ONLY** export React components.
- **No Side Effects:** Avoid top-level logic or side effects in `.tsx` files that interfere with module "hot-swapping."
- **Export Style:** **STRICTLY use named exports**; avoid default exports.
- **Components:** Use functional components with arrow functions and `type` for props/state.
- **Naming:** Use descriptive variable names (e.g., `isUserLoggedIn`).

## UI & Styling

- **SCSS Import Naming (STRICT):** ALWAYS import SCSS modules as `styles` (e.g., `import styles from './[ComponentName].module.scss';`).
- **Mobile-first** responsive design is mandatory.
- **Class Naming:** Use **camelCase** for SCSS class names (e.g., `.userCard`) to allow dot notation in TS (`styles.userCard`).
- **Design Tokens:** Use variables from the Kinetic Dark System (e.g., `$color-accent`, `$space-4`). Hardcoded hex/rgba values are forbidden.

## Component Structure

- **Directories:** Components in `src/components/`, Pages in `src/pages/`, Styles in `src/styles/`.
- **Creation:** When creating a component, generate the `.tsx`, the `.module.scss`, and (if needed) the `.utils.ts` or `.constants.ts` simultaneously.
