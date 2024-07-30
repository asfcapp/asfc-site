// src/types/partenaire.ts

import { SanityImage } from "./sanity";


export interface Partenaire {
  _id: string; // Optional, if you need to handle document IDs
  _type: 'partenaire'; // Optional, if you want to include type information
  photo: SanityImage;
  name: string;
  review: string;
}
