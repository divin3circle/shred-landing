"use client";
import { AppBackgroundRippleEffect } from "@/components/app-store-background";
import Navbar from "@/components/navbar";
import AppsComponent from "@/components/apps-component";

export default function AppsHomePage() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <section className="fixed top-0 w-full z-50">
        <Navbar />
      </section>
      <AppBackgroundRippleEffect />

      <section className="my-8 px-2">
        <h1 className="font-sans text-lg font-semibold mb-4">Explore Store</h1>
        <AppsComponent />
      </section>
    </div>
  );
}
