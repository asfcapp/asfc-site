'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function SimpleView() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        minHeight: 1,
        pt: { xs: 13, md: 16 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h3" align="center" paragraph>
        Simple View!
      </Typography>
    </Container>
  );
}
