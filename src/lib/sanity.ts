import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';
import ImageUrlBuilder from '@sanity/image-url';

const { projectId, dataset } = client.config();

// ----------------------------------------------------------------------
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? ImageUrlBuilder({ projectId, dataset }).image(source) : null;

export default urlFor;