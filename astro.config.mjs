import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), tailwind(), react()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});