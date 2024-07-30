// lib/queries.ts

import { client } from './client';

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
export async function fetchTags() {
  const query = `*[_type == "tag"]{
  _id,
  title,
  }`;
  return client.fetch(query);
}
