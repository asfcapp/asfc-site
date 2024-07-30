import { useState, useEffect } from 'react';

import { Box, Container } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import useMetadata from 'src/hooks/use-metadata';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import SingleCampagneView from 'src/sections/asfc-sections/_campagnes/view/single-campagne-view';

import { Campagne } from 'src/types/campagne';

import CampagnesPostItem from './campagnes-post-item';

type Props = {
  campagnes: Campagne[];
};

export default function CampagnesPosts({ campagnes }: Props) {
  const theme = useTheme();
  const carousel = useCarousel({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 5 },
    }),
  });

  const [currentCampagne, setCurrentCampagne] = useState(campagnes[0]);

  useEffect(() => {
    setCurrentCampagne(campagnes[carousel.currentIndex] || {
      seo: {},
    });
  }, [carousel.currentIndex, campagnes]);

  const metadata = {
    title: currentCampagne.seo?.metaTitle || 'Default Title',
    description: currentCampagne.seo?.metaDescription || 'Default description',
    keywords: currentCampagne.seo?.keywords?.join(', '),
  
  };

  useMetadata(metadata);

  return (
    <>
      <Box
        sx={{
          py: 10,
          pt: { md: 15 },
          position: 'relative',
          '& .slick-list': {
            borderRadius: 2,
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <CarouselArrows
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            leftButtonProps={{
              sx: {
                mt: -8,
                left: 2,
                opacity: 1,
                color: 'common.white',
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.main' },
              },
            }}
            rightButtonProps={{
              sx: {
                mt: -8,
                right: 2,
                opacity: 1,
                color: 'common.white',
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.main' },
              },
            }}
          >
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {campagnes.map((campagne) => (
                <CampagnesPostItem key={campagne._id} campagne={campagne} />
              ))}
            </Carousel>
          </CarouselArrows>
        </Container>

        {campagnes.map(
          (campagne, index) =>
            carousel.currentIndex === index && (
              <Image
                key={campagne._id}
                alt="campagne cover"
                src={urlFor(campagne?.image)?.url() ?? ''}
                overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
                  theme.palette.common.black
                } 75%)`}
                sx={{ position: 'absolute', top: 0, width: 1, height: 1 }}
              />
            )
        )}
      </Box>
      {campagnes?.map(
        (campagne, index) =>
          carousel.currentIndex === index && <SingleCampagneView key={campagne._id} campagne={campagne} />
      )}
    </>
  );
}
