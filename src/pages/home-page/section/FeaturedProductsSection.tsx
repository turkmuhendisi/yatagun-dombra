import React, { useEffect, useRef, useState } from "react";

const FeaturedProducts = () => {
    // Öne çıkan ürünler
    const featuredProducts = [
        {id: 1, name: "Altay", image: "src/assets/products/dombras/dombra-temp.png", price: "5.000₺"},
        {id: 2, name: "Bozkır Nefesi", image: "src/assets/products/dombras/dombra-temp.png", price: "15.000₺"},
        {id: 3, name: "Turan", image: "src/assets/products/dombras/dombra-temp.png", price: "7.500₺"},
        {id: 4, name: "Ahşap Vazo", image: "src/assets/products/decorations/clock-temp.png", price: "1.500₺"},
        {id: 5, name: "Duvar Tablosu", image: "src/assets/products/decorations/clock-temp.png", price: "3.000₺"},
        {id: 6, name: "Kilim", image: "src/assets/products/decorations/clock-temp.png", price: "2.500₺"},
        {id: 7, name: "Dekoratif Ayna", image: "src/assets/products/decorations/clock-temp.png", price: "4.000₺"},
        /*{id: 8, name: "Duvar Tablosu", image: "src/assets/products/decorations/clock-temp.png", price: "3.000₺"},
        {id: 9, name: "Kilim", image: "src/assets/products/decorations/clock-temp.png", price: "2.500₺"},
        {id: 10, name: "Dekoratif Ayna", image: "src/assets/products/decorations/clock-temp.png", price: "4.000₺"},
        {id: 11, name: "Altay", image: "src/assets/products/dombras/dombra-temp.png", price: "5.000₺"},
        {id: 12, name: "Bozkır Nefesi", image: "src/assets/products/dombras/dombra-temp.png", price: "15.000₺"},
        {id: 13, name: "Turan", image: "src/assets/products/dombras/dombra-temp.png", price: "7.500₺"},
        {id: 14, name: "Ahşap Vazo", image: "src/assets/products/decorations/clock-temp.png", price: "1.500₺"},
        {id: 15, name: "Duvar Tablosu", image: "src/assets/products/decorations/clock-temp.png", price: "3.000₺"}*/
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isScrollable, setIsScrollable] = useState(false);

    // Check if scrolling is needed
    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const contentWidth = containerRef.current.scrollWidth;
            setIsScrollable(contentWidth > containerWidth);
        }
    }, [featuredProducts]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        container.style.cursor = "grabbing";
        const startX = e.pageX - container.offsetLeft;
        const scrollLeft = container.scrollLeft;

        const mouseMoveHandler = (moveEvent: MouseEvent) => {
            const x = moveEvent.pageX - container.offsetLeft;
            const walk = x - startX; // Slide distance
            container.scrollLeft = scrollLeft - walk;
        };

        const mouseUpHandler = () => {
            container.style.cursor = "grab";
            container.removeEventListener("mousemove", mouseMoveHandler);
            container.removeEventListener("mouseup", mouseUpHandler);
        };

        container.addEventListener("mousemove", mouseMoveHandler);
        container.addEventListener("mouseup", mouseUpHandler);
    };

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-10 text-left">Öne Çıkan Ürünler</h2>
            </div>

            <div
                ref={containerRef}
                className={`flex overflow-x-auto space-x-4 p-4 lg:px-8 custom-scrollbar ${
                    isScrollable ? "justify-start" : "lg:justify-center"
                }`}
                style={{
                    cursor: isScrollable ? "grab" : "auto",
                    userSelect: "none", // Disabled text selection
                    WebkitOverflowScrolling: "touch",
                    scrollBehavior: "smooth",
                }}
                onMouseDown={isScrollable ? handleMouseDown : undefined}
            >
                {featuredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden min-w-[200px] max-w-[200px]"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                            draggable={false} // Görsel sürüklenemez
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-500 my-2">{product.price}</p>
                            <button className="text-lg bg-gray-100 w-full rounded-lg py-2">Ürüne Git</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
