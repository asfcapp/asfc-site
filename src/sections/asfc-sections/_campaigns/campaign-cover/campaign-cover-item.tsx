'use client';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import urlFor from 'src/lib/sanity';

import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  campaign: any;
};

export default function CampaignCoverItem({ campaign }: Props) {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ bgcolor: 'background.default', borderRadius: 2 }}
    >
      <Image
        src={campaign?.image.image.asset ? (urlFor(campaign.image.image.asset)?.url() ?? '') : ''}
        alt={campaign.name}
        sx={{ flexGrow: 1, height: { md: 560 } }}
      />

      <Stack
        justifyContent="space-between"
        sx={{
          mx: 'auto',
          p: { xs: 3, md: 5 },
          maxWidth: { md: 396 },
        }}
      >
        <Stack spacing={1}>
          <Typography color="inherit" variant="h2" component="h1" lineHeight={1}>
            {campaign.name}
          </Typography>
          <TextMaxLine line={3} variant="body2" sx={{ color: 'text.secondary' }}>
            {campaign.description}
          </TextMaxLine>
        </Stack>
      </Stack>
    </Stack>
  );
}
