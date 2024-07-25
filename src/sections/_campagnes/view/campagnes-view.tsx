'use client';

import { useState, useEffect } from 'react';

import { fetchCampagnesData } from 'src/lib/queries';

import CampagnesPosts from 'src/sections/blog/campagnes/campagnes-posts';

import { Campagne } from 'src/types/campagne';

// ----------------------------------------------------------------------

export default function CampagnesView() {
  const [data, setData] = useState<Campagne[] | null>(null); // Use the RojData type

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchCampagnesData();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  console.log(data);

  return <>{data && <CampagnesPosts campagnes={data} />}</>;
}
