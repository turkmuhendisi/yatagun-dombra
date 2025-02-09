import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, useMemo } from "react";
import FeaturedProductCard from "../../../components/FeaturedProductCard";
const FeaturedProducts = () => {
    // Öne çıkan ürünler (useMemo ile optimize edildi)
    const featuredProducts = useMemo(() => [
        { id: 1, name: "Bozkır", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-1-AJdIFPNKVkAHgrLqMMrDm5Td1eJumI.jpg", price: "8.250₺" },
        { id: 2, name: "Bozkır Nefesi", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-1-zW42CGebmBqfrOiLQj9K40ypvWdMiG.jpg", price: "12.750₺" },
        { id: 3, name: "Tuna", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-1-okwONo9n0LGskYO9RV3QeIeoxuyykd.jpg", price: "5.750₺" },
        { id: 4, name: "Gök", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-1-N4G0FXpZTTuBw6fOHhO70itWBS1ykt.jpg", price: "9.750₺" },
        { id: 5, name: "Altay", image: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra5/d5-1-jn7lpvi1FL7Uf6Cf5KqxLk9c47TcTm.jpg", price: "5.750₺" },
    ], []);
    const containerRef = useRef(null);
    const [isScrollable, setIsScrollable] = useState(false);
    // Kaydırma ihtiyacını kontrol et
    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const contentWidth = containerRef.current.scrollWidth;
            setIsScrollable(contentWidth > containerWidth);
        }
    }, [featuredProducts]); // 🔹 useEffect içinde bağımlılık olarak artık değişmeyecek bir değer var!
    return (_jsxs("section", { className: "bg-white py-16 h-screen", children: [_jsx("div", { className: "container mx-auto px-4", children: _jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-black mb-10 text-center", children: "\u00D6ne \u00C7\u0131kan \u00DCr\u00FCnler" }) }), _jsx("div", { ref: containerRef, className: `flex overflow-x-auto space-x-4 p-4 lg:px-8 custom-scrollbar ${isScrollable ? "justify-start" : "lg:justify-center"}`, style: {
                    cursor: isScrollable ? "grab" : "auto",
                    userSelect: "none",
                    WebkitOverflowScrolling: "touch",
                    scrollBehavior: "smooth",
                }, children: featuredProducts.map((product) => (_jsx(FeaturedProductCard, { product: product }, product.id))) })] }));
};
export default FeaturedProducts;
