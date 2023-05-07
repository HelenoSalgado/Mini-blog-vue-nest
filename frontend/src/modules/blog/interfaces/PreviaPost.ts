export interface PreviaPost {
    id: string;
    author?:{
      name: string;
    };
    title?: string;
    content?: string;
    authorId?: string;
    views?: number;
    likes: number;
    comments: number;
  }