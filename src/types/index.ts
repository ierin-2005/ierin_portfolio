export type ThemeMode = 'dark' | 'light';

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  portfolio?: string;
}

export interface HeroData {
  name: string;
  initials: string;
  headline: string;
  subHeadline: string;
  location: string;
  email: string;
  resumeFileName: string;
  highlights: string[];
}

export interface ArchitectureStep {
  id: string;
  label: string;
  subLabel: string;
  description: string;
  iconName: string;
}

export interface HydroGPTProject {
  id: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  summary: string;
  presentationContext: string;
  architectureSteps: ArchitectureStep[];
  whatIBuilt: {
    title: string;
    points: string[];
  }[];
  keyCapabilities: string[];
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  isInternalLAndTProject: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  problem: string;
  contribution: string;
  technologies: string[];
  highlight?: string;
  repoUrl?: string;
  demoUrl?: string;
  isConceptOrPrototype?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
  featuredTag?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  details?: string;
}

export interface AchievementItem {
  title: string;
  category: 'Academic & Technical' | 'Sports & Adventure' | 'Leadership & Arts' | 'Arts & Culture';
  organizer: string;
  description: string;
  icon: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  score?: string;
  category: 'AI & Machine Learning' | 'Embedded & Hardware' | 'Development & Cyber';
  verifyUrl?: string;
}
