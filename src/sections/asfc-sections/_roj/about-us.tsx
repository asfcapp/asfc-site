import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import urlFor from 'src/lib/sanity';
import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'projects',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'Happy clients',
    total: 32000,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'years of experience',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
];

// ----------------------------------------------------------------------
type props = {
    aboutUs : any,
    roj : any

}
export default function MarketingLandingAbout({aboutUs ,roj }:props ) {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      {/* must be fetched from sanity and place here using urlFor  */}
      <Image
        alt="landing about"
        src={roj?.imageRoj.image.asset ? (urlFor(roj.imageRoj.image.asset)?.url() ?? '') : ''}
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
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
          {/* must be static */}
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            About us
          </Typography>
          {/* must be static presentation du Roj  */}
          <Typography variant="h2" sx={{ my: 3 }}>
            Who We Are
          </Typography>
          {/* must be fetched from sanity an pass it as a props  and take the description of Roj from props  */}
          <Typography sx={{ color: 'text.secondary' }}>
            In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor,
            justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </Typography>
          {/* <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Lean more
          </Button> 
          remove this button */}
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  {/* <Stack direction="row">
                    {/* <Typography variant="h2">{fShortenNumber(row.total)}</Typography>  
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack> */}
                  {/* for this project we don't have any numbers but for latter ones maybe we will do  */}
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}