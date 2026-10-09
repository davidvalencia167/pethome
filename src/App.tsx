
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/toaster";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/site/CartContext";
import SiteLayout from "./components/site/SiteLayout";

import "../src/styles/global.css"
import { About, Article, Blog, Contact, Testimonials } from "./pages/ContentPages";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Appointment from "./pages/Appointment";
import Store from "./pages/Store";
import { ProductDetail } from "./pages/CommercePages";


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
                      <Route path="/nosotros" element={<About/>}/>
                      <Route path="/servicios" element={<Services/>}/>
                      <Route path="/servicios/:slug" element={<ServiceDetail/>}/>
,

                      <Route path="/tienda" element={<Store/>}/>
                      <Route path="/tienda/producto/:id" element={<ProductDetail/>}/>
                      <Route path="/agendar-cita" element={<Appointment/>}/>
                      <Route path="/blog" element={<Blog/>}/>
                      <Route path="/blog/:slug" element={<Article/>}/>


                      <Route path="/testimonios" element={<Testimonials/>}/>
                      <Route path="/contacto" element={<Contact/>}/>
                      </Route>
                  </Routes>
              </CartProvider>
           </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}


export default App