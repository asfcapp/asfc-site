'use client';

import { _members } from 'src/_mock';

import RojTestimonial from '../landing/roj-partners';
import RojLandingHero from '../landing/roj-landing-hero';

// ----------------------------------------------------------------------

export default function RojLandingView() {
  return (
    <>
      <RojLandingHero />
      <RojTestimonial members={_members} />
    </>
  );
}
