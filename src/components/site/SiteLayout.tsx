import { ArrowUpRight, Clock3, MapPin, Menu, Phone, ShoppingBag, X } from "lucide-react";

import logo from "../../assets/Logo PetHome.png";
import { Link ,NavLink, Outlet} from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { siteInfo } from "../../data/site";

const navigation = [
    {label: "Inicio", to: "/"},
    {label: "Nosotros", to: "/nosotros"},
    {label: "Servicios", to: "/servicios"},
    {label: "Especialidades", to: "/especialidades"},
    {label: "Tienda", to: "/tienda"},
    {label: "Blog", to: "/blog"},
    {label: "Contacto", to: "/contacto"},
];

const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber}`;

export function SiteHeader() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {count, openCart} = useCart();

    return(
        <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 sm:px-8 lg:px-12">
                <Link to="/" className="flex items-center gap-3" aria-label="PetHome Inicio">
                    <img src={logo} alt="PetHome Clínica Veterinaria" className="h-12 w-auto object-contain" />
                </Link>

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
                    <Link to="/agendar-cita" className="button-primary group px-5 text-[13px]">
                        Agendar cita <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group:hover:-translate-y-0.5"/>
                    </Link>
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
                                    <Link to="/agendar-cita" onClick={() => setIsMenuOpen(false)} className="button-primary mt-2 justify-center">
                                        Agendar cita <ArrowUpRight size={16}/>
                                    </Link>
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
                    <a href="https://www.instagram.com/pethome_veterinaria/" target="_blank" rel="noreferrer" aria-label="Instagram de PetHome: @pethome_veterinaria" title="Instagram: @pethome_veterinaria" className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/80 transition-colors hover:bg-brand-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
                            <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
                        </svg>
                        <span className="sr-only">@pethome_veterinaria</span>
                    </a>
                </div>
                <div>
                    <p className="footer-heading">Navegación</p>
                    <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
                        <Link to="/nosotros" className="transition-colors hover:text-brand-orange">Nosotros</Link>
                        <Link to="/servicios" className="transition-colors hover:text-brand-orange">Servicios</Link>
                        <Link to="/tienda" className="transition-colors hover:text-brand-orange">Tienda PetHome</Link>
                        <Link to="/blog" className="transition-colors hover:text-brand-orange">Blog</Link>
                        <Link to="/contacto" className="transition-colors hover:text-brand-orange">Contacto</Link>
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
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Escribir a PetHome por WhatsApp" className="fixed bottom-5 right-5 z-60 inline-flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-extrabold text-white shadow-xl shadow-[#25D366]/25 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                    <path d="M12 2.25a9.72 9.72 0 0 0-8.42 14.58L2.25 21.75l5.1-1.3A9.72 9.72 0 1 0 12 2.25Zm0 17.7a7.96 7.96 0 0 1-4.06-1.1l-.29-.17-3.03.77.8-2.95-.19-.3A7.96 7.96 0 1 1 12 19.95Zm4.37-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
            </a>
        </div>
    )
}