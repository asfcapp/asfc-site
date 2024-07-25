'use client';

import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Typography } from '@mui/material';

import BlockContentRenderer from 'src/sections/common/block-content-renderer';

import { Post } from 'src/types/post';
import { SanityBlock } from 'src/types/roj';

import PresseBlogPosts from './presse-blog-posts';

// ----------------------------------------------------------------------
type Props = {
  data: {
    title: string;
    policy: SanityBlock[];
    etudes: SanityBlock[];
    presse: Post[];
  };
};
export default function PublicationPostItem({ data }: Props) {
  return (
    <Grid xs={12} md={8}>
      <Typography variant="body1" component="h1">
        Publication
      </Typography>
      <Typography variant="h2" component="h1">
        {data?.title}
      </Typography>
      <Typography variant="body2" component="h1">
        Policy:
      </Typography>
      <BlockContentRenderer data={data?.policy} />
      <Typography variant="body2" component="h1">
        Etudes:
      </Typography>
      <BlockContentRenderer data={data?.etudes} />
      <Typography variant="body2" component="h1">
        Communiqué de presse:
      </Typography>
      <PresseBlogPosts data={data?.presse} />
      <Divider sx={{ mt: 8 }} />
    </Grid>
  );
}
