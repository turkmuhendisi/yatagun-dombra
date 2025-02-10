import { useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { products } from "../../../components/products";
import { Product } from "../../../components/types";

const ProductSection = () => {

    const groupProductsByCategory = (products: Product[]): Record<string, Product[]> => {
        return products.reduce((acc, product) => {
            if (!acc[product.category]) {
                acc[product.category] = [];
            }
            acc[product.category].push(product);
            return acc;
        }, {} as Record<string, Product[]>);
    };

    const mockProducts = groupProductsByCategory(products);

    // Selected category (dynamic)
    const [selectedCategory, setSelectedCategory] = useState<Product["category"]>("dombras");

    // Filtered products as selected category
    const filteredProducts = mockProducts[selectedCategory] || [];

    return (
        <section className="bg-gray-100 py-16 min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-10 text-left">Ürünler</h2>
            </div>

            {/* Categories */}
            <div className="flex space-x-4 container mx-auto px-4 my-8">
                {Object.keys(mockProducts).map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category as Product["category"])}
                        className={`px-4 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition ${
                            selectedCategory === category ? "bg-black text-white" : ""
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {/* Products */}
            <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4 px-2">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-600">Bu kategoride ürün bulunmamaktadır.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
