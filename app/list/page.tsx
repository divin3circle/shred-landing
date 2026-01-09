import Navbar from "@/components/navbar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Link from "next/link";

function ListAppPage() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <Navbar />
      <div className="relative flex min-h-[70vh] w-full flex-col items-start justify-start overflow-hidden">
        <BackgroundRippleEffect />
        <div className="mt-60 w-full">
          <h2 className="relative font-sans z-10 mx-auto max-w-4xl text-center text-4xl font-bold text-neutral-800 md:text-4xl lg:text-7xl">
            List Your Application For Free
          </h2>
          <p className="relative font-sans z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800">
            One stop terminal application store for all your TUI needs.
          </p>
        </div>
        <div className="relative w-full mt-10 z-10 px-4">
          <p className="text-sm font-sans text-center w-full text-muted-foreground">
            Listing to be Opened Soon
          </p>
          <Link
            href="/"
            className="underline font-sans underline-offset-4 text-sm mt-10 text-gray-500 block text-center mx-auto"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListAppPage;
