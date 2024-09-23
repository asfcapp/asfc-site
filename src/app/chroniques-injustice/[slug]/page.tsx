import { sanityFetch } from 'src/lib/client';
import { BLOG_QUERY } from 'src/lib/queries';

import BlogDetailView from 'src/sections/asfc-sections/_blog/view/blog-detail-view';

// ----------------------------------------------------------------------

export default async function ChroniqueInjusticePage({ params }: { params: { slug: string } }) {
  const blogData = await sanityFetch({ query: BLOG_QUERY });
  const SingleBlogData = blogData.find(
    (blog: any) => blog.slug?.current === decodeURIComponent(params.slug)
  );
  const recentBlogs = blogData.filter((blog: any) => blog.category === SingleBlogData.category);
  return (
    SingleBlogData && <BlogDetailView blog={SingleBlogData} recentBlogs={recentBlogs.slice(0, 4)} />
  );
}
