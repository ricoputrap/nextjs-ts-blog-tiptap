export type BlogPost = {
  id?: number;
  title: string;
  body?: string;
  cover: string;
  createdAt: string;
}

export type Posts = {
  posts: BlogPost[];
}