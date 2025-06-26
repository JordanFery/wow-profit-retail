
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
  // Prix composants fixes (clé = nom composant)
  const [pricesFixed, setPricesFixed] = useState({});
  // Prix composants à rang (clé = nom composant, valeur = [rang1, rang2, rang3])
  const [pricesRanks, setPricesRanks] = useState(
    Object.fromEntries(
      componentsWithRanks.map((comp) => [comp, [0, 0, 0]])
    )
  );
  // Rangs sélectionnés pour chaque composant à rang
  const [chosenRanks, setChosenRanks] = useState(
    Object.fromEntries(componentsWithRanks.map((comp) => [comp, 1]))
  );

  // Prix de vente par recette
  const [salePrices, setSalePrices] = useState({});
  const [results, setResults] = useState([]);

  // Gestion changement prix fixe
  const handlePriceFixedChange = (comp, val) => {
    setPricesFixed((p) => ({ ...p, [comp]: parseFloat(val) || 0 }));
  };

  // Gestion changement prix rang
  const handlePriceRankChange = (comp, rankIdx, val) => {
    setPricesRanks((p) => {
      const arr = [...p[comp]];
      arr[rankIdx] = parseFloat(val) || 0;
      return { ...p, [comp]: arr };
    });
  };

  // Gestion changement rang choisi
  const handleRankSelectChange = (comp, val) => {
    setChosenRanks((p) => ({ ...p, [comp]: parseInt(val) }));
  };

  // Calcul
  const calculate = () => {
    const data = recipes.map((recipe) => {
      let cost = 0;
      for (const [comp, qty] of Object.entries(recipe.components)) {
        if (componentsWithRanks.includes(comp)) {
          const rankIndex = chosenRanks[comp] - 1;
          cost += (pricesRanks[comp]?.[rankIndex] || 0) * qty;
        } else {
          cost += (pricesFixed[comp] || 0) * qty;
        }
      }
      const quantity = recipe.quantity || 1;
      const saleUnitPrice = salePrices[recipe.name] || 0;
      const totalSale = saleUnitPrice * quantity;

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
  };

  return (
    <main className="p-6  mx-auto bg-zinc-800 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-white">WoW Alchemy Profit Calculator</h1>

      <h2 className="text-xl font-semibold mb-2 text-white">Fixed Components Unit Prices</h2>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {componentsListFixed.map((comp) => (
  <div key={comp.name}>
    <div className="flex items-center gap-2 mb-1">
      <img src={comp.image} alt={comp.name} className="w-6 h-6" />
      <span className="font-semibold text-white">{comp.name}</span>
    </div>
    <Input
      type="number"
      value={pricesFixed[comp.name] || ""}
      onChange={(e) => handlePriceFixedChange(comp.name, e.target.value)}
      placeholder="0.00"
    />
  </div>
))}
      </section>

      <h2 className="text-xl font-semibold mb-2 text-white">Components with Ranks Prices</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {componentsWithRanks.map(({ name, image }) => (
  <div key={name} className="mb-6 border-b border-gray-600 pb-4">
    <div className="flex items-center gap-2 mb-2">
      <img src={image} alt={name} className="w-6 h-6" />
      <h3 className="text-lg font-semibold text-white">{name}</h3>
    </div>
    <div className="flex gap-4 flex-wrap">
      {[0, 1, 2].map((rankIdx) => (
        <Input
          key={rankIdx}
          type="number"
          value={pricesRanks[name]?.[rankIdx] || ""}
          onChange={(e) => handlePriceRankChange(name, rankIdx, e.target.value)}
          placeholder={`Rank ${rankIdx + 1} price`}
          className="w-24"
        />
      ))}

      <select
        className="bg-zinc-700 text-white rounded px-2"
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
      </section>

      <h2 className="text-xl font-semibold mb-2 text-white">Item Sale Prices (per unit)</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
     
        {recipes.map((r) => (
  <div key={r.name}>
    <div className="flex items-center gap-2 mb-1">
      <img src={r.image} alt={r.name} className="w-6 h-6" />
      <span className="font-semibold text-white">{r.name} (x{r.quantity})</span>
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
    />
  </div>
))}

      </section>

      <Button className="mb-8" onClick={calculate}>
        Calculate Profits
      </Button>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {results.map((r) => (
          <Card
            key={r.name}
            style={{
              backgroundColor: getProfitBackgroundColor(r.profitPct),
              border: "2px solid white",
            }}
          >
            <CardContent className="p-4 text-black">
              <h2 className="text-lg font-bold mb-2">{r.name}</h2>
              <p>Quantity Produced: {r.quantity}</p>
              <p>Crafting Cost: {r.cost.toFixed(2)}g</p>
              <p>Sale Total: {r.sale.toFixed(2)}g</p>
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
