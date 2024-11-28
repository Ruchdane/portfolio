import { defineCollection, z } from 'astro:content';
import { EducationSchema, ExperienceSchema, ProjectSchema } from '@/schema';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const project = defineCollection({
	type: 'content',
	schema: ProjectSchema,
});

const experience = defineCollection({
	type: "content",
	schema: ExperienceSchema,
})

const education = defineCollection({
	type: "content",
	schema: EducationSchema,
})

export const collections = { blog, project, experience, education };
