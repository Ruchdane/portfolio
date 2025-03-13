// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://ruchdane.netlify.app",
  integrations: [mdx(), sitemap(), compress()],
  experimental: {
    svg: true,
  },
});
