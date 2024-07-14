import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack, { StackProps } from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';

import { useResponsive } from 'src/hooks/use-responsive';

import urlFor from 'src/lib/sanity';
import { fetchTags, fetchCategories, fetchRecentPosts } from 'src/lib/queries';

import Iconify from 'src/components/iconify';

import { Post } from 'src/types/post';
import { Tags } from 'src/types/tags';
import { IAuthorProps } from 'src/types/author';
import { Categories } from 'src/types/categories';

import PostItemMobile from './post-item-mobile';
import Advertisement, { AdvertisementProps } from '../../advertisement';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  author?: IAuthorProps;
  popularTags?: string[];
  advertisement?: AdvertisementProps;
 
}

const PostSidebar = ({
  author,
  popularTags,
  advertisement,
  sx,
  ...other
}: Props) => {
  const mdUp = useResponsive('up', 'md');
  const [categories, setCategories] = useState<Categories[]>([]);
  const [tags, setTags] = useState<Tags[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post []>([]);

  const avatarUrl = author?.image ? urlFor(author?.image)?.url() : null;


  useEffect(() => {
    const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    getCategories();
  }, []);
  useEffect(() => {
    const getTags = async () => {
      const fetchedTags = await fetchTags();
      setTags(fetchedTags);
    };
    getTags();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await fetchRecentPosts();
      setRecentPosts(posts);
    };

    fetchPosts();
  }, []);



  const renderAuthor = author && (
    <Stack spacing={2} direction="row" sx={{ mb: { md: 5 } }}>
      <Avatar src={avatarUrl ?? ''} sx={{ width: 64, height: 64 }} />
  
      <Stack>
        <Typography variant="h5">{author.name}</Typography>
  
        {author.bio && (
          <Typography variant="body2" sx={{ mt: 0.5, mb: 2, color: 'text.secondary' }}>
            {author.bio}
          </Typography>
        )}
  
        <Stack direction="row" spacing={1}>
          {author.facebook && (
            <IconButton component="a" href={author.facebook} target="_blank" rel="noopener noreferrer">
              <Iconify icon="mdi:facebook" sx={{ color: '#3b5998' }} />
            </IconButton>
          )}
          {author.linkedin && (
            <IconButton component="a" href={author.linkedin} target="_blank" rel="noopener noreferrer">
              <Iconify icon="mdi:linkedin" sx={{ color: '#0077b5' }} />
            </IconButton>
          )}
          {author.instagram && (
            <IconButton component="a" href={author.instagram} target="_blank" rel="noopener noreferrer">
              <Iconify icon="mdi:instagram" sx={{ color: '#e1306c' }} />
            </IconButton>
          )}
          {author.website && (
            <IconButton component="a" href={author.website} target="_blank" rel="noopener noreferrer">
              <Iconify icon="mdi:web" sx={{ color: 'text.primary' }} />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Stack>
  );

  const renderCategories = categories.length > 0 && (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>

      {categories.map((category) => (
        <Stack key={category._id} direction="row" alignItems="center">
          <Box
            sx={{
              mr: 2,
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'primary.main',
            }}
          />

          <Link variant="body2" href={category.title} color="inherit">
            {category.title}
          </Link>
        </Stack>
      ))}
    </Stack>
  );

  const renderRecentPosts = recentPosts && (
    <Stack spacing={3}>
      <Typography variant="h5">Recent Posts</Typography>

      {recentPosts?.map((post) => (
        <PostItemMobile key={post._id} post={post} onSiderbar />
      ))}
    </Stack>
  );

  const renderPopularTags = popularTags && (
    <Stack spacing={3}>
      <Typography variant="h5">Popular Tags</Typography>

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {tags.map((tag) => (
          <Chip key={tag?._id} label={tag?.title} variant="soft" size="small" />
        ))}
      </Stack>
    </Stack>
  );

  return (
    <>
      {mdUp && renderAuthor}

      {mdUp && (
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}

      <Stack
        spacing={5}
        sx={{
          pt: { md: 5 },
          pb: { xs: 8, md: 0 },
          ...sx,
        }}
        {...other}
      >
        {renderCategories}
        {renderRecentPosts}
        {renderPopularTags}
        {advertisement && <Advertisement advertisement={advertisement} />}
      </Stack>
    </>
  );
};

export default PostSidebar;
