"use client";

import { getAppGitHub, getAppVersionReport } from "@/constants";
import { Button } from "./ui/button";
import React from "react";

function AppVersions({ appName }: { appName: string }) {
  const versions = getAppVersionReport(appName);
  const url = getAppGitHub(appName);

  if (!versions || versions.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 border-b border-gray-200 pb-8">
      <div className="flex items-center justify-between">
        <h1 className="font-sans text-lg font-semibold mb-2">
          What&apos;s New
        </h1>
        <h1 className="text-base font-sans text-orange-500 font-semibold">
          Version History
        </h1>
      </div>
      <div className="mt-4 flex flex-col">
        {versions.slice(0, 2).map((version, index) => (
          <div
            key={index}
            className="mb-4 pb-4 border-b border-dashed border-gray-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-sm max-w-1/2 text-gray-800">
                {version.description}
              </span>
              <div className="flex flex-col justify-end items-end">
                <span className="font-sans text-sm text-muted-foreground">
                  {version.releaseDate}
                </span>
                <span className="ml-4 font-sans text-sm text-muted-foreground">
                  Version {version.version}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-center w-full">
        <Button
          variant="ghost"
          size="sm"
          className="w-full max-w-xs font-sans text-sm font-normal border border-gray-300 rounded-3xl"
          onClick={() => window.open(url, "_blank")}
        >
          View Full Changelog
        </Button>
      </div>
    </div>
  );
}

export default AppVersions;
