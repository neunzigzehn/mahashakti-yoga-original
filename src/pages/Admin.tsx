
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageUploader from "@/components/admin/ImageUploader";

const Admin = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-24">
        <div className="container-custom">
          <h1 className="text-3xl font-serif text-center mb-12 text-yoga-brown">Admin Dashboard</h1>
          
          <div className="max-w-3xl mx-auto">
            <ImageUploader bucket="retreat-images" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
