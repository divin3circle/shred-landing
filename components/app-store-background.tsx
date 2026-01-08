"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import SearchComponent from "./search-component";

export function AppBackgroundRippleEffect() {
  return (
    <div className="relative flex min-h-[70vh] w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative font-sans z-10 mx-auto max-w-4xl text-center text-4xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Get The Application You Need
        </h2>
        <p className="relative font-sans z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          One stop terminal application store for all your TUI needs.
        </p>
      </div>
      <SearchComponent />
    </div>
  );
}
