import { useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { products } from "../../../components/products";
import { Product } from "../../../components/Product";

const ProductSection = () => {
    const groupProductsByCategory = (products: Product[]): Record<string, Product[]> => {
        return products.reduce((acc, product) => {
            if (!acc[product.category]) {
                acc[product.category] = [];
            }
            if (product.isStock) {
                acc[product.category].unshift(product);
            } else {
                acc[product.category].push(product);
            }
            return acc;
        }, {} as Record<string, Product[]>);
    };

    const mockProducts = groupProductsByCategory(products);
    const [selectedCategory, setSelectedCategory] = useState<Product["category"]>("dombra");
    const filteredProducts = mockProducts[selectedCategory] || [];

    return (
        <section className="py-12 sm:py-16 md:py-20 min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                <div className="text-center space-y-6">
                    <div className="relative inline-block">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C1810] leading-tight">
                            Ürünler
                        </h1>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full"></div>
                    </div>
                    <p className="text-lg sm:text-xl text-[#5C4D44] max-w-2xl mx-auto leading-relaxed">
                        Kaliteli ve güvenilir ürünlerimizi keşfedin. Her bir enstrüman, özenle seçilmiş malzemeler ve 
                        usta işçiliği ile hazırlanmıştır.
                    </p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                <div className="flex justify-center">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-white/20">
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(mockProducts).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category as Product["category"])}
                                    className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ${
                                        selectedCategory === category 
                                        ? "bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white shadow-lg shadow-[#2C1810]/25 transform scale-105" 
                                        : "bg-white/50 text-[#2C1810] hover:bg-white/80 hover:shadow-md hover:transform hover:scale-105"
                                    }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                        {filteredProducts.map((product, index) => (
                            <div 
                                key={product.id} 
                                className="animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 sm:py-24">
                        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-12 sm:p-16 shadow-xl border border-white/20 text-center max-w-md mx-auto">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#2C1810]/10 to-[#1A0F0A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-[#2C1810]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#2C1810] mb-3">
                                Ürün Bulunamadı
                            </h3>
                            <p className="text-base sm:text-lg text-[#5C4D44] mb-2">
                                Bu kategoride henüz ürün bulunmamaktadır.
                            </p>
                            <p className="text-sm text-[#8B7355]">
                                Lütfen başka bir kategori seçin.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductSection;
