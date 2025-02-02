import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../components/products";
import VideoThumbnail from "../../components/VideoThumbnail.tsx";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === parseInt(id!)) ?? {
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

    const [selectedMedia, setSelectedMedia] = useState<string | null>(product.images[0] || null);
    const [isVideo, setIsVideo] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    const handleWhatsAppRedirect = () => {
        if (!product) return;

        const message = encodeURIComponent(
            `Merhaba, bu ürünü satın almak istiyorum:\n\n*${product.name}*\nFiyat: ${product.price}\nÜrün Linki: ${window.location.href}`
        );

        window.open(`https://wa.me/${905355267480}?text=${message}`, "_blank");
    };

    return (
        <section className="bg-gray-100 w-full min-h-screen px-3 py-16 flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                {/* Büyük Görsel veya Video */}
                {isVideo ? (
                    <video
                        controls
                        controlsList="nofullscreen nodownload noremoteplayback"
                        className="w-fit h-[450px] lg:w-fit lg:h-3/5 object-cover rounded-lg shadow-md"
                    >
                        <source src={selectedMedia!} type="video/mp4"/>
                        Tarayıcınız video formatını desteklemiyor.
                    </video>
                ) : (
                    <img
                        src={selectedMedia!}
                        alt={product.name}
                        className="w-fit h-[450px] lg:w-fit lg:h-3/5 object-cover rounded-lg shadow-md"
                    />
                )}

                {/* Küçük Görseller ve Video */}
                <div className="flex space-x-4 mt-4 overflow-x-auto scrollbar-hide max-w-2xl">
                    {/* Video Thumbnail */}
                    {product.video && product.videoThumbnail && (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 flex-shrink-0">
                            <VideoThumbnail
                                poster={product.videoThumbnail}
                                onClick={() => {
                                    setSelectedMedia(product.video);
                                    setIsVideo(true);
                                }}
                            />
                        </div>
                    )}

                    {/* Ürün Görselleri */}
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Ürün görseli ${index + 1}`}
                            className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 object-cover rounded-md cursor-pointer border-2 flex-shrink-0 mb-2 ${
                                selectedMedia === image ? "border-black" : "border-gray-200"
                            }`}
                            onClick={() => {
                                setSelectedMedia(image);
                                setIsVideo(false);
                            }}
                            draggable={false}
                        />
                    ))}
                </div>
            </div>

            {/* Ürün Bilgileri */}
            <div className="w-full lg:w-2/5 flex flex-col justify-start">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <h3 className="text-lg lg:text-xl mt-10">
                    <h2 className="font-bold">Özellikler</h2>
                    <ul className="list-disc ml-5">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </h3>
                <h3 className="text-lg lg:text-xl mt-5">
                    <h2 className="font-bold">Malzeme</h2>
                    {product.metarial}
                </h3>
                <p className="text-2xl font-semibold mt-10">{product.price}</p>

                {/* WhatsApp Sipariş Butonu */}
                <button
                    className="mt-6 bg-black text-white py-3 px-6 rounded-md text-lg hover:bg-gray-800 transition flex items-center justify-center"
                    onClick={handleWhatsAppRedirect}
                >
                    <img
                        src="https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/whatsapp-icon-WXnSNnyqvMpt86VVj6P4BYBpwyEAAv.svg"
                        alt="WhatsApp"
                        className="w-6 h-6 mr-2"
                    />
                    WhatsApp ile Sipariş Ver
                </button>
            </div>
        </section>
    );
};

export default ProductDetail;
