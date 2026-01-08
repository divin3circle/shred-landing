"use client";
import Navbar from "@/components/navbar";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

function AppPage() {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="max-w-7xl mx-auto p-2">
      <Navbar />
      <Link href="/apps" className="flex items-center">
        <ChevronsLeft className="size-4 text-gray-500" />
        <p className="font-mono font-semibold text-sm text-gray-500">
          Back to Apps
        </p>
      </Link>

      <h1 className="text-3xl font-bold font-sans mt-4">{id}</h1>
    </div>
  );
}

export default AppPage;
