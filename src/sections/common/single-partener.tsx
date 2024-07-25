import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import urlFor from 'src/lib/sanity';

import { Partenaire } from 'src/types/partenaire';

// ----------------------------------------------------------------------

type Props = {
  partenaire: Partenaire;
};

export default function SinglePartener({ partenaire }: Props) {
  const image = partenaire?.photo ? urlFor(partenaire?.photo)?.url() : null;

  return (
    <Stack sx={{ flexShrink: 0, textAlign: 'center' }}>
        <Avatar
          alt={partenaire.name}
          src={image ?? ''}
          sx={{ width: 96, height: 96, mx: 'auto' }}
        />

        <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5 }}>
          {partenaire.name}
        </Typography>
      </Stack>
  );
}
