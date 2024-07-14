import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';
import { bgGradient } from 'src/theme/css';
import { fetchPostById } from 'src/lib/queries';

import { Post } from 'src/types/post';

// ----------------------------------------------------------------------

type Props = {
  id: string;
  setTitle: (title: string) => void;
};

export default function ChroniquePostHero({ id, setTitle,  }: Props) {
  const theme = useTheme();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPost = await fetchPostById(id);
        setPost(fetchedPost);
        setTitle(fetchedPost?.title);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchData();
  }, [id, setTitle]); // Include setTitle in the dependency array

  const eventImageUrl = post?.mainImage ? urlFor(post?.mainImage)?.url() : null;

  return (
    <Box
      sx={{
        py: 20,
        position: 'relative',
        ...bgGradient({
          startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
          endColor: `${theme.palette.common.black} 75%`,
          imgUrl: eventImageUrl ?? '',
        }),
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Stack
              spacing={3}
              alignItems={{
                xs: 'center',
                md: 'flex-start',
              }}
              sx={{
                color: 'common.white',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <Typography variant="h2" component="h1">
                {post?.title}
              </Typography>

              <Typography variant="caption" sx={{ opacity: 0.72 }}>
                {fDate(post?.publishedAt, 'dd/MM/yyyy p')}
              </Typography>

              {/* <Stack direction="row">
                {_socials.map((social) => (
                  <IconButton key={social.value}>
                    <Iconify icon={social.icon} sx={{ color: social.color }} />
                  </IconButton>
                ))} */}
              {/* </Stack> */}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
