export type SkillCategory = {
  id: string;
  name: string;
  description: string | null;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type Skill = {
  id: string;
  name: string;
  description: string | null;
  category: SkillCategory;
  proficiencyLevel: number;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
};
