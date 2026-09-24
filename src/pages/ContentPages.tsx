import {motion} from "framer-motion"
import clinic from "../assets/IMG_3001.jpg";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, HeartPlus, Microscope, ShieldCheck, Star } from "lucide-react";

import catCare from "../assets/IMG_3008.jpg";
import PostCare from "../assets/post - cuidado.jpg";
import reviewOne from "../assets/reseñas - 1.jpg";
import reviewTwo from "../assets/reseñas - 2.jpg";
import reviewThree from "../assets/reseñas - 3.jpg";
import reviewFour from "../assets/reseñas - 4.jpg";
import dental from "../assets/POST PROFILAXIS.jpg";
import renal from "../assets/PROBLEMAS RENALES - 1.jpg";
import moquillo from "../assets/MOQUILLO.JPEG";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

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


const articles = [
    { slug: "profilaxis-dental", category: "Prevención", title: "Una sonrisa saludable también es bienestar", excerpt: "Las bacterias dentales pueden entrar al torrente sanguíneo y afectar otros órganos", image: dental},
    { slug: "problemas-renales", category: "Salud", title: "Detectar a tiempo puede hacer la diferencia", excerpt: "Conoce el material educativo de PetHome sobre problemas renales en perros.", image: renal},
    { slug: "moquillo-en-perros", category: "Prevención", title: "Prevenir el moquillo también es cuidar su bienestar", excerpt: "Conoce Información sobre el moquillo en perros y la importancia de consultar a tiempo.", image: moquillo},
]

export function Blog() {
    return(
        <div>
            <section className="bg-brand-cream">
                <div className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                    <p className="eyebrow">Contenido PetHome</p>
                    <h1 className="mt-4 max-w-2xl font-display text-5xl font-extrabold leading-none tracking-[-0.06em] text-brand-navy sm:text-6xl">Información para cuidar <span className="text-brand-orange">mejor.</span></h1>
                    <p className="mt-6 max-w-xl leading-7 text-brand-navy/60">Contenido educativo basado en el material real de PetHome. Conoce más sobre prevención y bienestar.</p>
                </div>
            </section>

            <section className="mx-auto max-w-300 px-5 py-14 sm:px-8 lg:py-20">
                <div className="grid gap-6 md:grid-cols-3">
                    {
                        articles.map((article, index) =>
                            <motion.article initial="hidden" whileInView="visible" viewport={{once: true}} variants={reveal} transition={{delay: index * 0.08}} key={article.slug} className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-white">
                                <Link to={`/blog/${article.slug}`} className="block overflow-hidden">
                                    <img src={article.image} alt={article.title} loading="lazy" className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105" />
                                </Link>
                                <div className="p-6">
                                    <p className="eyebrow text-[10px]">{article.category}</p>
                                    <h2 className="mt-3 text-xl font-extrabold leading-tight text-brand-navy">{article.title}</h2>
                                    <p className="mt-3 text-sm leading-6 text-brand-navy/55">{article.excerpt}</p>
                                    <Link to={`/blog/${article.slug}`} className="link-arrow mt-6 text-xs">
                                        Leer artículo
                                        <ArrowRight size={15}/>
                                    </Link>
                                </div>
                            </motion.article>
                        )
                    }
                </div>
            </section>
        </div>
    );
}

