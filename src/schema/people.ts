import { ImageSchema } from "./image";
import { getEntry, z, type ImageFunction } from "astro:content";
import s from "schema-dts";

const Socials = z.object({
  website: z.string().url().optional(),
  mail: z.string().email().optional(),
  github: z.string().url().optional(),
  linkedin: z.string().url().optional(),
});

export const PeopleSchema = (image: ImageFunction) =>
  z.object({
    profil: ImageSchema(image),
    name: z.string(),
    socials: Socials,
  });

export type People = z.infer<ReturnType<typeof PeopleSchema>>;
export type Socials = z.infer<typeof Socials>;

export function generatePersonSchema(person: People): s.Person {
  const { name, socials, profil } = person;

  const sameAs = [socials?.github, socials?.linkedin].filter(
    (url) => url !== undefined
  );

  // @ts-ignore
  return {
    "@type": "Person",
    name: name,
    url: socials?.website,
    image: profil?.src.src,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    email: socials?.mail,
  };
}

export async function getMe(): Promise<People> {
  const me = (await getEntry("people", "ruchdane"))?.data;
  if (me === undefined) throw new Error("Entry for `ruchdane` must be defined");
  return me;
}
