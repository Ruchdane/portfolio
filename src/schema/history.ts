import { z, type ImageFunction } from "astro:content";
import { ImageSchema } from "./image";
import { i18nString } from "./i18nString";

const BaseHistoryItemSchema = (image: ImageFunction) =>
  z.object({
    beginDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    name: z.string(),
    image: ImageSchema(image),
    description: i18nString,
  });

export const EducationSchema = (image: ImageFunction) =>
  BaseHistoryItemSchema(image).extend({
    formation: z.string(),
    diplome: z.string().optional(),
  });

export const ExperienceSchema = (image: ImageFunction) =>
  BaseHistoryItemSchema(image).extend({
    role: i18nString,
  });

export type Education = z.infer<ReturnType<typeof EducationSchema>>;
export type Experience = z.infer<ReturnType<typeof ExperienceSchema>>;
