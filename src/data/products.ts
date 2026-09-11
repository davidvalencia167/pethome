
import storeImage from "../assets/IMG_2997.jpg"
import puppyImage from "../assets/IMG_3010.jpg"
import pomeranianImage from "../assets/IMG_3004.jpg"
import catImage from "../assets/IMG_3008.jpg"

export type ProductCategory = "Alimentos" | "Snacks" | "Higiene" | "Salud" | "Accesorios" | "Juguetes";

export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    compareAtPrice?: number;
    category: ProductCategory;
    image: string;
    stock: number;
    featured: boolean;
    features: string[];
}

export const products: Product[] = [
    { id: "demo-alimento", name: "Alimento balanceado para perro", slug: "alimento-balanceado-perro", description: "Producto de demostración para el catálogo PetHome. Reemplazable por referencias disponibles en tienda.", price: 85000, compareAtPrice: 92000, category: "Alimentos", image: storeImage, stock: 12, featured: true, features: ["Referencia demostrativa", "Presentación por confirmar", "Disponibilidad sujeta a inventario"] },
    { id: "demo-snacks", name: "Snacks para consentir", slug: "snacks-para-consentir", description: "Producto de demostración para el catálogo PetHome. Reemplazable por referencias disponibles en tienda.", price: 28000, category: "Snacks", image: pomeranianImage, stock: 18, featured: true, features: ["Referencia demostrativa", "Ingredientes por confirmar", "Disponibilidad sujeta a inventario"] },
    { id: "demo-higiene", name: "Cuidado e higiene", slug: "cuidado-e-higiene", description: "Producto de demostración para el catálogo PetHome. Reemplazable por referencias disponibles en tienda.", price: 42000, category: "Higiene", image: puppyImage, stock: 8, featured: true, features: ["Referencia demostrativa", "Contenido por confirmar", "Disponibilidad sujeta a inventario"] },
    { id: "demo-salud", name: "Cuidado preventivo", slug: "cuidado-preventivo", description: "Producto de demostración para el catálogo PetHome. Reemplazable por referencias disponibles en tienda.", price: 35000, category: "Salud", image: catImage, stock: 6, featured: false, features: ["Referencia demostrativa", "Modo de uso por confirmar", "Consulta antes de usar"] },
    { id: "demo-accesorio", name: "Accesorio para mascota", slug: "accesorio-mascota", description: "Producto de demostración para el catálogo PetHome. Reemplazable por referencias disponibles en tienda.", price: 55000, category: "Accesorios", image: storeImage, stock: 10, featured: false, features: ["Referencia demostrativa", "Tamaño por confirmar", "Disponibilidad sujeta a inventario"] },
    { id: "demo-juguete", name: "Juguete de estimulación", slug: "juguete-estimulacion", description: "Producto de demostración para el catálogo PetHome. Reemplazable por referencias disponibles en tienda.", price: 32000, category: "Juguetes", image: pomeranianImage, stock: 9, featured: false, features: ["Referencia demostrativa", "Material por confirmar", "Disponibilidad sujeta a inventario"] },
];

export const formatCOP = (value: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);