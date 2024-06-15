import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { ITeamMemberProps } from 'src/types/team';

// ----------------------------------------------------------------------

type Props = {
  member: ITeamMemberProps;
};

export default function RojSinglePartner({ member }: Props) {
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
