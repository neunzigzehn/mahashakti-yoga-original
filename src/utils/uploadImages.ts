
import { uploadImage } from './supabaseStorage';

/**
 * This is a utility function to upload all the yoga class and retreat images to Supabase.
 * You can call this function from the console once you have the images ready.
 * 
 * Example usage:
 * 1. Import the images into your project
 * 2. Call this function from the console or a admin component
 */
export const uploadAllImages = async () => {
  console.log('Starting image upload to Supabase...');
  
  // Helper function to upload a single image
  const uploadSingleImage = async (file: File, bucket: string, path: string) => {
    const result = await uploadImage(bucket, path, file);
    if (result) {
      console.log(`Successfully uploaded ${path} to ${bucket}`);
      return true;
    } else {
      console.error(`Failed to upload ${path} to ${bucket}`);
      return false;
    }
  };
  
  // To use this function:
  // 1. Create File objects from your images
  // 2. Call uploadSingleImage for each image
  
  // Example:
  // const yogaClass1 = new File([await fetch('/path/to/image1.png').then(r => r.blob())], 'yoga-class-1.png', { type: 'image/png' });
  // await uploadSingleImage(yogaClass1, 'retreat-images', 'yoga-class-1.png');
  
  console.log('Image upload complete. Please check the console for any errors.');
};

// Example function to handle file upload from an input element
export const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, bucket: string, filename: string) => {
  const file = event.target.files?.[0];
  if (!file) return null;
  
  return await uploadImage(bucket, filename, file);
};
