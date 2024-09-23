'use client';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { _tags } from 'src/_mock';

import RichText from 'src/components/rich-text/rich-text';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../common/post-author';
import SingleBlogHero from '../single-blog-hero ';
import PostSidebar from '../../common/post-sidebar';

// import PostSocialsShare from '../../blog/common/post-socials-share';
// import TravelLatestPosts from '../../blog/travel/travel-latest-posts';

// ----------------------------------------------------------------------
type Props = {
  blog: any;
  recentBlogs: any;
};
export default function BlogDetailView({ blog, recentBlogs }: Props) {
  return (
    <>
      <SingleBlogHero blog={blog} />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.asfc.chronique_injustice },
            { name: blog.title },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {blog.description}
            </Typography>

            <RichText content={blog.body} />

            {/* <PostTags tags={tags} /> */}

            {/* <PostSocialsShare /> */}

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={blog.author} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar author={blog.author} popularTags={_tags} recentPosts={recentBlogs} />
          </Grid>
        </Grid>
      </Container>

      {/* <TravelLatestPosts posts={_travelPosts.slice(0, 4)} /> */}
    </>
  );
}
