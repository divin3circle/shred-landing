import Image from "next/image";
import AppsComponent from "@/components/apps-component";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="/"
            className="flex items-center font-semibold text-2xl font-mono"
          >
            <span className="text-red-500 font-semibold">sh_</span>red
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl">
            <h1 className="text-2xl font-bold font-sans">Hi, I&apos;m Sylus</h1>
            <p className="text-muted-foreground text-sm text-balance mb-4 leading-relaxed font-sans">
              I love the terminal and good UI so I built Shred Store, a terminal
              store where I build random TUIs.
            </p>
            <AppsComponent wrap />
            <div className="w-full items-center justify-center flex">
              <Link
                className="my-8 w-full max-w-xs rounded-3xl font-sans bg-black text-white p-2 inline-block text-center text-sm underline-offset-4"
                href="/apps"
              >
                See More Apps
              </Link>
            </div>
            <p className="text-sm font-sans mt-4 text-center w-full">
              Have an app?
              <Link href="/list" className="underline underline-offset-4 ml-1">
                List it here!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/wallet.png"
          alt="Shred Wallet"
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
