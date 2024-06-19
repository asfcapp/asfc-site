'use client';


import { Box, Stack, Container, Typography } from '@mui/material';

import { _travelPosts } from 'src/_mock';

import TravelFeaturedPosts from 'src/sections/blog/travel/travel-featured-posts';
import MarketingLandingAbout from 'src/sections/_marketing/landing/marketing-landing-about';

import ColorMap from '../color-mapping';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <Container
        sx={{
          mt: { xs: 0, md: 15 },
          pb: 10,
        }}
      >
        <TravelFeaturedPosts posts={_travelPosts.slice(-5)} />
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

      <MarketingLandingAbout />
    </>
  );
}
