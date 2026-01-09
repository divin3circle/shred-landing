import { getAppDeveloper, getDeveloperApps } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function MoreApps({ appName }: { appName: string }) {
  const developer = getAppDeveloper(appName);
  const appsByDeveloper = getDeveloperApps(developer).filter(
    (app) => app.name.toLowerCase() !== appName.toLowerCase()
  );
  return (
    <div className="mt-8 pb-8">
      <h1 className="font-sans text-lg font-semibold mb-2">
        More by
        {" " + developer}
      </h1>

      {appsByDeveloper.length === 0 && (
        <p className="font-sans text-sm text-muted-foreground">
          No other apps available from this developer.
        </p>
      )}
      {appsByDeveloper.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {appsByDeveloper.map((app, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-300 flex items-start gap-2 max-w-[300px]"
            >
              <Image
                src={app.icon}
                alt={app.name}
                width={40}
                height={40}
                className="rounded-2xl border p-.5 w-18 h-18"
              />
              <div className="flex flex-col justify-between">
                <div className="">
                  <h2 className="font-sans text-md font-semibold">
                    {app.name}
                  </h2>
                  <p className="font-sans text-xs text-muted-foreground">
                    {app.category}
                  </p>
                </div>
                <Link href={`/apps/${app.name.toLowerCase()}`} className="mt-2">
                  <p className="font-sans text-xs font-medium underline underline-offset-4">
                    View App
                  </p>
                </Link>
              </div>{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MoreApps;
