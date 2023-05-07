export interface CreatePost {
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

export interface UpdatePost extends Omit<CreatePost, 'author' | 'views' | 'likes'> {}