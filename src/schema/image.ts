import { z, type ImageFunction } from "astro:content";
import s from "schema-dts";

export const ImageSchema = (image: ImageFunction) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

export type Image = z.infer<ReturnType<typeof ImageSchema>>;

export const generateImageSchema = ({
  alt,
  src: image,
}: Image): s.ImageObject => {
  return {
    "@type": "ImageObject",
    url: image.src,
    width: `${image.width} px`,
    height: `${image.height} px`,
    description: alt,
  };
};
