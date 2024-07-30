import ChroniquePostView from 'src/sections/asfc-sections/_chroniques-injustice/view/chronique-post-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Chronique injustice',
};

export default function ChroniqueInjusticePage({ params }: { params: { id: string } }) {

  return <ChroniquePostView id={params.id} />;
}
