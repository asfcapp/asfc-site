'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';
import urlFor from 'src/lib/sanity'; // Renamed import statement

import CampaignCoverItem from './campaign-cover-item'; // Renamed import statement

// ----------------------------------------------------------------------

type Props = {
  campaigns: any;
};

export default function CampaignCoverCarousel({ campaigns }: Props) {
  // Renamed function name
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

  return (
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
            {campaigns.map((campaign: any) => (
              <CampaignCoverItem key={campaign._id} campaign={campaign} />
            ))}
          </Carousel>
        </CarouselArrows>
      </Container>

      {campaigns.map(
        (campaign: any, index: any) =>
          carousel.currentIndex === index && (
            <Image
              key={campaign._id}
              alt="post cover"
              src={
                campaign?.image.image.asset ? (urlFor(campaign.image.image.asset)?.url() ?? '') : ''
              }
              overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
                theme.palette.common.black
              } 75%)`}
              sx={{ position: 'absolute', top: 0, width: 1, height: 1 }}
            />
          )
      )}
    </Box>
  );
}
