import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { Post } from 'src/types/post';

import PostTimeBlock from './post-time-block';

// ----------------------------------------------------------------------

type Props = {
  post: Post;
  onSiderbar?: boolean;
};

export default function PostItemMobile({ post, onSiderbar }: Props) {
  const eventImageUrl = post?.mainImage ? urlFor(post?.mainImage)?.url() : null;

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={post.title}
        src={eventImageUrl ?? ''}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
      <Link component={RouterLink} href={`/chroniques-injustice/${post?._id}`} color="inherit">
      <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{post.title}</TextMaxLine>
        </Link>

        <PostTimeBlock createdAt={fDate(post.publishedAt)}  />
      </Stack>
    </Stack>
  );
}
