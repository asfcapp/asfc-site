import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { Partenaire } from 'src/types/partenaire';

type Props = {
  partenaire: Partenaire;
  onSiderbar?: boolean;
};

export default function RojSinglePartnerMobile({ partenaire, onSiderbar }: Props) {
  const image = partenaire?.photo ? urlFor(partenaire?.photo)?.url() : null;

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={partenaire.name}
        src={image || ''}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link color="inherit" href="#">
          {' '}
          {/* Replace '#' with your actual link */}
          <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{partenaire.name}</TextMaxLine>
        </Link>
      </Stack>
    </Stack>
  );
}
