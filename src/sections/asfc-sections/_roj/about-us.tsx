import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import urlFor from 'src/lib/sanity';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
type props = {
  roj: any;
};

export default function AboutUs({ roj }: props) {
  const ourValues = [
    { key: 'Mission', value: roj?.about.mission },
    { key: 'Vision', value: roj?.about.vision },
    { key: 'Valeurs', value: roj?.about.values },
  ];
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
        mt: { xs: 5 },
      }}
    >
      <Box
        component="img"
        alt={roj.imageRoj?.image.alt}
        src={roj.imageRoj?.image.asset ? (urlFor(roj.imageRoj.image.asset)?.url() ?? '') : ''}
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
          width: '100%', // Add width and height as needed
          objectFit: 'cover', // For responsive image aspect ratio
          aspectRatio: '16/9', // Maintain the 16:9 ratio
        }}
      />
      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography component="h1" variant="overline" sx={{ color: 'text.disabled' }}>
            A propos
          </Typography>
          <Typography variant="h2" sx={{ my: 3 }}>
            {roj?.about.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{roj?.about.description}</Typography>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ourValues.map((value) => (
              <Stack
                key={value.key}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 10, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{value.key}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {value.value}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
