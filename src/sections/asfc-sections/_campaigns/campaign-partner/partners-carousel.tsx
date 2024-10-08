'use client';

import { useRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';

import { bgGradient } from 'src/theme/css';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import SinglePartnerItem from './single-partner-item';

// ----------------------------------------------------------------------

type Props = {
  partners: any;
};

export default function PartnerCarousel({ partners }: Props) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    dots: !mdUp,
    slidesToShow: 4,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
      }}
    >
      <Container
        sx={{
          left: { md: 0 },
          right: { md: 0 },
          mb: { xs: 8, md: 0 },
          position: { xs: 'relative', md: 'absolute' },
          height: { md: 'calc(100% - 320px)' },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Stack spacing={3} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
              <Typography variant="overline" sx={{ color: 'grey.600' }}>
                Partenaires
              </Typography>

              <Typography variant="h2" sx={{ color: 'primary.main' }}>
                Partenaires de la campagnes
              </Typography>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>

        {mdUp && (
          <CarouselArrows
            spacing={2}
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            leftButtonProps={{
              color: 'primary',
              sx: { color: 'primary.main', opacity: 1 },
            }}
            rightButtonProps={{
              color: 'primary',
              sx: { color: 'primary.main', opacity: 1 },
            }}
            sx={{ position: 'absolute', bottom: 0 }}
          />
        )}
      </Container>

      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {partners.map((partner: any) => (
            <Box
              key={partner._id}
              sx={{
                ml: '-1px',
                pl: { xs: 2, md: 4 },
                pr: { xs: 2, md: 0 },
                color: 'common.white',
              }}
            >
              <SinglePartnerItem partner={partner} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
