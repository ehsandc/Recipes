import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use environment variable to determine base path
// For GitHub Pages: base = "/Recipes/"
// For Render or local: base = "/"
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === "true" ? "/Recipes/" : "/",
  server: {
    host: true,
  },
});
