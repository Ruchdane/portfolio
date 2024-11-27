import { z } from "astro:content";

export const TechnologieEnum = z.enum([
    // language
    "rust", "dart", "typescript", "javascript", "c", "c_sharp", "php", "html", "css", "sass",
    // library
    "react", "mithril",
    // framework
    "next","tauri","flutter","astro",
    // tools
    "postgresql", "mysql", "firebase", "supabase",
    // hosting platforme
    "vercel", "netlify", "aws", "google_cloud", "digital_ocean", "cloudflare", "heroku",
    // collaboration platforme
    "github", "gitlab", "azure_devops",
]);
export type Technologie = z.infer<typeof TechnologieEnum>;
export const Technologie = TechnologieEnum.Enum;

export const PlatformeEnum = z.enum([
    "android", "ios", 
    "linux", "windows", "macos", 
    "web", 
]);
export type Platforme = z.infer<typeof PlatformeEnum>;
export const Platforme = PlatformeEnum.Enum;
