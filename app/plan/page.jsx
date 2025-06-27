// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { cn } from "@/lib/utils"; // Optionnel pour classnames conditionnelles

// export default function Plan() {
//   const router = useRouter();

//   const plans = [
// {
//   name: "Free",
//   price: "€0/month",
//   bgColor: "bg-zinc-100 text-black", // ✅ fond clair, texte lisible
//   borderColor: "border-blue-500",
//   hoverShadow: "hover:shadow-blue-500/50",
//   features: [
//     "✔️ 5 profit calculations per month",
//     "✔️ Access to all components and recipes",
//     "❌ No unlimited access",
//     "❌ Priority support",
//   ],
//   cta: "Get Started",
// },
//     {
//       name: "Premium",
//       price: "€6.99/month",
//       bgColor: "bg-yellow-100 text-black",
//       borderColor: "border-yellow-400",
//       hoverShadow: "hover:shadow-yellow-500/70",
//       features: [
//         "✅ Unlimited profit calculations",
//         "✅ Early access to new features",
//         "✅ Premium badge in your profile",
//         "✅ Support future development",
//       ],
//       cta: "Go Premium",
//       highlight: true,
//     },
//     {
//       name: "Premium+",
//       price: "€59.99/year",
//       bgColor: "bg-green-100 text-black",
//       borderColor: "border-green-400",
//       hoverShadow: "hover:shadow-green-500/70",
//       features: [
//         "🌟 All Premium benefits",
//         "🌟 2 months free (vs monthly plan)",
//         "🌟 Show your long-term support",
//       ],
//       cta: "Save with Yearly Plan",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-zinc-900 text-white py-16 px-6">
//       <h1 className="text-4xl font-bold text-center mb-14">Choose Your Plan</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {plans.map((plan) => (
//           <Card
//             key={plan.name}
//             className={cn(
//               "rounded-2xl p-6 border-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105",
//               plan.bgColor,
//               plan.borderColor,
//               plan.hoverShadow,
//               "hover:shadow-xl"
//             )}
//           >
//             <CardContent>
//               <h2 className="text-2xl font-bold mb-4 text-center">{plan.name}</h2>
//               <p className="text-xl font-semibold text-center mb-6">{plan.price}</p>
//               <ul className="space-y-2 mb-6 text-sm">
//                 {plan.features.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>
//               <div className="text-center">
//                 <Button
//                   className="w-full"
//                   onClick={() => {
//                     if (plan.name === "Free") {
//                       router.push("/");
//                     } else {
//                       alert("Coming soon 🚧");
//                     }
//                   }}
//                 >
//                   {plan.cta}
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </main>
//   );
// }


"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Plan() {
  const router = useRouter();

  const plans = [
    {
      name: "Free",
      price: "€0/month",
      bgColor: "bg-zinc-100 text-black",
      borderColor: "border-blue-500",
      hoverShadow: "hover:shadow-blue-500/50",
      features: [
        "✔️ 5 profit calculations / month",
        "✔️ Access to all materials and recipes",
        "❌ Unlimited access",
        "❌ Priority support",
      ],
      cta: "Get Started",
    },
    {
      name: "Premium",
      price: "€6.99/month",
      bgColor: "bg-yellow-100 text-black",
      borderColor: "border-yellow-400",
      hoverShadow: "hover:shadow-yellow-500/70",
      features: [
        "✅ Unlimited calculations",
        "✅ Early access to new features",
        "✅ Premium badge in profile",
        "✅ Support continued development",
      ],
      cta: "Go Premium",
      highlight: true,
    },
    {
      name: "Premium+",
      price: "€59.99/year",
      bgColor: "bg-green-100 text-black",
      borderColor: "border-green-400",
      hoverShadow: "hover:shadow-green-500/70",
      features: [
        "🌟 All Premium benefits",
        "🌟 2 months free vs monthly plan",
        "🌟 Show your long-term support",
      ],
      cta: "Save with Yearly Plan",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-900 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Let Gold Pay Your WoW Subscription</h1>
        <p className="text-gray-300 text-lg">
          A WoW sub costs ~13$/month. Our Premium Plan helps you make enough gold to buy WoW Tokens — and play for free.
        </p>
        <p className="text-yellow-400 font-semibold mt-4">
          One good flip covers the cost of your subscription.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "rounded-2xl p-6 border-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105",
              plan.bgColor,
              plan.borderColor,
              plan.hoverShadow,
              "hover:shadow-xl"
            )}
          >
            <CardHeader className="text-center">
              <h2 className="text-2xl font-bold mb-1">{plan.name}</h2>
              <p className="text-xl font-semibold mb-2">{plan.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm text-black">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="text-center">
                <Button
                  className="w-full"
                  onClick={() => {
                    if (plan.name === "Free") {
                      router.push("/");
                    } else {
                      alert("Coming soon 🚧");
                    }
                  }}
                >
                  {plan.cta}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
