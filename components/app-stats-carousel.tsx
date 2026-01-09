import { Building2, StarIcon, Wallet2 } from "lucide-react";

type CarouselItem = {
  title: string;
  mainContent: React.ReactNode;
  footerContent: React.ReactNode;
};

const carouselItems: CarouselItem[] = [
  {
    title: "1K+ Ratings",
    mainContent: <span className="text-xl font-bold font-sans">4.6</span>,
    footerContent: (
      <span className="text-sm mt-1 text-muted-foreground flex items-center justify-between">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="size-4 text-slate-500" />
        ))}
      </span>
    ),
  },
  {
    title: "Ages",
    mainContent: <span className="text-xl font-bold font-sans">4+</span>,
    footerContent: (
      <span className="text-xs font-sans text-muted-foreground">Controls</span>
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
      <span className="text-xs font-sans text-muted-foreground">Wallets</span>
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
        Divin3circle
      </span>
    ),
  },
  {
    title: "Language",
    mainContent: <span className="text-xl font-bold font-sans">EN</span>,
    footerContent: (
      <span className="text-xs font-sans text-muted-foreground">Only</span>
    ),
  },
  {
    title: "Size",
    mainContent: <span className="text-xl font-bold font-sans">68</span>,
    footerContent: (
      <span className="text-xs font-sans text-muted-foreground">MB</span>
    ),
  },
];

function StatsCarousel() {
  return (
    <div className="mt-10 flex items-center justify-between overflow-x-auto hide-scrollbar">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className="h-28 p-4 mr-4 flex flex-col items-center justify-between"
        >
          <h3 className="text-md font-semibold text-slate-800 mb-2 font-sans text-xs">
            {item.title}
          </h3>
          <div className="mb-2">{item.mainContent}</div>
          <div>{item.footerContent}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsCarousel;
