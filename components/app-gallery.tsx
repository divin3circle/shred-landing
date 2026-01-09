"use client";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { getAppGallery } from "@/constants";

export function GalleryCarousel({ appName }: { appName: string }) {
  if (!appName) {
    return null;
  }
  const appGallery = getAppGallery(appName);
  const data = appGallery.images;
  const images = data.map((card) => card);

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl mx-auto text-lg font-bold text-neutral-800 font-sans">
        App Gallery
      </h2>
      <Carousel images={images} />
    </div>
  );
}

function AppGallery({ appName }: { appName: string }) {
  return (
    <div className="mt-16 border-b border-gray-200 pb-10">
      <GalleryCarousel appName={appName} />
    </div>
  );
}

export default AppGallery;
