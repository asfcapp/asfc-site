'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _tags, _mock, _categories, _travelPosts } from 'src/_mock';

import ChroniquePosts from '../landing/chronique-posts';
import AllChronique from '../landing/all-chroniques';
import CommunitySpace from '../landing/community-space';
import PostSidebar from '../landing/community-space-posts-sidebar';
import { Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function ChroniqueLandingView() {
  return (
    <>
      <ChroniquePosts posts={_travelPosts.slice(-5)} />

      <AllChronique />

      <Container
        sx={{
          mt: { xs: 4, md: 10 },
        }}
      >
        <Stack
          direction="row"
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Espace communautaire</Typography>
        </Stack>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <CommunitySpace posts={_travelPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _travelPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.travel(9),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
