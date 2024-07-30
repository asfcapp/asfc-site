/* eslint-disable react/prop-types */

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';

import BlockContentRenderer from 'src/sections/common/block-content-renderer';

import { RojDocument } from 'src/types/roj';


// ----------------------------------------------------------------------
interface Props {
  data: RojDocument; // Provide the RojDocument type as a prop
}

const RojLandingHero: React.FC<Props> = ({ data }) => {
  const eventImageUrl = data?.image ? urlFor(data?.image)?.url() : null;

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
        <Typography variant="h2">{data?.title}</Typography>

        <Typography sx={{ color: 'text.secondary' }}>{data?.subtitle}</Typography>
      </Stack>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={12} />
      </Grid>
      <Image
        alt={data?._id || 'Event Image'}
        src={eventImageUrl || 'https://via.placeholder.com/550x310'}
        sx={{ height: 400, borderRadius: 2, width: 1 }}
      />

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
          <Typography variant="h3">{data?.sectionTitle}</Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            {data?.sectionSubTitle}
          </Typography>

          <BlockContentRenderer data={data?.sectionDescription} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default RojLandingHero;
