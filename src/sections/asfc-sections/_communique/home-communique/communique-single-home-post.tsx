import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';

import PostTimeBlock from '../../common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  communique: any;
};

export default function CommuniqueSingleHomePost({ communique }: Props) {
  const coverImage = communique.illustrations.find(
    (illustration: any) => illustration.isCoverImage === true
  );
  return (
    <Stack
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {coverImage && (
        <Image
          src={
            coverImage?.imageAsset?.image.asset
              ? urlFor(coverImage?.imageAsset?.image.asset)?.url()
              : ''
          }
          alt={coverImage.imageAsset?.alt}
          ratio="1/1"
        />
      )}
      <Stack
        spacing={1}
        sx={{
          p: 3,
          bgcolor: 'background.neutral',
        }}
      >
        <PostTimeBlock createdAt={fDate(communique.publishedAt)} />

        <Link
          component={RouterLink}
          href={`${paths.asfc.communique}/${communique?.slug?.current || ''}`}
          color="inherit"
          variant="h5"
        >
          {communique.title}
        </Link>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
          }}
        >
          {communique.excerpt}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          sx={{
            typography: 'body2',
            pt: 1.5,
          }}
        >
          <Avatar
            src={
              communique.author
                ? urlFor(communique.author?.image.imageAsset.image.asset)?.url()
                : ''
            }
            sx={{ mr: 1 }}
          />
          {communique.author?.name}
        </Stack>
      </Stack>
    </Stack>
  );
}
