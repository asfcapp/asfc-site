'use client';

import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import { Container, Typography } from '@mui/material';

import SingleInfractionCard from './single-infraction-card';

// ----------------------------------------------------------------------

type Props = {
  infractions: any;
};

export default function InfractionCardGrid({ infractions }: Props) {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Infractions
        </Typography>

        <Typography variant="h2">Thématiques</Typography>
      </Stack>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        spacing={4}
        defaultColumns={1}
        defaultSpacing={4}
        sx={{
          mx: { xs: 'unset', sm: 0 },
        }}
      >
        {infractions.map((infraction: any) => (
          <SingleInfractionCard key={infraction._id} infraction={infraction} />
        ))}
      </Masonry>
    </Container>
  );
}
