import { sanityFetch } from 'src/lib/client';
import { CAMPAIGNS_WITH_INFRACTIONS_QUERY } from 'src/lib/queries';

import InfractionView from 'src/sections/asfc-sections/_campaigns/_Infraction-details/Infraction-view';

export default async function InfractionPage({ params }: { params: { slug: string } }) {
  const CampaignData = await sanityFetch({ query: CAMPAIGNS_WITH_INFRACTIONS_QUERY });
  console.log('infractions', CampaignData[0].infractions);
  const infraction = CampaignData[0].infractions.find(
    (item: any) => item.infractionSlug?.current === params.slug
  );
  return <InfractionView infraction={infraction} />;
}
