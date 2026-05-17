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
    plugins: [
      tailwindcss({
        applyBaseStyles: false, // prevents double-injection of base styles
      }),
    ],
    build: {
      cssMinify: "lightningcss", // faster + smaller than cssnano
    },
    resolve: {
      alias: {
        "~": path.resolve("./src/styles"),
      },
    },
  },
  build: {
    // inlineStylesheets: "never",
    assetsInlineLimit: 1024,
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
    layout: "constrained",
    objectFit: "cover",
    objectPosition: "center",
    breakpoints: [640, 750, 828, 1080, 1280],
    responsiveStyles: true,
  },
  experimental: {
    chromeDevtoolsWorkspace: true,
  },
});
