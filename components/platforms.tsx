"use client";

import { getAppPlatforms } from "@/constants";
import PlatformCard from "./platform-card";

function Platforms({ appName }: { appName: string }) {
  console.log("Fetching platforms for:", appName);
  const platforms = getAppPlatforms(appName);

  return (
    <div className="mt-8 border-b border-gray-200 pb-8">
      <h1 className="font-sans text-lg font-semibold mb-2">Available On</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {Object.values(platforms).map((platform, index) => (
          <div key={index} className="mb-4 md:mb-0 md:mr-4">
            <PlatformCard platform={platform} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Platforms;
