'use client';

import useSWR from 'swr';

import { Box, Stack, Container, Typography } from '@mui/material';

import { fetchHomePosts } from 'src/lib/queries';

import { Post } from 'src/types/post';

import HomeAbout from '../home-about';
import ColorMap from '../color-mapping';
import FullMapScreen from '../full-map-secreen';
import FeaturedPosts from '../landing/featured-posts';

// Fetcher function for SWR
const fetcher = async () => {
  const fetchedData = await fetchHomePosts();
  return fetchedData;
};

export default function HomeView({ initialData }: { initialData: Post[] }) {
  const { data, error } = useSWR<Post[]>('home-posts', fetcher, { fallbackData: initialData });

  if (error) return <div>Failed to load posts</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Container
        sx={{
          mt: { xs: 10, md: 15 },
          pb: 10,
        }}
      >
        {data && <FeaturedPosts posts={data ?? []} />}
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
        <Stack mr={1} alignItems="end">
          <FullMapScreen />
        </Stack>
        <ColorMap id="maps" open={false} />
      </Box>

      <HomeAbout />
    </>
  );
}
