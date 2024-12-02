// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Platforme, Technologie } from "@/schema";
import { Globe, LaptopMinimal, Smartphone } from "lucide-astro";

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
    link: "/about",
    title: "A propos",
  },
];

export const CORE_STACK: Partial<Record<Platforme, Technologie[]>> = {
  web: [ "typescript", "c_sharp", "aspnet", "next","mithril", 
    "react", "tailwindcss", "prisma", "postgresql", "mysql", "supabase", "netlify"],
  mobile: ["flutter", "dart", "firebase"],
  desktop: ["rust", "c", "c_sharp", "winform", "tauri"],
}

export const TECHNOLOGIE_MAP: Record<Technologie, { name: string; icon: string }> = {
  next: {
    name: "NextJS",
    icon: "nextjs-plain"
  },
  rust: {
    name: "rust",
    icon: "rust-original"
  },
  dart: {
    name: "dart",
    icon: "dart-plain colored"
  },
  typescript: {
    name: "typescript",
    icon: "typescript-plain colored"
  },
  javascript: {
    name: "javascript",
    icon: "javascript-plain colored"
  },
  c: {
    name: "c",
    icon: "c-plain"
  },
  c_sharp: {
    name: "C#",
    icon: "csharp-plain"
  },
  php: {
    name: "php",
    icon: "php-plain colored"
  },
  html: {
    name: "html",
    icon: "html-plain colored"
  },
  css: {
    name: "css",
    icon: "css-plain colored"
  },
  sass: {
    name: "sass",
    icon: "sass-plain colored"
  },
  react: {
    name: "react",
    icon: "react-plain colored"
  },
  mithril: {
    name: "mithril",
    icon: "mithril-original"
  },
  tauri: {
    name: "tauri",
    icon: "tauri-plain colored"
  },
  flutter: {
    name: "flutter",
    icon: "flutter-plain colored"
  },
  astro: {
    name: "astro",
    icon: "astro-plain colored"
  },
  postgresql: {
    name: "postgresql",
    icon: "postgresql-plain colored"
  },
  mysql: {
    name: "mysql",
    icon: "mysql-plain"
  },
  firebase: {
    name: "firebase",
    icon: "firebase-plain colored"
  },
  supabase: {
    name: "supabase",
    icon: "supabase-plain colored"
  },
  vercel: {
    name: "vercel",
    icon: "vercel-plain colored"
  },
  netlify: {
    name: "netlify",
    icon: "netlify-plain colored"
  },
  aws: {
    name: "aws",
    icon: "aws-plain colored"
  },
  google_cloud: {
    name: "google_cloud",
    icon: "google_cloud-plain colored"
  },
  digital_ocean: {
    name: "digital_ocean",
    icon: "digital_ocean-plain colored"
  },
  cloudflare: {
    name: "cloudflare",
    icon: "cloudflare-plain colored"
  },
  heroku: {
    name: "heroku",
    icon: "heroku-plain colored"
  },
  github: {
    name: "github",
    icon: "github-plain colored"
  },
  gitlab: {
    name: "gitlab",
    icon: "gitlab-plain colored"
  },
  azure_devops: {
    name: "azure_devops",
    icon: "azure_devops-plain colored"
  },
  trello: {
    name: "trello",
    icon: "trello-plain colored"
  },
  tailwindcss: {
    name: "tailwindcss",
    icon: "tailwindcss-plain colored"
  },
  prisma: {
    name: "prisma",
    icon: "prisma-original"
  },
  aspnet: {
    name: "asp.net",
    icon: "aspnet"
  },
  winform: {
    name: "winform",
    icon: "winform"
  }
}

export const PLATFORME_MAP: Partial<Record<Platforme, {
  name: string;
  icon: typeof Globe;
}>> = {
  web: {
    icon: Globe,
    name: "web",
  },
  desktop: {
    icon: LaptopMinimal,
    name: "Desktop",
  },
  mobile: {
    icon: Smartphone,
    name: "Mobile",
  }
}
