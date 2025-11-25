import { reference, z, type ImageFunction } from "astro:content";
import { generateImageSchema, ImageSchema } from "@/schema/image";
import { TechnologieEnum, PlatformeEnum } from "@/schema/enum";
import { SITE_URL } from "@/consts";
import s from "schema-dts";
import { i18nString } from "./i18nString";
import { generatePersonSchema, type People } from "./people";
const projectSeoType = z.enum([
  "WebApplication",
  "WebSite",
  "VideoGame",
  "MobileApplication",
  "SoftwareApplication",
]);
export const ProjectSchema = (image: ImageFunction) =>
  z.object({
    logo: image().optional(),
    title: i18nString,
    description: i18nString,
    thumbs: z.array(ImageSchema(image)).min(1),
    showcases: z.array(ImageSchema(image)).min(1).optional(),

    websiteUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
    downloadUrl: z.string().url().optional(),

    technologies: z.array(TechnologieEnum).min(1),
    platformes: z.array(PlatformeEnum).min(1),

    collaborators: z.array(reference("people")),
    isFeatured: z.boolean().optional(),

    // SEO: Date fields for freshness signals
    publishDate: z.coerce.date().optional(),
    modifiedDate: z.coerce.date().optional(),

    seo: z
      .object({
        type: projectSeoType,
        category: z.array(z.string()).min(1),
      })
      .required(),
  });

export type Project = z.infer<ReturnType<typeof ProjectSchema>>;

export function generateProjectListSchema(
  projects: (Project & { id: string })[],
  me: People
): s.ItemList {
  return {
    "@type": "ItemList",
    itemListElement: projects.map(({ id, ...project }, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        item: generateProjectSchema(id, project, me),
      };
    }),
  };
}

export function generateProjectSchema(
  id: string,
  project: Project,
  me: People
) {
  const generator =
    // @ts-ignore
    GenerateCreativeWorkSchema["generate" + project.seo?.type] ??
    GenerateCreativeWorkSchema.generateSoftwareApplication;
  return generator(id, project, me);
}

const GenerateCreativeWorkSchema = {
  generateWebSite(id: string, project: Project, me: People): s.WebSite {
    const image = project.thumbs[0];
    return {
      "@type": "WebSite",
      name: project.title.fr,
      description: project.description.fr,
      url: project.websiteUrl ?? `${SITE_URL}/project/${id}`,
      ...(image && {
        image: generateImageSchema(image),
        thumbnail: generateImageSchema(image),
      }),
      author: generatePersonSchema(me),
    };
  },

  generateSoftwareApplication(
    id: string,
    project: Project,
    me: People
  ): s.SoftwareApplication {
    const image = project.thumbs[0];
    return {
      "@type": "SoftwareApplication",
      name: project.title.fr,
      description: project.description.fr,
      operatingSystem: project.platformes.join(", "),
      applicationCategory: project.seo?.category.join(", "),
      author: generatePersonSchema(me),
      ...(project.downloadUrl && {
        downloadUrl: project.downloadUrl,
      }),
      ...(image && {
        image: generateImageSchema(image),
      }),
      ...(project.publishDate && {
        datePublished: project.publishDate.toISOString(),
      }),
      ...(project.modifiedDate && {
        dateModified: project.modifiedDate.toISOString(),
      }),
      url: project.websiteUrl ?? `${SITE_URL}/project/${id}`,
    };
  },

  generateWebApplication(
    id: string,
    project: Project,
    me: People
  ): s.WebApplication {
    return {
      ...GenerateCreativeWorkSchema.generateSoftwareApplication(
        id,
        project,
        me
      ),
      "@type": "WebApplication",
    };
  },

  generateVideoGame(id: string, project: Project, me: People): s.VideoGame {
    return {
      ...GenerateCreativeWorkSchema.generateSoftwareApplication(
        id,
        project,
        me
      ),
      "@type": "VideoGame",
      gamePlatform: project.platformes,
    };
  },

  generateMobileApplication(
    id: string,
    project: Project,
    me: People
  ): s.MobileApplication {
    return {
      ...GenerateCreativeWorkSchema.generateSoftwareApplication(
        id,
        project,
        me
      ),
      "@type": "MobileApplication",
    };
  },
} as const;
