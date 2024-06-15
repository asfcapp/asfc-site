import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import RojSinglePartner from './roj-single-partner';
import RojSinglePartnerMobile from './roj-single-partner-mobile';
import { ITeamMemberProps } from 'src/types/team';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function RojPartners({ members }: Props) {
  const mdUp = useResponsive('up', 'md');

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
          {members
            .slice(0, 8)
            .map((member) =>
              mdUp ? (
                <RojSinglePartner key={member.id} member={member} />
              ) : (
                <RojSinglePartnerMobile key={member.id} member={member} />
              )
            )}
        </Box>
      </Container>
    </Box>
  );
}
