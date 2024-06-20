import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import { varHover, varTranHover } from 'src/components/animate';

import { ITeamMemberProps } from 'src/types/team';

// ----------------------------------------------------------------------

type Props = {
  member: ITeamMemberProps;
};

export default function RojSinglePartner({ member }: Props) {
  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <m.div variants={varHover()} transition={varTranHover()}>
          <Image src={member.photo} alt={member.name} ratio="4/3" />
        </m.div>
      </Box>

      <Stack spacing={1.5} sx={{ p: 3 }} component={m.div} variants={{ hover: { opacity: 0.8 } }}>
        <Typography variant="h5" sx={{ mb: 0.5 }}>
          {member.name}
        </Typography>

        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ mt: 0.5 }}>
            {member.review}
          </Typography>
        </Stack>
        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ mt: 0.5 }}>
            {member.review}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
  return (
    <Stack spacing={2}>
      <Image src={member.photo} alt={member.name} ratio="1/1" sx={{ borderRadius: 2 }} />

      <TextMaxLine variant="subtitle2" persistent>
        {member.name}
      </TextMaxLine>

      <Stack spacing={1} direction="row" alignItems="center">
        <Typography variant="caption">{member.review}</Typography>
      </Stack>
    </Stack>
  );
}
