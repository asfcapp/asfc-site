import { Box, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import urlFor from 'src/lib/sanity';
import { Partenaire } from 'src/types/partenaire';
import { m } from 'framer-motion';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

type Props = {
  partenaire: Partenaire;
};

export default function RojSinglePartner({ partenaire }: Props) {
  const image = partenaire?.photo ? urlFor(partenaire?.photo)?.url() : null;

  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <m.div variants={varHover()} transition={varTranHover()}>
          <Image src={image || ''} alt={partenaire.name} ratio="4/3" />
        </m.div>
      </Box>

      <Stack spacing={1.5} sx={{ p: 3 }} component={m.div} variants={{ hover: { opacity: 0.8 } }}>
        <Typography variant="h5" sx={{ mb: 0.5 }}>
          {partenaire.name}
        </Typography>

        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ mt: 0.5 }}>
            {partenaire.review}
          </Typography>
        </Stack>
        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ mt: 0.5 }}>
            {partenaire.review}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
  return (
    <Stack spacing={2}>
      <Image src={image || ''} alt={partenaire.name} ratio="1/1" sx={{ borderRadius: 2 }} />

      <TextMaxLine variant="subtitle2" persistent>
        {partenaire.name}
      </TextMaxLine>

      <Stack spacing={1} direction="row" alignItems="center">
        <Typography variant="caption">{partenaire.review}</Typography>
      </Stack>
    </Stack>
  );
}
