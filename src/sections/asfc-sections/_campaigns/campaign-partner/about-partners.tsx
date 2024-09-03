'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SinglePartnerItem from './single-partner-item';

// ----------------------------------------------------------------------

type Props = {
  partners: any;
};

export default function MarketingTeamAbout({ partners }: Props) {
  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Great Team Is The Key
      </Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        Since wire-frame renderings are relatively simple and fast to calculate, they are often used
        in cases
      </Typography>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {partners.map((partner: any) => (
          <SinglePartnerItem key={partner._id} partner={partner} />
        ))}
      </Box>
    </Container>
  );
}
