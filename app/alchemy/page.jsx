
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const componentsListFixed = [
  { name: "Gleaming Transmutagen", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_legion_gooamberblue_chunk.jpg" },
  { name: "Crystalforged Cauldron", image: "https://wow.zamimg.com/images/wow/icons/large/inv_guild_cauldron_b.jpg" },
  { name: "Coreway Catalyst", image: "https://wow.zamimg.com/images/wow/icons/large/inv_alchemy_71_potion4.jpg" },
  { name: "Vial of Kaheti Oils", image: "https://wow.zamimg.com/images/wow/icons/large/trade_alchemy_dpotion_c15.jpg" },
  { name: "Viridian Charmcap", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_starspecklemushroom.jpg" },
  { name: "Null Lotus", image: "https://wow.zamimg.com/images/wow/icons/large/inv_nulllotus_shadow.jpg" },
  { name: "Viridescent Spores", image: "https://wow.zamimg.com/images/wow/icons/large/inv_viridescent_spores_violet.jpg" },
  { name: "Leyline Residue", image: "https://wow.zamimg.com/images/wow/icons/large/inv_leyline_residue_violet.jpg" },
  { name: "Crystalline Powder", image: "https://wow.zamimg.com/images/wow/icons/large/inv_crystalline_powder_orange.jpg" },
  { name: "Writhing Sample", image: "https://wow.zamimg.com/images/wow/icons/large/inv_writhing_samples_violet.jpg" },
];

const componentsWithRanks = [
  { name: "Gilded Vial", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_blackfollowing.jpg" },
  { name: "Harmonious Horticulture", image: "https://wow.zamimg.com/images/wow/icons/large/spell_shaman_giftearthmother.jpg" },
  { name: "Luredrop", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_luredrop.jpg" },
  { name: "Orbinid", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_orbinid.jpg" },
  { name: "Blessing Blossom", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_arathorsspear.jpg" },
  { name: "Arathor's Spear", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_arathorsspear.jpg" },
  { name: "Mycobloom", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_mycobloom.jpg" },
];


 const recipes = [
  {
    name: "Flask of Tempered Swiftness",
    components: {
      "Null Lotus": 1,
      "Leyline Residue": 2,
      "Luredrop": 12,
      "Blessing Blossom": 12,
      "Gilded Vial": 12,
    },
    quantity: 2,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_green.jpg",
  },
  {
    name: "Gleaming Chaos",
    components: {
      "Gleaming Transmutagen": 40,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/ui_profession_alchemy.jpg",
  },
  {
    name: "Gleaming Glory",
    components: {
      "Gleaming Transmutagen": 80,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/ui_profession_alchemy.jpg",
  },
  {
    name: "Algari Flask Cauldron",
    components: {
      "Crystalforged Cauldron": 1,
      "Coreway Catalyst": 25,
      "Vial of Kaheti Oils": 3,
      "Gilded Vial": 20,
      "Harmonious Horticulture": 8,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_11_alchemy_profession_cauldron04.jpg",
  },
  {
    name: "Algari Potion Cauldron",
    components: {
      "Crystalforged Cauldron": 1,
      "Coreway Catalyst": 40,
      "Viridian Charmcap": 5,
      "Gilded Vial": 80,
      "Harmonious Horticulture": 8,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_11_alchemy_profession_cauldron01.jpg",
  },
  {
    name: "Flask of Alchemical Chaos",
    components: {
      "Null Lotus": 1,
      "Luredrop": 8,
      "Orbinid": 8,
      "Blessing Blossom": 8,
      "Arathor's Spear": 8,
      "Gilded Vial": 2,
    },
    quantity: 2,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_orange.jpg",
  },
  {
    name: "Flask of Tempered Agression",
    components: {
      "Null Lotus": 1,
      "Viridescent Spores": 2,
      "Luredrop": 12,
      "Orbinid": 12,
      "Gilded Vial": 2,
    },
    quantity: 2,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_red.jpg",
  },
  {
    name: "Flask of Tempered Mastery",
    components: {
      "Null Lotus": 1,
      "Leyline Residue": 2,
      "Blessing Blossom": 12,
      "Arathor's Spear": 12,
      "Gilded Vial": 2,
    },
    quantity: 2,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_purlple.jpg",
  },
  {
    name: "Flask of Tempered Versality",
    components: {
      "Null Lotus": 1,
      "Leyline Residue": 2,
      "Orbinid": 12,
      "Arathor's Spear": 12,
      "Gilded Vial": 2,
    },
    quantity: 2,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_green.jpg",
  },
  {
    name: "Flask of Saving Grace",
    components: {
      "Null Lotus": 1,
      "Mycobloom": 16,
      "Blessing Blossom": 8,
      "Gilded Vial": 2,
    },
    quantity: 2,
    image: "https://wow.zamimg.com/images/wow/icons/large/trade_alchemy_potione4.jpg",
  },
  {
    name: "Potion of the Reborn Cheetah",
    components: {
      "Writhing Sample": 1,
      "Mycobloom": 12,
      "Orbinid": 4,
      "Arathor's Spear": 4,
      "Gilded Vial": 5,
    },
    quantity: 5,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_potionseta.jpg",
  },
  {
    name: "Potion of Unwavering Focus",
    components: {
      "Crystalline Powder": 1,
      "Mycobloom": 12,
      "Orbinid": 4,
      "Arathor's Spear": 4,
      "Gilded Vial": 5,
    },
    quantity: 5,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_16.jpg",
  },
  {
    name: "Tempered Potion",
    components: {
      "Crystalline Powder": 1,
      "Mycobloom": 12,
      "Lunedrop": 4,
      "Arathor's Spear": 4,
      "Gilded Vial": 5,
    },
    quantity: 5,
    image: "https://wow.zamimg.com/images/wow/icons/large/trade_alchemy_potiona4.jpg",
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