import { useEffect } from 'react';

interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}

const useMetadata = (metadata: Metadata) => {
  useEffect(() => {
    if (metadata.title) {
      document.title = metadata.title;
    }

    if (metadata.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', metadata.description);
      }
    }

    if (metadata.keywords) {
      if (metadata.keywords) {
        let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.name = 'keywords';
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = metadata.keywords;
      }
    }
  }, [metadata]);
};

export default useMetadata;
