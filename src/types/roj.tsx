import { SanityImage } from "./sanity";
import { Partenaire } from "./partenaire";



export interface SanityLink {
  _type: string;
  href: string;
}
export interface File {
  _type: 'file';
  asset: {
    _ref: string;
  };
  size?: number;
  url?: string;
  title?: string;
}
export interface SanityBlock {
  _key: string;
  _type: string;
  style?: string;
  listItem?: string;
  file : File;
  markDefs?: SanityLink[];
  children: {
    _key: string;
    _type: string;
    text: string;
    marks: string[];
  }[];
}

export interface RojDocument {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  partenaire: Partenaire[];
  subtitle: string;
  image: SanityImage;
  sectionTitle: string;
  sectionSubTitle: string;
  sectionDescription: SanityBlock[];
}
