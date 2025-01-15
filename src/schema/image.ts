import { z, type ImageFunction } from "astro:content";

export const ImageSchema = (image: ImageFunction) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

export type Image = z.infer<ReturnType<typeof ImageSchema>>;
