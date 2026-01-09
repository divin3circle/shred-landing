import Navbar from "@/components/navbar";
import { appIcons, bannerImages } from "@/constants";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import StatsCarousel from "@/components/app-stats-carousel";
import AppGallery from "@/components/app-gallery";
import AppDetails from "@/components/app-details";
import AppSocials from "@/components/app-socials";
import Platforms from "@/components/platforms";
import AppVersions from "@/components/app-versions";
import AppPrivacyPolicy from "@/components/app-privacy-policy";
import MoreApps from "@/components/more-apps";

interface AppPageProps {
  params: Promise<{ id: string }>;
}

async function AppPage({ params }: AppPageProps) {
  const { id } = await params;

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
        className="h-64 w-full rounded-2xl mt-4 flex items-center justify-center border border-gray-200 relative"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-20 h-20 rounded-2xl absolute -bottom-5 border border-gray-200 left-5 md:left-10 shadow-lg shadow-gray-500/50 flex items-center justify-center">
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
      <AppSocials />
      <AppGallery />
      <AppDetails appName={id as string} />
      <Platforms appName={id as string} />
      <AppVersions appName={id as string} />
      <AppPrivacyPolicy appName={id as string} />
      <MoreApps appName={id as string} />
    </div>
  );
}

export default AppPage;
