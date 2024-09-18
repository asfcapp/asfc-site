import HomeView from 'src/sections/asfc-sections/_home/view/home-view';

// Page component
export default async function HomePage() {
  // Fetch data for the HomePage component
  const data = {}; // await fetchHomeData();

  return <HomeView initialData={data} />;
}
