'use client';

import { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { _tags, _mock } from 'src/_mock';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { IAuthorProps } from 'src/types/author';

import PostSidebar from '../../blog/common/post-sidebar';
import ChroniquePostHero from '../blog/chronique-post-hero';
import ChroniquePostBody from '../blog/chronique-post-body';
import PostSocialsShare from '../../blog/common/post-socials-share';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};
export default function ChroniquePostView({ id }: Props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState<IAuthorProps | null>(null);
 
  
  return (
    <>
      <ChroniquePostHero  setTitle={setTitle} id={id} />

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
            <ChroniquePostBody  id={id} setAuthor={setAuthor}  />
            <PostSocialsShare />
          </Grid>
          <Grid xs={12} md={4}>
            <PostSidebar
            author={author ?? undefined}
              popularTags={_tags}
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
