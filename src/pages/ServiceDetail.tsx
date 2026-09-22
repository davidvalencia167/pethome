

import serviceImage from "../assets/IMG_3010.jpg";
import ultrasound from "../assets/Ecografía.JPG";
import laboratory from "../assets/Laboratorio.JPG";
import radiography from "../assets/Radiografía.JPG";
import specializedSurgery from "../assets/Cirugia especializada.JPG";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, HeartPulse } from "lucide-react";


type ServiceDetailContent = {
    title: string;
    description: string;
    intro: string;
    image: string;
    highlights: Array<{title: string; text: string}>;
    points: string[];
};

const serviceDetails: Record<string, ServiceDetailContent> = {
    "atención-médica-24-horas" : {
        title: "Atención Médica 24 horas",
        description: "Orientación veterinaria para situaciones que requieren atención oportuna.",
        intro: "Cuando tu mascota presenta un cambio inesperado, contar con una primera orientación puede ayudarte a tomar decisiones con mayor claridad. En PetHome puedes solicitar atención para conocer el estado actual de tu mascota y recibir indicaciones segun el caso.",
        image: serviceImage,
        highlights: [
            { title: "Atención oportuna", text: "Valoramos la situación de tu mascota."},
            { title: "Orientación clara", text: "Te explicamos los siguientes pasos de forma comprensible."},
            { title: "Cuidado cercano", text: "Acompañamos a la familia durante el proceso."},
        ],
        points: ["Cambios repentinos en el comportamiento", "Malestar que requiere una valoración", "Orientación para decidir el siguiente paso"],
    },

    "ecografía": {
        title: "Ecografia",
        description: "Imágenes diagnosticas que ayudan a observar mejor el estado interno de tu mascota.",
        intro: "La ecografía es una herramienta de apoyo para complementar la valoración veterinaria. Permite observar estructuras internas y aportar información útil para orientar el cuidado de cada paciente.",
        image: ultrasound,
        highlights: [
            { title: "Apoyo diagnóstico", text: "Complementa la información de la consulta veterinaria." },
            { title: "Observación interna", text: "Ayuda a conocer mejor lo que ocurre dentro del organismo."},
            { title: "Valoración individual", text: "Se indica según las necesidades de cada mascota."},
        ],
        points: ["Estudios solicitados durante una valoración", "Seguimiento de hallazgos clínicos", "Información complementaria para orientar el cuidado"],
    },

    "laboratorio": {
        title: "Laboratorio",
        description: "Apoyo diagnóstico para tomar decisiones con información precisa.",
        intro: "Las pruebas de laboratorio pueden complementar la valoración clínica y aportar información sobre el estado general de una mascota. El equipo te orientará sobre los estudios que correspondan a cada caso.",
        image: laboratory,
        highlights: [
            { title: "Información precisa", text: "Datos que ayudan a complementar la valoración"},
            { title: "Apoyo al diagnóstico", text: "Resultados que orientan las decisiones veterinarias."},
            { title: "Según cada caso", text: "Los estudios se definen de acuerdo con la necesidad del paciente."}
        ],
        points: ["Pruebas solicitadas durante una consulta", "Apoyo para revisar el estado general", "Información para orientar el seguimiento"],
    },

    "radiografía": {
        title: "Radiografía",
        description: "Imágenes que complementan la evaluación de estructuras internas.",
        intro: "La radiografía es una herramienta de apoyo para observar determinadas estructuras internas y complementar la información obtenida durante la valoración veterinaria.",
        image: radiography,
        highlights: [
            { title: "Imagen diagnóstica", text: "Aporta información visual para complementar la consulta."},
            { title: "Valoración orientada", text: "Se realiza de acuerdo con la necesidad de cada paciente."},
            { title: "Acompañamiento", text: "Recibes orientación sobre el proceso de atención."},
        ],
        points: ["Valoraciones que requieren imágenes internas", "Apoyo para revisar estructuras específicas", "Seguimiento indicado por el equipo veterinario."],
    },

    "cirugía-especializada": {
        title: "Cirugía especializada",
        description: "Procedimientos quirúrgicos acompañados por una valoración integral.",
        intro: "Cada procedimiento quirúrgico requiere una valoración previa y una orientación clara para la familia. En PetHome puedes conocer el proceso indicado para tu mascota y resolver tus dudas antes de tomar una decisión.",
        image: specializedSurgery,
        highlights: [
            { title: "Valoración previa", text: "Revisamos las necesidades del paciente antes del procedimiento."},
            { title: "Orientación a la familia", text: "Explicamos el proceso y las recomendaciones correspondientes."},
            { title: "Seguimiento integral", text: "Acompañamos las indicaciones posteriores a la atención."},
        ],
        points: ["Procedimientos definidos según cada paciente", "Información clara antes de la atención", "Recomendaciones para el cuidado posterior"],
    },
}

