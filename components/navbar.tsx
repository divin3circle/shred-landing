"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { ChevronsRight, Github, MenuIcon, Twitter } from "lucide-react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div
      className={`flex items-center justify-between px-2 z-50 py-2 transition-all duration-300 ease-in-out `}
    >
      <div className="flex justify-center gap-2 md:justify-start">
        <Link
          href="/"
          className="flex items-center font-semibold text-2xl font-mono"
        >
          <span className="text-red-500 font-semibold">sh_</span>red
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <p className="font-sans text-sm font-semibold">Browse Apps</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="font-sans text-sm font-semibold">Category</p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between gap-4">
        <button
          onClick={() =>
            window.open("https://github.com/divin3circle", "_blank")
          }
          className="text-sm font-sans font-medium underline underline-offset-4"
        >
          Github
          <Github className="inline size-4 ml-1" />
        </button>
        <button
          onClick={() => window.open("https://twitter.com/the_sylus", "_blank")}
          className="text-sm font-sans font-medium underline underline-offset-4"
        >
          Twitter
          <Twitter className="inline size-4 ml-1" />
        </button>
      </div>
      <div className="block md:hidden">
        <Drawer>
          <DrawerTrigger>
            <MenuIcon className="size-6" />
          </DrawerTrigger>
          <DrawerContent className="font-sans">
            <DrawerHeader>
              <DrawerTitle>Shred Store</DrawerTitle>
              <DrawerDescription>
                One place to find all terminal applications.
              </DrawerDescription>
              <div className="mt-4 flex flex-col gap-4">
                <Button variant="ghost" className="w-full justify-between">
                  Browse Apps
                  <ChevronsRight className="size-4 ml-2" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  Category
                  <ChevronsRight className="size-4 ml-2" />
                </Button>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() =>
                      window.open("https://github.com/divin3circle", "_blank")
                    }
                    className="text-sm font-sans font-medium underline underline-offset-4"
                  >
                    Github
                    <Github className="inline size-4 ml-1" />
                  </button>
                  <button
                    onClick={() =>
                      window.open("https://twitter.com/the_sylus", "_blank")
                    }
                    className="text-sm font-sans font-medium underline underline-offset-4"
                  >
                    Twitter
                    <Twitter className="inline size-4 ml-1" />
                  </button>
                </div>
              </div>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="ghost">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
