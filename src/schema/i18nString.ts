import { z } from "astro/zod";

export const i18nString = z.object({
  fr: z.string(),
  en: z.string(),
  yo: z.string(),
});
export type I18nString = z.infer<typeof i18nString>;
