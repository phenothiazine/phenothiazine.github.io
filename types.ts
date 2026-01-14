export interface Experience {
  id: string;
  company: string;
  role: string;
  team?: string;
  period: string;
  summary: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  intro: string;
  highlights: string[];
  imageUrl?: string; // Added optional image URL
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  period: string;
  rank: string;
}

export interface Publication {
  id: string;
  citation: string;
  tag: string;
  url?: string; // Added optional DOI/Link URL
}

export interface SkillCategory {
  category: string;
  skills: string[];
}