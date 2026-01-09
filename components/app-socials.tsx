"use client";

import { getAppDeveloper, getAppGitHub } from "@/constants";
import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

function AppSocials({ appName }: { appName: string }) {
  if (!appName) {
    return null;
  }
  const githubUrl = getAppGitHub(appName);

  const handleInstallClick = () => {
    // Logic to handle installation can be added here
    console.log(`Installing ${appName}...`);
  };

  return (
    <div className="mt-4 border-b border-gray-200 pb-4">
      <h1 className="font-sans text-lg font-semibold mb-2">View on Github</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
            <Github className="size-8" color="green" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Link href="">
                <p className="font-sans text-sm font-semibold">
                  @{getAppDeveloper(appName)}
                </p>
              </Link>
              <p className="font-sans text-xs text-muted-foreground">Owner</p>
            </div>
            <Link
              href={githubUrl}
              className="ml-4 text-xs font-sans font-medium underline-offset-4 text-white p-1 rounded-3xl px-4 bg-orange-500"
            >
              View
            </Link>
          </div>
        </div>
        <Button
          variant="default"
          className="mt-4 w-full max-w-xs rounded-3xl font-sans"
          onClick={handleInstallClick}
        >
          Get App
        </Button>
      </div>
    </div>
  );
}

export default AppSocials;
