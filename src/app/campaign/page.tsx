// ----------------------------------------------------------------------
import { sanityFetch } from 'src/lib/client';
import { PARTNERS_QUERY, CAMPAIGNS_WITH_INFRACTIONS_QUERY } from 'src/lib/queries';

import CampaignView from 'src/sections/asfc-sections/_campaigns/view/campaigns-view';

export default async function CampaignPage() {
  const CampaignData = await sanityFetch({ query: CAMPAIGNS_WITH_INFRACTIONS_QUERY });
  const partnerType = 'Campagne'; // This should be dynamic
  const PartnerData = await sanityFetch({ query: PARTNERS_QUERY, params: { partnerType } });
  console.log('campaignData', CampaignData[0].infractions[4]);
  return <CampaignView campaignData={CampaignData} partnerData={PartnerData} />;
}