const articleSections: Record<string, Array<{title: string; text: string}>> = {
    "profilaxis-dental": [
        { title: "Definición de profilaxis veterinaria", text: "La profilaxis dental veterinaria es una limpieza profesional que permite retirar placa y cálculo dental acumulados en los dientes. Hace parte de una valoración de salud oral y se realiza de acuerdo con las necesidades de cada mascota."},
        { title: "Formación de placa bacteriana", text: "La placa bacteriana es una película que se forma sobre los dientes por la acumulación de bacterias y restos de alimento. Si no se retira con una higiene adecuada, puede acumularse y endurecerse con el paso del tiempo."},
        { title: "Formación del cálculo dental", text: "Cuando la placa permanece sobre la superficie dental, puede mineralizarse y convertirse en cálculo dental. Este material es mas difícil de retirar en casa y puede acumularse cerca de la línea de las encias."},
        { title: "Relación con la inflamación, mal aliento y molestias", text: "La placa y el cálculo pueden irritar las encias y favorecer inflamación, mal aliento, sensibilidad y molestias al comer. Estos cambios deben observarse porque pueden indicar que la salud oral necesita atención."},
        { title: "Cepillado en casa", text: "El cepillado progresivo con productos formulados para mascotas puede complementar la higiene oral en casa. La técnica y la frecuencia deben adaptarse a cada mascota, y no se deben usar productos humanos sin indicación profesional."},
        { title: "Importancia de la valoración profesional", text: "La valoración veterinaria permite revisar dientes y encías, identificar acumulaciones y definir si tu mascota necesita una profilaxis. También ayuda a establecer recomendaciones de higiene adecuadas para su edad, temperamento y condición oral."},
        { title: "Signos para consultar", text: "Solicita una consulta si notas sangrado, dolor, dificultad para comer, rechazo de alimentos, encías inflamadas o cambios persistentes en el aliento. La Información de este artículo es educativa y no reemplaza una valoración profesional."}
    ],

    "problemas-renales": [
        { title: "Definición de problemas renales", text: "Los problemas renales son alteraciones que pueden afectar la capacidad de los riñones para cumplir sus funciones en el organismo. Algunos cambios pueden avanzar de forma silenciosa, por eso es importante observar a tu mascota y mantener sus controles."},
        { title: "Función e importancia de los riñones", text: "Los riñones participan en la eliminación de desechos y en el equilibrio de líquidos del organismo. Su estado influye en el bienestar general, por lo que el cuidado debe considerar la edad, los antecedentes y las necesidades particulares de cada mascota."},
        { title: "Cambios en agua, orina, apetito, peso y energía", text: "Un aumento o disminución en el consumo de agua, cambios en la frecuencia o cantidad de orina, pérdida de apetito, variaciones de peso o menor energía merecen atención, especialmente si persisten o aparecen junto con otros signos."},
        { title: "Importancia de los controles", text: "Los controles veterinarios permiten revisar la historia del paciente, valorar su estado general y definir si se necesitan pruebas de apoyo. La frecuencia de estas revisiones depende de cada mascota y debe ser indicada por el equipo profesional."},
        { title: "Hidratación y alimentación orientada", text: "La hidratación, una alimentación orientada por profesionales y el seguimiento de las recomendaciones indicadas forman parte del cuidado preventivo. No todas las mascotas necesitan el mismo manejo, por lo que las decisiones deben individualizarse."},
        { title: "No administrar medicamentos por cuenta propia", text: "No administres medicamentos por cuenta propia ni uses tratamientos destinados a personas u otras mascotas. Algunos productos pueden ser perjudiciales o dificultar la valoración; ante cualquier cambio, solicita orientación veterinaria."},
    ],

    "moquillo-en-perros": [
        { title: "Definición del moquillo canino", text: "El moquillo canino es una enfermedad viral que puede afectar a los perros y comprometer distintos sistemas del organismo. Requiere atención veterinaria y no debe diagnosticarse únicamente por los síntomas observados en casa."},
        { title: "Transmisión y prevención", text: "El virus puede transmitirse entre animales susceptibles, especialmente mediante secreciones y contacto cercano. La prevención incluye mantener los controles al día, reducir exposiciones de riesgo y consultar antes de reunir perros con vacunación incompleta."},
        { title: "Importancia de la vacunación", text: "La vacunación indicada por un profesional es una de las principales medidas de prevención. El esquema puede variar según la edad, el historial y las condiciones de cada mascota, por lo que conviene seguir las recomendaciones del equipo veterinario."},
        { title: "Prevención del contacto con animales enfermos", text: "Evita el contacto de perros no vacunados, con animales enfermos o con sintomas. Si existe una sospecha, aplica medidas de higiene y solicita orientación sobre el manejo del entorno y la protección de las demas mascotas."},
        { title: "Signos de alerta", text: "Señales como secreción ocular o nasal, tos, cambios digestivos, fiebre, decaimiento u otras alteraciones requieren atención. Mientras recibes orientación, evita el contacto con otros perros y observa cualquier cambio en su estado."},
        { title: "Recomendación de consulta veterinaria", text: "Ante cualquier signo de alerta o posible exposición, consulta al equipo veterinario lo antes posible. La información de este articulo es educativa, no reemplaza una valoración profesional y no debe usarse para automedicar a tu mascota."},
    ],
};


