import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {products} from "../../components/products";
import VideoThumbnail from "../../components/VideoThumbnail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import ProductPrice from "../../components/ProductPrice";
import {formatPrice} from "../../components/formatPrice";

const styles = `
.custom-thumbnail-scrollbar::-webkit-scrollbar {
    height: 6px;
}

.custom-thumbnail-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.custom-thumbnail-scrollbar::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
}

.custom-thumbnail-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}

@media (max-width: 768px) {
    .custom-thumbnail-scrollbar::-webkit-scrollbar {
        height: 0px;
        background: transparent;
    }
    
    .custom-thumbnail-scrollbar::-webkit-scrollbar-thumb {
        background: transparent;
    }
    
    .custom-thumbnail-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
}
`;

const ProductDetail = () => {
    const {id} = useParams<{ id: string }>();
    const product = products.find((p) => p.id === parseInt(id!)) ?? {
        id: 0,
        name: "Bilinmeyen Ürün",
        price: 0,
        discountAmount: 0,
        description: "Ürün bilgileri bulunamadı.",
        url: "",
        features: [],
        reviews: [],
        metarial: "Bilinmiyor",
        images: [""],
        video: "",
        videoThumbnail: "",
        category: ""
    };

    const [activeTab, setActiveTab] = useState("features");
    const [selectedMedia, setSelectedMedia] = useState<string | null>(product.images[0] || null);
    const [isVideo, setIsVideo] = useState(false);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "instant"});
    }, []);

    const handleWhatsAppRedirect = () => {
        if (!product) return;
        window.open(`https://wa.me/${905355267480}`, "_blank");
    };

    return (
        <>
            <style>{styles}</style>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:pb-32 pb-24 lg:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                    
                    {/* Ürün Görselleri */}
                    <div className="flex flex-col space-y-6">
                        {/* Ana Görsel */}
                        <div className="relative group">
                            {isVideo ? (
                                <div className="w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl shadow-gray-200/50 border border-gray-100">
                                    <video
                                        controls
                                        controlsList="nofullscreen nodownload noremoteplayback"
                                        className="w-full h-full object-cover"
                                    >
                                        <source src={selectedMedia!} type="video/mp4"/>
                                        Tarayıcınız video formatını desteklemiyor.
                                    </video>
                                </div>
                            ) : (
                                <div className="w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl shadow-gray-200/50 border border-gray-100">
                                    <img
                                        src={selectedMedia!}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Küçük Görseller */}
                        <div className="w-full h-24 flex space-x-4 overflow-x-auto overflow-y-hidden py-2 px-2 custom-thumbnail-scrollbar">
                            {product.video && product.videoThumbnail && (
                                <div className="w-20 h-20">
                                    <VideoThumbnail
                                        poster={product.videoThumbnail}
                                        isSelected={selectedMedia === product.video && isVideo}
                                        onClick={() => {
                                            setSelectedMedia(product.video || null);
                                            setIsVideo(true);
                                        }}
                                    />
                                </div>
                            )}

                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden border-3 transition-all duration-300 ${
                                        selectedMedia === image && !isVideo
                                        ? "border-[#2C1810] shadow-lg ring-4 ring-[#2C1810]/20" 
                                        : "border-gray-200 hover:border-[#2C1810]/50 hover:shadow-md"
                                    }`}
                                    onClick={() => {
                                        setSelectedMedia(image);
                                        setIsVideo(false);
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} - Görsel ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Ürün Bilgileri */}
                    <div className="space-y-8">
                        {/* Başlık ve Açıklama */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-3xl sm:text-4xl font-bold text-[#2C1810] leading-tight">{product.name}</h1>
                                {!product.isStock && (
                                    <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full font-medium border border-red-200 text-sm">
                                        Stokta Yok
                                    </span>
                                )}
                            </div>
                            <p className="text-lg text-[#5C4D44] leading-relaxed">{product.description}</p>
                        </div>

                        {/* Fiyat */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/5 via-[#2C1810]/10 to-[#2C1810]/5 rounded-3xl blur-sm"></div>
                            <div className="relative bg-gradient-to-br from-amber-50/80 via-white/90 to-orange-50/80 rounded-3xl p-2 border border-[#2C1810]/20 shadow-2xl">
                                <ProductPrice product={product}/>
                            </div>
                        </div>

                        {/* Sekmeler */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="flex border-b border-gray-100">
                                <button
                                    onClick={() => setActiveTab("features")}
                                    className={`flex-1 py-4 px-6 text-base font-semibold transition-all duration-300 ${
                                        activeTab === "features"
                                            ? "text-[#2C1810] bg-[#2C1810]/5 border-b-3 border-[#2C1810]"
                                            : "text-gray-500 hover:text-[#2C1810] hover:bg-gray-50"
                                    }`}
                                >
                                    Ürün Özellikleri
                                </button>
                                <button
                                    onClick={() => setActiveTab("reviews")}
                                    className={`flex-1 py-4 px-6 text-base font-semibold transition-all duration-300 ${
                                        activeTab === "reviews"
                                            ? "text-[#2C1810] bg-[#2C1810]/5 border-b-3 border-[#2C1810]"
                                            : "text-gray-500 hover:text-[#2C1810] hover:bg-gray-50"
                                    }`}
                                >
                                    Değerlendirmeler
                                </button>
                            </div>

                            <div className="p-6">
                                {activeTab === "features" ? (
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            {product.features.map((feature, index) => (
                                                <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50">
                                                    <div className="w-2 h-2 rounded-full bg-[#2C1810] mt-3 flex-shrink-0"></div>
                                                    <span className="text-[#5C4D44] text-base leading-relaxed">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-gray-100 pt-6">
                                            <h3 className="text-xl font-bold text-[#2C1810] mb-3">Malzeme</h3>
                                            <p className="text-[#5C4D44] text-base leading-relaxed bg-[#2C1810]/5 p-4 rounded-xl">
                                                {product.metarial}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {product.reviews.length > 0 ? (
                                            product.reviews.map((review, index) => (
                                                <div key={index} className="p-4 rounded-xl bg-gray-50/50 border border-gray-100">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <p className="font-semibold text-[#2C1810]">{review.user}</p>
                                                        <div className="flex items-center text-[#2C1810]">
                                                            {[...Array(review.rating)].map((_, i) => (
                                                                <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p className="text-[#5C4D44] leading-relaxed">{review.comment}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-center py-8">
                                                <p className="text-gray-500 text-lg">Henüz yorum yok.</p>
                                                <p className="text-gray-400 text-sm mt-1">İlk yorumu siz yapın!</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Aksiyon Butonları */}
                        <div className="space-y-4">
                            {/* WhatsApp Butonu */}
                            <button
                                onClick={handleWhatsAppRedirect}
                                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-3"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                                WhatsApp ile İletişime Geç
                            </button>

                            {/* Hepsiburada Butonu */}
                            <button
                                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                                    product.isStock 
                                    ? "bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white hover:shadow-lg hover:shadow-[#2C1810]/25" 
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                }`}
                                onClick={() => product.isStock && window.open(product.url)}
                                disabled={!product.isStock}
                            >
                                {product.isStock ? "Hepsiburada ile Satın Al" : "Stokta Yok"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobil Sabit Alt Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 p-4 lg:hidden">
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <p className="text-2xl font-bold text-[#2C1810]">{formatPrice(product.price)}</p>
                    </div>
                    <button
                        className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                            product.isStock 
                            ? "bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white" 
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                        onClick={() => product.isStock && window.open(product.url)}
                        disabled={!product.isStock}
                    >
                        {product.isStock ? "Satın Al" : "Stokta Yok"}
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductDetail;