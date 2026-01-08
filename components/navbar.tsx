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
import {
  ChevronsDown,
  ChevronsRight,
  Github,
  MenuIcon,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex items-center justify-between px-2 z-50 py-2 transition-all duration-300 ease-in-out ${
        isScrolled ? "blur-3xl bg-white/30" : ""
      }`}
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
          <ChevronsDown className="size-4" />
        </div>
        <div className="flex items-center gap-1">
          <p className="font-sans text-sm font-semibold">Category</p>
          <ChevronsDown className="size-4" />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between gap-4">
        <button className="text-sm font-sans font-medium underline underline-offset-4">
          Github
          <Github className="inline size-4 ml-1" />
        </button>
        <button className="text-sm font-sans font-medium underline underline-offset-4">
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
                  <button className="text-sm font-sans font-medium underline underline-offset-4">
                    Github
                    <Github className="inline size-4 ml-1" />
                  </button>
                  <button className="text-sm font-sans font-medium underline underline-offset-4">
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
