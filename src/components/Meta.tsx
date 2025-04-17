
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const Meta = ({
  title = 'Mahashakti Yoga - Eine achtsame Herangehensweise an Yoga',
  description = 'Erlebe Yoga in einem neuen Licht mit Mahashaktis sanfter und achtsamer Herangehensweise an Bewegung, Atem und Körperbewusstsein.',
  keywords = 'Yoga, Mahashakti, München, Meditation, Retreats, Yoga Kurse, Yoga Ausbildung',
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  canonicalUrl,
}: MetaProps) => {
  // Create the full title
  const fullTitle = title.includes('Mahashakti') ? title : `${title} | Mahashakti Yoga`;
  
  // Current URL for canonical link
  const currentUrl = canonicalUrl || window.location.href;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mahashaktiyoga" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Mahashakti Yoga" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="de" />
      <meta name="geo.region" content="DE-BY" />
      <meta name="geo.placename" content="München" />
    </Helmet>
  );
};

export default Meta;
