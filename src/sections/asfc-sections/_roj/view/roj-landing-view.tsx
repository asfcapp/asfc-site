'use client';

import useSWR from 'swr';

import { fetchRojData } from 'src/lib/queries';

import PartenersCarousel from 'src/sections/common/parteners-carousel';

import { RojDocument } from 'src/types/roj';

import RojLandingHero from '../landing/roj-landing-hero';

const fetcher = async () => {
  const fetchedData = await fetchRojData();
  return fetchedData;
};

// ----------------------------------------------------------------------

export default function RojLandingView({ initialData }: { initialData: RojDocument }) {
  const { data, error } = useSWR<RojDocument>('roj-data', fetcher, { fallbackData: initialData });

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  const { partenaire } = data;

  return (
    <>
      {data && <RojLandingHero data={data} />}
      {partenaire && <PartenersCarousel partenaires={partenaire} />}
    </>
  );
}
