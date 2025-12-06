"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { Download } from "lucide-react";
import { LINKS } from "@/constants";

function DownloadComponents() {
  const navigateTo = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="rounded-3xl border border-border p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/macos.png"
            alt="macOS"
            width={24}
            height={24}
            className="rounded-full border p-.5"
          />
          <h1 className="text-2xl font-bold font-sans">macOS</h1>
        </div>
        <p className="text-muted-foreground text-sm text-balance leading-relaxed font-sans">
          Download the latest version of Shred Wallet for macOS.
        </p>
        <div className="flex items-center gap-2 justify-between">
          <Button
            variant="outline"
            className="shadow-none w-1/2 rounded-3xl mt-2 font-sans flex items-center gap-1"
            onClick={() => navigateTo(LINKS.macarm64)}
          >
            arm64
            <Download className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="shadow-none w-1/2 rounded-3xl mt-2 font-sans flex items-center gap-1"
            onClick={() => navigateTo(LINKS.macamd64)}
          >
            amd64
            <Download className="size-4" />
          </Button>
        </div>
      </div>
      <div className="rounded-3xl border border-border p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/linux.png"
            alt="Linux"
            width={24}
            height={24}
            className="rounded-full border p-.5"
          />
          <h1 className="text-2xl font-bold font-sans">Linux</h1>
        </div>
        <p className="text-muted-foreground text-sm text-balance leading-relaxed font-sans">
          Download the latest version of Shred Wallet for Linux.
        </p>
        <div className="flex items-center gap-2 justify-between">
          <Button
            variant="outline"
            className="shadow-none w-1/2 rounded-3xl mt-2 font-sans flex items-center gap-1"
            onClick={() => navigateTo(LINKS.linuxarm64)}
          >
            arm64
            <Download className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="shadow-none w-1/2 rounded-3xl mt-2 font-sans flex items-center gap-1"
            onClick={() => navigateTo(LINKS.linuxamd64)}
          >
            amd64
            <Download className="size-4" />
          </Button>
        </div>
      </div>
      <div className="rounded-3xl border border-border p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/windows.jpg"
            alt="Linux"
            width={24}
            height={24}
            className="rounded-full border p-.5"
          />
          <h1 className="text-2xl font-bold font-sans">Windows</h1>
        </div>
        <p className="text-muted-foreground text-sm text-balance leading-relaxed font-sans">
          Download the latest version of Shred Wallet for Windows.
        </p>
        <div className="flex items-center gap-2 justify-between">
          <Button
            variant="outline"
            className="shadow-none w-full rounded-3xl mt-2 font-sans flex items-center gap-1"
            onClick={() => navigateTo(LINKS.windowsamd64)}
          >
            amd64
            <Download className="size-4" />
          </Button>
        </div>
      </div>
      <div className="rounded-3xl border border-border p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/docker.png"
            alt="Docker"
            width={24}
            height={24}
            className="rounded-full border p-.5"
          />
          <h1 className="text-2xl font-bold font-sans">Docker Image</h1>
        </div>
        <p className="text-muted-foreground text-sm text-balance leading-relaxed font-sans">
          Download the latest version of Shred Wallet from Docker.
        </p>
        <div className="flex items-center gap-2 justify-between">
          <Button
            variant="outline"
            className="shadow-none w-full rounded-3xl mt-2 font-sans flex items-center gap-1"
            onClick={() => navigateTo(LINKS.docker)}
          >
            Docker Image
            <Download className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DownloadComponents;
