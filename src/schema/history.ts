import { z, type ImageFunction } from "astro:content";
import { ImageSchema } from "./image";

const BaseHistoryItemSchema = (image: ImageFunction) =>
  z.object({
    beginDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    name: z.string(),
    image: ImageSchema(image),
    description: z.string(),
  });

export const EducationSchema = (image: ImageFunction) =>
  BaseHistoryItemSchema(image).extend({
    formation: z.string(),
    diplome: z.string().optional(),
  });

export const ExperienceSchema = (image: ImageFunction) =>
  BaseHistoryItemSchema(image).extend({
    role: z.string(),
  });

export type Education = z.infer<ReturnType<typeof EducationSchema>>;
export type Experience = z.infer<ReturnType<typeof ExperienceSchema>>;
