import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const IMAGES = [...Array(1)].map((_, index) => _mock.image.travel(index + 2));

const SUMMARY = [
  { name: 'Air tickets sold', number: 130 },
  { name: 'Tours booked', number: 196 },
  { name: 'Site visitors', number: 10679 },
  { name: 'Verified hotels', number: 877 },
];

// ----------------------------------------------------------------------

export default function RojLandingHero() {
  const smUp = useResponsive('up', 'sm');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: 15,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 600,
          textAlign: 'center',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h2">Présentation du ROJ</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook
          Marketing, Analytics & More!
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={12}></Grid>
      </Grid>
      <Image alt={IMAGES[0]} src={IMAGES[0]} sx={{ height: 400, borderRadius: 2, width: 1 }} />

      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          pt: { xs: 5, md: 10 },
        }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Box
            sx={{
              mb: 2,
              width: 24,
              height: 3,
              borderRadius: 3,
              bgcolor: 'primary.main',
              mx: { xs: 'auto', md: 0 },
            }}
          />
          <Typography variant="h3">
            Maecenas malesuada. Cras ultricies mi eu turpis hendrerit fringilla Nunc egestas
          </Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            Fusce convallis metus id felis luctus
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
            <br />
            <br />
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Maecenas nec odio et
            ante tincidunt tempus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi. Vestibulum eu odio. Curabitur ullamcorper ultricies nisi.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
