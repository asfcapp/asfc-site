import ChroniquePostView from 'src/sections/_chroniques-injustice/view/chronique-post-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Chronique injustice',
};

export default function ChroniqueInjusticePage({ params }: { params: { id: string } }) {
  console.log(params);

  return <ChroniquePostView id={params.id} />;
}
