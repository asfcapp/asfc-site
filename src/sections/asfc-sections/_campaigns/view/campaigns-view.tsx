// import { fetchCampagnesData } from 'src/lib/queries';

import CampaignPartner from 'src/sections/asfc-sections/_campaigns/campaign-partner/partners-carousel';
import CampaignCover from 'src/sections/asfc-sections/_campaigns/campaign-cover/campaign-cover-carousel';

import CampaignInfraction from '../campaign-infraction/infraction-card-grid';

export default function CampaignView({
  campaignData,
  partnerData,
}: {
  campaignData: any;
  partnerData: any;
}) {
  //
  return (
    <>
      {campaignData && <CampaignCover campaigns={campaignData} />}
      {campaignData[0].infractions && (
        <CampaignInfraction infractions={campaignData[0].infractions} />
      )}
      {partnerData && <CampaignPartner partners={partnerData} />}
      {/* this campaignData[0] is used only because we have one campaign if we have more we should use state management library  */}
    </>
  );
}
