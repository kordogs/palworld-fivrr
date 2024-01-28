export interface CardProps {
  name: string;
  type: string[];
  work: string[];
  monsterID: number;
  workPower: number[];
  description: string;
  parent: string[];
  partnerSkill: string[];
  activeSkills: string[];
  onClick: React.MouseEventHandler;
}
