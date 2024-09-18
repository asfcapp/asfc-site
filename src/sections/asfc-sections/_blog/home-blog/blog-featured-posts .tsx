'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import SingleBlogItem from './blog-featured-single-post';

// ----------------------------------------------------------------------

type Props = {
  blogs: any;
};

export default function BlogFeaturedPosts({ blogs }: Props) {
  const featuredBlog = blogs[0];
  console.log('featuredBlog', featuredBlog);
  return (
    <Container
      sx={{
        pt: { xs: 0, md: 5 },
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
        <SingleBlogItem blog={featuredBlog} largePost />

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
          {blogs.slice(1, 5).map((blog: any) => (
            <SingleBlogItem key={blog._id} blog={blog} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
