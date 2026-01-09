import { Github } from "lucide-react";
import Link from "next/link";

function AppSocials() {
  return (
    <div className="mt-4 border-b border-gray-200 pb-4">
      <h1 className="font-sans text-lg font-semibold mb-2">View on Github</h1>
      <div className="flex items-center gap-2">
        <div className="border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
          <Github className="size-8" color="green" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Link href="">
              <p className="font-sans text-sm font-semibold">@divin3circle</p>
            </Link>
            <p className="font-sans text-xs text-muted-foreground">Owner</p>
          </div>
          <Link
            href=""
            className="ml-4 text-sm font-sans font-medium underline underline-offset-4 text-orange-500"
          >
            View Repository
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppSocials;
