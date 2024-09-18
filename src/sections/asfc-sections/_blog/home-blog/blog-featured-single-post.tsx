'use client ';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha, useTheme } from '@mui/material/styles';

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
  largePost?: boolean;
};

export default function BlogFeaturedSinglePost({ blog, largePost }: Props) {
  const theme = useTheme();
  const coverImage = blog.illustrations.find(
    (illustration: any) => illustration.isCoverImage === true
  );
  return (
    <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      {coverImage && (
        <Image
          src={urlFor(coverImage.imageAsset.image.asset).url() ?? ''}
          alt={blog.title}
          ratio="1/1"
          overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
            theme.palette.common.black
          } 75%)`}
        />
      )}

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
        <PostTimeBlock
          createdAt={fDate(blog.publishedAt)}
          duration={blog.readingTime}
          sx={{ color: 'inherit', opacity: 0.72 }}
        />

        <Link
          component={RouterLink}
          href={paths.asfc.chronique_injustice + '/' + blog.slug?.current || ''}
          color="inherit"
        >
          <TextMaxLine
            sx={{
              typography: 'h6',
              ...(largePost && {
                typography: { xs: 'h6', md: 'h4' },
              }),
            }}
          >
            {blog.title}
          </TextMaxLine>
        </Link>

        {largePost && <TextMaxLine sx={{ opacity: 0.48 }}>{blog.description}</TextMaxLine>}

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2', pt: 1.5 }}>
          <Avatar
            src={urlFor(blog.author.image?.imageAsset.image.asset)?.url() ?? ''}
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
          {blog.author.name}
        </Stack>
      </Stack>
    </Box>
  );
}
