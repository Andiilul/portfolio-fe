import type { MediaFile } from "./media";
import type { Technology } from "./technology";

export type ProjectStatus = "draft" | "published" | "archived";

export type Project = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
  image: MediaFile | null;
  status: ProjectStatus;
  displayOrder: number;
  technologies: Technology[];
  createdAt: string;
  updatedAt: string;
};
