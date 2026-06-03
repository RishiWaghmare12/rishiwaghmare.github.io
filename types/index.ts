export interface Skill {
  name: string;
  icon?: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'ml' | 'quantum' | 'devops';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'internship' | 'fulltime' | 'research';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problemStatement: string;
  solution: string;
  keyAchievements: string[];
  technologies: string[];
  duration: string;
  startDate: string;
  endDate: string;
  teamSize?: number;
  role?: string;
  images?: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
  category: 'quantum' | 'fullstack' | 'ml' | 'research';
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  issueDate: string;
  skills: string[];
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'academic' | 'competitive' | 'professional';
  value?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    socialLinks: SocialLink[];
  };
  education: Array<{
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    highlights?: string[];
  }>;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
  careerGoals: string;
  interests: string[];
}
