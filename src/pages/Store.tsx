import { useMemo, useState } from "react";
import { products, type ProductCategory } from "../data/products";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import ProductCard from "../components/site/ProductCard";
const categories: Array<ProductCategory | "Todos" > = ["Todos", "Alimentos", "Snacks", "Higiene", "Salud", "Accesorios", "Juguetes"];

export default function Store() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<ProductCategory | "Todos">("Todos");
    const [sort, setSort] = useState("featured");
    const filtered = useMemo(() => products.filter((product) => (category === "Todos" || product.category === category) && `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase())).sort((a,b) => sort === "price-low" ? a.price - b.price : sort === "price-high" ? b.price - a.price : Number(b.featured) - Number(a.featured)), [category, query, sort]);

    return(
        <div>
            <section className="bg-brand-navy">
                <div className="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                    <motion.div initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}}>
                        <p className="eyebrow text-brand-orange">PetHome · Pet shop</p>
                        <h1 className="mt-4 max-w-162.5 font-display text-5xl font-extrabold leading-none tracking-[-0.06em] text-white sm:text-6xl">
                            Todo para cuidar, <br /> <span className="text-brand-orange">consentir y proteger.</span>
                        </h1>
                        <p className="mt-5 max-w-135 text-base leading-7 text-white/60">
                            Explora productos y categorías pensados para acompañar el cuidado, la alimentación y el bienestar de tu mascota.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto max-w-360 px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {
                            categories.map((item) =>
                                <button key={item} type="button" onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-extrabold transition-colors ${category === item ? "bg-brand-navy text-white" : "bg-brand-cream text-brand-navy/60 hover:text-brand-orange"}`}>{item}</button>
                            )
                        }
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <label className="relative block">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/40"/>
                            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar productos" className="h-11 w-full rounded-full border border-brand-navy/15 bg-white pl-10 pr-10 text-sm outline-none focus:border-brand-orange sm:w-64"/>
                            {
                            query && <button type="button" onClick={() => setQuery("")} aria-label="Limpiar búsqueda " className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-navy/40">
                                <X size={15}/>
                            </button>
                            }
                        </label>
                        <label className="flex h-11 items-center gap-2 rounded-full border border-brand-navy/15 px-4 text-xs font-bold text-brand-navy">
                            <SlidersHorizontal size={15} className="text-brand-orange"/>
                            <select value={sort} onChange={(event) => setSort(event.target.value)} className="bg-transparent outline-none">
                                <option value="featured">Destacados</option>
                                <option value="price-low">Precio menor</option>
                                <option value="price-high">Precio mayor</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="mt-10 flex items-center justify-between">
                    <p className="text-sm text-brand-navy/55">
                        {filtered.length} productos disponibles
                    </p>
                    <span className="hidden items-center gap-2 text-xs font-bold text-brand-orange sm:flex">
                        <Sparkles size={15}/>
                        Catálogo demostrativo
                    </span>
                </div>
                {filtered.length > 0 ? <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product}/>)}</div> : <div className="rounded-2xl border border-dashed border-brand-navy/15 py-20 text-center">
                    <h2 className="text-xl font-extrabold text-brand-navy">No encontramos productos</h2>
                    <p className="mt-2 text-sm text-brand-navy/50">Prueba con otra búsqueda o categoría</p>
                </div>} 
            </section>
        </div>
    );
}