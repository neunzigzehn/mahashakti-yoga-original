
import { useState } from 'react';
import { uploadImage } from '@/utils/supabaseStorage';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { RefreshCw, Upload, Check, AlertCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ImageUploaderProps {
  bucket: string;
}

const ImageUploader = ({ bucket }: ImageUploaderProps) => {
  const { toast } = useToast();
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});

  const uploadYogaClassImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setStatus('uploading');
    setMessage('Uploading yoga class images...');
    
    const expectedCount = 4;
    const actualCount = files.length;
    
    if (actualCount !== expectedCount) {
      toast({
        title: 'Warning',
        description: `Expected ${expectedCount} files, but got ${actualCount}. Continuing anyway.`,
        variant: 'destructive',
      });
    }
    
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
          toast({
            title: 'Upload Error',
            description: `Failed to upload ${fileName}`,
            variant: 'destructive',
          });
          return;
        }
      } catch (error) {
        console.error(`Error uploading ${fileName}:`, error);
        setUploadProgress(prev => ({ ...prev, [fileName]: -1 }));
        setMessage(prev => `${prev}\nError uploading ${fileName}: ${error}`);
        setStatus('error');
        toast({
          title: 'Upload Error',
          description: `Error uploading ${fileName}: ${error}`,
          variant: 'destructive',
        });
        return;
      }
    }
    
    setStatus('success');
    setMessage(prev => `${prev}\nAll yoga class images uploaded successfully!`);
    toast({
      title: 'Success',
      description: 'All yoga class images uploaded successfully!',
    });
  };

  const uploadRetreatImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setStatus('uploading');
    setMessage('Uploading retreat images...');
    
    const expectedCount = 3;
    const actualCount = files.length;
    
    if (actualCount !== expectedCount) {
      toast({
        title: 'Warning',
        description: `Expected ${expectedCount} files, but got ${actualCount}. Continuing anyway.`,
        variant: 'destructive',
      });
    }
    
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
          toast({
            title: 'Upload Error',
            description: `Failed to upload ${fileName}`,
            variant: 'destructive',
          });
          return;
        }
      } catch (error) {
        console.error(`Error uploading ${fileName}:`, error);
        setUploadProgress(prev => ({ ...prev, [fileName]: -1 }));
        setMessage(prev => `${prev}\nError uploading ${fileName}: ${error}`);
        setStatus('error');
        toast({
          title: 'Upload Error',
          description: `Error uploading ${fileName}: ${error}`,
          variant: 'destructive',
        });
        return;
      }
    }
    
    setStatus('success');
    setMessage(prev => `${prev}\nAll retreat images uploaded successfully!`);
    toast({
      title: 'Success',
      description: 'All retreat images uploaded successfully!',
    });
  };

  const resetStatus = () => {
    setStatus('idle');
    setMessage('');
    setUploadProgress({});
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Supabase Image Uploader</h2>
      
      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Image Size Recommendations</AlertTitle>
        <AlertDescription>
          <p className="mb-2">For optimal display, please use the following image sizes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Yoga Class Images: 600x400 pixels (3:2 aspect ratio)</li>
            <li>Retreat Images: 800x533 pixels (3:2 aspect ratio)</li>
          </ul>
        </AlertDescription>
      </Alert>
      
      <div className="space-y-6">
        <div className="bg-yoga-beige/20 p-4 rounded-md">
          <h3 className="font-medium mb-2">Yoga Class Images (upload 4 images)</h3>
          <p className="text-sm text-gray-600 mb-4">
            These images will appear in the Yoga Kurse section. Please select exactly 4 images in order.
            They will be named yoga-class-1.png, yoga-class-2.png, etc.
          </p>
          <div className="mb-2">
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
        
        <div className="bg-yoga-beige/20 p-4 rounded-md">
          <h3 className="font-medium mb-2">Retreat Images (upload 3 images)</h3>
          <p className="text-sm text-gray-600 mb-4">
            These images will appear in the Retreats section. Please select exactly 3 images in order.
            They will be named retreat-1.png, retreat-2.png, etc.
          </p>
          <div className="mb-2">
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
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <div className="flex justify-between mb-2">
              <h4 className="font-medium">
                {status === 'uploading' ? (
                  <span className="flex items-center">
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Uploading...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center text-green-600">
                    <Check className="mr-2 h-4 w-4" /> Upload Complete
                  </span>
                ) : (
                  <span className="flex items-center text-red-600">
                    <AlertCircle className="mr-2 h-4 w-4" /> Upload Error
                  </span>
                )}
              </h4>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetStatus}
                disabled={status === 'uploading'}
              >
                Clear
              </Button>
            </div>
            <pre className="whitespace-pre-wrap text-sm bg-white p-3 rounded border overflow-auto max-h-40">
              {message}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
