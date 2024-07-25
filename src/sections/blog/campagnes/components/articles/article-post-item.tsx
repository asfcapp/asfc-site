'use client';

import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Typography } from '@mui/material';

import PdfViewr from 'src/sections/common/pdf-viewr';
import BlockContentRenderer from 'src/sections/common/block-content-renderer';

import { DelitContent } from 'src/types/delit';

// ----------------------------------------------------------------------
type Props = {
  data: DelitContent;
};
export default function ArticlePostItem({ data }: Props) {
  return (
    <Grid xs={12} md={8}>
      <Typography variant="body1" component="h1">
        Article de loi
      </Typography>
      <Typography variant="h2" component="h1">
        {data?.title}
      </Typography>
      <BlockContentRenderer data={data?.description} />
      <PdfViewr/>
      <Divider sx={{ mt: 8 }} />
    </Grid>
  );
}
