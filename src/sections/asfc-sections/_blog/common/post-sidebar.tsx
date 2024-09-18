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

import Iconify from 'src/components/iconify';

import { IAuthorProps } from 'src/types/author';
import { IBlogPostProps, IBlogCategoryProps } from 'src/types/blog';

import PostItemMobile from './post-item-mobile';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  author?: any;
  popularTags?: string[];
  recentPosts?: any;
}

export default function PostSidebar({ author, popularTags, recentPosts, sx, ...other }: Props) {
  const mdUp = useResponsive('up', 'md');

  const socials = [
    { key: 'twitter', url: author?.social?.twitter ?? '' },
    { key: 'instagram', url: author?.social?.instagram ?? '' },
  ];
  const socialIcons = [
    {
      key: 'facebook',
      icon: 'carbon:logo-facebook',
      color: '#1877f2',
    },
    {
      key: 'twitter',
      icon: 'carbon:logo-twitter',
      color: '#1da1f2',
    },
    {
      key: 'linkedin',
      icon: 'carbon:logo-linkedin',
      color: '#0a66c2',
    },
    {
      key: 'instagram',
      icon: 'carbon:logo-instagram',
      color: '#c13584',
    },
  ];

  const renderAuthor = author && (
    <Stack spacing={2} direction="row" sx={{ mb: { md: 5 } }}>
      <Avatar
        src={urlFor(author.image?.imageAsset.image.asset)?.url() ?? ''}
        sx={{ width: 64, height: 64 }}
      />

      <Stack>
        <Typography variant="h5">{author.name}</Typography>

        <Typography variant="body2" sx={{ mt: 0.5, mb: 2, color: 'text.secondary' }}>
          {author.bio}
        </Typography>

        <Stack direction="row">
          {socials
            .filter((social) => social.url) // Only show if there's a valid URL or handle
            .map((social) => {
              // Find the corresponding icon for the social network
              const socialIcon = socialIcons.find((icon) => icon.key === social.key);

              return (
                socialIcon && (
                  <IconButton key={social.key}>
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      underline="none"
                    >
                      <Iconify icon={socialIcon.icon} sx={{ color: socialIcon.color }} />
                    </Link>
                  </IconButton>
                )
              );
            })}
        </Stack>
      </Stack>
    </Stack>
  );

  const renderRecentPosts = recentPosts && (
    <Stack spacing={3}>
      <Typography variant="h5">Recent Posts</Typography>

      {recentPosts.map((post: any) => (
        <PostItemMobile key={post._id} blog={post} onSiderbar />
      ))}
    </Stack>
  );

  const renderPopularTags = popularTags && (
    <Stack spacing={3}>
      <Typography variant="h5">Popular Tags</Typography>

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {popularTags.map((tag) => (
          <Chip key={tag} label={tag} variant="soft" size="small" onClick={() => {}} />
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
        {renderRecentPosts}
        {renderPopularTags}
      </Stack>
    </>
  );
}
