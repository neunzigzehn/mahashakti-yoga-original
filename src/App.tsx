
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import LoadingFallback from "./components/LoadingFallback";

// Lazy loaded pages for better performance
const Index = lazy(() => import("./pages/Index"));
const UberUns = lazy(() => import("./pages/UberUns"));
const Angebot = lazy(() => import("./pages/Angebot"));
const Stundenplan = lazy(() => import("./pages/Stundenplan"));
const RetreatSeite = lazy(() => import("./pages/RetreatSeite"));
const Ausbildungen = lazy(() => import("./pages/Ausbildungen"));
const Workshops = lazy(() => import("./pages/Workshops"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Blog = lazy(() => import("./pages/Blog"));
const Widerruf = lazy(() => import("./pages/Widerruf"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create a new instance of QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetching when window focuses for better UX
      retry: 1, // Reduce retry attempts for failed queries
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
