'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import DelitsPosts from 'src/sections/blog/campagnes/components/delits/delits-posts';

import { Delit } from 'src/types/delit';

// ----------------------------------------------------------------------
type Props = {
  delits : Delit[]
}
export default function DelitsPostsView({delits } : Props) {
  return (
    <Container
        sx={{
          pt: { xs: 0, md: 5 },
          pb: { xs: 8, md: 15 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <DelitsPosts delits={delits} />
          </Grid>
        </Grid>
      </Container>
  );
}
