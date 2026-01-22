import React from 'react';

export type Language = 'zh' | 'en';

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
  imageUrls?: string[]; 
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
  imageUrls?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Social {
  name: string;
  icon: React.ReactNode;
  link: string;
}

export interface ResumeData {
  nav: {
    education: string;
    experience: string;
    projects: string;
    publications: string;
    resumeBtn: string;
    skills: string;
  };
  personalInfo: {
    name: string;
    secondaryName: string; // Used for the gray text next to name
    title: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    summary: string;
    socials: Social[];
  };
  experience: Experience[];
  projects: Project[];
  education: Education[];
  publications: Publication[];
  skills: SkillCategory[];
}