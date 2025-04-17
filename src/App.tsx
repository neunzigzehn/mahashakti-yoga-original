
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
import Widerruf from "./pages/Widerruf";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
          <Route path="/widerruf" element={<Widerruf />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
