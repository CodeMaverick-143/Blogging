export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface User {
  name: string;
  avatar: string;
}