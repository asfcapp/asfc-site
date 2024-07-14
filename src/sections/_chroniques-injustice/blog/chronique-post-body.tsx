import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { TypedObject } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import React, { Dispatch, useState, useEffect, SetStateAction } from 'react';

import {  Typography } from '@mui/material';

import { client } from 'src/lib/client';
import { fetchPostById } from 'src/lib/queries';

import { Post } from 'src/types/post';
import { IAuthorProps } from 'src/types/author';

interface Props {
  id: string;
  setAuthor: Dispatch<SetStateAction<IAuthorProps | null>>;
}

const { projectId, dataset } = client.config();

// Function to build image URLs from Sanity
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

// PortableText components for custom rendering
const myPortableTextComponents: PortableTextComponents = {
  types: {
    figure: ({ value }) => {
      const { image, caption, alt } = value;
      const imageUrl = urlFor(image)?.url();

      return (
        <figure>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={alt}
              layout="responsive"
              width={800} // Adjust based on your needs
              height={600} // Adjust based on your needs
              objectFit="cover"
            />
          )}
          {caption && (
            <Typography variant="caption" sx={{ mt: 1, opacity: 0.72 }}>
              {caption}
            </Typography>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
    h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
    normal: ({ children }) => <Typography sx={{ mb: 2 }}>{children}</Typography>,
    blockquote: ({ children }) => (
      <Typography
        sx={{
          mb: 5,
          lineHeight: 1.75,
          textAlign: 'center',
          fontSize: { md: 20 },
        }}
      >
        `{children}`
      </Typography>
    ),
  },
};

const ChroniquePostBody: React.FC<Props> = ({ id , setAuthor  }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPost = await fetchPostById(id);
        if (fetchedPost) {
          setAuthor(fetchedPost.author);
        }
        
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
        setPost(null); // Clear post state on error
      }
    };

    fetchData();
  }, [ id , setAuthor ]);

  return (
    <div>
      {post && (
        <>
          <PortableText value={post.body as TypedObject[]} components={myPortableTextComponents} />
          {/* {post.tag && <PostTags tags={post.tag} />} */}
        </>
      )}
    </div>
  );
};

export default ChroniquePostBody;
