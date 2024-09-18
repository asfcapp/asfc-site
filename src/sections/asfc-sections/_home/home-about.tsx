import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fetchHomeData } from 'src/lib/queries';

import { Home } from 'src/types/home';

// ----------------------------------------------------------------------

export default function HomeAbout() {
  // const [data, setData] = useState<Home | null>(null);

  // console.log(data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedData = await fetchHomeData();
  //     setData(fetchedData);
  //   };

  //   fetchData();
  // }, []);
  const data = {
    sectionTitle: 'About',
    about: 'About Us',
    aboutdescription:
      'We are a team of creative and talented individuals who love to create and share our knowledge with the world. We are passionate about what we do and we are always looking for new ways to improve our skills.',
    rows: [
      {
        title: 'Our Mission',
        content:
          'Our mission is to provide the best possible service to our clients. We strive to create innovative solutions that will help our clients achieve their goals.',
      },
      {
        title: 'Our Vision',
        content:
          'Our vision is to be the leading provider of digital marketing services in the world. We want to help our clients succeed in the digital age by providing them with the tools and knowledge they need to grow their businesses.',
      },
      {
        title: 'Our Values',
        content:
          'Our values are at the core of everything we do. We believe in honesty, integrity, and transparency. We are committed to providing our clients with the highest level of service and support.',
      },
    ],
  };
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
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
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            {data?.sectionTitle}
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            {data?.about}
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>{data?.aboutdescription}</Typography>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {data?.rows.map((row, i) => (
              <Stack
                key={i}
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
                  <Stack direction="row">
                    <Typography
                      variant="h4"
                      sx={{
                        textTransform: 'capitalize',
                      }}
                    >
                      {row.title}
                    </Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>
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
