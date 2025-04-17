
import { supabase, supabaseStorageUrl } from '@/integrations/supabase/client';

// Function to get the URL for an image in Supabase storage
export const getImageUrl = (bucket: string, path: string): string => {
  return `${supabaseStorageUrl}/object/public/${bucket}/${path}`;
};

// Helper to check if an image exists in Supabase storage
export const checkImageExists = async (bucket: string, path: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase.storage.from(bucket).download(path);
    return !error && data !== null;
  } catch (error) {
    console.error('Error checking image existence:', error);
    return false;
  }
};

// Upload an image to Supabase storage
export const uploadImage = async (
  bucket: string,
  path: string,
  file: File
): Promise<string | null> => {
  try {
    const { data, error } = await supabase.storage.from(bucket).upload(path, file, {
      cacheControl: '3600',
      upsert: true,
    });
    
    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }
    
    return getImageUrl(bucket, data.path);
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};
