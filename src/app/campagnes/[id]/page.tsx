import DelitPostView from 'src/sections/_campagnes/view/delit-post-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Chronique injustice',
};

export default function DelitPage({ params }: { params: { id: string } }) {

  return <DelitPostView id={params?.id} />
}
