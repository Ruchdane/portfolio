import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";
import {
  EducationSchema,
  ExperienceSchema,
  PeopleSchema,
  ProjectSchema,
} from "@/schema";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const project = defineCollection({
  type: "content",
  schema: ({ image }) => ProjectSchema(image),
});

const experience = defineCollection({
  type: "content",
  schema: ({ image }) => ExperienceSchema(image),
});

const education = defineCollection({
  type: "content",
  schema: ({ image }) => EducationSchema(image),
});

const people = defineCollection({
  loader: file("src/content/people/peoples.yml"),
  schema: ({ image }) => PeopleSchema(image),
});
export const collections = { blog, project, experience, education, people };
