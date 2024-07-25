'use client';

import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Typography } from '@mui/material';

import BlockContentRenderer from 'src/sections/common/block-content-renderer';

import {  DelitContent } from 'src/types/delit';

// ----------------------------------------------------------------------
type Props = {
    data : DelitContent
}
export default function ExplicationPostItem({data} : Props) {
  return (
    <Grid xs={12} md={8}>
      <Typography variant="body1" component="h1">
        Explication
      </Typography>
      <Typography variant="h2" component="h1">
      {data?.title}
      </Typography>
    <BlockContentRenderer data={data?.description}/>
      <Divider sx={{ mt: 8 }} />
    </Grid>
  );
}
