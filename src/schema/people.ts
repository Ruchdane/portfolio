import { ImageSchema } from "./image";
import { z } from "astro:content";
const Socials = z.object({
  website: z.string().url(),
  mail: z.string().email().optional(),
  github: z.string().url().optional(),
  linkedin: z.string().url().optional(),
});

export const PeopleSchema = z.object({
  profil: ImageSchema,
  name: z.string(),
  socials: Socials,
});

export type People = z.infer<typeof PeopleSchema>;
export type Socials = z.infer<typeof Socials>;
