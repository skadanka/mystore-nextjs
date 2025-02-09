"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SatelliteDishIcon } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <SatelliteDishIcon size={64} />
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-destrctuive">Page not found</p>
      <Button asChild variant='outline'>
        <Link href="/">
            Go back home
        </Link>
        </Button>
    </div>
  );
}
