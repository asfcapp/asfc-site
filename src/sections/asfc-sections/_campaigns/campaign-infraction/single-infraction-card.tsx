'use client';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

type Props = {
  infraction: any;
};

export default function SingleInfractionCard({ infraction }: Props) {
  return (
    <Stack
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Image
        src={
          infraction?.infractionImage.image.asset
            ? urlFor(infraction.infractionImage.image.asset)?.url()
            : ''
        }
        alt={infraction.infractionName}
        ratio="1/1"
      />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bgcolor: 'background.neutral',
        }}
      >
        {/* <PostTimeBlock createdAt={fDate(post.createdAt)} duration={post.duration} /> */}

        <Link
          component={RouterLink}
          href={`${paths.asfc.campaign}/${infraction?.slug?.current || ''}`}
          color="inherit"
          variant="h5"
        >
          {infraction.infractionName}
        </Link>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
          }}
        >
          {infraction.briefDescription}
        </Typography>
      </Stack>
    </Stack>
  );
}
