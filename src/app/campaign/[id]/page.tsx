// ----------------------------------------------------------------------

import DelitPostView from 'src/sections/asfc-sections/_campaigns/view/delit-post-view';

export const metadata = {
  title: 'Chronique injustice',
};

export default function DelitPage({ params }: { params: { id: string } }) {
  return <DelitPostView id={params?.id} />;
}
