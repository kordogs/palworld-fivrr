export interface Monster {
  monsterName: string;
  monsterID: number;
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
  activeSkills: {
    name: string;
    type: string;
    power: number;
    cooldownTime: number;
    description: string;
  }[];
}
