
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UberUns from "./pages/UberUns";
import Angebot from "./pages/Angebot";
import Stundenplan from "./pages/Stundenplan";
import RetreatSeite from "./pages/RetreatSeite";
import Ausbildungen from "./pages/Ausbildungen";
import Workshops from "./pages/Workshops";
import Kontakt from "./pages/Kontakt";
import Blog from "./pages/Blog";
import Impressum from "./pages/Impressum";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";

// Create query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000
    }
  }
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uber-uns" element={<UberUns />} />
          <Route path="/angebot" element={<Angebot />} />
          <Route path="/stundenplan" element={<Stundenplan />} />
          <Route path="/retreats" element={<RetreatSeite />} />
          <Route path="/ausbildungen" element={<Ausbildungen />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
