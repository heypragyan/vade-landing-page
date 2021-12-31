import { ImageLoaderProps } from "next/image";

export const cloudflareImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (!quality) {
    quality = 75;
  }
  return `https://images.vadelabs.workers.dev?width=${width}&quality=${quality}&image=https://[yourdomain.com]${src}`;
};
