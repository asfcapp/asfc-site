// src/app/page.tsx

import type { Metadata } from 'next';

//import { fetchHomeData } from 'src/lib/queries';

import HomeView from 'src/sections/asfc-sections/_home/view/home-view';

// Define the metadata generation function
export async function generateMetadata(): Promise<Metadata> {
  // Fetch home data
  const data = {}; //await fetchHomeData();

  // Extract SEO metadata from data
  const seoMeta = data?.seo || {};

  return {
    title: seoMeta.metaTitle || 'Default Title',
    description: seoMeta.metaDescription || 'Default Description',
    keywords: seoMeta.keywords || 'Default Keywords',

    // Additional metadata properties if needed
  };
}

// Page component
export default async function HomePage() {
  // Fetch data for the HomePage component
  const data = {}; //await fetchHomeData();

  return <HomeView initialData={data} />;
}
