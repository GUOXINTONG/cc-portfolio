export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  email: string;
  github: string;
  linkedin?: string;
  twitter?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  body: string;
  collection: 'blog';
  data: {
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: Date;
    heroImage?: string;
    tags: string[];
    draft: boolean;
  };
}

export interface Project {
  id: string;
  collection: 'projects';
  data: {
    name: string;
    description: string;
    url?: string;
    github: string;
    tags: string[];
    featured: boolean;
    image?: string;
  };
}
