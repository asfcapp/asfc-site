// ----------------------------------------------------------------------
import { sanityFetch } from 'src/lib/client';
import { PARTNERS_QUERY, CAMPAIGNS_WITH_INFRACTIONS_QUERY } from 'src/lib/queries';

import CampaignView from 'src/sections/asfc-sections/_campaigns/view/campaigns-view';

export default async function RojLandingPage() {
  const CampaignData = await sanityFetch({ query: CAMPAIGNS_WITH_INFRACTIONS_QUERY });
  const PartnerData = await sanityFetch({ query: PARTNERS_QUERY });
  const PartnerCampaignData = PartnerData.filter(
    (partner: any) => partner.partnerType[0] === 'Campagne'
  );

  return <CampaignView campaignData={CampaignData} partnerData={PartnerCampaignData} />;
}
