"use client";
import Navbar from "@/components/navbar";
import { appIcons, bannerImages } from "@/constants";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import StatsCarousel from "@/components/app-stats-carousel";
import AppGallery from "@/components/app-gallery";

function AppPage() {
  const params = useParams();
  const id = params?.id;

  const bannerImage =
    bannerImages[id as keyof typeof bannerImages] || "/template.avif";
  const appIcon = appIcons[id as keyof typeof appIcons] || "/file.svg";

  return (
    <div className="max-w-7xl mx-auto p-2">
      <Navbar />
      <Link href="/apps" className="flex items-center">
        <ChevronsLeft className="size-4 text-gray-500" />
        <p className="font-mono font-semibold text-sm text-gray-500">
          Back to Apps
        </p>
      </Link>
      <div
        className="h-64 w-full rounded-2xl mt-4 flex items-center justify-center border border-gray-300 relative"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-20 h-20 rounded-2xl absolute -bottom-5 border border-gray-300 left-5 md:left-10 shadow-lg shadow-gray-500/50 flex items-center justify-center">
          <Image
            src={appIcon}
            alt={`${id} icon`}
            width={80}
            height={80}
            className="rounded-2xl"
          />
        </div>
      </div>

      <StatsCarousel />
      <AppGallery />
    </div>
  );
}

export default AppPage;
