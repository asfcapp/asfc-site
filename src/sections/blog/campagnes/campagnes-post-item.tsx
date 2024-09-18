import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from 'src/sections/common/post-time-block';

import { Campagne } from 'src/types/campaign';

// ----------------------------------------------------------------------

type Props = {
  campagne: Campagne;
};

export default function CampagnesPostItem({ campagne }: Props) {
  const image = campagne?.image ? urlFor(campagne?.image)?.url() : null;

  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ bgcolor: 'background.default', borderRadius: 2 }}
    >
      <Image src={image ?? ''} alt={campagne.title} sx={{ flexGrow: 1, height: { md: 560 } }} />

      <Stack
        justifyContent="space-between"
        sx={{
          mx: 'auto',
          p: { xs: 3, md: 5 },
          maxWidth: { md: 396 },
        }}
      >
        <Stack spacing={1}>
          <PostTimeBlock createdAt={fDate(campagne._createdAt)} />

          <Typography color="inherit" variant="h3">
            {campagne.title}
          </Typography>

          <TextMaxLine line={20} variant="body2" sx={{ color: 'text.secondary' }}>
            {campagne.description}
          </TextMaxLine>
        </Stack>
      </Stack>
    </Stack>
  );
}
