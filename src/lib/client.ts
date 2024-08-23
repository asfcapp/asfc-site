// ./src/sanity/lib/client.ts
import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId} from 'src/lib/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

