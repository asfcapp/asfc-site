import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { Partenaire } from 'src/types/partenaire';
import { fetchPartenaires } from 'src/lib/queries';
import RojSinglePartner from './roj-single-partner';
import RojSinglePartnerMobile from './roj-single-partner-mobile';
import { useEffect, useState } from 'react';

export default function RojPartners() {
  const mdUp = useResponsive('up', 'md');
  const [data, setData] = useState<Partenaire[] | null>(null); // Use Partenaire[] instead of Partenaire

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchPartenaires();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching partenaires:', error);
      }
    };

    fetchData();
  }, []);

  console.log('data fetched : ', data);

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10 },
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Nos partenaires</Typography>
        </Stack>

        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {data
            ?.slice(0, 8)
            .map((partenaire) =>
              mdUp ? (
                <RojSinglePartner key={partenaire._id} partenaire={partenaire} />
              ) : (
                <RojSinglePartnerMobile key={partenaire._id} partenaire={partenaire} />
              )
            )}
        </Box>
      </Container>
    </Box>
  );
}
