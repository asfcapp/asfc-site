import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from 'src/sections/common/post-time-block';

import { Delit } from 'src/types/delit';

// ----------------------------------------------------------------------

type Props = {
  post: Delit;
  index: number;
};

export default function DelitPostItem({ post, index }: Props) {
  console.log('post:', post);
  
  const noImage = index === 1 || index === 4;

  const image = post?.photo ? urlFor(post?.photo)?.url() : null;

  return (
    <Stack
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Image src={image ?? ''} alt={post.title} />
      <Stack
        spacing={1}
        sx={{
          p: 3,
          bgcolor: 'background.neutral',
          ...(noImage && {
            bgcolor: 'primary.lighter',
          }),
        }}
      >
        <PostTimeBlock
          createdAt={fDate(post._createdAt)}
          sx={{
            ...(noImage && { color: 'grey.500' }),
          }}
        />

        <Link
          component={RouterLink}
          href={`/campagnes/${post?._id}`}
          color="inherit"
          variant="h5"
          sx={{
            ...(noImage && {
              color: 'grey.800',
            }),
          }}
        >
          {post.title}
          
        </Link>
        <Link
          href={post?.file}
          color="inherit"
          variant="h5"
          sx={{
            ...(noImage && {
              color: 'grey.800',
            }),
          }}
        >
          pdf
          
        </Link>
        <TextMaxLine line={8} variant="body2" sx={{ color: 'text.secondary' }}>
          {post.description}
        </TextMaxLine>
      </Stack>
    </Stack>
  );
}
