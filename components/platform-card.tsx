import { Platform } from "@/constants";
import Image from "next/image";

function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <div className="rounded-3xl h-58 border border-gray-200 p-4">
      <div className="flex items-center gap-2">
        <Image
          src={platform.iconUrl}
          alt={platform.name}
          width={34}
          height={34}
          className="rounded-full border p-.5"
        />
        <h1 className="text-2xl font-bold font-sans">{platform.name}</h1>
      </div>
      <p className="text-muted-foreground text-sm text-balance leading-relaxed font-sans mt-2 border-b border-gray-200 pb-2">
        {platform.description}
      </p>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-2">
          <span className="font-sans text-sm text-gray-600">
            Oldest Supported Version
          </span>
          <span className="font-sans text-sm font-semibold text-gray-800">
            {platform.oldestSupportedVersion}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-2">
          <span className="font-sans text-sm text-gray-600">
            Latest Version
          </span>
          <span className="font-sans text-sm font-semibold text-gray-800">
            {platform.latestVersion}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlatformCard;
