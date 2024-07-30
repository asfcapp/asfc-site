import { Seo } from "./seo";
import { Delit } from "./delit";
import { SanityImage } from "./sanity";
import { Partenaire } from "./partenaire";



export interface Campagne {
  _id: string;
  title: string;
  image: SanityImage;  // Assuming SanityImage includes an asset URL
  description: string;
  _createdAt: Date;
  partenaire: Partenaire[];
  delit: Delit[];
  seo?: Seo;  // Optional, as SEO fields might not be present
}
