import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import urlFor from 'src/lib/sanity';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  author: any;
};

export default function PostAuthor({ author }: Props) {
  const socials = [
    { key: 'twitter', url: author.social.twitter ?? '' },
    { key: 'instagram', url: author.social.instagram ?? '' },
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

  return (
    <Stack
      direction="row"
      spacing={{ xs: 3, md: 4 }}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Avatar
        src={urlFor(author.image?.imageAsset.image.asset)?.url() ?? ''}
        sx={{ width: 96, height: 96 }}
      />

      <Stack spacing={2}>
        <Stack
          spacing={2}
          alignItems={{ md: 'center' }}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h5">{author.name}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {author.bio}
            </Typography>
          </Stack>

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
    </Stack>
  );
}
