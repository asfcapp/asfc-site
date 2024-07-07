export interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanityLink {
  _type: string;
  href: string;
}

export interface SanityBlock {
  _key: string;
  _type: string;
  style?: string;
  listItem?: string;
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
  subtitle: string;
  image: SanityImage;
  sectionTitle: string;
  sectionSubTitle: string;
  sectionDescription: SanityBlock[];
}
