
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation" // 👈 important


const componentsListFixed = [
  { name: "Profaned Tinderbox", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_tinderboxclosed01.jpg" },
  { name: "Bottled Storm", image: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_unrelentingstorm.jpg" },
  { name: "Vial of Kaheti Oils", image: "https://wow.zamimg.com/images/wow/icons/large/trade_alchemy_dpotion_c15.jpg" },
  { name: "Writhing Sample", image: "https://wow.zamimg.com/images/wow/icons/large/inv_writhing_samples_violet.jpg" },
  { name: "Crystalline Powder", image: "https://wow.zamimg.com/images/wow/icons/large/inv_crystalline_powder_orange.jpg" },
  { name: "Leyline Residue", image: "https://wow.zamimg.com/images/wow/icons/large/inv_leyline_residue_violet.jpg" },
  { name: "Ringing Deeps Ingot", image: "https://wow.zamimg.com/images/wow/icons/large/inv_10_blacksmithing_craftedoptional_reinforcedmetalplating_color02.jpg" },
  { name: "Viridian Charmcap", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_starspecklemushroom.jpg" },
  { name: "Viridescent Spores", image: "https://wow.zamimg.com/images/wow/icons/large/inv_viridescent_spores_violet.jpg" },
];

const componentsWithRanks = [
    { name: "Storm Dust", image: "https://wow.zamimg.com/images/wow/icons/large/inv_enchanting_dust_color3.jpg" },
    { name: "Gleaming Shard", image: "https://wow.zamimg.com/images/wow/icons/large/inv_enchanting_shard_color3.jpg" },
    { name: "Refulgent Crystal", image: "https://wow.zamimg.com/images/wow/icons/large/inv_enchanting_crystal_color2.jpg" },
    { name: "Codified Greenwood", image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_arathorsspear_crystalized.jpg" },
];


const recipes = [
  {
    name: "Autority of Air",
    components: {
      "Profaned Tinderbox": 1,
      "Storm Dust": 75,
      "Gleaming Shard": 10,
      "Refulgent Crystal": 2,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Autority of Fiery Resolve",
    components: {
      "Profaned Tinderbox": 1,
      "Storm Dust": 75,
      "Gleaming Shard": 10,
      "Refulgent Crystal": 2,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Autority of Radiant Power",
    components: {
      "Profaned Tinderbox": 1,
      "Storm Dust": 75,
      "Gleaming Shard": 10,
      "Refulgent Crystal": 2,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Autority of Storms",
    components: {
      "Ringin Deep Ingot": 1,
      "Bottled Storm": 5,
      "Storm Dust": 75,
      "Gleaming Shard": 10,
      "Refulgent Crystal": 2,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Autority of the Depths",
    components: {
        "Vial of Kaheti Oils": 1,
        "Writhing Sample": 5,
        "Storm Dust": 75,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 2,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Scepter of Radiant Magics",
    components: {
         "Gleaming Shard": 6,
        "Refulgent Crystal": 2,
        "Codified Greenwood": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_wand_1h_arathoroutdoor_d_01.jpg",
  },
  {
    name: "Chant of Armored Avoidance",
    components: {
        "Vial of Kaheti Oils": 1,
        "Storm Dust": 40,
        "Gleaming Shard": 5,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Chant of Armored Leech",
    components: {
        "Vial of Kaheti Oils": 1,
        "Storm Dust": 40,
        "Gleaming Shard": 5,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Chant of Armored Speed",
    components: {
        "Vial of Kaheti Oils": 1,
        "Storm Dust": 40,
        "Gleaming Shard": 5,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Chant of Burrowing Rapidity",
    components: {
        "Vial of Kaheti Oils": 1,
        "Storm Dust": 40,
        "Gleaming Shard": 5,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Chant of Leeching Fangs",
    components: {
        "Vial of Kaheti Oils": 1,
        "Storm Dust": 40,
        "Gleaming Shard": 5,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Chant of Winged Grace",
    components: {
        "Vial of Kaheti Oils": 1,
        "Storm Dust": 40,
        "Gleaming Shard": 5,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Council's Intellect",
    components: {
        "Crystalline Powder": 10,
        "Leyline Residue": 5,
        "Storm Dust": 75,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1

    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Oathsworn's Strenght",
    components: {
        "Crystalline Powder": 10,
        "Ringing Deeps Ingot": 1,
        "Storm Dust": 75,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "StormWinder Agility",
    components: {
        "Crystalline Powder": 10,
        "Bottled Storm": 5,
        "Storm Dust": 75,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Oathsworn's Tenacity",
    components: {
        "Ringing Deeps Ingot": 1,
         "Storm Dust": 50,
        "Gleaming Shard": 5,
        "Refulgent Crystal": 1
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Radiant Haste",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 30,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Radiant Mastery",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 30,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Radiant Versality",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 30,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Radiant Critical Strike",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 30,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Crystalline Radiance",
    components: {
        "Crystalline Powder": 20,
        "Storm Dust": 75,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Stonebound Artistry",
    components: {
        "Ringing Deeps Ingot": 1,
        "Storm Dust": 75,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Stormwinder's Fury",
    components: {  
        "Ringing Deeps Ingot": 1,
        "Storm Dust": 75,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1,},
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Cavalry's March",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 30,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Cursed Critical Strike",
    components: {
        "Writhing Sample": 10,
         "Storm Dust": 50,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Cursed Haste",
    components: {
        "Writhing Sample": 10,
         "Storm Dust": 50,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Cursed Versality",
    components: {
        "Writhing Sample": 10,
         "Storm Dust": 50,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Cursed Mastery",
    components: {
        "Writhing Sample": 10,
         "Storm Dust": 50,
        "Gleaming Shard": 10,
        "Refulgent Crystal": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Defender's March",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 30,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Scout's March",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 30,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Algari Deftness",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 25,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Algari Finess",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 25,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Algari Ingenuity",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 25,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Algari Perception",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 25,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Algari Ressourcefulness",
    components: {
        "Profaned Tinderbox": 1,
        "Storm Dust": 25,
        "Gleaming Shard": 5
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Whisper of Armored Leech",
    components: {
        "Storm Dust": 10,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Whisper of Silken Speed",
    components: {
        "Storm Dust": 10,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Glimmmering Versality",
    components: {
        "Storm Dust": 5,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Enchanted Spearwood Wand",
    components: {
        "Storm Dust": 10,
        "Codified Greenwood": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_wand_1h_kultirasquest_b_01.jpg",
  },
  {
    name: "Whisper of Silken Leech",
    components: {
        "Storm Dust": 10,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg",
  },
  {
    name: "Gleeful Glamour - Blood Elf",
    components: {
        "Storm Dust": 5,
        "Viridescent Spores": 1,
        "Leyline Residue": 1,
    },
    quantity: 1,
    image: "https://wow.zamimg.com/images/wow/icons/large/inv_helm_mask_fittedalpha_b_01_nightborne_02.jpg",
  },
];

recipes.sort((a, b) => a.name.localeCompare(b.name));

console.log(recipes);






// // Couleur selon rentabilité (ta fonction)
// function getProfitBackgroundColor(profitPct) {
//   const pct = Math.max(-100, Math.min(100, profitPct));
//   if (pct < 0) {
//     const red = 255;
//     const green = 100 + (pct + 100) * 0.5;
//     return `rgb(${red}, ${green}, ${green})`;
//   } else {
//     const red = 255 - pct * 2;
//     const green = 255;
//     return `rgb(${Math.max(red, 55)}, ${green}, 120)`;
//   }
// }

// export default function Home() {

  
//   // Prix composants fixes (clé = nom composant)
//   const [pricesFixed, setPricesFixed] = useState({});
//   // Prix composants à rang (clé = nom composant, valeur = [rang1, rang2, rang3])
//   const [pricesRanks, setPricesRanks] = useState(
//     Object.fromEntries(
//       componentsWithRanks.map((comp) => [comp, [0, 0, 0]])
//     )
//   );
//   // Rangs sélectionnés pour chaque composant à rang
//   const [chosenRanks, setChosenRanks] = useState(
//     Object.fromEntries(componentsWithRanks.map((comp) => [comp, 1]))
//   );

//   // Prix de vente par recette
//   const [salePrices, setSalePrices] = useState({});
//   const [results, setResults] = useState([]);

//   // Gestion changement prix fixe
//   const handlePriceFixedChange = (comp, val) => {
//     setPricesFixed((p) => ({ ...p, [comp]: parseFloat(val) || 0 }));
//   };

//   // Gestion changement prix rang
//   const handlePriceRankChange = (comp, rankIdx, val) => {
//     setPricesRanks((p) => {
//       const arr = [...p[comp]];
//       arr[rankIdx] = parseFloat(val) || 0;
//       return { ...p, [comp]: arr };
//     });
//   };

//   // Gestion changement rang choisi
//   const handleRankSelectChange = (comp, val) => {
//     setChosenRanks((p) => ({ ...p, [comp]: parseInt(val) }));
//   };

//   // Calcul
//   const calculate = () => {
//     const data = recipes.map((recipe) => {
//       let cost = 0;
//       for (const [comp, qty] of Object.entries(recipe.components)) {
//         if (componentsWithRanks.includes(comp)) {
//           const rankIndex = chosenRanks[comp] - 1;
//           cost += (pricesRanks[comp]?.[rankIndex] || 0) * qty;
//         } else {
//           cost += (pricesFixed[comp] || 0) * qty;
//         }
//       }
//       const quantity = recipe.quantity || 1;
//       const saleUnitPrice = salePrices[recipe.name] || 0;
//       const totalSale = saleUnitPrice * quantity;

//       const margin = totalSale - cost;
//       const profitPct = cost > 0 ? (margin / cost) * 100 : 0;

//       return {
//         name: recipe.name,
//         quantity,
//         cost,
//         sale: totalSale,
//         margin,
//         profitPct,
//       };
//     });
//     setResults(data.sort((a, b) => b.margin - a.margin));
//   };

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
  // Liste des noms des composants avec rangs pour faciliter la recherche
  const componentsWithRanksNames = componentsWithRanks.map(c => c.name);

  // Prix composants fixes (clé = nom composant)
  const [pricesFixed, setPricesFixed] = useState({});
  
  // Prix composants à rang (clé = nom composant, valeur = [rang1, rang2, rang3])
  const [pricesRanks, setPricesRanks] = useState(
    Object.fromEntries(
      componentsWithRanks.map((comp) => [comp.name, [0, 0, 0]])
    )
  );
  
  // Rangs sélectionnés pour chaque composant à rang (clé = nom composant)
  const [chosenRanks, setChosenRanks] = useState(
    Object.fromEntries(componentsWithRanks.map((comp) => [comp.name, 1]))
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



//   const calculate = async () => {
    
//   const data = recipes.map((recipe) => {
//     let cost = 0;
//     for (const [comp, qty] of Object.entries(recipe.components)) {
//       if (componentsWithRanksNames.includes(comp)) {
//         const rankIndex = chosenRanks[comp] - 1;
//         cost += (pricesRanks[comp]?.[rankIndex] || 0) * qty;
//       } else {
//         cost += (pricesFixed[comp] || 0) * qty;
//       }
//     }
//     const quantity = recipe.quantity || 1;
//     const saleUnitPrice = salePrices[recipe.name] || 0;
//     const totalSale = saleUnitPrice * quantity;

//     const margin = totalSale - cost;
//     const profitPct = cost > 0 ? (margin / cost) * 100 : 0;

//     return {
//       name: recipe.name,
//       quantity,
//       cost,
//       sale: totalSale,
//       margin,
//       profitPct,
//     };
//   });

//   setResults(data.sort((a, b) => b.margin - a.margin));

//   try {
//     const response = await fetch("/api/click", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.warn("Erreur clic API :", errorData.error || response.statusText);
//     }
//   } catch (error) {
//     console.error("Erreur appel API clic :", error);
//   }
// };









// const calculate = async () => {
//   try {
//     const response = await fetch("/api/click", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       if (response.status === 403) {
//         alert("Limite atteinte : passez en Premium pour débloquer plus de calculs.");
//         return;
//       }

//       console.warn("Erreur clic API :", result.error || response.statusText);
//       return;
//     }

//     // ✅ Clic autorisé, on effectue les calculs ici
//     const data = recipes.map((recipe) => {
//       let cost = 0;
//       for (const [comp, qty] of Object.entries(recipe.components)) {
//         if (componentsWithRanksNames.includes(comp)) {
//           const rankIndex = chosenRanks[comp] - 1;
//           cost += (pricesRanks[comp]?.[rankIndex] || 0) * qty;
//         } else {
//           cost += (pricesFixed[comp] || 0) * qty;
//         }
//       }

//       const quantity = recipe.quantity || 1;
//       const saleUnitPrice = salePrices[recipe.name] || 0;
//       const totalSale = saleUnitPrice * quantity;

//       const margin = totalSale - cost;
//       const profitPct = cost > 0 ? (margin / cost) * 100 : 0;

//       return {
//         name: recipe.name,
//         quantity,
//         cost,
//         sale: totalSale,
//         margin,
//         profitPct,
//       };
//     });

//     setResults(data.sort((a, b) => b.margin - a.margin));
//   } catch (error) {
//     console.error("Erreur appel API clic :", error);
//   }
// };


 const router = useRouter(); // 👈 hook pour redirection

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
          router.push("/plan"); // 👈 redirection
          return;
        }

        console.warn("Erreur clic API :", result.error || response.statusText);
        return;
      }

      // ✅ Clic autorisé, on effectue les calculs ici
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
    } catch (error) {
      console.error("Erreur appel API clic :", error);
    }
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

      <h2 className="text-xl font-semibold mb-8 text-white">Item Sale Prices (per unit)</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mb-8">
     
        {recipes.map((r) => (
  <div key={r.name}>
    <div className="flex items-center gap-2 md:mx-20 mb-1">
      <img src={r.image} alt={r.name} className="w-6 h-6" />
      <span className="font-semibold text-white">{r.name} (x{r.quantity})</span>
    </div>
    <div className="md:mx-20">

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