'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { _tags } from 'src/_mock';

// import CareerNewsletter from '../career-newsletter';
import PostSidebar from '../../common/post-sidebar';
import PostSearchMobile from '../../common/post-search-mobile';
import CommuniqueHomePosts from '../home-communique/communique-home-posts';

// ----------------------------------------------------------------------
type Props = {
  communiques: any;
};
export default function CareerPostsView({ communiques }: Props) {
  return (
    <>
      <PostSearchMobile />

      <Container
        sx={{
          pt: { xs: 0, md: 5 },
          pb: { xs: 8, md: 15 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <CommuniqueHomePosts communiques={communiques} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar popularTags={_tags} recentPosts={communiques.slice(0, 5)} />
          </Grid>
        </Grid>
      </Container>

      {/* <CareerNewsletter /> */}
    </>
  );
}
