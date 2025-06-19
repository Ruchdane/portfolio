import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import {
  EducationSchema,
  ExperienceSchema,
  PeopleSchema,
  ProjectSchema,
} from "@/schema";

const project = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/project" }),
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
export const collections = { project, experience, education, people };
