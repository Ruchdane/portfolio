// @ts-nocheck
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import purgecss from "astro-purgecss";
import astroI18next from "astro-i18next";

// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "never",
  },
  site: "https://ruchdane.me",
  integrations: [
    astroI18next(),
    mdx(),
    sitemap(),
    /* partytown(),*/
    compress(),
    purgecss(),
  ],
  image: {
    experimentalLayout: "responsive",
  },
  experimental: {
    responsiveImages: true,
    svg: true,
  },
});
