'use client';

import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from 'src/_mock';
import RojLandingHero from '../landing/roj-landing-hero';
import RojTestimonial from '../landing/roj-partners';

// ----------------------------------------------------------------------

export default function RojLandingView() {
  return (
    <>
      <RojLandingHero />
      <RojTestimonial members={_members} />
    </>
  );
}
