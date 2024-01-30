export interface Monster {
  monsterName: string;
  monsterID: string | number;
  elementType: string[];
  description: string;
  workSuitability: {
    Handiwork?: number;
    Transporting?: number;
    Mining?: number;
  };
  partnerSkill: {
    name: string;
    description: string;
  };
  activeSkills?: {
    name: string;
    type: string;
    power: number;
    cooldownTime: number;
    description: string;
  }[];
  passiveSkills?: string[]; // Add type if possible
  catchStrategyAndWeakness: {
    strategy: string;
    weaknesses: string;
  };
  baseStats: {
    HP: number;
    Hunger: number;
    Attack: number;
    Defense: number;
  };
  materialAndItemDrops?: {
    materialsDropped: string[];
    possibleDrops: string | string[]; // Make 'possibleDrops' flexible
  };
  tierListRanking?: {
    combatTier?: string;
    rideTier?: string;
    baseTier?: string;
  };
  breeding: {
    breedingCombos: { parent1: string; parent2: string }[];
    recommendedCombos: { parent1: string; parent2: string; child: string }[];
  };
}
