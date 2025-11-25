
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Offer {
  title: string;
  priceRange: string;
  delivery: string;
  features: string[];
  recommended?: boolean;
  color: string;
}

export interface Industry {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface CaseStudy {
  title: string;
  category: string;
  metric: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  category: string;
  image: string;
  readTime: string;
  featured?: boolean;
}
