"use client";
import { Carousel } from "@/components/ui/apple-cards-carousel";

export function GalleryCarousel() {
  const images = data.map((card) => card.src);

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 font-sans">
        App Gallery
      </h2>
      <Carousel images={images} />
    </div>
  );
}

const data = [
  {
    src: "/gosetup-home.png",
  },
  {
    src: "/gosetup-1.png",
  },
  {
    src: "/gosetup-2.png",
  },
  {
    src: "/gosetup-3.png",
  },
  {
    src: "/gosetup-1.png",
  },
  {
    src: "/gosetup-2.png",
  },
];

function AppGallery() {
  return (
    <div className="mt-16">
      <GalleryCarousel />
    </div>
  );
}

export default AppGallery;
