import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableText, PortableTextComponents } from '@portabletext/react';

import { Typography } from '@mui/material';

import { client } from 'src/lib/client';

import { SanityBlock } from 'src/types/roj';

interface Props {
  data: SanityBlock[] | undefined;
}

const { projectId, dataset } = client.config();

export const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const myPortableTextComponents: PortableTextComponents = {
  types: {
    figure: ({ value }) => {
      
      const { image, caption, alt } = value;
      const imageUrl = urlFor(image)?.url();
      return (
        <figure>
          <img src={imageUrl} alt={alt} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    },
    file: ({ value }) => {
      console.log(value);

      return (
        <a href={value.asset.url} download target="_blank" rel="noopener noreferrer">
          {value.title || 'Download PDF--'}
        </a>
      );
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="my-h1-class">{children}</h1>,
    h2: ({ children }) => <h2 className="my-h2-class">{children}</h2>,
    normal: ({ children }) => (
      <Typography mb={2} color="text.secondary">
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => <blockquote className="my-blockquote-class">{children}</blockquote>,
  },
};

const BlockContentRenderer: React.FC<Props> = ({ data }) => {
  if (!data) {
    return null; // Or some fallback content
  }

  return (
    <div>
      <PortableText value={data} components={myPortableTextComponents} />
    </div>
  );
};

export default BlockContentRenderer;
