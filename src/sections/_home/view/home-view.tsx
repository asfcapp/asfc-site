'use client';

import { useScroll } from 'framer-motion';

import { _pricingHome, _travelPosts } from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeFAQs from '../home-faqs';
import HomeNewStart from '../home-new-start';
import HomeCombination from '../home-combination';
import HomeForDesigner from '../home-for-designer';
import HomeAdvertisement from '../home-advertisement';
import PricingHome from '../../pricing/home/pricing-home';
import HomeFeatureHighlights from '../home-feature-highlights';
import HomeFlexibleComponents from '../home-flexible-components';
import TravelFeaturedPosts from 'src/sections/blog/travel/travel-featured-posts';
import PostSearchMobile from 'src/sections/blog/common/post-search-mobile';
import { Box, Container, Stack, Typography } from '@mui/material';
import MarketingLandingAbout from 'src/sections/_marketing/landing/marketing-landing-about';
import MyMap from '../my-map';
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
