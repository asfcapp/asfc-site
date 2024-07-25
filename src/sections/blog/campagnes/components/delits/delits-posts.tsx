import Masonry from '@mui/lab/Masonry';

import { Delit } from 'src/types/delit';

import DelitPostItem from './delit-post-item';

// ----------------------------------------------------------------------

type Props = {
  delits: Delit[];
};

export default function DelitsPosts({ delits }: Props) {
  return (
    <Masonry
        columns={{ xs: 1, sm: 2 }}
        spacing={4}
        defaultColumns={1}
        defaultSpacing={4}
        sx={{
          mx: { xs: 'unset', sm: 0 },
        }}
      >
        {delits
          ?.slice(0, 8)
          .map((delit, index) => <DelitPostItem key={delit._id} post={delit} index={index} />)}
      </Masonry>
  );
}
