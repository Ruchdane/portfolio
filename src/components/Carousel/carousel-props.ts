import type { Image as ImageType} from "@/schema"

export interface CarouselProps {
  width: number;
  height: number;
  images: ImageType[];
}