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
  return await client.fetch(query);
}

export async function fetchPartenaires() {
  const query = `*[_type == "partenaire"]{
  photo,
  name,
  review
  }`;
  return await client.fetch(query);
}

export async function fetchHomeData() {
  const query = `*[_type == "home"][0]{
  about,
  aboutdescription,
  rows,
  sectionTitle}`;
  return await client.fetch(query);
}

export async function fetchPosts() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author->{
      _id,
      name,
      image
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
  return await client.fetch(query);
}

export async function fetchPostById(id: string) {
  const query = `*[_type == "post" && _id == $id][0]{
    _id,
    title,
    slug,
    author->{
      _id,
      name,
      image
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
