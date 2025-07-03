import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Franchise from "./pages/Franchise";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/locations"
            element={
              <div className="p-8 text-center">
                Locations Page - Coming Soon
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route
            path="/conversion"
            element={
              <div className="p-8 text-center">
                Conversion Opportunities Page - Coming Soon
              </div>
            }
          />
          <Route
            path="/events"
            element={
              <div className="p-8 text-center">Events Page - Coming Soon</div>
            }
          />
          <Route
            path="/pub-club"
            element={
              <div className="p-8 text-center">Pub Club Page - Coming Soon</div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="p-8 text-center">Contact Page - Coming Soon</div>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
