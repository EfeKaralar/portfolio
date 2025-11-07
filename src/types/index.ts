// src/types/index.ts

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  category: string[],
  // 'activeCategory' | devops' | 'ml' | 'systems' | 'fullstack';
  timeline?: string;
  demoUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

export interface Experience {
  id: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  current?: boolean;
}
