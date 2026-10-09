import { Link, useParams } from "react-router-dom";
import { formatCOP, products } from "../data/products";
import { useCart } from "../components/site/CartContext";
import { useState } from "react";
import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import ProductCard from "../components/site/ProductCard";


export function ProductDetail() {
    const { id } = useParams();
    const product = products.find((item) => item.id === id) ?? products[0];
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState(1);


    return(
        <div className="mx-auto max-w-360 px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
            <Link to="/tienda" className="link-arrow text-sm">
                <ArrowLeft size={16}/>
                Volver a la tienda
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-20">
                <div className="overflow-hidden rounded-[28px] bg-brand-cream">
                    <img src={product.image} alt={product.name} className="aspect-square h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="eyebrow">{product.category} · catálogo demostrativo</p>
                    <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tighter text-brand-navy sm:text-5xl">{product.name}</h1>
                    <p className="mt-5 text-2xl font-extrabold text-brand-orange">{formatCOP(product.price)}</p>
                    <p className="mt-6 max-w-xl leading-7 text-brand-navy/60">{product.description}</p>
                    <div className="mt-7 border-y border-brand-navy/10 p-6">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-brand-navy">
                            Características
                        </p>
                        <ul className="mt-4 grid gap-3">
                            {
                                product.features.map((feature) => 
                                    <li key={feature} className="flex items-center gap-3 text-sm text-brand-navy/65">
                                        <Check size={16} className="text-brand-orange"/>
                                        {feature}
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <div className="flex h-12 items-center rounded-full border border-brand-navy/15">
                            <button type="button" onClick={() => setQuantity((value) => Math.max(1, value -1))} className="px-4 text-brand-navy/60 hover:text-brand-orange" aria-label="Reducir cantidad">
                                <Minus size={15}/>
                            </button>
                            <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                            <button type="button" onClick={() => setQuantity((value) => Math.min(product.stock, value +1))} className="px-4 text-brand-navy/60 hover:text-brand-orange" aria-label="Aumentar cantidad">
                                <Plus size={15}/>
                            </button>
                        </div>

                        <button type="button" onClick={() => addItem(product, quantity)} className="button-primary flex-1">
                            <ShoppingBag size={17}/>
                            Agregar al carrito
                        </button>
                    </div>

                    <p className="mt-4 text-xs font-semibold text-emerald-600">{product.stock} unidades disponibles</p>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="section-title text-3xl">
                    También te puede interesar
                </h2>
                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {products.filter((item) => item.id !== product.id).slice(0,3).map((item) => <ProductCard key={item.id} product={item}/>)}
                </div>
            </div>
        </div>
    );
}