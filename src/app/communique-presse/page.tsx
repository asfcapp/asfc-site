import { sanityFetch } from 'src/lib/client';
import { COMMUNIQUES_QUERY } from 'src/lib/queries';

import CommuniqueView from 'src/sections/asfc-sections/_communique/view/communique-view';

// ----------------------------------------------------------------------

export default async function CommuniquePage() {
  const CommuniqueData = await sanityFetch({ query: COMMUNIQUES_QUERY });
  return <CommuniqueView communiques={CommuniqueData} />;
}
