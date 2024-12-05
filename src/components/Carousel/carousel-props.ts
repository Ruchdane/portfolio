import type { Image as ImageType } from "@/schema";

export interface CarouselProps {
  images: ImageType[];
  limit?: number;
  class?: string;
}
