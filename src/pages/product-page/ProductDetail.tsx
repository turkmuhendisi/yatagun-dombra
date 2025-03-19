import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {products} from "../../components/products";
import VideoThumbnail from "../../components/VideoThumbnail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import ProductPrice from "../../components/ProductPrice";
import {formatPrice} from "../../components/formatPrice";

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

    const navigate = useNavigate();
    useEffect(() => {
        if (!product || !product.isStock) {
            navigate("/404-not-found", { replace: true });
        }
    }, [product, navigate]);

    if (!product) return null;


    const handleWhatsAppRedirect = () => {
        if (!product) return;

        /*const message = encodeURIComponent(
            `Merhaba, bu ürünü satın almak istiyorum:\n\n*${product.name}*\nFiyat: ${product.price}\nÜrün Linki: ${window.location.href}`
        );*/

        window.open(`https://wa.me/${905355267480}`, "_blank");
    };

    return (
        <section className="bg-gray-100 w-full min-h-screen px-3 py-16 flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                {/* Big Images or Video */}
                {isVideo ? (
                    <video
                        controls
                        controlsList="nofullscreen nodownload noremoteplayback"
                        className="w-full sm:w-40 md:w-96 lg:w-[600px] aspect-square object-cover rounded-lg shadow-md"
                    >
                        <source src={selectedMedia!} type="video/mp4"/>
                        Tarayıcınız video formatını desteklemiyor.
                    </video>
                ) : (
                    <img
                        src={selectedMedia!}
                        alt={product.name}
                        className="w-full sm:w-40 md:w-96 lg:w-[600px] aspect-square object-cover rounded-lg shadow-md"
                    />
                )}

                {/* Small Images and Video */}
                <div className="flex space-x-4 mt-4 overflow-x-auto scrollbar-hide max-w-2xl">
                    {/* Video Thumbnail */}
                    {product.video && product.videoThumbnail && (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 flex-shrink-0">
                            <VideoThumbnail
                                poster={product.videoThumbnail}
                                onClick={() => {
                                    setSelectedMedia(product.video || null);
                                    setIsVideo(true);
                                }}
                            />
                        </div>
                    )}

                    {/* Product Images */}
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

            {/* Product Information */}
            <div className="w-full lg:w-2/5 flex flex-col justify-start">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-700 mt-2">{product.description}</p>
                {/* Sekmeler */}
                <div className="mt-6 flex w-full border-b">
                    <button
                        className={`py-3 px-4 sm:px-6 flex-1 text-base sm:text-lg font-semibold text-center transition-all duration-300 ease-in-out ${
                            activeTab === "features" ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"
                        }`}
                        onClick={() => setActiveTab("features")}
                    >
                        Ürün Özellikleri
                    </button>
                    <button
                        className={`py-3 px-4 sm:px-6 flex-1 text-base sm:text-lg font-semibold text-center transition-all duration-300 ease-in-out ${
                            activeTab === "reviews" ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"
                        }`}
                        onClick={() => setActiveTab("reviews")}
                    >
                        Değerlendirmeler
                    </button>
                </div>

                {/* Sekme İçeriği */}
                <div className="mt-4">
                    {activeTab === "features" ? (
                        <div>
                            {/*<h2 className="font-bold text-xl mb-2">Özellikler</h2>*/}
                            <ul className="list-disc ml-5 lg:text-lg text-gray-700">
                                {product.features.map((feature, index) => (
                                    <li className="pb-2" key={index}>{feature}</li>
                                ))}
                            </ul>

                            <h2 className="font-bold text-xl mt-4 mb-2">Malzeme</h2>
                            <p className="text-gray-700">{product.metarial}</p>
                        </div>
                    ) : (
                        <div>
                            {/*<h2 className="font-bold text-xl mb-2">Değerlendirmeler</h2>*/}
                            {product.reviews.length > 0 ? (
                                product.reviews.map((review, index) => (
                                    <div key={index} className="border-b pb-4 mb-4">
                                        <p className="font-semibold">{review.user}</p>
                                        <div className="flex items-center text-yellow-500">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <FontAwesomeIcon key={i} icon={faStar} />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mt-2">{review.comment}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">Henüz yorum yok.</p>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex flex-row items-center p-2 gap-2 mt-6 mb-20 lg:mb-3 border-l-2 border-gray-300 justify-between">
                {/* Discounted Price */}
                    <ProductPrice product={product}/>
                    {/* Whatsapp Order Button */}
                    <button
                        className="border lg:border-2 border-green-500 bg-green-50 text-black w-full py-3 rounded-md text-sm transition justify-center hover:bg-green-100"
                        onClick={handleWhatsAppRedirect}
                    >
                        <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-green-500 mr-2" />
                        <span className="font-semibold">WhatsApp</span> ile indirimli al
                    </button>
                </div>

                <p className="text-2xl font-semibold mt-10 lg:block hidden">{formatPrice(product.price)}</p>

                {/* Hepsiburada order button - Normal view */}
                <button
                    className="mt-6 bg-[#FF6000] text-white py-3 px-6 rounded-md text-lg hover:bg-[#CC4D00] transition flex items-center justify-center lg:block hidden"
                    onClick={() => window.open(product.url)}
                >
                    <span className="font-semibold mr-1">Hepsiburada</span> ile sipariş ver
                </button>
            </div>

            {/* Mobil ve Tablet İçin Sabit Buton ve Fiyat */}
            <div
                className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 pb-6 flex items-center justify-between lg:hidden">
                <p className="text-2xl font-semibold mr-3">{formatPrice(product.price)}</p>
                <button
                    className="w-full bg-[#FF6000] text-white py-3 rounded-md text-lg hover:bg-[#CC4D00] transition flex items-center justify-center"
                    onClick={() => window.open(product.url)}
                >
                    <span className="font-semibold mr-1">Hepsiburada</span> ile sipariş ver
                </button>
            </div>

        </section>
    );
};

export default ProductDetail;
