"use client";

import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold text-white mb-4">WoW Profit Calculators</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link href="/enchant" className="block">
          <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">Enchant Calculator</h2>
              <p>Calculate profit margins for enchanting materials and scrolls.</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/alchemy" className="block">
          <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">Alchemy Calculator</h2>
              <p>Evaluate alchemy potion and flask profitability quickly.</p>
            </CardContent>
          </Card>
        </Link>
        {/* <Link href="/cooking" className="block">
          <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">Cooking Calculator</h2>
              <p>Evaluate cooking fish feast profitability quickly.</p>
            </CardContent>
          </Card>
        </Link> */}
        <Link href="/leatherwork" className="block">
          <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">Leatherwork Calculator</h2>
              <p>Leatherworking Crafting</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/engineering" className="block">
          <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">Engineering Calculator</h2>
              <p>Engineering Calculator</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  );
}
