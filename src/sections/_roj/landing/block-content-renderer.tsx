import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { TypedObject } from '@portabletext/types';
import { SanityBlock } from 'src/types/roj';
import imageUrlBuilder from '@sanity/image-url';
import { client } from 'src/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Typography } from '@mui/material';

interface Props {
  data: SanityBlock[] | undefined;
}
const { projectId, dataset } = client.config();

// ----------------------------------------------------------------------
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
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="my-h1-class">{children}</h1>,
    h2: ({ children }) => <h2 className="my-h2-class">{children}</h2>,
    normal: ({ children }) => (
      <Typography mb={2} color={'text.secondary'}>
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => <h6 className="my-normal-class">{children}</h6>,
  },
};

const BlockContentRenderer: React.FC<Props> = ({ data }) => {
  if (!data) {
    return null; // Or some fallback content
  }

  return (
    <div>
      <PortableText value={data as TypedObject[]} components={myPortableTextComponents} />
    </div>
  );
};

export default BlockContentRenderer;
