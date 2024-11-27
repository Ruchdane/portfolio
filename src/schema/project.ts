import { z } from "astro:content";
import { ImageSchema } from "@/schema/image";
import { TechnologieEnum, PlatformeEnum } from "@/schema/enum";
export const ProjectSchema = z.object({
  logo: z.string().optional(),
  title: z.string(),
  description: z.string(),
  thumbs: z.array(ImageSchema).min(1),

  websiteUrl: z.string().optional(),
  sourceUrl: z.string().optional(),
  downloadUrl: z.string().optional(),

  technologies: z.array(TechnologieEnum).min(1),
  platformes: z.array(PlatformeEnum).min(1),

  isFeatured: z.boolean().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;
