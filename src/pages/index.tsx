
import {motion} from "framer-motion";
import { Activity, ArrowRight, ArrowUpRight, Check, Clock3, HeartPulse, Microscope, PawPrint, ScanLine, Sparkles, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import pomeranianImg from "../assets/IMG_3004.jpg";
import teamImg from "../assets/IMG_9823.JPEG";
import ecography from "../assets/Ecografía.JPG";
import xRay from "../assets/Radiografía.JPG";
import laparoscopy from "../assets/Laparoscopia.JPG";
import laboratory from "../assets/Laboratorio.JPG";

const trustPoints = [
    {icon: Stethoscope, label: "Atención veterinaria", detail: "Integral y cercana"},
    {icon: ScanLine, label: "Tecnología diagnóstica", detail: "Para decidir mejor"},
    {icon: HeartPulse, label: "Bienestar primero", detail: "En cada consulta"},
];

const services = [
    {icon: Clock3, title: "Atención 24 horas", text: "Estamos preparados para acompañarte cuando más nos necesitas."},
    {icon: Microscope, title: "Diagnóstico avanzado", text: "Ecografía, laboratorio y radiografia para cuidar con precisión."},
    {icon: Activity, title: "Médicina especializada", text: "Cirugía, endoscopia y cuidados intensivos en un mismo lugar."},
];


const reveal = {hidden: {opacity: 0, y: 22}, visible: {opacity: 1, y: 0, transition: {duration: 0.58, ease: "easeOut" as const}}};

export default function Index() {
    return(
        <div>
            <section className="relative overflow-hidden bg-brand-cream">
                <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-orange/10"/>
                <div className="relative mx-auto grid max-w-360 items-center gap-12 px-5 py-12 sm:px-8 md:min-h-147.5 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20 lg:px-12 lg:py-16">
                    <motion.div initial="hidden" animate="visible" variants={reveal} className="relative z-10 max-w-155">
                        <div className="mb-6 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange"><span className="h-px w-8 bg-brand-orange"/>Clínica Veterinaria en Cúcuta</div>
                        <h1 className="max-w-155 font-display text-[48px] font-extrabold leading-[0.99] tracking-[-0.06em] text-brand-navy sm: text-6xl lg:text-[68px]">El cuidado que <span className="text-brand-orange">tu mascota</span> merece.</h1>
                        <p className="mt-6 max-w-127.5 text-base leading-7 text-brand-navy/60 sm:text-lg">Atención veterinaria especializada, tecnología y un equipo comprometido con el bienestar de tus mascotas.</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/agendar-cita" className="button-primary group">Agendar cita <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Link>
                            <Link to="/servicios" className="button-secondary group">Conocer servicios <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></Link>
                        </div>
                        <div className="mt-10 grid max-w-135 grid-cols-3 gap-3 border-t border-brand-navy/15 pt-5">
                            {
                                trustPoints.map(({icon: Icon, label, detail}) => 
                                    <div key={label} className="flex flex-col gap-1.5"><Icon size={19} className="text-brand-orange" strokeWidth={1.8}/><span className="text-xs font-extrabold leading-4 text-brand-navy sm:text-sm">{label}</span><span className="text-[11px] text-brand-navy/50">{detail}</span></div>
                                )
                            }
                        </div>
                    </motion.div>
                    <motion.div initial={{opacity: 0, x: 24}} animate={{opacity: 1, x: 0}} transition={{duration: 0.72, delay: 0.1}} className="relative mx-auto w-full max-w-142.5 lg:ml-auto">
                        <div className="relative overflow-hidden rounded-[28px] bg-brand-navy p-2.5 shadow-2xl shadow-brand-navy/15">
                            <img src={pomeranianImg} alt="Paciente canino de PetHome" className="aspect-[1.06] w-full rounded-[21px] object-cover object-center sm:aspect-[1.15]" />
                            <div className="absolute inset-x-7 bottom-7 flex items-center justify-between rounded-2xl bg-brand-navy/90 px-4 py-3.5 text-white shadow-lg backdrop-blur-md sm:inset-x-9 sm:bottom-9">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange"><PawPrint size={16}/></span>
                                    <span className="text-xs font-bold">Tu tranquilidad, <br/>
                                        <span className="font-normal text-white/60">nuestra prioridad</span>
                                    </span>
                                </div>
                                <ArrowUpRight size={18} className="text-brand-orange"/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="border-y border-brand-navy/10 bg-white">
                <div className="mx-auto grid max-w-360 gap-0 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
                    {
                        services.map(({icon: Icon, title, text}, index) => 
                            <motion.div key={title} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} variants={reveal} transition={{delay: index * 0.08}} className="flex gap-4 border-brand-navy/10 py-6 md:border-r md:px-7 md:first:pl-0 md:last:border-0 lg:py-7">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cream text-brand-orange"><Icon size={19}/></span>
                                <div>
                                    <h2 className="text-sm font-extrabold tracking-tight text-brand-navy">{title}</h2>
                                    <p className="mt-1 text-xs leading-5 text-brand-navy/55">{text}</p>
                                </div>
                            </motion.div>
                        )}
                </div>
            </section>

            <section className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} variants={reveal} className="relative mx-auto w-full max-w-125 lg:mx-0">
                        <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-[22px] bg-brand-orange/15"/>
                        <div className="relative grid grid-cols-[0.74fr_1.26fr] items-end gap-3"/>
                        <img src={teamImg} alt="Equipo veterinario PetHome" loading="lazy" className="h-91.25 w-full rounded-[22px] object-cover object-center shadow-xl sm:h-105" />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} variants={reveal}>
                        <p className="eyebrow">Una clínica para toda la vida</p>
                        <h2 className="section-title mt-3 max-w-155">Más que una consulta, 
                            <span className="text-brand-orange">un vínculo</span> de confianza.
                        </h2>
                        <p className="mt-5 max-w-140 text-base leading-7 text-brand-navy/60">En PetHome creemos que la medicina veterinaria también se construye escuchando. Por eso reunimos atención integral, tecnología diagnóstica y acompañamiento cercano para cuidar a quienes hacen hogar contigo.</p>
                        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                            {["Atencion integral", "Tecnología diagnóstica", "Equipo comprometido", "Cuidado cercano"].map((item) => 
                                <li key={item} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-cream text-brand-orange">
                                        <Check size={14} strokeWidth={3}/>
                                    </span>
                                    {item}
                                </li>
                            )}
                        </ul>
                        <Link to="/nosotros" className="link-arrow mt-8">
                            Conoce PetHome
                            <ArrowRight size={17}/>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="bg-brand-cream">
                <div className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="eyebrow">Atención con propósito</p>
                            <h2 className="section-title mt-3 max-w-162.5">Todo lo que necesitan, 
                                <span className="text-brand-orange">en un solo lugar.</span>
                            </h2>
                        </div>
                        <Link to="/servicios" className="link-arrow">Ver todos los servicios
                            <ArrowRight size={17}/>
                        </Link>
                    </div>
                    <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {[{title: "Ecografia", image: ecography, icon: Clock3}, {title: "Radiografia", image: xRay, icon: Stethoscope}, {title: "Laparoscopia", image: laparoscopy, icon: Activity}, {title: "Laboratorio", image: laboratory, icon: Sparkles}].map(({title, image, icon: Icon}, index) => 
                            <motion.div key={title} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} variants={reveal} transition={{delay: index * 0.07}} className="group relative min-h-68.75 overflow-hidden rounded-[22px] bg-brand-navy">
                                <img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/45 to-brand-navy/5" />
                                <div className="relative flex h-full min-h-68.75 flex-col justify-between p-6 text-white">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </span>
                                    <div>
                                        <h3 className="max-w-56 text-xl font-extrabold leading-tight">{title}</h3>
                                        <Link to="/servicios" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-orange transition-colors hover:text-white">
                                            Conocer más
                                            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            
        </div>
    );
}