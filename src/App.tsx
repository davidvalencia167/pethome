
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/toaster";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/site/CartContext";
import SiteLayout from "./components/site/SiteLayout";
import Index from "./pages";

import "../src/styles/global.css"

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
           <Toaster/>
           <Sonner/>
           <BrowserRouter>
              <CartProvider>
                  <Routes>
                      <Route element={<SiteLayout/>}>
                      <Route path="/" element={<Index/>}/>
                      </Route>
                  </Routes>
              </CartProvider>
           </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
