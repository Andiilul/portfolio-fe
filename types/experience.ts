import type { MediaFile } from "./media";

export type ExperienceType = {
  id: string;
  name: string;
  description: string | null;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type Experience = {
  id: string;
  title: string;
  organization: string | null;
  description: string;
  type: ExperienceType;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  location: string | null;
  attachment: MediaFile | null;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
};
