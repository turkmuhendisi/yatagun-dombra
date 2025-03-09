import React, { useEffect, useRef, useState, useMemo } from "react";
import { Product } from "../../../components/types";
import FeaturedProductCard from "../../../components/FeaturedProductCard";
import {products} from "../../../components/products";

const FeaturedProducts: React.FC = () => {
    const featuredProducts: Product[] = useMemo(() => {
        return products.filter((product) => product.isFeatured && product.isStock);
    }, []);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isScrollable, setIsScrollable] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const contentWidth = containerRef.current.scrollWidth;
            setIsScrollable(contentWidth > containerWidth);
        }
    }, [featuredProducts]);

    return (
        <section className="bg-white py-16 h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-10 text-center">Öne Çıkan Ürünler</h2>
            </div>

            {/* Ürünler için yatay kaydırmalı container */}
            <div
                ref={containerRef}
                className={`flex overflow-x-auto space-x-4 p-4 lg:px-8 custom-scrollbar ${
                    isScrollable ? "justify-start" : "lg:justify-center"
                }`}
                style={{
                    cursor: isScrollable ? "grab" : "auto",
                    userSelect: "none",
                    WebkitOverflowScrolling: "touch",
                    scrollBehavior: "smooth",
                }}
            >
                {featuredProducts.map((product) => (
                    <FeaturedProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
