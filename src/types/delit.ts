import { SanityBlock } from './roj';
import { SanityImage } from './sanity';

export interface DelitContent {
  title: string;
  description: SanityBlock[];
  files? : any
}

export interface Delit {
  _id?: string;
  _createdAt: Date;
  title: string;
  file: string;
  description: string;
  photo?: SanityImage;
  articleDeLoi: DelitContent;
  explication: DelitContent;
  dataMaroc: DelitContent;
  observation: DelitContent;
  publication: {
    title: string;
    policy: SanityBlock[];
    etudes: SanityBlock[];
    presse: Object;
  };
}
