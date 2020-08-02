interface Attack {
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

interface Resistance {
  type: string;
  value: string;
}

interface Weakness {
  type: string;
  value: string;
}

export interface PokemonCard {
  id: string;
  name: string;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  attacks: Attack[];
  resistances: Resistance[];
  weaknesses: Weakness[];
}
