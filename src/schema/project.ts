import { reference, z, type ImageFunction } from "astro:content";
import { ImageSchema } from "@/schema/image";
import { TechnologieEnum, PlatformeEnum } from "@/schema/enum";
import { SITE_URL } from "@/consts";
import s from "schema-dts";
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
    title: z.string(),
    description: z.string(),
    thumbs: z.array(ImageSchema(image)).min(1),
    showcases: z.array(ImageSchema(image)).min(1).optional(),

    websiteUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
    downloadUrl: z.string().url().optional(),

    technologies: z.array(TechnologieEnum).min(1),
    platformes: z.array(PlatformeEnum).min(1),

    collaborators: z.array(reference("people")),
    isFeatured: z.boolean().optional(),

    seo: z
      .object({
        type: projectSeoType,
        category: z.array(z.string()).min(1),
      })
      .required(),
  });

export type Project = z.infer<ReturnType<typeof ProjectSchema>>;

export function generateProjectListSchema(
  projects: (Project & { id: string })[]
): s.ItemList {
  return {
    "@type": "ItemList",
    itemListElement: projects.map(({ id, ...project }, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        item: generateProjectSchema(id, project),
      };
    }),
  };
}

export function generateProjectSchema(id: string, project: Project) {
  const generator =
    // @ts-ignore
    GenerateCreativeWorkSchema["generate" + project.seo?.type] ??
    GenerateCreativeWorkSchema.generateSoftwareApplication;
  return generator(id, project);
}

const GenerateCreativeWorkSchema = {
  generateWebSite(_: string, project: Project): s.WebSite {
    return {
      "@type": "WebSite",
      name: project.title,
      description: project.description,
      url: project.websiteUrl ?? `${SITE_URL}/projects/${project.title}`,
    };
  },

  generateSoftwareApplication(
    id: string,
    project: Project
  ): s.SoftwareApplication {
    // @ts-ignore
    return {
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description,
      operatingSystem: project.platformes.join(", "),
      downloadUrl: project.downloadUrl,
      applicationCategory: project.seo?.category.join(", "),
      // Checkout https://github.com/schemaorg/schemaorg/issues/2586#issuecomment-635937169
      url: project.websiteUrl ?? `${SITE_URL}/projects/${id}`,
    };
  },

  generateWebApplication(id: string, project: Project): s.WebApplication {
    return {
      ...GenerateCreativeWorkSchema.generateSoftwareApplication(id, project),
      "@type": "WebApplication",
    };
  },

  generateVideoGame(id: string, project: Project): s.VideoGame {
    return {
      ...GenerateCreativeWorkSchema.generateSoftwareApplication(id, project),
      "@type": "VideoGame",
      gamePlatform: project.platformes,
    };
  },

  generateMobileApplication(id: string, project: Project): s.MobileApplication {
    return {
      ...GenerateCreativeWorkSchema.generateSoftwareApplication(id, project),
      "@type": "MobileApplication",
    };
  },
} as const;
