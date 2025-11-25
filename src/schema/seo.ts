import { z } from "astro/zod";

export const SEOSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .refine(
      (title) => title.length >= 50 && title.length <= 60,
      (title) => ({
        message: `Title length (${title.length} chars) is not optimal (50-60 chars recommended)`,
      })
    ),
  description: z
    .string()
    .min(1, "Description is required")
    .refine(
      (desc) => desc.length >= 140 && desc.length <= 160,
      (desc) => ({
        message: `Description length (${desc.length} chars) is not optimal (140-160 chars recommended)`,
      })
    ),
});

export type SEOData = z.infer<typeof SEOSchema>;
