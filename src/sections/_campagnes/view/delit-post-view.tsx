'use client';

import { useState, useEffect } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { Divider, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';

import { fetchDelitDataById } from 'src/lib/queries';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ArticlePostItem from 'src/sections/blog/campagnes/components/articles/article-post-item';
import DataMarocPostItem from 'src/sections/blog/campagnes/components/dataMaroc/data-maroc-post-item';
import ExplicationPostItem from 'src/sections/blog/campagnes/components/explication/ExplicationPostItem';
import ObservationPostItem from 'src/sections/blog/campagnes/components/observation/observation-post-item';
import PublicationPostItem from 'src/sections/blog/campagnes/components/publication/publication-post-item';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function DelitPostView({ id }: Props) {
  const [delit, setDelit] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null); // Renamed to avoid shadowing

  useEffect(() => {
    const getDelitData = async () => {
      try {
        const data = await fetchDelitDataById(id);
        if (data && data.length > 0) {
          console.log(data[0]);
          setDelit(data[0]);
        } else {
          setFetchError('No data found'); // Use fetchError instead of error
        }
      } catch (error) { // Use fetchError instead of error
        setFetchError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    getDelitData();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (fetchError) { // Use fetchError instead of error
    return <Typography>Error: {fetchError}</Typography>;
  }

  if (!delit) {
    return <Typography>No data available</Typography>;
  }

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden', mt: { xs: 0, md: 5 }, pb: 10 }}>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <CustomBreadcrumbs
              links={[
                { name: 'Home', href: '/' },
                { name: 'Blog', href: paths.career.posts },
                { name: delit.title },
              ]}
              sx={{ my: 5 }}
            />

            <Typography variant="h2" component="h1">
              {delit.title}
            </Typography>

            <Typography variant="h6" sx={{ my: 5 }}>
              {delit.description}
            </Typography>
            <Divider sx={{ mt: 8 }} />
          </Grid>

          <ArticlePostItem data={delit?.articleDeLoi} />
          <ExplicationPostItem data={delit?.explication} />
          <DataMarocPostItem data={delit?.dataMaroc} />
          <ObservationPostItem data={delit?.observation} />
          <PublicationPostItem data={delit?.publication} />
        </Grid>
      </Container>

      <Divider />
    </>
  );
}
