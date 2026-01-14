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
  imageUrls?: string[]; // Changed from single string to array
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
  url?: string;
  image?: string; // Added optional image for architecture diagram
}

export interface SkillCategory {
  category: string;
  skills: string[];
}