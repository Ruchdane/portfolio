// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { Globe, LaptopMinimal, Smartphone } from "lucide-astro";
import logo from "./assets/icons/logo.svg";
import { Platforme, Technologie } from "@/schema/enum";
export const SITE_URL = "https://ruchdane.me";
export const SITE_LOGO = logo;

export const NAVIGATION_LINKS = [
  {
    link: "/",
    title: "Accueil",
  },
  {
    link: "/project",
    title: "Projets",
  },
  {
    link: "#email",
    title: "Contact",
  },
  {
    link: "/about",
    title: "À propos",
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
    icon: "nextjs-plain",
  },
  rust: {
    name: "rust",
    icon: "rust-original",
  },
  dart: {
    name: "dart",
    icon: "dart-plain colored",
  },
  typescript: {
    name: "typescript",
    icon: "typescript-plain colored",
  },
  javascript: {
    name: "javascript",
    icon: "javascript-plain colored",
  },
  c: {
    name: "c",
    icon: "c-plain",
  },
  c_sharp: {
    name: "C#",
    icon: "csharp-plain",
  },
  php: {
    name: "PHP",
    icon: "php-plain colored",
  },
  html: {
    name: "HTML",
    icon: "html-plain colored",
  },
  css: {
    name: "CSS",
    icon: "css-plain colored",
  },
  sass: {
    name: "SASS",
    icon: "sass-plain colored",
  },
  react: {
    name: "react",
    icon: "react-plain colored",
  },
  mithril: {
    name: "mithril",
    icon: "mithril-original",
  },
  tauri: {
    name: "tauri",
    icon: "tauri-plain colored",
  },
  flutter: {
    name: "flutter",
    icon: "flutter-plain colored",
  },
  astro: {
    name: "astro",
    icon: "astro-plain colored",
  },
  postgresql: {
    name: "postgresql",
    icon: "postgresql-plain colored",
  },
  mysql: {
    name: "mysql",
    icon: "mysql-plain",
  },
  firebase: {
    name: "firebase",
    icon: "firebase-plain colored",
  },
  supabase: {
    name: "supabase",
    icon: "supabase-plain colored",
  },
  vercel: {
    name: "vercel",
    icon: "vercel-plain colored",
  },
  netlify: {
    name: "netlify",
    icon: "netlify-plain colored",
  },
  aws: {
    name: "aws",
    icon: "aws-plain colored",
  },
  google_cloud: {
    name: "google_cloud",
    icon: "google_cloud-plain colored",
  },
  digital_ocean: {
    name: "digital_ocean",
    icon: "digital_ocean-plain colored",
  },
  cloudflare: {
    name: "cloudflare",
    icon: "cloudflare-plain colored",
  },
  heroku: {
    name: "heroku",
    icon: "heroku-plain colored",
  },
  github: {
    name: "github",
    icon: "github-original",
  },
  gitlab: {
    name: "gitlab",
    icon: "gitlab-plain colored",
  },
  azure_devops: {
    name: "azure devops",
    icon: "azuredevops-plain colored",
  },
  trello: {
    name: "trello",
    icon: "trello-plain colored",
  },
  tailwindcss: {
    name: "tailwindcss",
    icon: "tailwindcss-plain colored",
  },
  prisma: {
    name: "prisma",
    icon: "prisma-original",
  },
  aspnet: {
    name: "ASP.NET",
    icon: "aspnet",
  },
  winform: {
    name: "winform",
    icon: "winform",
  },
  figma: {
    name: "figma",
    icon: "figma-plain",
  },
  penpot: {
    name: "penpot",
    icon: "penpot-plain",
  },
  storybook: {
    name: "storybook",
    icon: "storybook-plain colored",
  },
  cypress: {
    name: "cypress",
    icon: "cypressio-plain",
  },
  canva: {
    name: "canva",
    icon: "canva-plain",
  },
  posthog: {
    name: "posthog",
    icon: "posthog-plain",
  },
  notion: {
    name: "notion",
    icon: "notion-plain colored",
  },
  miro: {
    name: "miro",
    icon: "miro",
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
    label: "Languages",
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
    label: "Frameworks",
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
