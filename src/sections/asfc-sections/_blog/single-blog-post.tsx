import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  blog: any;
};

export default function SingleBlogPost({ blog }: Props) {
  const coverImage = blog.illustrations.find(
    (illustration: any) => illustration.isCoverImage === true
  );
  return (
    <Stack spacing={2.5}>
      {coverImage && (
        <Image
          src={urlFor(coverImage?.imageAsset?.image?.asset)?.url() ?? ''}
          alt={blog.title}
          ratio="1/1"
          sx={{ borderRadius: 2 }}
        />
      )}

      <Stack spacing={1}>
        <PostTimeBlock createdAt={fDate(blog.publishedAt)} duration={blog.readingTime} />

        <Link
          component={RouterLink}
          href={`${paths.asfc.chronique_injustice}/${blog?.slug?.current || ''}`}
          color="inherit"
        >
          <TextMaxLine variant="h5" persistent>
            {blog.title}
          </TextMaxLine>
        </Link>
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
        <Avatar
          src={urlFor(blog.author.image?.imageAsset.image.asset)?.url() ?? ''}
          sx={{ mr: 1 }}
        />
        {blog.author.name}
      </Stack>
    </Stack>
  );
}
