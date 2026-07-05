import type { Experience } from "./experience";
import type { Project } from "./project";
import type { Skill } from "./skill";

export type PortfolioStatus = "draft" | "published" | "archived";

export type PortfolioProject = {
  portfolioId: string;
  projectId: string;
  project: Project;
  displayOrder: number;
  featured: boolean;
  customTitle: string | null;
  customSummary: string | null;
};

export type PortfolioSkill = {
  portfolioId: string;
  skillId: string;
  skill: Skill;
  displayOrder: number;
  featured: boolean;
  customDescription: string | null;
};

export type PortfolioExperience = {
  portfolioId: string;
  experienceId: string;
  experience: Experience;
  displayOrder: number;
  featured: boolean;
  customDescription: string | null;
};

export type PortfolioDetail = {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string | null;
  summary: string | null;
  targetRole: string | null;
  status: PortfolioStatus;
  isDefault: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  projects: PortfolioProject[];
  skills: PortfolioSkill[];
  experiences: PortfolioExperience[];
};
