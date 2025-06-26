
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const componentsListFixed = [
  { name: "Profaned Tinderbox", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_tinderboxclosed01.jpg" },
  { name: "Gloomfathom Hide", image: "https://wow.zamimg.com/images/wow/icons/large/inv_skinning_80_snakescales.jpg" },
];

const componentsWithRanks = [
    { name: "Gloom Chitin", image: "http://wow.zamimg.com/images/wow/icons/large/inv_12_skinning_gloomchitin.jpg" },
    { name: "Carapace-Backed Hide", image: "https://wow.zamimg.com/images/wow/icons/large/inv_craftedhides_base.jpg" },
    { name: "Sunless Carapace", image: "https://wow.zamimg.com/images/wow/icons/large/inv_12_skinning_sunlesscarapace1.jpg" },
    { name: "Stormcharged Leather", image: "https://wow.zamimg.com/images/wow/icons/large/inv_12_skinning_stormchargedleather2.jpg" },
    { name: "Thunderous Hide", image: "https://wow.zamimg.com/images/wow/icons/large/inv_12_skinning_thunderoushide1.jpg" },
    { name: "Crystalfused Hide", image: "https://wow.zamimg.com/images/wow/icons/large/inv_craftedhides_crystalline-powder.jpg" },
];


 const recipes = [
  {
    name: "Charged Armor Kit",
    components: {
      "Gloomfathom Hide": 1,
      "Stormcharged Leather": 60,
      "Crystalfused Hide": 2,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_armorkit_22.jpg",
},
{
    name: "Defender's Armor Kit",
    components: {
        "Profaned Tinderbox": 1,
        "Gloom Chitin": 60,
        "Crystalfused Hide": 2,
        
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_armorkit_arathi.jpg",
},
{
    name: "Stormbound Armor Kit",
    components: {
        "Gloomfathom Hide": 1,
        "Stormcharged Leather": 60,
        "Crystalfused Hide": 2,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_armorkit_lightning_imbued.jpg",
  },
  {
    name: "Spelunker's Practiced Hat",
    components: {
       "Stormcharged Leather": 30,
      "Thunderous Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_leather_undergroundquest_b_01.jpg",
  },
  {
    name: "Tracker's Toughened Headgear",
    components: {
      "Gloom Chitin": 30,
      "Sunless Carapace": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Chain Chainmail",
    components: {
      "Gloom Chitin": 90,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_chest_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Chain Cowl",
    components: {
      "Gloom Chitin": 90,
      "Carapace-Backed Hide": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Chain Cuffs",
    components: {
      "Gloom Chitin": 60,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Chain Epaulets",
    components: {
      "Gloom Chitin": 75,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Chain Gauntlets",
    components: {
      "Gloom Chitin": 75,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_glove_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Chain Girdle",
    components: {
      "Gloom Chitin": 75,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_belt_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Chain Leggings",
    components: {
      "Gloom Chitin": 90,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_pant_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Chain Treads",
    components: {
      "Gloom Chitin": 75,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_boot_mail_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Leather Belt",
    components: {
      "Gloom Chitin": 75,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_belt_leather_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Leather Boots",
    components: {
      "Gloom Chitin": 75,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_boot_leather_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Leather Chestpiece",
    components: {
      "Gloom Chitin": 90,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "http://wow.zamimg.com/images/wow/icons/large/inv_chest_leather_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Leather Gloves",
    components: {
      "Gloom Chitin": 75,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_glove_leather_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Leather Mask",
    components: {
      "Gloom Chitin": 90,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_leather_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Leather Trousers",
    components: {
      "Gloom Chitin": 90,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_pant_leather_undergroundquest_b_01.jpg",
  },
  {
    name: "Algari Competitor's Leather Shoulderpads",
    components: {
      "Gloom Chitin": 75,
      "Carapace-Backed Hide": 1,
      
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_leather_undergroundquest_b_01.jpg",
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
