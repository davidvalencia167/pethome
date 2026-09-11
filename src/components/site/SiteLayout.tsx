import { ArrowUpRight, Clock3, MapPin, Menu, Phone, ShoppingBag, X } from "lucide-react";

import logo from "../../assets/Logo PetHome.png";
import { Link as RouterLink, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
    {label: "Inicio", to: "/"},
    {label: "Nosotros", to: "/nosotros"},
    {label: "Servicios", to: "/servicios"},
    {label: "Especialidades", to: "/especialidades"},
    {label: "Tienda", to: "/tienda"},
    {label: "Blog", to: "/blog"},
    {label: "Contacto", to: "/contacto"},
];

export function SiteHeader() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {count, openCart} = useCart();

    return(
        <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 sm:px-8 lg:px-12">
                <RouterLink to="/" className="flex items-center gap-3" aria-label="PetHome Inicio">
                    <img src={logo} alt="PetHome Clínica Veterinaria" className="h-12 w-auto object-contain" />
                </RouterLink>

                <nav className="hidden items-center gap-4 xl:flex 2xl:gap-5" aria-label="Navegación Principal">
                    {
                        navigation.map((item) => (
                            <NavLink key={item.to} to={item.to} className={({isActive}) => `relative py-2 text-[12px] font-semibold tracking-[-0.01em] transition-colors ${isActive ? "text-brand-navy" : "text-brand-navy/60 hover:text-brand-orange"}`}>
                                {({isActive}) => (
                                    <>
                                        {item.label}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-brand-orange transition-all ${isActive ? "w-full" : "w-0"}`}/>
                                    </>
                                )}
                            </NavLink>
                        ))}
                </nav>

                <div className="hidden items-center gap-3 xl:flex">
                    <button type="button" onClick={openCart} className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange" aria-label="Abrir Carrito">
                        <ShoppingBag size={18} strokeWidth={1.8}/>
                        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-orange px-1 text-[9px] font-extrabold text-white">{count}</span>
                    </button>
                    <RouterLink to="/agendar-cita" className="button-primary group px-5 text-[13px]">
                        Agendar cita <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group:hover:-translate-y-0.5"/>
                    </RouterLink>
                </div>

                <div className="flex items-center gap-2 xl:hidden">
                    <button type="button" onClick={openCart} className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-navy" aria-label="Abrir Carrito">
                        <ShoppingBag size={19}/>
                        <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-orange px-1 text-[9px] font-bold text-white">{count}</span>
                    </button>
                    <button type="button" onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2" aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen}>
                        {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {
                    isMenuOpen && (
                       <motion.nav initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: "auto"}} exit={{opacity: 0, height: 0}} className="overflow-hidden border-t border-brand-navy/10 bg-white px-5 py-4 xl:hidden" aria-label="Navegación móvil">
                            <div className="mx-auto flex max-w-360 flex-col gap-1">
                                {
                                    navigation.map((item) => (
                                        <NavLink key={item.to} to={item.to} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-cream hover:text-brand-orange">
                                            {item.label}
                                        </NavLink>
                                    ))}
                                    <RouterLink to="/agendar-cita" onClick={() => setIsMenuOpen(false)} className="button-primary mt-2 justify-center">
                                        Agendar cita <ArrowUpRight size={16}/>
                                    </RouterLink>
                            </div>
                       </motion.nav> 
                    )
                }
            </AnimatePresence>
        </header>
    );
}

export function SiteFooter() {
    return(
        <footer className="bg-brand-navy text-white">
            <div className="mx-auto grid max-w-360 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.2fr] lg:px-12 lg:py-20">
                <div>
                    <img src={logo} alt="PetHome" className="h-16 w-auto object-contain brightness-0 invert" />
                    <p className="mt-6 max-w-xs text-sm leading-7 text-white/65">
                        Cuidamos cada etapa de la vida de tu mascota con atención cercana, tecnología y un equipo
                        que entiende lo importante que es para ti.
                    </p>
                    <a href="https://www.instagram.com/pethome_veterinaria/" target="_blank" rel="noreferrer" className="mt-7 inline-flex text-xs font-semibold text-white/65 transition-colors hover:text-brand-orange">
                        Instagram: @pethome_veterinaria
                    </a>
                </div>
                <div>
                    <p className="footer-heading">Navegación</p>
                    <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
                        <RouterLink to="/nosotros" className="transition-colors hover:text-brand-orange">Nosotros</RouterLink>
                        <RouterLink to="/servicios" className="transition-colors hover:text-brand-orange">Servicios</RouterLink>
                        <RouterLink to="/tienda" className="transition-colors hover:text-brand-orange">Tienda PetHome</RouterLink>
                        <RouterLink to="/blog" className="transition-colors hover:text-brand-orange">Blog</RouterLink>
                        <RouterLink to="/contacto" className="transition-colors hover:text-brand-orange">Contacto</RouterLink>
                    </div>
                </div>
                <div>
                    <p className="footer-heading">Atención</p>
                    <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
                        <span>Atención médica 24 hrs</span>
                        <span>Urgencias veterinarias</span>
                        <span>Ecografía especializada</span>
                        <span>Baño y peluqueria</span>
                        <span>Pet shop</span>
                    </div>
                </div>
                <div>
                    <p className="footer-heading">Visítanos</p>
                    <div className="mt-5 space-y-4 text-sm text-white/65">
                        <p className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-brand-orange"/>
                        Av. 0 # 0N-18, Barrio Lleras Restrepo<br/>Cúcuta, Norte de Santander</p>
                        <p className="flex gap-3"><Phone size={17} className="shrink-0 text-brand-orange"/>310 5037603</p>
                        <p className="flex gap-3"><Clock3 size={17} className="shrink-0 text-brand-orange"/>24hrs</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-360 flex-col gap-3 px-5 py-5 text-xs text-white/40 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
                    <span>© {new Date().getFullYear()} PetHome Clínica Veterinaria. Cúcuta, Colombia.</span>
                    <span>Política de privacidad · Tratamiento de datos · Términos</span>
                </div>
            </div>
        </footer>
    )
}

export default function SiteLayout() {
    return(
        <div className="min-h-screen bg-brand-surface text-brand-navy">
            <SiteHeader/>
            <main><Outlet/></main>
            <SiteFooter/>
        </div>
    )
}