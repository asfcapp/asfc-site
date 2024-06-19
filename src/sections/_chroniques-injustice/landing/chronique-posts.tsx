import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { IBlogPostProps } from 'src/types/blog';

import ChroniquePostItem from './chronique-post-item';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function ChroniquePosts({ posts }: Props) {
  const featuredPost = posts[0];

  return (
    <Container
      sx={{
        mt: { xs: 0, md: 5 },
        pb: 10,
      }}
    >
      <Box
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <ChroniquePostItem post={featuredPost} largePost />

        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {posts.slice(1, 5).map((post) => (
            <ChroniquePostItem key={post.id} post={post} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
