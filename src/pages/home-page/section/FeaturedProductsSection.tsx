import React, { useEffect, useRef, useState } from "react";

const FeaturedProducts = () => {
    // Öne çıkan ürünler
    const featuredProducts = [
        {id: 1, name: "Bozkır", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-1-AJdIFPNKVkAHgrLqMMrDm5Td1eJumI.jpg", price: "9.000₺"},
        {id: 2, name: "Bozkır Nefesi", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-1-zW42CGebmBqfrOiLQj9K40ypvWdMiG.jpg", price: "13.500₺"},
        {id: 3, name: "Turan", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-1-okwONo9n0LGskYO9RV3QeIeoxuyykd.jpg", price: "6.500₺"},
        {id: 4, name: "Gök", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-1-N4G0FXpZTTuBw6fOHhO70itWBS1ykt.jpg", price: "10.500₺"},
        {id: 5, name: "Altay", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra5/d5-1-jn7lpvi1FL7Uf6Cf5KqxLk9c47TcTm.jpg", price: "6.500₺"},
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
        <section className="bg-white py-16 h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-10 text-center">Öne Çıkan Ürünler</h2>
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
                        className="bg-white shadow-md rounded-lg overflow-hidden min-w-[300px] max-w-[300px]"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full aspect-[3/4] object-cover"
                            draggable={false} // Image's not draggable
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
