import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import  dogImage from "../assets/IMG_3011.jpg";
import { Activity, ArrowRight, Clock3, HeartPulse, Microscope, ScanLine, ShieldPlus } from "lucide-react";
import serviceImage from "../assets/IMG_3010.jpg";
import ultrasound from "../assets/Ecografía.JPG";
import laboratory from "../assets/Laboratorio.JPG";
import radiography from "../assets/Radiografía.JPG";
import specializedSurgery from "../assets/Cirugia especializada.JPG";


const services = [
    {
        icon: Clock3,
        title: "Atención médica 24 horas",
        description: "Acompañamiento veterinario cuando tu mascota lo necesita.",
        image: serviceImage,
        featured: true
    },

    {
        icon: ScanLine,
        title: "Ecografía",
        description: "Imágenes diagnósticas para conocer mejor lo que está pasando.",
        image: ultrasound
    },

    {
        icon: Microscope,
        title: "Laboratorio",
        description: "Apoyo diagnóstico para tomar decisiones con información precisa",
        image: laboratory
    },

    {
        icon: Activity,
        title: "Radiografía",
        description: "Evaluación interna para complementar la valoración clinica",
        image: radiography
    },

    {
        icon: ShieldPlus,
        title: "Cirugía especializada",
        description: "Procedimientos realizados con cuidado y seguimiento integral",
        image: specializedSurgery
    }
]


const reveal = { hidden: {opacity: 0, y: 22}, visible: {opacity: 1, y: 0, transition: {duration: 0.55, ease: "easeOut" as const}}};

export default function Services() {
    return(
        <div>
            <section className="relative overflow-hidden bg-brand-cream">
                <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-brand-orange/10"/>
                <div className="absolute bottom-0 left-0 h-1/2 w-1/3 bg-linear-to-tr from-brand-navy/5 to-transparent"/>
                <div className="relative mx-auto grid max-w-360 items-end gap-10 px-5 pb-16 pt-20 sm:px-8 md:grid-cols-[1fr_0.8fr] lg:px-12 lg:pb-24 lg:pt-28">
                    <motion.div initial="hidden" animate="visible" variants={reveal}>
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                            <span className="h-px w-8 bg-brand-orange"/> Nuestro portafolio
                        </div>
                        <h1 className="mt-5 max-w-175 text-5xl font-extrabold leading-[0.98] tracking-tighter text-brand-navy sm:text-6xl lg:text-[76px]">
                            Cuidar es estar <span className="text-brand-orange">presentes.</span>
                        </h1>
                        <p className="mt-6 max-w-140 text-base leading-8 text-brand-navy/60 sm:text-lg">
                            Servicios veterinarios pensados para acompañar cada etapa de la vida de tu
                            mascota, con atención cercana y tecnología.
                        </p>
                    </motion.div>

                    <motion.div initial={{opacity: 0, scale: 0.96}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.7}} className="relative hidden aspect-[1.15] overflow-hidden rounded-4xl rounded-bl-[100px] bg-brand-navy md:block">
                            <img src={dogImage} alt="Paciente de PetHome" className="h-full w-full object-cover object-top opacity-85"/>
                            <div className="absolute inset-0 bg-linear-to-t from-brand-navy/70 to-transparent"/>
                            <div className="absolute bottom-6 left-7 flex items-center gap-3 text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange">
                                    <HeartPulse size={19}/>
                                </span>
                                <span className="text-sm font-semibold">Bienestar en cada detalle</span>
                            </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <p className="eyebrow">Atención integral</p>
                        <h2 className="section-title mt-3">Nuestros servicios</h2>
                    </div>
                    <p className="max-w-92.5 text-sm leading-6 text-brand-navy/55 md:text-right">
                        Encuentra el cuidado que necesitas y agenda una valoración con nuestro equipo.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map(({icon: Icon, title, description, image, featured}, index) => (
                            <motion.article key={title} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.15}} variants={reveal} transition={{delay: (index % 3) * 0.07}} className={`group overflow-hidden rounded-[26px] border border-brand-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-xl hover:shadow-brand-navy/10 ${featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1fr_1fr]" : ""}`}>
                                <div className={`relative overflow-hidden ${featured ? "min-h-62.5 lg:min-h-full" : "min-h-62.5"}`}>
                                    <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy/45 to-transparent"/>
                                    <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-brand-orange">
                                        <Icon size={19} />
                                    </span>
                                </div>
                                <div className="flex flex-col justify-between p-6">
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-brand-orange">PetHome</p>
                                        <h3 className="mt-2 text-xl font-extrabold tracking-tight text-brand-navy">{title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-brand-navy/55">{description}</p>
                                    </div>
                                    <Link to={`/servicios/${title?.toLowerCase().replace(/ /g, "-")}`} className="link-arrow mt-7 w-fit text-sm">
                                        Conocer más
                                        <ArrowRight size={16}/>
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                </div>
            </section>


        </div>
    );
}