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
}
export async function fetchHomeData() {
  const query = `*[_type == "home"][0]{
    sectionTitle,
    about,
    aboutdescription,
    rows[] {
      title,
      content
    },
    seo{
      metaTitle,
      metaDescription,
      keywords
    }
  }`;
  return client.fetch(query);
}
export async function fetchRojData() {
  const query = `*[_type == "roj"]{
    _id,
    title,
    slug,
    subtitle,
    image,
    sectionTitle,
    sectionSubTitle,
    sectionDescription,
    partenaire[]->{
      _id,
      photo,
      name,
      review
    },
    seo {
      metaTitle,
      metaDescription,
      keywords,
    }
  }[0]`;
  return client.fetch(query);
}

export async function fetchCampagnesData() {
  const query = `*[_type == "campagne"]{
    _id,
    title,
    image,
    description,
    _updatedAt,
    _createdAt,
    partenaire[]->{
      _id,
      photo,
      name,
      review
    },
    delit[]->{
      _id,
      _createdAt,
      title,
      "file": pdf.asset->url,
      photo,
      description,
      articleDeLoi{
        title,
        description,
        files[] {
          asset->{
            _id,
            url
          },
          originalFilename,
          size
        }
      },
      explication,
      dataMaroc,
      observation,
      publication
    },
    seo {
      metaTitle,
      metaDescription,
      keywords,
    }
  }`;
  return client.fetch(query);
}

export async function fetchDelitDataById(delitId: string) {
  const query = `*[_type == "delit" && _id == $delitId]{
    _id,
    _createdAt,
    title,
    photo,
    description,
    articleDeLoi,
    explication,
    dataMaroc,
    observation,
    publication{
      title,
      policy,
      etudes,
      presse[]->{
        _id,
        title,
        slug,
        author->{
          _id,
          name,
          image{
            asset->{
              _id,
              url
            }
          },
          bio,
          instagram,
          linkedin,
          facebook,
          website,
          dateJoined
        },
        mainImage{
          asset->{
            _id,
            url
          }
        },
        categories[]->{
          _id,
          title
        },
        publishedAt,
        body,
        tag[]->{
          _id,
          title
        }
      }
    }
  }`;

  const params = { delitId };
  return client.fetch(query, params);
}
export async function fetchPartenaires() {
  const query = `*[_type == "partenaire"]{
  photo,
  name,
  review
  }`;
  return client.fetch(query);
}

export async function fetchPosts() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author->{
      _id,
      name,
      image,
      bio,
      instgram,
      linkedin,
      facebook,
      website,
      dateJoined
    },
    mainImage,
    categories[]->{
      _id,
      title
    },
    publishedAt,
    body,
    tag
  }`;
  return client.fetch(query);
}

export async function fetchPostById(id: string) {
  const query = `*[_type == "post" && _id == $id][0]{
    _id,
    title,
    slug,
     author->{
      _id,
      name,
      image,
      bio,
      instagram,
      linkedin,
      facebook,
      website,
      dateJoined
    },
    mainImage,
    categories[]->{
      _id,
      title
    },
    publishedAt,
    body,
    tag[]->{
      _id,
    title,
    }
  }`;

  try {
    const post = await client.fetch(query, { id });
    return post;
  } catch (error) {
    console.error('Error fetching post by id:', error);
    return null;
  }
}

export async function fetchRecentPosts(limit: number = 4) {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...$limit]{
    _id,
    title,
    slug,
    author->{
      _id,
      name,
      image,
      bio,
      instagram,
      linkedin,
      facebook,
      website,
      dateJoined
    },
    mainImage,
    categories[]->{
      _id,
      title
    },
    publishedAt,
    body,
    tag
  }`;
  return client.fetch(query, { limit });
}
// lib/queries.ts

export async function fetchHomePosts() {
  const query = `*[_type == "post" && displayOnHomePage == true] {
    _id,
    title,
    slug,
    author->{
      _id,
      name,
      image,
      bio,
      instagram,
      linkedin,
      facebook,
      website,
      dateJoined
    },
    mainImage,
    categories[]->{
      _id,
      title
    },
    publishedAt,
    body,
    tag
  }`;
  return client.fetch(query);
}

export async function fetchCategories() {
  const query = `*[_type == "category"]{
  _id,
  title,
  }`;
  return client.fetch(query);
}
