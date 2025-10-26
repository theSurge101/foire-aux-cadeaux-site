import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  type?: string;
}

const useSEO = ({
  title = "La Foire Aux Cadeaux 2025 - L'expérience shopping incontournable à Lomé",
  description = "Découvrez La Foire Aux Cadeaux 2025 du 19-21 Décembre à l'hôtel Sarakawa de Lomé. Plus de 100 exposants, artisans locaux, cadeaux uniques et expériences familiales.",
  image = "https://anaisconcept.biz/wp-content/uploads/2025/10/DSC_0174-scaled.jpg",
  url = "https://foireauxcadeaux.anaisconcept.biz",
  type = "website",
  keywords = "foire aux cadeaux, salon lomé, shopping togo, exposition lomé, artisans togo"
}: SEOProps = {}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.content = content;
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
      }
      
      element.href = href;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:locale', 'fr_TG', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Canonical URL
    updateLinkTag('canonical', url);

    // Cleanup function (optional, restores defaults on unmount)
    return () => {
      document.title = "La Foire Aux Cadeaux 2025";
    };
  }, [title, description, image, url, keywords, type]);
};

export default useSEO;