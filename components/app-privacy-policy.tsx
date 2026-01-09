import { getPrivacyPolicy } from "@/constants";
import Link from "next/link";
import React from "react";

function AppPrivacyPolicy({ appName }: { appName: string }) {
  const privacyPolicy = getPrivacyPolicy(appName || "defaultApp");
  return (
    <div className="mt-8 border-b border-gray-200 pb-8">
      <h1 className="font-sans text-lg font-semibold mb-2">Privacy Policy</h1>

      <p className="font-sans leading-relaxed text-sm text-slate-700">
        {privacyPolicy.description}
      </p>
      <p className="font-sans leading-relaxed text-sm text-muted-foreground mt-4">
        Last Updated: {privacyPolicy.lastUpdated}
      </p>
      <Link href={privacyPolicy.link} target="_blank" rel="noopener noreferrer">
        <p className="font-sans text-sm text-orange-500 underline underline-offset-4 mt-4">
          Read Full Privacy Policy
        </p>
        <p className="font-mono text-xs text-gray-500 md:max-w-1/2 mt-4">
          *Shred Store does not guarantee the accuracy or completeness of
          third-party privacy policies. Please review the privacy policy on the
          official app website for the most accurate information.
        </p>
      </Link>
    </div>
  );
}

export default AppPrivacyPolicy;
