import { PortableText } from '@portabletext/react';

import { Box, Link, List, ListItem, Typography } from '@mui/material';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';

type props = {
  content: any;
};
// Example rich text rendering using MUI components
const RichText = ({ content }: props) => (
  <PortableText
    value={content}
    components={{
      // Custom rendering of different block types
      block: {
        h1: ({ children }) => (
          <Typography variant="h1" component="h1" gutterBottom>
            {children}
          </Typography>
        ),
        h2: ({ children }) => (
          <Typography variant="h2" component="h2" gutterBottom>
            {children}
          </Typography>
        ),
        h3: ({ children }) => (
          <Typography variant="h3" component="h3" gutterBottom>
            {children}
          </Typography>
        ),
        normal: ({ children }) => (
          <Typography variant="body1" gutterBottom>
            {children}
          </Typography>
        ),
        p: ({ children }) => (
          <Typography variant="body1" gutterBottom>
            {children}
          </Typography>
        ),
        blockquote: ({ children }) => (
          <Box
            component="blockquote"
            sx={{ fontStyle: 'italic', padding: 2, marginLeft: 2, borderLeft: '4px solid #ccc' }}
          >
            {children}
          </Box>
        ),
      },
      // Custom rendering for list blocks (bullet and numbered)
      list: {
        bullet: ({ children }) => (
          <List sx={{ listStyleType: 'disc', paddingLeft: 4 }}>{children}</List>
        ),
        number: ({ children }) => (
          <List sx={{ listStyleType: 'decimal', paddingLeft: 4 }}>{children}</List>
        ),
      },
      // Custom rendering for list items
      listItem: ({ children }) => <ListItem sx={{ display: 'list-item' }}>{children}</ListItem>,
      // Custom rendering for link annotations
      marks: {
        internalLink: ({ children, value }) => (
          <Link href={`/content/${value.reference.slug.current}`} underline="hover">
            {children}
          </Link>
        ),
        externalLink: ({ children, value }) => (
          <Link href={value.href} target="_blank" rel="noopener noreferrer" underline="hover">
            {children}
          </Link>
        ),
        strong: ({ children }) => (
          <Typography component="strong" sx={{ fontWeight: 'bold' }}>
            {children}
          </Typography>
        ),
        em: ({ children }) => (
          <Typography component="em" sx={{ fontStyle: 'italic' }}>
            {children}
          </Typography>
        ),
      },
      // Custom rendering for images (handling Sanity image asset references)
      types: {
        figure: ({ value }) => (
          <Box sx={{ marginBottom: 2, borderRadius: 2 }}>
            <Image
              src={value?.image ? (urlFor(value?.image.asset)?.url() ?? '') : ''}
              alt={value.image.alt || ''}
              sx={{ borderRadius: 2 }}
            />
          </Box>
        ),
      },
    }}
  />
);
export default RichText;
