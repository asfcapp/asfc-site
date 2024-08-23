// lib/queries.ts

import { client } from './client';

export async function fetchCampaignsWithInfractions() {
  const query = `*[_type == "campagne"] {
      title,
      slug,
      image->
      description,
      "infractions": ...(infractions[]-> {
        infractionName,
        briefDescription,
        infractionImage,
      }),
      seo->
    }`;
  // Todo we must other fields of infractions,
  return client.fetch(query);
}
export async function fetchBlog() {
  const query = ` *[_type == "blog"] {
        ...,
        category,
        isDisplayedOnHome 
      } | order(publishedAt desc)`;
  //  ..., Includes all fields of the "blog" document
  //  category, Retrieves the category of the blog
  // isDisplayedOnHome Indicates if the blog should be displayed on the homepage
  // order(publishedAt desc)  Sorts results by publication date in descending order
  return client.fetch(query);
}
export async function fetchPartners() {
  const query = `*[_type == "partner"] {
        name, 
        description, 
        partnerType 
      } | order(name)`;
  // name Retrieves the name of the partner
  // description Retrieves the description of the partner
  // partnerType Retrieves the type of the partner
  // order(name) Sorts results by name in ascending order
  return client.fetch(query);
}
export async function fetchRoj() {
  const query = `*[_type == "roj"]{
        title,
        slug,
        description,
        body,
        imageRoj->,
	      seo->
      }`;
  // title Retrieves the title of the Roj
  // slug Retrieves the slug of the Roj
  // description Retrieves the description of the Roj
  // body Retrieves the body of the Roj
  // imageRoj Retrieves the image of the Roj
  // seo Retrieves the SEO information of the Roj
  return client.fetch(query);
}
export async function fetchTags() {
  const query = ` *[_type == "tag"] {
        title,
        slug,
        description
      } | order(title)`;
  // title Retrieves the title of the tag
  // slug Retrieves the slug of the tag
  // description Retrieves the description of the tag
  // order(title) Sorts results by title in ascending order
  return client.fetch(query);
}
export async function fetchAboutUs() {
  const query = `*[_type == "aboutUs"]{
        title,
        slug,
        body
      }`;
  // title Retrieves the title of the About Us page
  // slug Retrieves the slug of the About Us page
  // body Retrieves the body of the About Us page
  return client.fetch(query);
}
export async function fetchCommuniques() {
  const query = `*[_type =="communiques"]{
	  ...,
	  publishedAt,
	  "illustrations": ...(illustrations[]->),
	  isDisplayedOnHome,
	}`;
  // ..., Includes all fields of the "communiques" document from content
  // publishedAt Retrieves the publication date of the communique
  // illustrations Retrieves the illustrations image with some metadata  of the communique
  // isDisplayedOnHome Indicates if the communique should be displayed on the homepage
  return client.fetch(query);
}
