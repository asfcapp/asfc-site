'use client';

import useSWR from 'swr';

import { fetchCampagnesData } from 'src/lib/queries';

import CampagnesPosts from 'src/sections/blog/campagnes/campagnes-posts';

import { Campagne } from 'src/types/campagne';

// ----------------------------------------------------------------------
const fetcher = async () => {
  const fetchedData = await fetchCampagnesData();
  return fetchedData;
};
export default function CampagnesView({ initialData }: { initialData: Campagne[] }) {
  const { data, error } = useSWR<Campagne[]>('campagnes', fetcher, { fallbackData: initialData });

  if (error) return <div>Failed to load posts</div>;
  if (!data) return <div>Loading...</div>;

  return <>{data && <CampagnesPosts campagnes={data} />}</>;
}
