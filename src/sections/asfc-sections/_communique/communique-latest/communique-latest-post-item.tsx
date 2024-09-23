import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from '../../common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  communique: any;
  order?: number;
  largePost?: boolean;
};

export default function CommuniqueLatestPostItem({ communique, order, largePost }: Props) {
  const theme = useTheme();
  const coverImage = communique.illustrations.find(
    (illustration: any) => illustration.isCoverImage === true
  );
  return (
    <Stack
      spacing={2}
      sx={{
        ...(largePost && {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }),
      }}
    >
      <Image
        src={
          coverImage?.imageAsset?.image.asset
            ? urlFor(coverImage?.imageAsset?.image.asset)?.url()
            : ''
        }
        alt={coverImage?.imageAsset.alt}
        ratio={(largePost && '3/4') || (order && '4/3') || '1/1'}
        overlay={
          largePost
            ? `linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
                theme.palette.common.black
              } 100%)`
            : ''
        }
        sx={{ borderRadius: 2 }}
      />

      <Stack
        spacing={largePost ? 2 : 1}
        sx={{
          ...(largePost && {
            p: 5,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
          }),
        }}
      >
        <PostTimeBlock
          createdAt={fDate(communique.publishedAt)}
          sx={{
            ...(largePost && {
              opacity: 0.72,
              color: 'inherit',
            }),
          }}
        />

        <Link component={RouterLink} href={paths.asfc.communique} color="inherit">
          <TextMaxLine variant={largePost ? 'h3' : 'h6'}>{communique.title}</TextMaxLine>
        </Link>

        {largePost && <Typography sx={{ opacity: 0.48 }}>{communique.excerpt}</Typography>}
      </Stack>
    </Stack>
  );
}
