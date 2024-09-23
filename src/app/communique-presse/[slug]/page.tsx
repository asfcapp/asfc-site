import { sanityFetch } from 'src/lib/client';
import { COMMUNIQUES_QUERY } from 'src/lib/queries';

import CommuniqueDetailView from 'src/sections/asfc-sections/_communique/view/communique-detail-view';

// ----------------------------------------------------------------------

export default async function CommuniqueDetailPage({ params }: { params: { slug: string } }) {
  const CommuniqueData = await sanityFetch({ query: COMMUNIQUES_QUERY });
  const SingleCommuniqueData = CommuniqueData.find(
    (communique: any) => communique.slug?.current === decodeURIComponent(params.slug)
  );
  return (
    SingleCommuniqueData && (
      <CommuniqueDetailView communique={SingleCommuniqueData} latestCommunique={CommuniqueData} />
    )
  );
}
