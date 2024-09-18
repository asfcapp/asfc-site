// app/roj/page.tsx

import { sanityFetch } from 'src/lib/client';

import RojView from 'src/sections/asfc-sections/_roj/view/roj-view';

import { ROJ_QUERY } from 'src/lib/queries';

export default async function RojLandingPage() {
  const rojData = await sanityFetch({ query: ROJ_QUERY });
  return <RojView roj={rojData} />;
}
