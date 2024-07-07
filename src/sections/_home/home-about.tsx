import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Home } from 'src/types/home';
import { fetchHomeData } from 'src/lib/queries';

// ----------------------------------------------------------------------

const ROWS = [
  {
    title: 'Mission',
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    title: 'vision',
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    title: 'valeurs',
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
];

// ----------------------------------------------------------------------

export default function HomeAbout() {
  const [data, setData] = useState<Home | null>(null);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchHomeData();
      setData(fetchedData);
    };

    fetchData();
  }, []);
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
