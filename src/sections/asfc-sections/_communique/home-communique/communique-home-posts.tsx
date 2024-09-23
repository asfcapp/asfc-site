import { useState } from 'react';

import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Iconify from 'src/components/iconify';

import CommuniqueSingleHomePost from './communique-single-home-post';

// ----------------------------------------------------------------------

type Props = {
  communiques: any;
};

export default function CareerPosts({ communiques }: Props) {
  const [loadMore, setLoadMore] = useState(8);
  const handleLoadMore = () => {
    setLoadMore(loadMore + 4);
  };
  return (
    <>
      <Masonry
        columns={{ xs: 1, sm: 2 }}
        spacing={4}
        defaultColumns={1}
        defaultSpacing={4}
        sx={{
          mx: { xs: 'unset', sm: 0 },
        }}
      >
        {communiques.slice(0, loadMore).map((communique: any) => (
          <CommuniqueSingleHomePost key={communique._id} communique={communique} />
        ))}
      </Masonry>

      <Stack
        alignItems="center"
        sx={{
          pt: 5,
          pb: { xs: 10, md: 0 },
        }}
      >
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          onClick={handleLoadMore}
          endIcon={<Iconify icon="carbon:arrow-down" />}
        >
          Load more
        </Button>
      </Stack>
    </>
  );
}
