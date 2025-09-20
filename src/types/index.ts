export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  excerpt: string;
  category: string;
  tags: string[];
  thumbnail?: string;
}

export interface Author {
  name: string;
  bio: string;
  avatar: string;
  email: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export type PageType = 'home' | 'post' | 'about' | 'games' | 'editor';