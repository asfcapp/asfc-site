// app/roj/page.tsx
import { Metadata } from 'next';

import { fetchRojData } from 'src/lib/queries';

import RojLandingView from 'src/sections/asfc-sections/_roj/view/roj-landing-view';

// Define the metadata generation function
export async function generateMetadata(): Promise<Metadata> {
  // Fetch home data
  const data = await fetchRojData();
  
  // Extract SEO metadata from data
  const seoMeta = data?.seo || {};

  return {
    title: seoMeta.metaTitle || 'Default Title',
    description: seoMeta.metaDescription || 'Default Description',
    keywords: seoMeta.keywords || 'Default Keywords',
  
    // Additional metadata properties if needed
  };
}

export default async function RojLandingPage() {
  const rojData = await fetchRojData();

  return <RojLandingView initialData={rojData} />;
}
