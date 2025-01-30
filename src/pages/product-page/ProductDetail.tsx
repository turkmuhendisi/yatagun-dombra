import {useState, useRef, useEffect} from "react";
import { useParams } from "react-router-dom";
import { products } from "../../components/products";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === parseInt(id!));

    const [selectedImage, setSelectedImage] = useState(product?.images[0] || "");
    const thumbnailsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleWhatsAppRedirect = () => {
        if (!product) return;

        const message = encodeURIComponent(
            `Merhaba, bu ürünü satın almak istiyorum:\n\n📌 *${product.name}*\n💰 Fiyat: ${product.price}\n🔗 Ürün Linki: ${window.location.href}`
        );

        window.open(`https://wa.me/${905355267480}?text=${message}`, "_blank");
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!thumbnailsRef.current) return;
        isDragging.current = true; // useRef ile değiştiriyoruz
        startX.current = e.pageX - thumbnailsRef.current.offsetLeft;
        scrollLeft.current = thumbnailsRef.current.scrollLeft;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !thumbnailsRef.current) return;
        e.preventDefault();
        const x = e.pageX - thumbnailsRef.current.offsetLeft;
        const walk = x - startX.current;
        thumbnailsRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false; // useRef ile güncelliyoruz
    };

    return (
        <section className="bg-gray-100 w-full min-h-screen px-3 py-16 flex flex-col lg:flex-row gap-12">
            {/* Ürün Görselleri */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                <img
                    src={selectedImage}
                    alt={product?.name}
                    className="w-fit h-[450px] lg:w-fit lg:h-3/5 object-cover rounded-lg shadow-md"
                />
                <div
                    ref={thumbnailsRef}
                    className="flex space-x-4 mt-4 overflow-x-auto scrollbar-hide cursor-grab"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{
                        scrollBehavior: "smooth",
                        WebkitOverflowScrolling: "touch",
                        userSelect: "none",
                        whiteSpace: "nowrap",
                        overflowX: "auto"
                    }}
                >
                    {product?.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Ürün görseli ${index + 1}`}
                            className={`w-20 h-20 lg:w-20 lg:h-20 object-cover rounded-md cursor-pointer border-2 mb-2 ${
                                selectedImage === image ? "border-black" : "border-gray-200"
                            }`}
                            onClick={() => setSelectedImage(image)}
                            draggable={false}
                        />
                    ))}
                </div>
            </div>

            {/* Ürün Bilgileri */}
            <div className="w-full lg:w-2/5 flex flex-col justify-start">
                <h1 className="text-3xl font-bold">{product?.name}</h1>
                <p className="text-gray-600 mt-2">{product?.description}</p>
                <h3 className="text-lg lg:text-xl mt-10 whitespace-pre-line">
                    <h2 className="font-bold">Özellikler</h2>
                    <ul className="list-disc ml-5">
                        {product?.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </h3>
                <h3 className="text-lg lg:text-xl mt-5">
                    <h2 className="font-bold">Malzeme</h2>
                    {product?.metarial}
                </h3>
                <p className="text-2xl font-semibold mt-10">{product?.price}</p>

                {/* WhatsApp Direction Button */}
                <button
                    className="mt-6 bg-black text-white py-3 px-6 rounded-md text-lg hover:bg-gray-800 transition flex items-center justify-center"
                    onClick={handleWhatsAppRedirect}
                >
                    <img src="/src/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6 mr-2" />
                    WhatsApp ile Sipariş Ver
                </button>
            </div>
        </section>
    );
};

export default ProductDetail;
