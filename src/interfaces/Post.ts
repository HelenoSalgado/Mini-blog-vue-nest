export interface Post {
  author?:{
    name: string;
  };
  title?: string;
  content?: string;
  description?: string;
  published?: boolean;
  authorId?: string;
  views?: number;
  likes?: number | string;
}

export interface UpdatePost extends Omit<Post, 'author' | 'views' | 'likes'> {}