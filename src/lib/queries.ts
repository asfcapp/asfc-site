// lib/queries.ts
import { defineQuery } from 'next-sanity';

export const CAMPAIGNS_WITH_INFRACTIONS_QUERY = defineQuery(`*[_type == "campagne"] {
      _id,
      name,
      slug,
      image->,
      description,
      infractions[]-> {
        _id,
        infractionName,
        briefDescription,
        infractionImage->,
        lawArticle,
        explanation, 
        moroccanData,
        observation,
        publication

},
      seo->
    }`);
export const BLOG_QUERY = defineQuery(` *[_type == "blog"] {
        ...,
        seo->,
        category,
        isDisplayedOnHome
      } | order(publishedAt desc)`);
//  ..., Includes all fields of the "blog" document
//  category, Retrieves the category of the blog
// isDisplayedOnHome Indicates if the blog should be displayed on the homepage
// order(publishedAt desc)  Sorts results by publication date in descending order

export const PARTNERS_QUERY = defineQuery(`*[_type == "partner" && $partnerType in partnerType] {
    _id,
    name,
    description,
    partnerType,
    image->,
      socialLink[]->{
        platform,
        url,
        icon->{
          conIdentifier
        }
      }
  } | order(name)
`);

// name Retrieves the name of the partner
// description Retrieves the description of the partner
// partnerType Retrieves the type of the partner
// image Retrieves the image of the partner
// socialLink Retrieves the social media links of the partner
// platform Retrieves the platform of the social media link
// url Retrieves the URL of the social media link
// icon Retrieves the icon of the social media link that is going to be used by iconify
// order(name) Sorts results by name in ascending order

export const ROJ_QUERY = defineQuery(`*[_type == "roj"]{
        _id,
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
export const TAGS_QUERY = defineQuery(` *[_type == "tag"] {
        _id,
        title,
        slug,
        description
      } | order(title)`);
// title Retrieves the title of the tag
// slug Retrieves the slug of the tag
// description Retrieves the description of the tag
// order(title) Sorts results by title in ascending order

export const ABOUT_US_QUERY = defineQuery(`*[_type == "aboutUs"]{
        _id,
        title,
        slug,
        body
      }`);
// title Retrieves the title of the About Us page
// slug Retrieves the slug of the About Us page
// body Retrieves the body of the About Us page
export const COMMUNIQUES_QUERY = defineQuery(`*[_type =="communiques"]{
	  ...,
	  publishedAt,
	  "illustrations": illustrations[]->,
	  isDisplayedOnHome,
	}`);
// ..., Includes all fields of the "communiques" document from content
// publishedAt Retrieves the publication date of the communique
// illustrations Retrieves the illustrations image with some metadata  of the communique
// isDisplayedOnHome Indicates if the communique should be displayed on the homepage
