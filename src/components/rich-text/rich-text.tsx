import { PortableText } from '@portabletext/react';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import urlFor from 'src/lib/sanity';
import Image from 'src/components/image';

type Props = {
  content: any;
};

// Exported function to render heading elements based on the `variant` prop
export const renderHeading = (props: { variant: string; children: React.ReactNode }) => {
  const { variant, children } = props;
  return (
    <Typography variant={variant} component={variant} gutterBottom>
      {children}
    </Typography>
  );
};

// Exported function to render paragraphs
export const renderParagraph = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="body1" gutterBottom>
    {children}
  </Typography>
);

// Exported function to render blockquotes
export const renderBlockquote = ({ children }: { children: React.ReactNode }) => (
  <Box
    component="blockquote"
    sx={{ fontStyle: 'italic', padding: 2, marginLeft: 2, borderLeft: '4px solid #ccc' }}
  >
    {children}
  </Box>
);

// Exported function to render bullet lists
export const renderBulletList = ({ children }: { children: React.ReactNode }) => (
  <List sx={{ listStyleType: 'disc', paddingLeft: 4 }}>{children}</List>
);

// Exported function to render numbered lists
const renderNumberedList = ({ children }: { children: React.ReactNode }) => (
  <List sx={{ listStyleType: 'decimal', paddingLeft: 4 }}>{children}</List>
);

// Exported function to render list items
const renderListItem = ({ children }: { children: React.ReactNode }) => (
  <ListItem sx={{ display: 'list-item' }}>{children}</ListItem>
);

// Exported function to render internal links
const renderInternalLink = ({ children, value }: { children: React.ReactNode; value: { reference: { slug: { current: string } } } }) => (
  <Link href={`/content/${value.reference.slug.current}`} underline="hover">
    {children}
  </Link>
);

// Exported function to render external links
const renderExternalLink = ({ children, value }: { children: React.ReactNode; value: { href: string } }) => (
  <Link href={value.href} target="_blank" rel="noopener noreferrer" underline="hover">
    {children}
  </Link>
);

// Exported function to render bold text
const renderBold = ({ children }: { children: React.ReactNode }) => (
  <Typography component="strong" sx={{ fontWeight: 'bold' }}>
    {children}
  </Typography>
);

// Exported function to render italic text
const renderItalic = ({ children }: { children: React.ReactNode }) => (
  <Typography component="em" sx={{ fontStyle: 'italic' }}>
    {children}
  </Typography>
);

// Exported function to render images
const renderImage = ({ value }: { value: { image: { asset: { _ref: string } }; alt: string } }) => {
  const imageUrl = urlFor(value?.image.asset).url();
  return (
    <Box sx={{ marginBottom: 2, borderRadius: 2 }}>
      <Image src={imageUrl} alt={value.image.alt || ''} sx={{ borderRadius: 2 }} />
    </Box>
  );
};

const components = {
  block: {
    h1: (props) => renderHeading({ ...props, variant: 'h1' }), // Renders heading level 1
    h2: (props) => renderHeading({ ...props, variant: 'h2' }), // Renders heading level 2
    h3: (props) => renderHeading({ ...props, variant: 'h3' }), // Renders heading level 3
    h4: (props) => renderHeading({ ...props, variant: 'h4' }), // Renders heading level 4
    h5: (props) => renderHeading({ ...props, variant: 'h5' }), // Renders heading level 5
    h6: (props) => renderHeading({ ...props, variant: 'h6' }), // Renders heading level 6
    normal: renderParagraph, // Renders normal paragraphs
    p: renderParagraph,
