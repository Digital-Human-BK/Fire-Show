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

- Use **functional components** with arrow functions.
- Use **`type`** instead of `interface` for defining props and state.
- **STRICTLY use named exports**; avoid default exports for better refactoring and intellisense.
- Use **descriptive variable names** (e.g., `isUserLoggedIn` instead of `auth`).

## UI & Styling

- **Mobile-first** responsive design is mandatory.
- Use **camelCase for class names** (e.g., `.userCard`) in SCSS to allow dot notation in TypeScript (`styles.userCard`).
- **Design Tokens:** Use variables from the Kinetic Dark System (e.g., `$color-accent`, `$space-4`, `$font-heading`). Hardcoded hex/rgba values are forbidden.

## Component Structure

- **Components:** `src/components/` (Shared and UI components).
- **Pages:** `src/pages/` (Route-level components).
- **Global Styles:** `src/styles/` (Store `tokens.scss` and global resets here).
- **Component Creation:** When creating a component, always create the matching `[ComponentName].module.scss` in the same directory.
