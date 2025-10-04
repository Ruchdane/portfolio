// @ts-nocheck
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import purgecss from "astro-purgecss";
import astroI18next from "astro-i18next";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "path";

// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": path.resolve("./src/styles"),
      },
    },
  },
  build: {
    inlineStylesheets: "never",
  },
  site: "https://ruchdane.me",
  integrations: [
    icon(),
    astroI18next(),
    preact({ devtools: true }),
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
