// ----------------------------------------------------------------------

import InfractionView from 'src/sections/asfc-sections/_campaigns/_Infraction-details/Infraction-view';

export default function InfractionPage({ params }: { params: { slug: string; infraction: any } }) {
  return <InfractionView infraction={params.infraction} />;
}
