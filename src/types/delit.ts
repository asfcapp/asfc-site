import { SanityBlock, SanityImage } from './roj';

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
