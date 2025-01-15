import { ImageSchema } from "./image";
import { z, type ImageFunction } from "astro:content";
const Socials = z.object({
  website: z.string().url().optional(),
  mail: z.string().email().optional(),
  github: z.string().url().optional(),
  linkedin: z.string().url().optional(),
});

export const PeopleSchema = (image: ImageFunction) =>
  z.object({
    profil: ImageSchema(image),
    name: z.string(),
    socials: Socials,
  });

export type People = z.infer<ReturnType<typeof PeopleSchema>>;
export type Socials = z.infer<typeof Socials>;
