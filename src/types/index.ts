export interface Profile {
  name: string;
  role: string;
  location: string;
  phone?: string;
  email: string;
  copyrightYear: number;
  author: string;
  greeting: string;
  heroHeadlinePrefix: string;
  rotatingKeywords: string[];
  avatarUrl: string;
  availability: string;
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: 'AI / ML' | 'Full-Stack' | 'Web Apps' | 'Mobile' | 'Security';
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  tags: string[];
  client?: string;
  date: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
  thumbnail: string;
}
