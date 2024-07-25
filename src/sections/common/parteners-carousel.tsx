import { FC } from 'react';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import { Partenaire } from 'src/types/partenaire';

import SinglePartener from './single-partener';

interface Props {
  partenaires: Partenaire[];
}

const PartenersCarousel: FC<Props> = ({ partenaires }) => {
  const carousel = useCarousel({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: { xs: 8, md: 12 },
      },
    }),
  });

  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
      <Container
        sx={{
          position: 'relative',
          py: { xs: 10, md: 10 },
        }}
      >
        <Stack spacing={2} sx={{ textAlign: 'center', mb: 20 }}>
          <Typography variant="h3">Nos partenaires</Typography>
        </Stack>

        <CarouselArrows
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{ sx: { opacity: { xs: 0, md: 1 } } }}
          rightButtonProps={{ sx: { opacity: { xs: 0, md: 1 } } }}
        >
          <Grid container spacing={10} justifyContent="center">
            <Grid xs={6} md={12}>
              <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                {partenaires.map((partenaire) => (
                  <SinglePartener key={partenaire._id} partenaire={partenaire} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </CarouselArrows>
      </Container>
    </Box>
  );
};

export default PartenersCarousel;
