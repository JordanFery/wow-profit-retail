
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const componentsListFixed = [
  { name: "Pile of Rusted Scrap", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_gear_08.jpg" },
  { name: "Ostentatious Onyx", image: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_uncut-standart-gem_color1.jpg" },
];

const componentsWithRanks = [
    { name: "Gilded Vial", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_blackfollowing.jpg" },
    { name: "Entropy Enhancer", image: "https://wow.zamimg.com/images/wow/icons/large/inv_manufacturedpart4_green.jpg" },
    { name: "Whimsical Wiring", image: "https://wow.zamimg.com/images/wow/icons/large/spell_mekkatorque_bot_greenspring.jpg" },
    { name: "Gyrating Gear", image: "https://wow.zamimg.com/images/wow/icons/large/inv_manufacturedpart1_orange.jpg" },
    { name: "Chaos Circuit", image: "https://wow.zamimg.com/images/wow/icons/large/inv_manufacturedpart2_purple.jpg" },
    { name: "Duskweave Bolt", image: "https://wow.zamimg.com/images/wow/icons/large/inv_12_tailoring_rare_cloth_violet_rare-cloth.jpg" },
    { name: "Charged Alloy", image: "https://wow.zamimg.com/images/wow/icons/large/inv_blacksmithingalloys_purlple.jpg" },
    { name: "Crystalfused Hide", image: "https://wow.zamimg.com/images/wow/icons/large/inv_craftedhides_crystalline-powder.jpg" },
    { name: "Safety Switch", image: "https://wow.zamimg.com/images/wow/icons/large/inv_manufacturedpart3_blue.jpg" },
    { name: "Dawnweave Bolt", image: "https://wow.zamimg.com/images/wow/icons/large/inv_12_tailoring_rare_cloth_orange-_rare-cloth.jpg" },
    { name: "Handful of Bismuth Bolts", image: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering_manufacturedparts_gizmo_fireironbolts_black.jpg" },
    { name: "Leyfused Hide", image: "https://wow.zamimg.com/images/wow/icons/large/inv_craftedhides_leyline_residue.jpg" },
    { name: "Sporecoated Hide", image: "https://wow.zamimg.com/images/wow/icons/large/inv_craftedhides_viridescent_spores.jpg" },
    { name: "Cavedweller's Delight", image: "https://wow.zamimg.com/images/wow/icons/large/inv_alchemy_elixir_06.jpg" },
    { name: "Tempered Potion", image: "https://wow.zamimg.com/images/wow/icons/large/trade_alchemy_potiona4.jpg" },
    { name: "Potion of the Reborn Cheetah", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_potionseta.jpg" },
    { name: "Decorative Lens", image: "https://wow.zamimg.com/images/wow/icons/large/inv_archaeology_70_highborne_violetglassvessel.jpg" },
];


 const recipes = [
  {
    name: "Algari Competitor's Cloth Bracers",
    components: {
      "Handful of Bismuth Bolts": 12,
      "Whimsical Wiring": 4,
      "Gyrating Gear": 4,
      "Safety Switch": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_cloth_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Cloth Goggles",
    components: {
        "Decorative Lens": 2,
        "Handful of Bismuth Bolts ": 16,
        "Whimsical Wiring ": 3,
        "Gyrating Gear ": 8,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_armor_gnomish_c_01_red.jpg",
  },
  {
    name: "Algari Competitor's Leather Bracers",
    components: {
        "Handful of Bismuth Bolts": 12,
        "Whimsical Wiring": 4,
        "Gyrating Gear": 4,
        "Safety Switch": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_leather_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Leather Goggles",
    components: {
        "Decorative Lens": 2,
        "Handful of Bismuth Bolts ": 16,
        "Whimsical Wiring ": 3,
        "Gyrating Gear ": 8,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_armor_gnomish_c_01_red.jpg",
  },
  {
    name: "Algari Competitor's Mail Bracers",
    components: {
        "Handful of Bismuth Bolts": 12,
        "Whimsical Wiring": 4,
        "Gyrating Gear": 4,
        "Safety Switch": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Mail Goggles",
    components: {
        "Decorative Lens": 2,
        "Handful of Bismuth Bolts ": 16,
        "Whimsical Wiring ": 3,
        "Gyrating Gear ": 8,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_armor_gnomish_c_01_red.jpg",
  },
  {
    name: "Algari Competitor's Plate Bracers",
    components: {
        "Handful of Bismuth Bolts": 12,
        "Whimsical Wiring": 4,
        "Gyrating Gear": 4,
        "Safety Switch": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_plate_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Plate Goggles",
    components: {
        "Decorative Lens": 2,
        "Handful of Bismuth Bolts ": 16,
        "Whimsical Wiring ": 3,
        "Gyrating Gear ": 8,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_armor_gnomish_c_01_red.jpg",
  },
  {
    name: "Algari Competitor's Rifle",
    components: {
        "Handful of Bismuth Bolts": 20,
        "Whimsical Wiring": 4,
        "Safety Switch": 1,
        "Entropy Enchancer": 4,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_firearm_2h_undergroundquest_b_01.jpg",
  },
  {
    name: "Impeccable Cogwheel",
    components: {
      "Ostentatious Onyx": 1,
      "Handful of Bismuth Bolts": 1,
      "Gyrating Gear ": 1,
      "Entropy Enchancer": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_armor_gnomish_c_01_red.jpg",
  },
  
];



// Couleur selon rentabilité (ta fonction)
function getProfitBackgroundColor(profitPct) {
  const pct = Math.max(-100, Math.min(100, profitPct));
  if (pct < 0) {
    const red = 255;
    const green = 100 + (pct + 100) * 0.5;
    return `rgb(${red}, ${green}, ${green})`;
  } else {
    const red = 255 - pct * 2;
    const green = 255;
    return `rgb(${Math.max(red, 55)}, ${green}, 120)`;
  }
}

export default function Home() {
  const componentsWithRanksNames = componentsWithRanks.map(c => c.name);

  const [pricesFixed, setPricesFixed] = useState({});
  const [pricesRanks, setPricesRanks] = useState(
    Object.fromEntries(
      componentsWithRanks.map((comp) => [comp.name, [0, 0, 0]])
    )
  );
  const [chosenRanks, setChosenRanks] = useState(
    Object.fromEntries(componentsWithRanks.map((comp) => [comp.name, 1]))
  );

  const [salePrices, setSalePrices] = useState({});
  const [results, setResults] = useState([]);

  const router = useRouter();

  const handlePriceFixedChange = (comp, val) => {
    setPricesFixed((p) => ({ ...p, [comp]: parseFloat(val) || 0 }));
  };

  const handlePriceRankChange = (comp, rankIdx, val) => {
    setPricesRanks((p) => {
      const arr = [...p[comp]];
      arr[rankIdx] = parseFloat(val) || 0;
      return { ...p, [comp]: arr };
    });
  };

  const handleRankSelectChange = (comp, val) => {
    setChosenRanks((p) => ({ ...p, [comp]: parseInt(val) }));
  };


const calculate = async () => {
  try {
    const response = await fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (!response.ok) {
      if (response.status === 403) {
        alert("Limite atteinte : passez en Premium pour débloquer plus de calculs.");
        router.push("/plan");
        return;
      }
      console.warn("Erreur clic API :", result.error || response.statusText);
      return;
    }

    const data = recipes.map((recipe) => {
      let cost = 0;
      for (const [comp, qty] of Object.entries(recipe.components)) {
        if (componentsWithRanksNames.includes(comp)) {
          const rankIndex = chosenRanks[comp] - 1;
          cost += (pricesRanks[comp]?.[rankIndex] || 0) * qty;
        } else {
          cost += (pricesFixed[comp] || 0) * qty;
        }
      }

      const quantity = recipe.quantity || 1;
      const unitSalePrice = salePrices[recipe.name] || 0;

      // Commission 5% déduite du prix unitaire
      const netUnitSalePrice = unitSalePrice * 0.95;

      const totalSale = netUnitSalePrice * quantity;

      const margin = totalSale - cost;
      const profitPct = cost > 0 ? (margin / cost) * 100 : 0;

      return {
        name: recipe.name,
        quantity,
        cost,
        sale: totalSale,
        margin,
        profitPct,
      };
    });

    setResults(data.sort((a, b) => b.margin - a.margin));
  } catch (error) {
    console.error("Erreur appel API clic :", error);
  }
};


  return (
    <main className="min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-amber-400 drop-shadow-lg">
        WoW Alchemy Profit Calculator
      </h1>

      {/* Fixed Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b border-zinc-700 pb-2">Fixed Components Unit Prices</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {componentsListFixed.map((comp) => (
            <div key={comp.name} className="bg-zinc-800 rounded-xl p-4 shadow-lg flex flex-col gap-2 hover:shadow-emerald-500 transition-shadow duration-300">
              <div className="flex items-center gap-2">
                <img src={comp.image} alt={comp.name} className="w-8 h-8" />
                <span className="font-medium">{comp.name}</span>
              </div>
              <Input
                type="number"
                value={pricesFixed[comp.name] || ""}
                onChange={(e) => handlePriceFixedChange(comp.name, e.target.value)}
                placeholder="0.00"
                className="bg-zinc-700 text-white"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Ranked Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b border-zinc-700 pb-2">Components with Ranks Prices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentsWithRanks.map(({ name, image }) => (
            <div key={name} className="bg-zinc-800 rounded-xl p-4 shadow-lg space-y-3 hover:shadow-emerald-500 transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <img src={image} alt={name} className="w-8 h-8" />
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                {[0, 1, 2].map((rankIdx) => (
                  <Input
                    key={rankIdx}
                    type="number"
                    value={pricesRanks[name]?.[rankIdx] || ""}
                    onChange={(e) => handlePriceRankChange(name, rankIdx, e.target.value)}
                    placeholder={`Rank ${rankIdx + 1}`}
                    className="w-24 bg-zinc-700 text-white"
                  />
                ))}
                <select
                  className="bg-zinc-700 text-white rounded px-2 py-1"
                  value={chosenRanks[name]}
                  onChange={(e) => handleRankSelectChange(name, e.target.value)}
                >
                  <option value={1}>Use Rank 1</option>
                  <option value={2}>Use Rank 2</option>
                  <option value={3}>Use Rank 3</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sale Prices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b border-zinc-700 pb-2">Item Sale Prices (per unit)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <div key={r.name} className="bg-zinc-800 rounded-xl p-4 shadow-lg space-y-2 hover:shadow-emerald-500 transition-shadow duration-300">
              <div className="flex items-center gap-2">
                <img src={r.image} alt={r.name} className="w-8 h-8" />
                <span className="font-semibold">{r.name} (x{r.quantity})</span>
              </div>
              <Input
                type="number"
                value={salePrices[r.name] || ""}
                onChange={(e) =>
                  setSalePrices({
                    ...salePrices,
                    [r.name]: parseFloat(e.target.value),
                  })
                }
                placeholder="0.00"
                className="bg-zinc-700 text-white"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Calculate Button */}
      <div className="text-center mb-12">
        <Button
          className="bg-emerald-600 hover:bg-emerald-700 transition-all"
          onClick={calculate}
        >
          Calculate Profits
        </Button>
      </div>

      {/* Results */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {results.map((r) => (
          <Card
            key={r.name}
            style={{
              backgroundColor: getProfitBackgroundColor(r.profitPct),
              border: "none",
              transition: "transform 0.2s ease",
              cursor: "default",
            }}
            className="hover:scale-[1.05]"
          >
            <CardContent className="p-4 text-black">
              <h2 className="text-lg font-bold mb-2">{r.name}</h2>
              <p>Quantity Produced: {r.quantity}</p>
              <p>Crafting Cost: {r.cost.toFixed(2)}g</p>
              <p>Sale Total (net 5% commission): {r.sale.toFixed(2)}g</p>
              <p className="font-semibold">
                Profit: {r.margin.toFixed(2)}g ({r.profitPct.toFixed(1)}%)
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}