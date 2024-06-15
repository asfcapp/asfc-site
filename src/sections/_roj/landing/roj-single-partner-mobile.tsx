import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { ITeamMemberProps } from 'src/types/team';

// ----------------------------------------------------------------------

type Props = {
  member: ITeamMemberProps;
  onSiderbar?: boolean;
};

export default function RojSinglePartnerMobile({ member, onSiderbar }: Props) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={member.name}
        src={member.photo}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link color="inherit">
          <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{member.name}</TextMaxLine>
        </Link>
      </Stack>
    </Stack>
  );
}
