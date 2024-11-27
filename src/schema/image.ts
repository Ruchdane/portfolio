import { z } from "astro:content";

export const ImageSchema = z.object({
	src: z.string(),
	alt: z.string(),
	width: z.number().optional(),
	height: z.number().optional(),
});

export type Image = z.infer<typeof ImageSchema>;