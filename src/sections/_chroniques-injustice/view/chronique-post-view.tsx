'use client';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { _tags, _mock, _categories, _travelPosts } from 'src/_mock';

import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../blog/common/post-author';
import PostSidebar from '../../blog/common/post-sidebar';
import ChroniquePostHero from '../blog/chronique-post-hero';
import TravelPostHero from '../../blog/travel/travel-post-hero';
import PostSocialsShare from '../../blog/common/post-socials-share';
import TravelLatestPosts from '../../blog/travel/travel-latest-posts';
import { useState } from 'react';
import ChroniquePostBody from '../blog/chronique-post-body';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};
export default function ChroniquePostView({ id }: Props) {
  const [title, setTitle] = useState('');

  return (
    <>
      <ChroniquePostHero setTitle={setTitle} id={id} />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Bienvenue', href: '/' },
            { name: "Chroniques de l'injustice", href: '/chroniques-injustice' },
            { name: title },
          ]}
        />
      </Container>
      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <ChroniquePostBody id={id} />
            <PostSocialsShare />
          </Grid>
          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _travelPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.travel(9),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
