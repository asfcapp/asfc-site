import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'wrseddxi',
  dataset: 'production',
  apiVersion: '2024-06-24',
  useCdn: true,
});
