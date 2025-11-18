import { Globe, LaptopMinimal, Smartphone } from "lucide-astro";
import logo from "./assets/icons/logo.svg";
import { Platforme, Technologie } from "@/schema/enum";
import type { I18nString } from "./schema/i18nString";
export const SITE_URL = "https://ruchdane.me";
export const SITE_LOGO = logo;

export const NAVIGATION_LINKS = [
  {
    link: "/",
    title: "navigation.home",
  },
  {
    link: "/project",
    title: "navigation.projects",
  },
  {
    link: "#email",
    title: "navigation.contact",
  },
  {
    link: "/about",
    title: "navigation.about",
  },
];
export const TOOLS: Technologie[] = [
  "netlify",
  "supabase",
  "firebase",
  "github",
  "gitlab",
  "azure_devops",
  "vercel",
  "trello",
  "figma",
  "canva",
];

export const CORE_STACK: Partial<Record<string, Technologie[]>> = {
  web: [
    "typescript",
    "c_sharp",
    "aspnet",
    "next",
    "mithril",
    "react",
    "tailwindcss",
    "prisma",
    "postgresql",
    "mysql",
    "supabase",
    "netlify",
  ],
  desktop: ["rust", "c", "c_sharp", "winform", "tauri"],
  mobile: ["flutter", "dart", "firebase"],
};

export const TECHNOLOGIE_MAP: Record<
  Technologie,
  { name: string; icon: string }
> = {
  next: {
    name: "NextJS",
    icon: "devicon:nextjs",
  },
  rust: {
    name: "rust",
    icon: "devicon:rust",
  },
  dart: {
    name: "dart",
    icon: "devicon:dart",
  },
  typescript: {
    name: "typescript",
    icon: "devicon:typescript",
  },
  javascript: {
    name: "javascript",
    icon: "devicon:javascript",
  },
  c: {
    name: "c",
    icon: "devicon:c",
  },
  c_sharp: {
    name: "C#",
    icon: "devicon:csharp",
  },
  php: {
    name: "PHP",
    icon: "devicon:php",
  },
  html: {
    name: "HTML",
    icon: "devicon:html",
  },
  css: {
    name: "CSS",
    icon: "devicon:css",
  },
  sass: {
    name: "SASS",
    icon: "devicon:sass",
  },
  react: {
    name: "react",
    icon: "devicon:react",
  },
  mithril: {
    name: "mithril",
    icon: "devicon:mithril",
  },
  tauri: {
    name: "tauri",
    icon: "devicon:tauri",
  },
  flutter: {
    name: "flutter",
    icon: "devicon:flutter",
  },
  astro: {
    name: "astro",
    icon: "devicon:astro",
  },
  postgresql: {
    name: "postgresql",
    icon: "devicon:postgresql",
  },
  mysql: {
    name: "mysql",
    icon: "devicon:mysql",
  },
  firebase: {
    name: "firebase",
    icon: "devicon:firebase",
  },
  supabase: {
    name: "supabase",
    icon: "devicon:supabase",
  },
  vercel: {
    name: "vercel",
    icon: "devicon:vercel",
  },
  netlify: {
    name: "netlify",
    icon: "devicon:netlify",
  },
  aws: {
    name: "aws",
    icon: "devicon:aws",
  },
  google_cloud: {
    name: "google_cloud",
    icon: "devicon:google_cloud",
  },
  digital_ocean: {
    name: "digital_ocean",
    icon: "devicon:digital_ocean",
  },
  cloudflare: {
    name: "cloudflare",
    icon: "devicon:cloudflare",
  },
  heroku: {
    name: "heroku",
    icon: "devicon:heroku",
  },
  github: {
    name: "github",
    icon: "simple-icons:github",
  },
  gitlab: {
    name: "gitlab",
    icon: "devicon:gitlab",
  },
  azure_devops: {
    name: "azure devops",
    icon: "devicon:azuredevops",
  },
  trello: {
    name: "trello",
    icon: "devicon:trello",
  },
  tailwindcss: {
    name: "tailwindcss",
    icon: "devicon:tailwindcss",
  },
  prisma: {
    name: "prisma",
    icon: "simple-icons:prisma",
  },
  aspnet: {
    name: "ASP.NET",
    icon: "simple-icons:dotnet",
  },
  winform: {
    name: "winform",
    icon: "simple-icons:formspree",
  },
  figma: {
    name: "figma",
    icon: "devicon:figma",
  },
  penpot: {
    name: "penpot",
    icon: "simple-icons:penpot",
  },
  storybook: {
    name: "storybook",
    icon: "devicon:storybook",
  },
  cypress: {
    name: "cypress",
    icon: "vscode-icons:file-type-light-cypress",
  },
  canva: {
    name: "canva",
    icon: "simple-icons:canva",
  },
  posthog: {
    name: "posthog",
    icon: "devicon:posthog",
  },
  notion: {
    name: "notion",
    icon: "devicon:notion",
  },
  miro: {
    name: "miro",
    icon: "logos:miro-icon",
  },
  mongodb: {
    name: "mongodb",
    icon: "skill-icons:mongodb",
  },
};

export const PLATFORME_MAP: Record<
  string,
  {
    name: string;
    icon: typeof Globe;
    items: Platforme[];
  }
> = {
  web: {
    icon: Globe,
    name: "web",
    items: [Platforme.web],
  },
  desktop: {
    icon: LaptopMinimal,
    name: "Desktop",
    items: [Platforme.linux, Platforme.windows, Platforme.macos],
  },
  mobile: {
    icon: Smartphone,
    name: "Mobile",
    items: [Platforme.android, Platforme.ios],
  },
};

export const TECHNOLOGY_CATEGORIES = [
  {
    label: "programming_languages",
    items: [
      Technologie.rust,
      Technologie.dart,
      Technologie.typescript,
      Technologie.javascript,
      Technologie.c,
      Technologie.c_sharp,
      Technologie.php,
      Technologie.html,
      Technologie.css,
      Technologie.sass,
    ],
  },
  {
    label: "programming_framework",
    items: [
      Technologie.next,
      Technologie.tauri,
      Technologie.flutter,
      Technologie.astro,
      Technologie.aspnet,
      Technologie.winform,
    ],
  },
] as const;

export type Language = "fr" | "en" | "yo";
export const LANGUAGE_MAPPING: I18nString = {
  fr: "Français",
  en: "English",
  yo: "Yorùbá",
};
