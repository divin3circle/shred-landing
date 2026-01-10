import {
  getAppAge,
  getAppData,
  getAppDeveloper,
  getAppGitHubStarCount,
} from "@/constants";
import { Building2, StarIcon, Wallet2 } from "lucide-react";

type CarouselItem = {
  title: string;
  mainContent: React.ReactNode;
  footerContent: React.ReactNode;
};

function StatsCarousel({ appName }: { appName: string }) {
  const carouselItems: CarouselItem[] = [
    {
      title: "Stars",
      mainContent: (
        <span className="text-xl font-bold font-sans">
          {getAppGitHubStarCount(appName)}
        </span>
      ),
      footerContent: (
        <span className="text-sm mt-1 text-muted-foreground flex items-center justify-between">
          {Array.from({ length: 3 }).map((_, index) => (
            <StarIcon key={index} className="size-3 text-slate-500" />
          ))}
        </span>
      ),
    },
    {
      title: "Ages",
      mainContent: (
        <span className="text-xl font-bold font-sans">
          {getAppAge(appName).age}
        </span>
      ),
      footerContent: (
        <span className="text-xs font-sans text-muted-foreground">
          {getAppAge(appName).period}
        </span>
      ),
    },
    {
      title: "Chart",
      mainContent: <span className="text-xl font-bold font-sans">No. 1</span>,
      footerContent: (
        <span className="text-xs font-sans text-muted-foreground">
          Downloads
        </span>
      ),
    },
    {
      title: "Category",
      mainContent: (
        <span className="text-xl font-bold font-sans">
          <Wallet2 className="inline size-6 mr-2" />
        </span>
      ),
      footerContent: (
        <span className="text-xs font-sans text-muted-foreground">
          {getAppData(appName).category}
        </span>
      ),
    },
    {
      title: "Developer",
      mainContent: (
        <span className="text-xl font-bold font-sans">
          <Building2 className="inline size-6 mr-2" />
        </span>
      ),
      footerContent: (
        <span className="text-xs font-sans text-muted-foreground">
          {getAppDeveloper(appName)}
        </span>
      ),
    },
    {
      title: "Language",
      mainContent: (
        <span className="text-xl font-bold font-sans">
          {getAppData(appName).language}
        </span>
      ),
      footerContent: (
        <span className="text-xs font-sans text-muted-foreground">Only</span>
      ),
    },
    {
      title: "Size",
      mainContent: (
        <span className="text-xl font-bold font-sans">
          {getAppData(appName).size}
        </span>
      ),
      footerContent: (
        <span className="text-xs font-sans text-muted-foreground">MB</span>
      ),
    },
  ];

  return (
    <div className="mt-10 flex items-center justify-between overflow-x-auto hide-scrollbar border-t border-b border-gray-200 py-4">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className="h-26 p-4 mr-4 flex flex-col items-center justify-between"
        >
          <h3 className="text-md uppercase font-semibold text-muted-foreground mb-2 font-sans text-xs">
            {item.title}
          </h3>
          <div className="mb-2">{item.mainContent}</div>
          <div className="">{item.footerContent}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsCarousel;
