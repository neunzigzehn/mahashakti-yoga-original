
import { useState } from 'react';
import { uploadImage } from '@/utils/supabaseStorage';
import { Button } from '@/components/ui/button';

interface ImageUploaderProps {
  bucket: string;
}

const ImageUploader = ({ bucket }: ImageUploaderProps) => {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});

  const uploadYogaClassImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setStatus('uploading');
    setMessage('Uploading yoga class images...');
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = `yoga-class-${i + 1}.png`;
      
      try {
        setUploadProgress(prev => ({ ...prev, [fileName]: 0 }));
        
        const result = await uploadImage(bucket, fileName, file);
        
        if (result) {
          setUploadProgress(prev => ({ ...prev, [fileName]: 100 }));
          setMessage(prev => `${prev}\nUploaded ${fileName} successfully.`);
        } else {
          setUploadProgress(prev => ({ ...prev, [fileName]: -1 }));
          setMessage(prev => `${prev}\nFailed to upload ${fileName}.`);
          setStatus('error');
          return;
        }
      } catch (error) {
        console.error(`Error uploading ${fileName}:`, error);
        setUploadProgress(prev => ({ ...prev, [fileName]: -1 }));
        setMessage(prev => `${prev}\nError uploading ${fileName}: ${error}`);
        setStatus('error');
        return;
      }
    }
    
    setStatus('success');
    setMessage(prev => `${prev}\nAll yoga class images uploaded successfully!`);
  };

  const uploadRetreatImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setStatus('uploading');
    setMessage('Uploading retreat images...');
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = `retreat-${i + 1}.png`;
      
      try {
        setUploadProgress(prev => ({ ...prev, [fileName]: 0 }));
        
        const result = await uploadImage(bucket, fileName, file);
        
        if (result) {
          setUploadProgress(prev => ({ ...prev, [fileName]: 100 }));
          setMessage(prev => `${prev}\nUploaded ${fileName} successfully.`);
        } else {
          setUploadProgress(prev => ({ ...prev, [fileName]: -1 }));
          setMessage(prev => `${prev}\nFailed to upload ${fileName}.`);
          setStatus('error');
          return;
        }
      } catch (error) {
        console.error(`Error uploading ${fileName}:`, error);
        setUploadProgress(prev => ({ ...prev, [fileName]: -1 }));
        setMessage(prev => `${prev}\nError uploading ${fileName}: ${error}`);
        setStatus('error');
        return;
      }
    }
    
    setStatus('success');
    setMessage(prev => `${prev}\nAll retreat images uploaded successfully!`);
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Supabase Image Uploader</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Yoga Class Images (1-4)</h3>
          <div className="mb-2">
            <label htmlFor="yoga-images" className="block text-sm mb-1">
              Select 4 yoga class images in order (1, 2, 3, 4)
            </label>
            <input
              id="yoga-images"
              type="file"
              multiple
              accept="image/*"
              onChange={uploadYogaClassImages}
              className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-yoga-brown/80 file:text-white hover:file:bg-yoga-brown"
              disabled={status === 'uploading'}
            />
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Retreat Images (1-3)</h3>
          <div className="mb-2">
            <label htmlFor="retreat-images" className="block text-sm mb-1">
              Select 3 retreat images in order (1, 2, 3)
            </label>
            <input
              id="retreat-images"
              type="file"
              multiple
              accept="image/*"
              onChange={uploadRetreatImages}
              className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-yoga-brown/80 file:text-white hover:file:bg-yoga-brown"
              disabled={status === 'uploading'}
            />
          </div>
        </div>
        
        {status !== 'idle' && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <h4 className="font-medium mb-2">
              {status === 'uploading' ? 'Uploading...' :
               status === 'success' ? 'Upload Complete' :
               'Upload Error'}
            </h4>
            <pre className="whitespace-pre-wrap text-sm bg-white p-2 rounded border">
              {message}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
