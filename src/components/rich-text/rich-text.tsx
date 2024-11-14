import { PortableText } from '@portabletext/react';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import urlFor from 'src/lib/sanity';
import Image from 'src/components/image';

type Props = {
  content: any; // Waiting for implementation of Sanity Typegen
};

// Renders heading elements (h1 - h6) dynamically based on the variant passed
export const renderHeading = ({ variant, children }: { variant: string; children: React.ReactNode }) => (
  <Typography variant={variant} component={variant} gutterBottom>
    {children}
  </Typography>
);

// Renders paragraphs (p, normal blocks)
export const renderParagraph = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="body1" gutterBottom>
    {children}
  </Typography>
);

// Renders blockquotes with custom styling
export const renderBlockquote = ({ children }: { children: React.ReactNode }) => (
  <Box
    component="blockquote"
    sx={{ fontStyle: 'italic', padding: 2, marginLeft: 2, borderLeft: '4px solid #ccc' }}
  >
    {children}
  </Box>
);

// Renders unordered (bullet) lists
export const renderBulletList = ({ children }: { children: React.ReactNode }) => (
  <List sx={{ listStyleType: 'disc', paddingLeft: 4 }}>{children}</List>
);

// Renders ordered (numbered) lists
export const renderNumberedList = ({ children }: { children: React.ReactNode }) => (
  <List sx={{ listStyleType: 'decimal', paddingLeft: 4 }}>{children}</List>
);

// Renders individual list items
export const renderListItem = ({ children }: { children: React.ReactNode }) => (
  <ListItem sx={{ display: 'list-item' }}>{children}</ListItem>
);

// Renders internal links (e.g., links to other content within the site)
export const renderInternalLink = ({ children, value }: { children: React.ReactNode; value: { reference: { slug: { current: string } } } }) => (
  <Link href={`/content/${value.reference.slug.current}`} underline="hover">
    {children}
  </Link>
);

// Renders external links (opens in new tab)
export const renderExternalLink = ({ children, value }: { children: React.ReactNode; value: { href: string } }) => (
  <Link href={value.href} target="_blank" rel="noopener noreferrer" underline="hover">
    {children}
  </Link>
);

// Renders bold (strong) text
export const renderBold = ({ children }: { children: React.ReactNode }) => (
  <Typography component="strong" sx={{ fontWeight: 'bold' }}>
    {children}
  </Typography>
);

// Renders italic (emphasized) text
export const renderItalic = ({ children }: { children: React.ReactNode }) => (
  <Typography component="em" sx={{ fontStyle: 'italic' }}>
    {children}
  </Typography>
);

// Renders images, handling the Sanity image asset references
export const renderImage = ({ value }: { value: { image: { asset: { _ref: string } }; alt: string } }) => {
  const imageUrl = urlFor(value?.image.asset)?.url() ?? ''; // Fallback to empty string
  return (
    <Box sx={{ marginBottom: 2, borderRadius: 2 }}>
      <Image src={imageUrl} alt={value.image.alt || ''} sx={{ borderRadius: 2 }} />
    </Box>
  );
};

// Components object used by PortableText for rendering content
const components = {
  block: {
    h1: (props: any) => renderHeading({ ...props, variant: 'h1' }), // Render heading level 1
    h2: (props: any) => renderHeading({ ...props, variant: 'h2' }), // Render heading level 2
    h3: (props: any) => renderHeading({ ...props, variant: 'h3' }), // Render heading level 3
    h4: (props: any) => renderHeading({ ...props, variant: 'h4' }), // Render heading level 4
    h5: (props: any) => renderHeading({ ...props, variant: 'h5' }), // Render heading level 5
    h6: (props: any) => renderHeading({ ...props, variant: 'h6' }), // Render heading level 6
    normal: renderParagraph, // Render normal paragraphs
    p: renderParagraph, // Render paragraph blocks
    blockquote: renderBlockquote, // Render blockquotes
  },
  list: {
    bullet: renderBulletList, // Render bullet (unordered) lists
    number: renderNumberedList, // Render numbered (ordered) lists
  },
  listItem: renderListItem, // Render individual list items
  marks: {
    internalLink: renderInternalLink, // Render internal links
    externalLink: renderExternalLink, // Render external links
    strong: renderBold, // Render bold (strong) text
    em: renderItalic, // Render italic (emphasized) text
  },
  types: {
    figure: renderImage, // Render image figures
  },
};

// Main RichText component that uses PortableText to render the content
const RichText = ({ content }: Props) => <PortableText value={content} components={components} />;

export default RichText;
