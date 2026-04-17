import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Auto-inject tokens into every component/page SCSS module so you
        // never need to @use them manually. Style partials and index.scss
        // manage their own imports and are excluded to avoid double-loading.
        additionalData(source: string, filename: string) {
          if (
            filename.includes("/src/styles/") ||
            filename.endsWith("/src/index.scss")
          ) {
            return source;
          }
          return `@use "@/styles/tokens" as *;\n` + source;
        },
      },
    },
  },
});
