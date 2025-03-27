import { z } from "astro:content";

export const TechnologieEnum = z.enum([
  "rust",
  "dart",
  "typescript",
  "javascript",
  "c",
  "c_sharp",
  "php",
  "html",
  "css",
  "sass",
  "react",
  "mithril",
  "tailwindcss",
  "prisma",
  "next",
  "tauri",
  "flutter",
  "astro",
  "aspnet",
  "winform",
  "postgresql",
  "mysql",
  "firebase",
  "supabase",
  "vercel",
  "netlify",
  "aws",
  "google_cloud",
  "digital_ocean",
  "cloudflare",
  "heroku",
  "github",
  "gitlab",
  "azure_devops",
  "trello",
  "figma",
  "canva",
]);
export type Technologie = z.infer<typeof TechnologieEnum>;
export const Technologie = TechnologieEnum.Enum;

export const PlatformeEnum = z.enum([
  "android",
  "ios",
  "linux",
  "windows",
  "macos",
  "web",
]);
export type Platforme = z.infer<typeof PlatformeEnum>;
export const Platforme = PlatformeEnum.Enum;
