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
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: './alchemy.png',
    link: '/alchemy',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: './engineering.png',
    link: '/engineering',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];



export default function Home() {
  return (
    // <main className="min-h-screen bg-zinc-900 p-8 flex flex-col items-center justify-center gap-8">
    //   <h1 className="text-3xl font-bold text-white mb-4">WoW Profit Calculators</h1>

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
    //     <Link href="/enchant" className="block">
    //       <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
    //         <CardContent className="p-6 h-full flex flex-col justify-center">
    //           <h2 className="text-2xl font-semibold mb-2">Enchant Calculator</h2>
    //           <p>Calculate profit margins for enchanting materials and scrolls.</p>
    //         </CardContent>
    //       </Card>
    //     </Link>

    //     <Link href="/alchemy" className="block">
    //       <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
    //         <CardContent className="p-6 h-full flex flex-col justify-center">
    //           <h2 className="text-2xl font-semibold mb-2">Alchemy Calculator</h2>
    //           <p>Evaluate alchemy potion and flask profitability quickly.</p>
    //         </CardContent>
    //       </Card>
    //     </Link>
    //     {/* <Link href="/cooking" className="block">
    //       <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
    //         <CardContent className="p-6 h-full flex flex-col justify-center">
    //           <h2 className="text-2xl font-semibold mb-2">Cooking Calculator</h2>
    //           <p>Evaluate cooking fish feast profitability quickly.</p>
    //         </CardContent>
    //       </Card>
    //     </Link> */}
    //     <Link href="/leatherwork" className="block">
    //       <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
    //         <CardContent className="p-6 h-full flex flex-col justify-center">
    //           <h2 className="text-2xl font-semibold mb-2">Leatherwork Calculator</h2>
    //           <p>Leatherworking Crafting</p>
    //         </CardContent>
    //       </Card>
    //     </Link>
    //     <Link href="/engineering" className="block">
    //       <Card className="h-48 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-white text-black">
    //         <CardContent className="p-6 h-full flex flex-col justify-center">
    //           <h2 className="text-2xl font-semibold mb-2">Engineering Calculator</h2>
    //           <p>Engineering Calculator</p>
    //         </CardContent>
    //       </Card>
    //     </Link>
    //   </div>
    // </main>


<div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>

  );
}
