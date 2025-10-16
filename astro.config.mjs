// @ts-check
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "ca"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false, // Spanish URLs won't have /es/ prefix
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
