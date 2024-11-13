import { PortableText } from '@portabletext/react';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import urlFor from 'src/lib/sanity';
import Image from 'src/components/image';

type Props = {
  content: any;
};

// Function to render heading elements
const renderHeading = (props: { variant: string; children: React.ReactNode }) => {
  const { variant, children } = props;
  return (
    <Typography variant={variant} component={variant} gutterBottom>
      {children}
    </Typography>
  );
};

// Function to render paragraphs
const renderParagraph = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="body1" gutterBottom>
    {children}
  </Typography>
);

// Function to render blockquotes
const renderBlockquote = ({ children }: { children: React.ReactNode }) => (
  <Box
    component="blockquote"
    sx={{ fontStyle: 'italic', padding: 2, marginLeft: 2, borderLeft: '4px solid #ccc' }}
  >
    {children}
  </Box>
);

// Function to render bullet lists
const renderBulletList = ({ children }: { children: React.ReactNode }) => (
  <List sx={{ listStyleType: 'disc', paddingLeft: 4 }}>{children}</List>
);

// Function to render numbered lists
const renderNumberedList = ({ children }: { children: React.ReactNode }) => (
  <List sx={{ listStyleType: 'decimal', paddingLeft: 4 }}>{children}</List>
);

// Function to render list items
const renderListItem = ({ children }: { children: React.ReactNode }) => (
  <ListItem sx={{ display: 'list-item' }}>{children}</ListItem>
);

// Function to render internal links
const renderInternalLink = ({ children, value }: { children: React.ReactNode; value: { reference: { slug: { current: string } } } }) => (
  <Link href={`/content/${value.reference.slug.current}`} underline="hover">
    {children}
  </Link>
);

// Function to render external links
const renderExternalLink = ({ children, value }: { children: React.ReactNode; value: { href: string } }) => (
  <Link href={value.href} target="_blank" rel="noopener noreferrer" underline="hover">
    {children}
  </Link>
);

// Function to render bold text
const renderBold = ({ children }: { children: React.ReactNode }) => (
  <Typography component="strong" sx={{ fontWeight: 'bold' }}>
    {children}
  </Typography>
);

// Function to render italic text
const renderItalic = ({ children }: { children: React.ReactNode }) => (
  <Typography component="em" sx={{ fontStyle: 'italic' }}>
    {children}
  </Typography>
);

// Function to render images
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
    h1: (props) => renderHeading({ ...props, variant: 'h1' }),
    h2: (props) => renderHeading({ ...props, variant: 'h2' }),
    h3: (props) => renderHeading({ ...props, variant: 'h3' }),
    h4: (props) => renderHeading({ ...props, variant: 'h4' }), // Added H4
    h5: (props) => renderHeading({ ...props, variant: 'h5' }), // Added H5
    h6: (props) => renderHeading({ ...props, variant: 'h6' }), // Added H6
    normal: renderParagraph,
    p: renderParagraph,
    blockquote: renderBlockquote,
  },
  list: {
    bullet: renderBulletList,
    number: renderNumberedList,
  },
  listItem: renderListItem,
  marks: {
    internalLink: renderInternalLink,
    externalLink: renderExternalLink,
