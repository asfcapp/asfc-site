'use client';

import { Box, Stack, Typography } from '@mui/material';

// import { fetchHomePosts } from 'src/lib/queries';

// Fetcher function for SWR
// const fetcher = async () => {
//   const fetchedData = await fetchHomePosts();
//   return fetchedData;
// };

export default function HomeView({ initialData }: { initialData: any }) {
  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 600,
          textAlign: 'left',
          pb: { xs: 5 },
        }}
      >
        <Typography variant="h3">Population Carcérale au Maroc par Région</Typography>
      </Stack>
    </Box>
  );
}
