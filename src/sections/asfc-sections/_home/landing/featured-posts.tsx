import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Post } from 'src/types/post';

import FeaturedPost from './featured-post';
import FeaturedListPosts from './featured-list-posts';

// ----------------------------------------------------------------------

type Props = {
  posts: Post[];
};

export default function FeaturedPosts({ posts }: Props) {

  // Ensure posts is an array and has at least one element
  const hasPosts = Array.isArray(posts) && posts.length > 0;
  const featuredPost = hasPosts ? posts[0] : null;

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
        {/* Render FeaturedPost only if featuredPost exists */}
        {featuredPost && <FeaturedPost post={featuredPost} largePost />}
        
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
          {/* Render FeaturedListPosts only if there are more posts */}
          {hasPosts && posts.slice(1, 5).map((post) => (
            <FeaturedListPosts key={post._id} post={post} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
