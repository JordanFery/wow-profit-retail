"use client";
import InfiniteMenu from "@/components/ui/infinitMenu";

import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";



const items = [
  {
    image: './enchant.png',
    link: '/enchant',
    title: 'Enchanting',
    description: 'Get a lot of money by selling enchant scrolls'
  },
  {
    image: './leatherwork.png',
    link: '/leatherwork',
    title: 'leatherwork',
    description: 'Sell you leather craft for the best price'
  },
  {
    image: './alchemy.png',
    link: '/alchemy',
    title: 'alchemy',
    description: 'Buy herbs, sell flask. What else ?'
  },
  {
    image: './engineering.png',
    link: '/engineering',
    title: 'engineering',
    description: 'Explosions, gadgets... and lucrative gizmo sales!'
  }
];



export default function Home() {
  return (
    <main className="h-screen bg-zinc-900 p-8 flex flex-col items-center justify-center gap-8">
      <div className="w-full h-full">
        <InfiniteMenu items={items} />
      </div>
    </main>
  );
}