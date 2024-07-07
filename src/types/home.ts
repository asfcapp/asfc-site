// interfaces.ts
export interface AboutList {
  title: string;
  content: string;
}

export interface Home {
  sectionTitle: string;
  about: string;
  aboutdescription: string;
  rows: AboutList[];
}
