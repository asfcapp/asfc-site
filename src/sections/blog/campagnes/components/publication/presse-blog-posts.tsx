import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import { Post } from 'src/types/post';

import PresseBlogItemPost from './presse-blog-item-post';

// ----------------------------------------------------------------------

type Props = {
  data: Post[];
};

export default function PresseBlogPosts({ data }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 3,
    slidesToScroll: 1,
    ...CarouselDots(),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Container
    
    >
      <Box sx={{ position: 'relative' }}>
        <CarouselArrows
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{ sx: { left: { xs: 0, md: -40 } } }}
          rightButtonProps={{ sx: { right: { xs: 0, md: -40 } } }}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {data?.map((post) => (
              <Box
                key={post._id}
                sx={{
                  p : 2
                }}
              >
                <PresseBlogItemPost  post={post}/>
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}
