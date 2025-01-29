import { useState } from "react";

const ProductSection = () => {
    type Product = {
        id: number;
        name: string;
        image: string;
        price: string;
    };

    const mockProducts: Record<string, Product[]> = {
        dombras: [
            {id: 1, name: "Bozkır", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-1-AJdIFPNKVkAHgrLqMMrDm5Td1eJumI.jpg", price: "9.000₺"},
            {id: 2, name: "Bozkır Nefesi", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-1-zW42CGebmBqfrOiLQj9K40ypvWdMiG.jpg", price: "13.500₺"},
            {id: 3, name: "Turan", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-1-okwONo9n0LGskYO9RV3QeIeoxuyykd.jpg", price: "6.500₺"},
            {id: 4, name: "Gök", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-1-N4G0FXpZTTuBw6fOHhO70itWBS1ykt.jpg", price: "10.500₺"},
            {id: 5, name: "Altay", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra5/d5-1-jn7lpvi1FL7Uf6Cf5KqxLk9c47TcTm.jpg", price: "6.500₺"},
        ],
        dekorasyon: [
            { id: 1, name: "Bozkurt Duvar Saati Siyah", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock1/c1-1-HWnm5bZ1lwfA0uFVDETjpR5MsRIsos.jpg", price: "1.500₺" },
            { id: 2, name: "Bozkurt Duvar Saati Kahverengi", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock2/c2-1-ByIRCtKzAbyMxEYKYybrcCB4O2Cav9.jpg", price: "3.000₺" },
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
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4 px-2"
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden w-auto flex flex-col justify-between h-full"
                        >
                            <div className="w-full aspect-ratio">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full aspect-[3/4] object-cover"
                                />
                            </div>
                            <div className="p-4 text-center flex-grow">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-500 my-2">{product.price}</p>
                            </div>
                            <div className="p-4">
                                <button className="text-lg bg-gray-100 w-full rounded-lg py-2">Ürüne Git</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
