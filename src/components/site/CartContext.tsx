import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { formatCOP, type Product } from "../../data/products";

export interface CartItem { product: Product; quantity: number; }
interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "pethome-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) ?? "[]") as CartItem[]; } catch { return []; }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { localStorage.setItem(storageKey, JSON.stringify(items)); }, [items]);
  const count = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const value = useMemo<CartContextValue>(() => ({
    items, count, subtotal, isOpen,
    addItem(product, quantity = 1) {
      setItems((current) => {
        const exists = current.find((item) => item.product.id === product.id);
        if (exists) return current.map((item) => item.product.id === product.id ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) } : item);
        return [...current, { product, quantity: Math.min(quantity, product.stock) }];
      });
      toast.success("Producto agregado al carrito", { description: product.name });
      setIsOpen(true);
    },
    removeItem(id) { setItems((current) => current.filter((item) => item.product.id !== id)); },
    updateQuantity(id, quantity) { setItems((current) => current.map((item) => item.product.id === id ? { ...item, quantity: Math.max(1, Math.min(quantity, item.product.stock)) } : item)); },
    clearCart() { setItems([]); },
    openCart() { setIsOpen(true); },
    closeCart() { setIsOpen(false); },
  }), [items, count, subtotal, isOpen]);

  return <CartContext.Provider value={value}>{children}<CartDrawer /></CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

function CartDrawer() {
  const { items, count, subtotal, isOpen, closeCart, updateQuantity, removeItem } = useCart();
  return <AnimatePresence>{isOpen && <>
    <motion.button aria-label="Cerrar carrito" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeCart} className="fixed inset-0 z-[60] bg-brand-navy/35 backdrop-blur-sm" />
    <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 300 }} className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-[430px] flex-col bg-white shadow-2xl" aria-label="Carrito de compras">
      <div className="flex items-center justify-between border-b border-brand-navy/10 px-6 py-5"><div><p className="eyebrow">PetHome</p><h2 className="mt-1 text-xl font-extrabold text-brand-navy">Tu carrito <span className="text-sm font-medium text-brand-navy/40">({count})</span></h2></div><button type="button" onClick={closeCart} aria-label="Cerrar carrito" className="rounded-full p-2 text-brand-navy/60 hover:bg-brand-cream hover:text-brand-navy"><X size={20} /></button></div>
      <div className="flex-1 overflow-y-auto px-6 py-5">{items.length === 0 ? <div className="flex h-full flex-col items-center justify-center text-center"><span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-cream text-brand-orange"><ShoppingBag size={27} /></span><h3 className="mt-5 text-lg font-extrabold text-brand-navy">Tu carrito está vacío</h3><p className="mt-2 max-w-xs text-sm leading-6 text-brand-navy/50">Explora nuestra tienda y encuentra algo especial para tu mascota.</p><Link to="/tienda" onClick={closeCart} className="button-secondary mt-6">Ir a la tienda <ArrowRight size={16} /></Link></div> : <div className="space-y-4">{items.map(({ product, quantity }) => <div key={product.id} className="flex gap-3 border-b border-brand-navy/10 pb-4"><img src={product.image} alt={product.name} className="h-20 w-16 rounded-xl object-cover" /><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><div><p className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{product.category}</p><h3 className="mt-1 text-sm font-bold text-brand-navy">{product.name}</h3></div><button type="button" onClick={() => removeItem(product.id)} aria-label={`Eliminar ${product.name}`} className="text-brand-navy/35 hover:text-red-500"><Trash2 size={16} /></button></div><div className="mt-3 flex items-center justify-between"><div className="flex items-center rounded-lg border border-brand-navy/10"><button type="button" onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1.5 text-brand-navy/60 hover:text-brand-orange" aria-label="Reducir cantidad"><Minus size={13} /></button><span className="w-7 text-center text-xs font-bold">{quantity}</span><button type="button" onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1.5 text-brand-navy/60 hover:text-brand-orange" aria-label="Aumentar cantidad"><Plus size={13} /></button></div><span className="text-sm font-extrabold text-brand-navy">{formatCOP(product.price * quantity)}</span></div></div></div>)}</div>}</div>
      {items.length > 0 && <div className="border-t border-brand-navy/10 px-6 py-5"><div className="flex items-center justify-between text-sm"><span className="text-brand-navy/55">Subtotal</span><strong className="text-lg text-brand-navy">{formatCOP(subtotal)}</strong></div><p className="mt-2 text-[11px] text-brand-navy/45">Envío y detalles de entrega se confirman al finalizar.</p><Link to="/pedido" onClick={closeCart} className="button-primary mt-5 w-full">Continuar pedido <ArrowRight size={17} /></Link><Link to="/carrito" onClick={closeCart} className="mt-3 flex justify-center text-xs font-bold text-brand-navy/60 hover:text-brand-orange">Ver carrito completo</Link></div>}
    </motion.aside>
  </>}</AnimatePresence>;
}