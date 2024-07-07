import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Tag } from 'src/types/post'; // Adjust the import path as needed

// ----------------------------------------------------------------------

type Props = {
  tags: Tag[]; // Ensure tags is an array of Tag objects
};

export default function PostTags({ tags }: Props) {
  console.log(tags);

  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ my: 5 }}>
      <Typography variant="subtitle2" sx={{ mr: 1 }}>
        Tags:
      </Typography>
      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {tags?.map((tag, i) => (
          <Chip key={tag._id} size="small" variant="soft" label={tag.title} onClick={() => {}} />
        ))}
      </Stack>
    </Stack>
  );
}
