import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = "La Foire Aux Cadeaux 2025 - L'expérience shopping incontournable à Lomé",
  description = "Découvrez La Foire Aux Cadeaux 2025 du 19-21 Décembre à l'hôtel Sarakawa de Lomé. Plus de 100 exposants, artisans locaux, cadeaux uniques et expériences familiales.",
  image = "https://foireauxcadeaux.tg/og-image.jpg",
  url = "https://foireauxcadeaux.anaisconcept.biz",
  type = "website",
  keywords = "foire aux cadeaux, salon lomé, shopping togo, exposition lomé, artisans togo"
}) => {
  return (
    <Helmet>
      {/* Character Set & Viewport */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <html lang="fr" />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;