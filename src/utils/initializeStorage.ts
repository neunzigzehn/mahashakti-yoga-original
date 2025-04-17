
import { supabase } from '@/integrations/supabase/client';

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
  } catch (error) {
    console.error('Unexpected error initializing storage:', error);
  }
};