export function Article() {
    const { slug } = useParams();
    const article = articles.find((item) => item.slug === slug) ?? articles[0];
    const sections = articleSections[article.slug] ?? [];

    return(
        <article>
            <section className="bg-brand-navy">
                <div className="mx-auto grid max-w-300 items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:py-20">
                    <div>
                        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-white/60 hover:text-brand-orange">
                            <ChevronLeft size={15}/>
                            Volver al blog
                        </Link>
                        <p className="eyebrow mt-8">{article.category}</p>
                        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tighter text-white sm:text-5xl">{article.title}</h1>
                    </div>
                    <img src={article.image} alt={article.title} className="aspect-[0.9] w-full rounded-3xl object-cover" />
                </div>
            </section>
            <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8 lg:py-20">
                <p className="text-xl font-bold leading-8 text-brand-navy">{article.excerpt}</p>
                <div className="mt-10 space-y-8">
                    {
                        sections.map((section, index) => (
                            <section key={section.title} className={index === 0 ? "" : "border-t border-brand-navy/10 pt-7"}>
                                <p className="eyebrow">{section.title}</p>
                                <p className="mt-3 text-base leading-8 text-brand-navy/65">{section.text}</p>
                            </section>
                        ))}
                </div>
                <Link to="/agendar-cita" className="button-primary mt-10">
                    Agenda una valoración
                    <ArrowRight size={16}/>
                </Link>
            </div>
        </article>
    );
}


const reviews = [{ image: reviewOne, name: "Astrid Omaña"}, { image: reviewTwo, name: "Jennifer Vega Laiton"}, { image: reviewThree, name: "Maria Paula Escobar Loaiza"}, { image: reviewFour, name: "Diana Carolina"}];

export function Testimonials() {

    const [active, setActive] = useState(0);
    const review = reviews[active];

    return(
        <div>
            <section className="bg-brand-cream">
                <div className="mx-auto max-w-300 px-5 py-16 text-center sm:px-8 lg:py-20">
                    <p className="eyebrow">Historias que nos inspiran</p>
                    <h1 className="mt-4 font-display text-5xl font-extrabold tracking-[-0.06em] text-brand-navy sm:text-6xl">Lo que dicen las <span className="text-brand-orange">familias.</span></h1>
                    <p className="mx-auto mt-5 max-w-xl leading-7 text-brand-navy/60">
                        Reseñas reales compartidas por personas que confiaron en PetHome.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-300 items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-[0.72fr_1fr] lg:py-20">
                <div className="relative">
                    <img src={review.image} alt={`Reseña de ${review.name}`} className="mx-auto max-h-155 w-full max-w-107.5 rounded-3xl object-cover shadow-xl" />
                </div>
                <div>
                    <div className="flex gap-1 text-brand-orange">
                        {
                            Array.from({ length: 5}).map((_, index) =>
                                <Star key={index} size={17} fill="currentColor"/>
                            )
                        }
                    </div>
                    <p className="mt-4 text-xs font-extrabold uppercase tracking-wider text-brand-orange">Reseña verificada</p>
                    <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-navy">{review.name}</h2>
                    <p className="mt-5 text-base leading-7 text-brand-navy/60">Conoce la experiencia completa en la reseña compartida por nuestra comunidad PetHome.</p>
                    <div className="mt-8 flex items-center gap-3">
                        <button type="button" onClick={() => setActive((value) => (value - 1 + reviews.length) % reviews.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 hover:border-brand-orange hover:text-brand-orange" aria-label="Reseña Anterior">
                            <ChevronLeft size={18}/>
                        </button>
                        <span className="text-xs font-bold text-brand-navy/45">{String(active + 1).padStart(2, "0")} /{String(reviews.length).padStart(2, "0")}</span>
                        <button type="button" onClick={() => setActive((value) => (value +1 ) % reviews.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 hover:border-brand-orange hover:text-brand-orange" aria-label="Siguiente reseña">
                            <ChevronRight size={18}/>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}