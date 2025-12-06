import Image from "next/image";
import DownloadComponents from "@/components/download-components";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="#"
            className="flex items-center font-semibold text-2xl font-mono"
          >
            <span className="text-red-500 font-semibold">sh_</span>red
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl">
            <h1 className="text-2xl font-bold font-sans">
              Download Shred Wallet
            </h1>
            <p className="text-muted-foreground text-sm text-balance leading-relaxed font-sans">
              Shred is a terminal-native Hedera wallet built with Go.
            </p>
            <DownloadComponents />
            <p className="text-muted-foreground text-xs mt-4 text-balance leading-relaxed font-sans">
              This software is provided &quot;as is&quot; without warranty. Use
              at your own risk. Always verify your recovery phrase and keep it
              secure.
              <a
                href="https://github.com/divin3circle/shred/blob/main/USER_GUIDE.md"
                className="underline underline-offset-4 text-blue-500 ml-1"
              >
                See Guide
              </a>
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
