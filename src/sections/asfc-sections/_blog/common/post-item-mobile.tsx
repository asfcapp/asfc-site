import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { IBlogPostProps } from 'src/types/blog';

import PostTimeBlock from './post-time-block';

// ----------------------------------------------------------------------

type Props = {
  blog: any;
  onSiderbar?: boolean;
};

export default function PostItemMobile({ blog, onSiderbar }: Props) {
  const coverImage = blog?.illustrations.find(
    (illustration: any) => illustration.isCoverImage === true
  );
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={blog?.title}
        src={urlFor(coverImage?.imageAsset.image.asset)?.url() ?? ''}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link
          component={RouterLink}
          href={`${paths.asfc.chronique_injustice}/${blog?.slug?.current || ''}`}
          color="inherit"
        >
          <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{blog?.title}</TextMaxLine>
        </Link>

        <PostTimeBlock createdAt={fDate(blog?.publishedAt)} duration={blog?.readingTime} />
      </Stack>
    </Stack>
  );
}
