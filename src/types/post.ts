// interfaces.ts

import { SanityBlock } from './roj';
import { SanityImage } from './sanity';

export interface Author {
  _id: string;
  name: string;
  image: string;
}

export interface Category {
  _id: string;
  title: string;
}
export type Tag = {
  _id: string;
  title: string;
};
export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: Author;
  mainImage: SanityImage;
  categories: Category[];
  publishedAt: string;
  tag: Tag;
  body: SanityBlock[];
}
