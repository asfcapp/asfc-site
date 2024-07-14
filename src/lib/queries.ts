// lib/queries.ts

import { client } from './client';

export async function fetchRojData() {
  const query = `*[_type == "roj"][0]{
    _id,
    title,
    slug,
    subtitle,
    image,
    sectionTitle,
    sectionSubTitle,
    sectionDescription
  }`;
  return client.fetch(query);
}

export async function fetchPartenaires() {
  const query = `*[_type == "partenaire"]{
  photo,
  name,
  review
  }`;
  return client.fetch(query);
}

export async function fetchHomeData() {
  const query = `*[_type == "home"][0]{
  about,
  aboutdescription,
  rows,
  sectionTitle}`;
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
    console.error('Error fetching post by ID:', error);
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