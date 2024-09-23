'use client';

import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import urlFor from 'src/lib/sanity';
import { _socials } from 'src/_mock';

import Iconify from 'src/components/iconify';
import RichText from 'src/components/rich-text/rich-text';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// import PostTags from '../../common/post-tags';
import PostAuthor from '../../common/post-author';
import PostTimeBlock from '../../common/post-time-block';
// import PostSocialsShare from '../../common/post-socials-share';

import CommuniqueLatestPost from '../communique-latest/communique-latest-posts';

// ----------------------------------------------------------------------
type Props = {
  communique: any;
  latestCommunique?: any;
};

export default function CommuniqueDetailView({ communique, latestCommunique }: Props) {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <CustomBreadcrumbs
              links={[
                { name: 'Home', href: '/' },
                { name: 'communique de presse', href: paths.asfc.communique },
                { name: communique.title },
              ]}
              sx={{ my: 5 }}
            />

            <Typography variant="h2" component="h1">
              {communique.title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ my: 5 }}>
              <Avatar
                src={
                  communique?.author
                    ? urlFor(communique.author.image?.imageAsset?.image?.asset)?.url()
                    : ''
                }
                sx={{ width: 48, height: 48 }}
              />

              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">{communique.author.name}</Typography>

                <PostTimeBlock createdAt={fDate(communique.publishedAt)} />
              </Stack>

              <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>
              </Stack>
            </Stack>

            <Typography variant="h5" sx={{ mb: 5 }}>
              {communique.excerpt}
            </Typography>

            <RichText content={communique.body} />

            {/* <PostTags tags={_careerPosts.tags} /> */}

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={communique.author} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {latestCommunique && <CommuniqueLatestPost communiques={latestCommunique.slice(0, 5)} />}

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
