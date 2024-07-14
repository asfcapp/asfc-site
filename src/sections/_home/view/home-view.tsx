'use client';

import { useState, useEffect } from 'react';

import { Box, Stack, Container, Typography } from '@mui/material';

import { fetchHomePosts } from 'src/lib/queries';

import { Post } from 'src/types/post';

import HomeAbout from '../home-about';
import ColorMap from '../color-mapping';
import FeaturedPosts from '../landing/featured-posts';

// ----------------------------------------------------------------------

export default function HomeView() {
  const [data, setData] = useState<Post[] | null>(null); // Use the RojData type

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchHomePosts();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container
        sx={{
          mt: { xs: 10, md: 15 },
          pb: 10,
        }}
      >
        <FeaturedPosts posts={data ?? []} />
      </Container>
      <Box
        sx={{
          bgcolor: 'background.neutral',
          py: { xs: 10 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 600,
            textAlign: 'left',
            pb: { xs: 5 },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            Observation{' '}
          </Typography>

          <Typography variant="h3">Population Carcérale au Maroc par Région</Typography>
        </Stack>
        <ColorMap />
      </Box>

      <HomeAbout />
    </>
  );
}
