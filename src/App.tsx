import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Staking from "./pages/Staking";
import LiquidStaking from "./pages/LiquidStaking";
import Liquidity from "./pages/Liquidity";
import Lending from "./pages/Lending";
import Perps from "./pages/Perps";
import Risks from "./pages/Risks";
import Glossary from "./pages/Glossary";
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
          <Route path="/staking" element={<Staking />} />
          <Route path="/liquid-staking" element={<LiquidStaking />} />
          <Route path="/liquidity" element={<Liquidity />} />
          <Route path="/lending" element={<Lending />} />
          <Route path="/perps" element={<Perps />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/glossary" element={<Glossary />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
