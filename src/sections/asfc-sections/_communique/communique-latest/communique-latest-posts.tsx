import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

// import { IBlogPostProps } from 'src/types/blog';

import PostItemMobile from '../../common/post-item-mobile';
import CommuniqueLatestPostItem from './communique-latest-post-item';

// ----------------------------------------------------------------------

type Props = {
  communiques: any;
};

export default function CareerLatestPosts({ communiques }: Props) {
  const mdUp = useResponsive('up', 'md');

  const latestPost = communiques[0];

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.asfc.communique}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Stack
          sx={{
            maxWidth: { md: 460 },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            BLOG
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Read Our Lates News
          </Typography>
        </Stack>

        {mdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {mdUp ? (
          <>
            <CommuniqueLatestPostItem communique={latestPost} largePost />

            <Masonry columns={{ xs: 1, md: 2 }} spacing={4}>
              {communiques.slice(1, 5).map((communique: any, index: Number | any) => (
                <CommuniqueLatestPostItem
                  key={communique._id}
                  communique={communique}
                  order={index % 2}
                />
              ))}
            </Masonry>
          </>
        ) : (
          <>
            {communiques.slice(0, 5).map((communique: any) => (
              <PostItemMobile key={communique._id} blog={communique} />
            ))}
          </>
        )}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}
