'use client';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import PartenersCarousel from 'src/sections/common/parteners-carousel';

import { Campagne } from 'src/types/campagne';

import DelitsPostsView from './delits-posts-view';

// ----------------------------------------------------------------------
type Props = {
  campagne: Campagne;
};

export default function SingleCampagneView({ campagne }: Props) {

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Typography variant="h2" component="h1" sx={{ my: 5 }}>
              Présentation de la Campagne
            </Typography>
            <Typography variant="h4" component="h1" sx={{ my: 5 }}>
              {campagne?.title}
            </Typography>

            <Typography variant="body1" sx={{ mb: 5 }}>
              {campagne?.description}
            </Typography>

            <Divider sx={{ mt: 8 }} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <PartenersCarousel partenaires={campagne?.partenaire} />

      <DelitsPostsView delits={campagne?.delit}/>
    </>
  );
}
