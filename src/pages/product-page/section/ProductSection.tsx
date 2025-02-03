import { useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { Product } from "../../../components/types";

const ProductSection = () => {

    const mockProducts: Record<string, Product[]> = {
        dombras: [
            {id: 1, name: "Bozkır", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-1-AJdIFPNKVkAHgrLqMMrDm5Td1eJumI.jpg", price: "8.250₺"},
            {id: 2, name: "Bozkır Nefesi", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-1-zW42CGebmBqfrOiLQj9K40ypvWdMiG.jpg", price: "12.750₺"},
            {id: 3, name: "Tuna", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-1-okwONo9n0LGskYO9RV3QeIeoxuyykd.jpg", price: "5.750₺"},
            {id: 4, name: "Gök", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-1-N4G0FXpZTTuBw6fOHhO70itWBS1ykt.jpg", price: "9.750₺"},
            {id: 5, name: "Altay", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra5/d5-1-jn7lpvi1FL7Uf6Cf5KqxLk9c47TcTm.jpg", price: "5.750₺"},
        ],
        dekorasyon: [
            { id: 6, name: "Bozkurt Duvar Saati Siyah", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock1/c1-1-HWnm5bZ1lwfA0uFVDETjpR5MsRIsos.jpg", price: "750₺" },
            { id: 7, name: "Bozkurt Duvar Saati Kahverengi", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock2/c2-1-ByIRCtKzAbyMxEYKYybrcCB4O2Cav9.jpg", price: "750₺" },
            { id: 8, name: "Şahlanış Siyah", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock3/c3-1-05FVkMhLHRhVcCwCogLCdfjKn9MyP1.jpg", price: "750₺" },
            { id: 9, name: "Şahin Kırmızı", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock4/c4-1-jqHWVO0eUAkC6ZoQNdkw4c4XfsWj42.jpg", price: "750₺" },
        ],
    };


    const [selectedCategory, setSelectedCategory] = useState<"dombras" | "dekorasyon">("dombras");

    // Seçilen kategorinin ürünlerini filtreleme
    const products = mockProducts[selectedCategory];

    return (
        <section className="bg-gray-100 py-16 min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-10 text-left">Ürünler</h2>
            </div>

            {/* Kategoriler */}
            <div className="flex space-x-4 container mx-auto px-4 my-8">
                <button
                    onClick={() => setSelectedCategory("dombras")}
                    className={`px-4 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition ${
                        selectedCategory === "dombras" ? "bg-black text-white" : ""
                    }`}
                >
                    Dombra
                </button>
                <button
                    onClick={() => setSelectedCategory("dekorasyon")}
                    className={`px-4 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition ${
                        selectedCategory === "dekorasyon" ? "bg-black text-white" : ""
                    }`}
                >
                    Dekorasyon
                </button>
            </div>

            {/* Ürünler */}
            <div className="container mx-auto">
                <div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4 px-2">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
