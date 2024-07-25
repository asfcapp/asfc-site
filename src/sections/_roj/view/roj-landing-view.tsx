'use client';

import { useState, useEffect } from 'react';

import { fetchRojData } from 'src/lib/queries';

import PartenersCarousel from 'src/sections/common/parteners-carousel';

import { RojDocument } from 'src/types/roj';
import { Partenaire } from 'src/types/partenaire';

import RojLandingHero from '../landing/roj-landing-hero';

// ----------------------------------------------------------------------

export default function RojLandingView() {
  const [data, setData] = useState<RojDocument | null>(null); // Use the RojData type
  const [partenaires, setPartenaires] = useState<Partenaire[]>([]); // Use the RojData type

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchRojData();
      setData(fetchedData);
      setPartenaires(fetchedData?.partenaire);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {data && <RojLandingHero data={data} />}
      {partenaires && <PartenersCarousel partenaires={partenaires}/>}
    </>
  );
}
