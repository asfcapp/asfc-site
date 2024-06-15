'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _tags, _mock, _categories, _travelPosts } from 'src/_mock';

import PostSidebar from '../../blog/common/post-sidebar';
import TravelPosts from '../../blog/travel/travel-posts';
import PostSearchMobile from '../../blog/common/post-search-mobile';
import ChroniquePosts from '../landing/chronique-posts';
import AllChronique from '../landing/all-chroniques';
import CommunitySpace from '../landing/community-space';

// ----------------------------------------------------------------------

export default function ChroniqueLandingView() {
  return (
    <>
      <PostSearchMobile />

      <ChroniquePosts posts={_travelPosts.slice(-5)} />

      <AllChronique />

      <Container
        sx={{
          mt: { xs: 4, md: 10 },
        }}
      >
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