export default function ServiceDetail() {

    const { slug } = useParams();
    const service = serviceDetails[slug ?? ""]

    if (!service) {
        return (
            <section className="bg-brand-cream px-5 py-20 text-center">
                <h1 className="font-display text-4xl font-extrabold text-brand-navy">Servicio no encontrado</h1>
                <Link to="/servicios" className="button-primary mt-8">
                    Volver a servicios
                    <ArrowLeft size={16}/>
                </Link>
            </section>
        );
    }

    return(
        <div>
            <section className="bg-brand-cream">
                <div className="mx-auto grid max-w-300 items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:py-20">
                    <div>
                        <Link to="/servicios" className="link-arrow text-sm">
                            <ArrowLeft size={16}/>
                            Volver a servicios
                        </Link>
                        <p className="eyebrow mt-8">PetHome Clínica Veterinaria</p>
                        <h1 className="mt-4 font-display text-5xl font-extrabold leading-none tracking-[-0.06em] text-brand-navy sm:text-6xl">{service.title}</h1>
                        <p className="mt-6 max-w-lg leading-7 text-brand-navy/60">{service.description}</p>
                        <Link to="/agendar-cita" className="button-primary mt-8">
                            Solicitar valoración
                            <ArrowRight size={16}/>
                        </Link>
                    </div>
                    <img src={service.image} alt={service.title} className="aspect-[1.1] w-full rounded-[26px] object-cover" />
                </div>
            </section>

            <section className="mx-auto max-w-250 px-5 py-14 sm:px-8 lg:py-20">
                <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-start">
                    <div>
                        <p className="eyebrow">Sobre este servicio</p>
                        <h2 className="section-title mt-3">
                            Información pensada para <span className="text-brand-orange">orientarte.</span>
                        </h2>
                        <p className="mt-5 text-base leading-7 text-brand-navy/60">{service.intro}</p>
                        <div className="mt-8 space-y-3">
                            {
                                service.points.map((point) =>
                                    <div key={point} className="flex items-start gap-3 text-sm font-bold text-brand-navy">
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-orange">
                                            <Check size={14} strokeWidth={3}/>
                                        </span>
                                        {point}
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {
                            service.highlights.map(({title, text}) =>
                                <div key={title} className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
                                    <HeartPulse className="text-brand-orange" size={23}/>
                                    <h2 className="mt-5 font-extrabold text-brand-navy">{title}</h2>
                                    <p className="mt-2 text-sm leading-6 text-brand-navy/55">{text}</p>
                                </div>
                            )}
                    </div>
                </div>

                <div className="mt-14 rounded-3xl bg-brand-navy p-7 text-white sm:p-10">
                    <p className="eyebrow text-brand-orange">¿Tienes preguntas?</p>
                    <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Hablemos de las necesidades de tu mascota.</h2>
                    <p className="mt-4 max-w-2xl leading-7 text-white/60">Solicita una valoración y recibe orientación sobre este servicio de acuerdo con el caso de tu compañero.</p>
                    <Link to="/agendar-cita" className="button-primary mt-7">
                        Agendar una valoración
                        <ArrowRight size={16}/>
                    </Link>
                </div>
            </section>
        </div>
    );
}