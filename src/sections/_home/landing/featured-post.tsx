import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha, useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { Post } from 'src/types/post';

import TimeBlock from './time-block';

// ----------------------------------------------------------------------

type Props = {
  post: Post;
  largePost?: boolean;
};

export default function FeaturedPost({ post, largePost }: Props) {
  const theme = useTheme();
  const eventImageUrl = post?.mainImage ? urlFor(post?.mainImage)?.url() : null;
  const avatarUrl = post?.author?.image ? urlFor(post?.author?.image)?.url() : null;

  return (
    <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      <Image
        src={eventImageUrl || ''}
        alt={post?.title}
        ratio="1/1"
        overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
          theme.palette.common.black
        } 75%)`}
      />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
          ...(largePost && {
            p: { xs: 3, md: 5 },
          }),
        }}
      >
        <TimeBlock
          createdAt={fDate(post?.publishedAt)}
          sx={{ color: 'inherit', opacity: 0.72 }}
        />

        <Link component={RouterLink} href={`/chroniques-injustice/${post?._id}`} color="inherit">
          <TextMaxLine
            sx={{
              typography: 'h6',
              ...(largePost && {
                typography: { xs: 'h6', md: 'h4' },
              }),
            }}
          >
            {post?.title}
          </TextMaxLine>
        </Link>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2', pt: 1.5 }}>
          <Avatar
            src={avatarUrl ?? ''}
            sx={{
              mr: 1,
              width: 32,
              height: 32,
              ...(largePost && {
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
              }),
            }}
          />
          {post?.author?.name}
        </Stack>
      </Stack>
    </Box>
  );
}
