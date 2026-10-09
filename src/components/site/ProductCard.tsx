import { Link } from "react-router-dom";
import { formatCOP, type Product } from "../../data/products";
import { useCart } from "./CartContext";
import { ArrowUpRight, ShoppingBag } from "lucide-react";


export default function ProductCard({product} : {product: Product}) {
    const {addItem} = useCart();
    return(
        <article className="group overflow-hidden rounded-[22px] border border-brand-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/35 hover:shadow-xl hover:shadow-brand-navy/10">
            <Link to={`/tienda/producto/${product.id}`} className="relative block h-60 overflow-hidden bg-brand-cream">
                <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-brand-orange">{product.category}</span>
                {product.featured && <span className="absolute right-4 top-4 rounded-full bg-brand-navy px-3 py-1.5 text-[10px] font-extrabold text-white">Destacado</span>}
            </Link>
            <div className="p-5">
                <Link to={`/tienda/producto/${product.id}`}>
                    <h2 className="font-display text-lg font-extrabold leading-tight text-brand-navy transition-colors hover:text-brand-orange">{product.name}</h2>
                </Link>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-brand-navy/50">{product.description}</p>
                <div className="mt-5 flex items-end justify-between gap-3">
                    <div>
                        <strong className="text-lg font-extrabold text-brand-navy">{formatCOP(product.price)}</strong>
                        {product.compareAtPrice && <span className="ml-2 text-xs text-brand-navy/35 line-through">{formatCOP(product.compareAtPrice)}</span>}
                        <p className="mt-1 text-[11px] font-semibold text-emerald-600">{product.stock > 0 ? `${product.stock} disponibles` : "Agotado"}</p>
                    </div>
                    <button type="button" disabled={product.stock === 0} onClick={() => addItem(product)} aria-label={`Agregar ${product.name} al carrito`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cream text-brand-orange transition-colors hover:bg-brand-orange hover:text-white disabled:cursor-not-allowed disabled:opacity-40">
                        <ShoppingBag size={17}/>
                    </button>
                </div>
                <Link to={`/tienda/producto/${product.id}`} className="mt-4 flex items-center gap-1 text-xs font-extrabold text-brand-navy/55 hover:text-brand-orange">
                    Ver producto
                    <ArrowUpRight size={14}/>
                </Link>
            </div>
        </article>
    );
}