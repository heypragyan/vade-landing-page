import { ImageLoaderProps } from "next/image";

export const cloudflareImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (!quality) {
    quality = 75;
  }
  return `https://spring-forest-c98d.vadelabs.workers.dev?width=${width}&quality=${quality}&image=https://[yourdomain.com]${src}`;
};
