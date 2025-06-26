"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-zinc-700 p-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <Link href="/">
          <Button variant="outline" className="text-white border-white bg-zinc-800 cursor-pointer hover:bg-white hover:text-zinc-900">
            Back to profession select
          </Button>
        </Link>
      </div>
    </header>
  );
}
