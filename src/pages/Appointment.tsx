import { ArrowRight, CalendarDays, Check, Clock3, MapPin } from "lucide-react";
import { useState } from "react";
import type { SubmitEvent } from "react";
import { Link } from "react-router-dom";
import { serviceNames } from "../data/site";


export default function Appointment() {
    const [sent, setSent] = useState(false);
    const submit = (event: SubmitEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true);};
    if(sent) return
        <div className="mx-auto flex min-h-150 max-w-175 flex-col items-center justify-center px-5 py-20 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Check size={30}/>
            </span>
            <p className="eyebrow mt-7">Solicitud enviada</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold tracking-[-0.06em] text-brand-navy">
                Gracias por confiar en PetHome
            </h1>
            <p className="mt-5 max-w-md leading-7 text-brand-navy/60">
                Recibimos tus datos de demostración. Nuestro equipo confirmará la disponibilidad
                por los canales oficiales.
            </p>
            <Link to="/" className="button-secondary mt-8">
                Volver al inicio
                <ArrowRight size={16}/>
            </Link>
        </div>

    return <div className="bg-brand-cream">
        <div className="mx-auto grid max-w-360 gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg: lg:py-20">
            <div className="lg:pt-8">
                <p className="eyebrow">Agenda tu visita</p>
                <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] text-brand-navy sm:text-6xl">Hablemos del bienestar de tu mascota.</h1>
                <p className="mt-6 max-w-md leading-7 text-brand-navy/60">Cuéntanos un poco sobre tu mascota y el motivo de tu visita. Esta solicitud no confirma disponibilidad real.</p>
                <div className="mt-9 space-y-4 text-sm text-brand-navy/65">
                    <p className="flex gap-3">
                        <CalendarDays className="text-brand-orange" size={19}/>
                        Solicitud de cita veterinaria
                    </p>
                    <p className="flex gap-3">
                        <Clock3 className="text-brand-orange" size={19}/>
                        Horarios: 24 hrs
                    </p>
                    <p className="flex gap-3">
                        <MapPin className="text-brand-orange" size={19}/>
                        Cúcuta, Norte de Santander
                    </p>
                </div>
            </div>
            <form onSubmit={submit} className="rounded-[26px] bg-white p-6 shadow-xl shadow-brand-navy/5 sm:p-9">
                <fieldset>
                    <legend className="text-lg font-extrabold text-brand-navy">Datos del propietario</legend>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {[["Nombre completo", "ownerName", "Tu nombre"], ["Teléfono", "phone", "300 000 0000"], ["Email", "email", "correo@ejemplo.com"]].map(([label, name, placeholder]) =>
                            <label key={name} className="text-xs font-bold text-brand-navy sm:last:col-span-2">
                                {label}
                                <input required name={name} placeholder={placeholder} type={name === "email" ? "email": "text"} className="mt-2 h-11 w-full rounded-xl border border-brand-navy/15 px-4 text-sm font-normal outline-none focus:border-brand-orange" />
                            </label>
                        )}
                    </div>
                </fieldset>
                <fieldset className="mt-8 border-t border-brand-navy/10 pt-7">
                    <legend className="text-lg font-extrabold text-brand-navy">Datos de la mascota</legend>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {[["Nombre", "petName", "Nombre de tu mascota"], ["Raza", "breed", "Raza"], ["Edad", "age", "Edad"]].map(([label, name, placeholder]) =>
                            <label key={name} className="text-xs font-bold text-brand-navy">
                                {label}
                                <input required name={name} placeholder={placeholder} className="mt-2 h-11 w-full rounded-xl border border-brand-navy/15 px-4 text-sm font-normal outline-none focus:border-brand-orange" />
                            </label>
                        )}
                        <label className="text-xs font-bold text-brand-navy">
                            Especie
                            <select required name="species" className="mt-2 h-11 w-full rounded-xl border border-brand-navy/15 bg-white px-4 text-sm font-normal outline-none focus:border-brand-orange">
                                <option value="">Selecciona</option>
                                <option>Perro</option>
                                <option>Gato</option>
                                <option>Otra</option>
                            </select>
                        </label>
                    </div>
                </fieldset>

                <fieldset className="mt-8 border-t border-brand-navy/10 pt-7">
                        <legend className="text-lg font-extrabold text-brand-navy">Datos de la cita</legend>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <label className="text-xs font-bold text-brand-navy">
                                Servicio
                                <select required name="service" className="mt-2 h-11 w-full rounded-xl border border-brand-navy/15 bg-white px-4 text-sm font-normal outline-none focus:border-brand-orange">
                                    <option value="">Selecciona un servicio</option>
                                    {
                                        serviceNames.map((service) =>
                                            <option key={service}>{service}</option>
                                        )}
                                </select>
                            </label>

                            <label className="text-xs font-bold text-brand-navy">
                                Fecha
                                <input required name="date" type="date" className="mt-2 h-11 w-full rounded-xl border border-brand-navy/15 px-4 text-sm font-normal outline-none focus:border-brand-orange" />
                            </label>
                            <label className="text-xs font-bold text-brand-navy">
                                Hora
                                <input required name="time" type="time" className="mt-2 h-11 w-full rounded-xl border border-brand-navy/15 px-4 text-sm font-normal outline-none focus:border-brand-orange" />
                            </label>
                        </div>

                        <label  className="mt-4 block text-xs font-bold text-brand-navy">
                            Motivo de consulta
                            <textarea required name="reason" placeholder="¿Cómo podemos ayudarte?" className="mt-2 min-h-24 w-full resize-none rounded-xl border border-brand-navy/15 p-4 text-sm font-normal outline-none focus:border-brand-orange"/>
                            </label>
                </fieldset>
                <button type="submit" className="button-primary mt-7 w-full sm:w-auto">
                    Solicitar cita
                    <ArrowRight size={16}/>
                </button>
            </form>
        </div>
    </div>;
}