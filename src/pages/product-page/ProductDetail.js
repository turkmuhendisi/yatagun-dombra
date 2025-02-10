import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../components/products";
import VideoThumbnail from "../../components/VideoThumbnail";
const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id)) ?? {
        id: 0,
        name: "Bilinmeyen Ürün",
        price: "Bilinmiyor",
        description: "Ürün bilgileri bulunamadı.",
        features: [],
        metarial: "Bilinmiyor",
        images: [""],
        video: "",
        videoThumbnail: ""
    };
    const [selectedMedia, setSelectedMedia] = useState(product.images[0] || null);
    const [isVideo, setIsVideo] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
    const handleWhatsAppRedirect = () => {
        if (!product)
            return;
        const message = encodeURIComponent(`Merhaba, bu ürünü satın almak istiyorum:\n\n*${product.name}*\nFiyat: ${product.price}\nÜrün Linki: ${window.location.href}`);
        window.open(`https://wa.me/${905355267480}?text=${message}`, "_blank");
    };
    return (_jsxs("section", { className: "bg-gray-100 w-full min-h-screen px-3 py-16 flex flex-col lg:flex-row gap-12", children: [_jsxs("div", { className: "w-full lg:w-1/2 flex flex-col items-center", children: [isVideo ? (_jsxs("video", { controls: true, controlsList: "nofullscreen nodownload noremoteplayback", className: "w-fit h-[450px] lg:w-fit lg:h-3/5 object-cover rounded-lg shadow-md", children: [_jsx("source", { src: selectedMedia, type: "video/mp4" }), "Taray\u0131c\u0131n\u0131z video format\u0131n\u0131 desteklemiyor."] })) : (_jsx("img", { src: selectedMedia, alt: product.name, className: "w-fit h-[450px] lg:w-fit lg:h-3/5 object-cover rounded-lg shadow-md" })), _jsxs("div", { className: "flex space-x-4 mt-4 overflow-x-auto scrollbar-hide max-w-2xl", children: [product.video && product.videoThumbnail && (_jsx("div", { className: "w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 flex-shrink-0", children: _jsx(VideoThumbnail, { poster: product.videoThumbnail, onClick: () => {
                                        setSelectedMedia(product.video);
                                        setIsVideo(true);
                                    } }) })), product.images.map((image, index) => (_jsx("img", { src: image, alt: `Ürün görseli ${index + 1}`, className: `w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 object-cover rounded-md cursor-pointer border-2 flex-shrink-0 mb-2 ${selectedMedia === image ? "border-black" : "border-gray-200"}`, onClick: () => {
                                    setSelectedMedia(image);
                                    setIsVideo(false);
                                }, draggable: false }, index)))] })] }), _jsxs("div", { className: "w-full lg:w-2/5 flex flex-col justify-start", children: [_jsx("h1", { className: "text-3xl font-bold", children: product.name }), _jsx("p", { className: "text-gray-600 mt-2", children: product.description }), _jsxs("h3", { className: "text-lg lg:text-xl mt-10", children: [_jsx("h2", { className: "font-bold", children: "\u00D6zellikler" }), _jsx("ul", { className: "list-disc ml-5", children: product.features.map((feature, index) => (_jsx("li", { children: feature }, index))) })] }), _jsxs("h3", { className: "text-lg lg:text-xl mt-5", children: [_jsx("h2", { className: "font-bold", children: "Malzeme" }), product.metarial] }), _jsx("p", { className: "text-2xl font-semibold mt-10", children: product.price }), _jsxs("button", { className: "mt-6 bg-black text-white py-3 px-6 rounded-md text-lg hover:bg-gray-800 transition flex items-center justify-center", onClick: handleWhatsAppRedirect, children: [_jsx("img", { src: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/whatsapp-icon-WXnSNnyqvMpt86VVj6P4BYBpwyEAAv.svg", alt: "WhatsApp", className: "w-6 h-6 mr-2" }), "WhatsApp ile Sipari\u015F Ver"] })] })] }));
};
export default ProductDetail;
