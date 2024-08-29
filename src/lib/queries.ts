// lib/queries.ts
import {defineQuery} from 'next-sanity'

export const CampaignsWithInfractionsQuery =defineQuery(`*[_type == "campagne"] {
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
    }`);
  // !Todo: Must add other fields of infractions,
export const BlogQuery = defineQuery(` *[_type == "blog"] {
        ...,
        category,
        isDisplayedOnHome 
      } | order(publishedAt desc)`);
  //  ..., Includes all fields of the "blog" document
  //  category, Retrieves the category of the blog
  // isDisplayedOnHome Indicates if the blog should be displayed on the homepage
  // order(publishedAt desc)  Sorts results by publication date in descending order

export const PartnersQuery = defineQuery(`*[_type == "partner"] {
        name, 
        description, 
        partnerType 
      } | order(name)`);
  // name Retrieves the name of the partner
  // description Retrieves the description of the partner
  // partnerType Retrieves the type of the partner
  // order(name) Sorts results by name in ascending order


export const RojQuery = defineQuery(`*[_type == "roj"]{
        title,
        slug,
        description,
        body,
        imageRoj->,
	      seo->
      }`);
  // title Retrieves the title of the Roj
  // slug Retrieves the slug of the Roj
  // description Retrieves the description of the Roj
  // body Retrieves the body of the Roj
  // imageRoj Retrieves the image of the Roj
  // seo Retrieves the SEO information of the Roj
export const TagsQuery = defineQuery(` *[_type == "tag"] {
        title,
        slug,
        description
      } | order(title)`);
  // title Retrieves the title of the tag
  // slug Retrieves the slug of the tag
  // description Retrieves the description of the tag
  // order(title) Sorts results by title in ascending order

export const AboutUsQuery = defineQuery(`*[_type == "aboutUs"]{
        title,
        slug,
        body
      }`);
  // title Retrieves the title of the About Us page
  // slug Retrieves the slug of the About Us page
  // body Retrieves the body of the About Us page
export const CommuniquesQuery= defineQuery(`*[_type =="communiques"]{
	  ...,
	  publishedAt,
	  "illustrations": ...(illustrations[]->),
	  isDisplayedOnHome,
	}`);
  // ..., Includes all fields of the "communiques" document from content
  // publishedAt Retrieves the publication date of the communique
  // illustrations Retrieves the illustrations image with some metadata  of the communique
  // isDisplayedOnHome Indicates if the communique should be displayed on the homepage
