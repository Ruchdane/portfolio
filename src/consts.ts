// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Technologie } from "@/schema";

export const SITE_LOGO = "/logo.svg";
export const SITE_TITLE = "Ruchdane";
export const SITE_DESCRIPTION = "Hi I'm AMADOU Ruchdane a software engineer";

export const NAVIGATION_LINKS = [
  {
    link: "/",
    title: "Acceuil",
  },
  {
    link: "/project",
    title: "Projets",
  },
  {
    link: "/blog",
    title: "Expériences",
  },
  {
    link: "/about",
    title: "Blogs",
  },
];

export const TECHNOLOGIE_MAP: Record<Technologie, { name: string; icon: string }> = {
  "next": {
    name: "NextJS",
    icon: "/next.svg"
  },
  rust: {
    name: "rust",
    icon: "rust"
  },
  dart: {
    name: "dart",
    icon: "dart"
  },
  typescript: {
    name: "typescript",
    icon: "typescript"
  },
  javascript: {
    name: "javascript",
    icon: "javascript"
  },
  c: {
    name: "c",
    icon: "c"
  },
  c_sharp: {
    name: "c_sharp",
    icon: "c_sharp"
  },
  php: {
    name: "php",
    icon: "php"
  },
  html: {
    name: "html",
    icon: "html"
  },
  css: {
    name: "css",
    icon: "css"
  },
  sass: {
    name: "sass",
    icon: "sass"
  },
  react: {
    name: "react",
    icon: "react"
  },
  mithril: {
    name: "mithril",
    icon: "mithril"
  },
  tauri: {
    name: "tauri",
    icon: "tauri"
  },
  flutter: {
    name: "flutter",
    icon: "flutter"
  },
  astro: {
    name: "astro",
    icon: "astro"
  },
  postgresql: {
    name: "postgresql",
    icon: "postgresql"
  },
  mysql: {
    name: "mysql",
    icon: "mysql"
  },
  firebase: {
    name: "firebase",
    icon: "firebase"
  },
  supabase: {
    name: "supabase",
    icon: "supabase"
  },
  vercel: {
    name: "vercel",
    icon: "vercel"
  },
  netlify: {
    name: "netlify",
    icon: "netlify"
  },
  aws: {
    name: "aws",
    icon: "aws"
  },
  google_cloud: {
    name: "google_cloud",
    icon: "google_cloud"
  },
  digital_ocean: {
    name: "digital_ocean",
    icon: "digital_ocean"
  },
  cloudflare: {
    name: "cloudflare",
    icon: "cloudflare"
  },
  heroku: {
    name: "heroku",
    icon: "heroku"
  },
  github: {
    name: "github",
    icon: "github"
  },
  gitlab: {
    name: "gitlab",
    icon: "gitlab"
  },
  azure_devops: {
    name: "azure_devops",
    icon: "azure_devops"
  }
}