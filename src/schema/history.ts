import { z } from "astro:content";
import { ImageSchema } from "./image";

const BaseHistoryItemSchema = z.object({
    beginDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    name: z.string(),
    image: ImageSchema,
    description: z.string()
});

export const EducationSchema = BaseHistoryItemSchema.extend({
    formation: z.string(),
    diplome: z.string().optional()
});

export const ExperienceSchema = BaseHistoryItemSchema.extend({
    role: z.string()
});

export type Education = z.infer<typeof EducationSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;