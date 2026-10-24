import Image from "next/image";
import { SideImageProps } from "@/app/types";

// Image with the following text wrapping beside it on desktop, full width on mobile
export default function SideImage({ src, alt }: SideImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={450}
      className="w-full md:w-1/2 md:float-left md:mr-6 mb-4 rounded-xl border border-black object-cover"
    />
  );
}
