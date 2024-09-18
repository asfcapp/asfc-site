import { Divider } from '@mui/material';

import BlogFeaturedPosts from 'src/sections/asfc-sections/_blog/home-blog/blog-featured-posts ';

import BlogPostsView from './blog-posts-view';

type Props = {
  blogOfficial: any;
  blogCommunity?: any;
};
export default function BlogView({ blogOfficial, blogCommunity }: Props) {
  return (
    <>
      {blogOfficial && <BlogFeaturedPosts blogs={blogOfficial} />}
      <Divider sx={{ mb: { xs: 6, md: 10 } }} />
      {blogCommunity && <BlogPostsView blogs={blogCommunity} />}
    </>
  );
}
