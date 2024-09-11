import BlogFeaturedPosts from 'src/sections/asfc-sections/_blog/home-blog/blog-featured-posts ';

type Props = {
  blogs: any;
};
export default function BlogView({ blogs }: Props) {
  console.log('blogs', blogs);
  return <BlogFeaturedPosts blogs={blogs} />;
}
