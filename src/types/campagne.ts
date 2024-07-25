import { Delit } from "./delit";
import { SanityImage } from "./roj";
import { Partenaire } from "./partenaire";

export interface Campagne {
    _id: string;
    title: string;
    image: SanityImage;
    description: string;
    _createdAt : Date;
    partenaire: Partenaire[];
    delit: Delit[];
  }