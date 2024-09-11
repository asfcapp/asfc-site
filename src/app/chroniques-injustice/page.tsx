import { sanityFetch } from 'src/lib/client';
import { BLOG_QUERY } from 'src/lib/queries';

import BlogView from 'src/sections/asfc-sections/_blog/view/blog-view';

// ----------------------------------------------------------------------

export default async function ChroniqueInjusticePage() {
  const blogData = await sanityFetch({ query: BLOG_QUERY });
  console.log('blogData', blogData);
  return <BlogView blogs={blogData} />;
}
