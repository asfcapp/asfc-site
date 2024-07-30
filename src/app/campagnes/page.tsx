// ----------------------------------------------------------------------

import { fetchCampagnesData } from 'src/lib/queries';

import CampagnesView from 'src/sections/asfc-sections/_campagnes/view/campagnes-view';


export default async  function RojLandingPage() {
  const data = await fetchCampagnesData();

  return <CampagnesView initialData={data} />;
}
