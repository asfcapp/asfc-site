'use client';

import useSWR from 'swr';

// import { fetchRojData } from 'src/lib/queries';

import PartenersCarousel from 'src/sections/ui-version/compagne-partners';

import { RojDocument } from 'src/types/roj';

import RojLandingHero from '../landing/roj-landing-hero';

// const fetcher = async () => {
//   const fetchedData ={}; //await fetchRojData();
//   return fetchedData;
// };

// ----------------------------------------------------------------------

export default function RojLandingView({ initialData }: { initialData: RojDocument }) {
  // const { data, error } = useSWR<RojDocument>('roj-data', fetcher, { fallbackData: initialData });
  const { data, error } = { data: initialData, error: null };
  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  const { partenaire } = data;

  return (
    <>
      {data && <RojLandingHero data={data} />}
      {partenaire && <PartenersCarousel />}
    </>
  );
}
