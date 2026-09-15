import {motion} from "framer-motion"
import clinic from "../assets/IMG_3001.jpg";
import { ArrowRight, ArrowUpRight, Check, HeartPlus, Microscope, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import catCare from "../assets/IMG_3008.jpg";
import PostCare from "../assets/post - cuidado.jpg";

const reveal = {hidden: {opacity: 0, y: 18}, visible: {opacity: 1, y: 0, transition: {duration: 0.55, ease: "easeOut" as const}}};

export function About() {
    return(
        <div>
            <section className="bg-brand-cream">
                <div className="mx-auto grid max-w-360 items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:py-20">
                    <motion.div initial="hidden" animate="visible" variants={reveal}>
                        <p className="eyebrow">Conoce PetHome</p>
                        <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] text-brand-navy sm:text-6xl">
                            Cuidamos lo que hace 
                            <span className="text-brand-orange"> Hogar.</span>
                        </h1>
                        <p className="mt-6 max-w-lg text-base leading-7 text-brand-navy/60">Una clínica veterinaria en Cúcuta creada para acompañarte con cuidado, cercanía y atención integral.</p>                        
                    </motion.div>
                    <motion.img initial={{opacity: 0, scale: 0.97}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.7}} src={clinic} alt="Interior de PetHome Clínica Veterinaria" className="aspect-[1.2] w-full rounded-[26px] object-cover shadow-xl"/> 
                </div>
            </section>

            <section className="mx-auto max-w-300 px-5 py-16 sm:px-8 lg:py-20">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <p className="eyebrow">Nuestra filosofía</p>
                        <h2 className="section-title mt-3">La medicina también se construye <span className="text-brand-orange">escuchando.</span></h2>
                        <p className="mt-5 leading-7 text-brand-navy/60">En PetHome entendemos que cada mascota tiene una historia y cada familia necesita sentirse acompañada. Por eso combinamos atención humana, tecnología diagnóstica y diferentes áreas de servicio en un mismo lugar.</p>
                        <div className="mt-7 grid gap-3">
                            {["Cuidado cercano", "Atención integral", "Tecnología diagnóstica", "Bienestar animal"].map((item) => 
                                <div key={item} className="flex items-center gap-3 text-sm font-bold">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-cream text-brand-orange">
                                        <Check size={14}/>
                                    </span>
                                    {item}
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <img src={catCare} alt="Veterinaria atendiendo un gato" loading="lazy" className="mx-auto h-auto w-full max-w-100 rounded-[22px] object-contain object-center shadow-xl" />
                    </div>
                </div>
            </section>

            <section className="bg-brand-navy">
                <div className="mx-auto max-w-300 px-5 py-16 sm:px-8 lg:py-20">
                    <p className="eyebrow"> En PetHome</p>
                    <div className="mt-8 grid gap-6 sm:grid-cols-3">
                        {[{ icon: HeartPlus, title: "Cercanía", text: "Acompañamiento para cada familia."}, { icon: Microscope, title: "Precisión", text: "Herramientas para apoyar cada valoración."}, {icon: ShieldCheck, title: "Confianza", text: "Un espacio pensado para el bienestar."}].map(({icon: Icon, title, text}) => 
                            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <Icon className="text-brand-orange" size={24}/>
                                <h3 className="mt-5 text-lg font-extrabold text-white">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                            </div>
                        )}
                    </div> 
                </div>
            </section>

            <section className="bg-brand-cream">
                <div className="mx-auto grid max-w-300 items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} variants={reveal} className="relative">
                        <img src={PostCare} alt="Atención veterinaria cercana para una mascota" loading="lazy" className="mx-auto h-auto w-full max-w-100 rounded-[22px] object-contain object-center shadow-xl" />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} variants={reveal}>
                        <p className="eyebrow">Cómo te acompañamos</p>
                        <h2 className="section-title mt-3">Un cuidado claro para cada <span className="text-brand-orange">etapa.</span></h2>
                        <p className="mt-5 max-w-140 leading-7 text-brand-navy/60">Queremos que tú y tu mascota se sientan acompañados desde el primer momento. Nuestra atención parte de escuchar, orientar y cuidar con cercanía.</p>
                        <div className="mt-8 grid gap-3">
                            {[{number: "01", title: "Escuchamos tu historia", text: "Conocemos a tu mascota y la preocupación de su familia."}, {number: "02", title: "Orientamos el camino", text: "Te explicamos las opciones de atención de forma clara."}, {number: "03", title: "Cuidamos con propósito", text: "Acompañamos cada paso con atención integral y humana."}].map(({number, title, text}) => 
                                <div key={number} className="flex gap-4 rounded-2xl border border-brand-navy/10 bg-white p-4">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-xs font-extrabold text-white">{number}</span>
                                    <div>
                                        <h3 className="text-sm font-extrabold text-brand-navy">{title}</h3>
                                        <p className="mt-1 text-sm leading-6 text-brand-navy/55">{text}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                           <Link to="/servicios" className="button-secondary">
                                Ver servicios
                                <ArrowRight size={16}/>
                           </Link>
                           <Link to="/agendar-cita" className="link-arrow">
                                Agendar una valoración
                                <ArrowUpRight size={16}/>
                           </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}