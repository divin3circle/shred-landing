"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { platforms } from "@/constants";

function AppsComponent({ wrap }: { wrap?: boolean }) {
  const navigateTo = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={`flex gap-2 ${wrap ? "flex-wrap" : ""}`}>
      <div className="rounded-3xl border border-gray-300 p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/shred-icon.jpg"
            alt="Shred Wallet"
            width={34}
            height={34}
            className="rounded-full border p-.5"
          />
          <h1 className="text-2xl font-bold font-sans">Shred Wallet</h1>
        </div>
        <p className="text-muted-foreground text-sm text-balance leading-relaxed font-sans">
          A terminal-native Hedera wallet built with Go. Manage accounts, send
          and receive HBAR, directly from the terminal.
        </p>
        <div className="flex items-center gap-2 justify-between mt-2">
          <Button
            variant="outline"
            className="shadow-none w-1/2 rounded-3xl border-gray-300 mt-2 font-sans flex items-center gap-1"
            onClick={() => navigateTo("/apps/gosetup")}
          >
            Explore
            <ExternalLink className="size-4" />
          </Button>
          <div className="flex items-center justify-center gap-1">
            {platforms.map((platform) => (
              <Image
                key={platform.name}
                src={`/${platform.icon}`}
                alt={platform.name}
                width={24}
                height={24}
                className="rounded-full border p-.5 hover:scale-95 transition-transform ease-in-out duration-200"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-gray-300 p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/gosetup-icon.png"
            alt="Shred Wallet"
            width={34}
            height={34}
            className="rounded-full border p-.5"
          />
          <h1 className="text-2xl font-bold font-sans">GoSetup</h1>
        </div>
        <p className="text-muted-foreground text-sm text-balance leading-relaxed font-sans">
          A modern Terminal UI (TUI) for scaffolding Go backend projects with a
          complete, production-ready structure.
        </p>
        <div className="flex items-center gap-2 justify-between mt-2">
          <Button
            variant="outline"
            className="shadow-none w-1/2 rounded-3xl border-gray-300 mt-2 font-sans flex items-center gap-1"
            onClick={() => navigateTo("/apps/shred")}
          >
            Explore
            <ExternalLink className="size-4" />
          </Button>
          <div className="flex items-center justify-center gap-1">
            {platforms.map((platform) => (
              <Image
                key={platform.name}
                src={`/${platform.icon}`}
                alt={platform.name}
                width={24}
                height={24}
                className="rounded-full border p-.5 hover:scale-95 transition-transform ease-in-out duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppsComponent;
