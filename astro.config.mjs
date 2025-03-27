// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/en",
  },
  integrations: [
    tailwind(),
    icon(),
    sanity({
      projectId: "dy6scvxw",
      dataset: "public",
      useCdn: false, // for static builds
    }),
  ],
  adapter: cloudflare(),
});
