
import { supabase, supabaseStorageUrl } from '@/integrations/supabase/client';

export const initializeStorage = async () => {
  try {
    // Check if the favicons bucket exists
    const { data: buckets, error } = await supabase.storage.listBuckets();
    
    if (error) {
      console.error('Error fetching buckets:', error);
      return;
    }

    const faviconBucketExists = buckets.some(bucket => bucket.name === 'favicons');
    
    if (!faviconBucketExists) {
      // Create the favicons bucket
      const { error: createError } = await supabase.storage.createBucket('favicons', {
        public: true,
        fileSizeLimit: 5242880 // 5MB
      });
      
      if (createError) {
        console.error('Error creating favicons bucket:', createError);
        return;
      }
      
      console.log('Favicons bucket created successfully');
    } else {
      console.log('Favicons bucket already exists');
    }

    // Get the URLs for the favicon files
    const getPublicUrl = (fileName: string) => {
      return `${supabaseStorageUrl}/object/public/favicons/${fileName}`;
    };

    // Make the favicon URLs available to the window object for the index.html to use
    window.faviconUrls = {
      favicon96: getPublicUrl('favicon-96x96.png'),
      favicon192: getPublicUrl('web-app-manifest-192x192.png'),
      favicon512: getPublicUrl('web-app-manifest-512x512.png'),
      faviconIco: getPublicUrl('favicon.ico'),
      faviconSvg: getPublicUrl('favicon.svg'),
      appleTouchIcon: getPublicUrl('apple-touch-icon.png'),
    };

    // Update the favicon links in the document head
    updateFaviconLinks();
  } catch (error) {
    console.error('Unexpected error initializing storage:', error);
  }
};

// Function to update the favicon links in the document head
const updateFaviconLinks = () => {
  if (!window.faviconUrls) return;

  // Update the favicon links
  const faviconLinks = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
  faviconLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      if (href.includes('favicon.ico')) {
        link.setAttribute('href', window.faviconUrls.faviconIco);
      } else if (href.includes('favicon.svg')) {
        link.setAttribute('href', window.faviconUrls.faviconSvg);
      } else if (href.includes('favicon-96x96.png')) {
        link.setAttribute('href', window.faviconUrls.favicon96);
      } else if (href.includes('apple-touch-icon.png')) {
        link.setAttribute('href', window.faviconUrls.appleTouchIcon);
      }
    }
  });

  // Update the web manifest
  const manifestLink = document.querySelector('link[rel="manifest"]');
  if (manifestLink) {
    const dynamicManifest = {
      name: "Mahashakti Yoga",
      short_name: "Mahashakti",
      icons: [
        {
          src: window.faviconUrls.favicon96,
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: window.faviconUrls.favicon192,
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: window.faviconUrls.favicon512,
          sizes: "512x512",
          type: "image/png"
        }
      ],
      theme_color: "#b19770",
      background_color: "#f5f1eb",
      display: "standalone",
      start_url: "/"
    };

    const manifestBlob = new Blob([JSON.stringify(dynamicManifest, null, 2)], { type: 'application/json' });
    const manifestUrl = URL.createObjectURL(manifestBlob);
    manifestLink.setAttribute('href', manifestUrl);
  }
};
