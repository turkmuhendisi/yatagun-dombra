import { Product } from "./Product";
import {formatPrice} from "./formatPrice";

type ProductPriceProps = { product: Product;};

const ProductPrice: React.FC<ProductPriceProps> = ({ product}) => {
    const discountedPrice = (product.price - product.discountAmount);
    const discountPercentage = product.discountAmount > 0 ? Math.round((product.discountAmount / product.price) * 100) : 0;

    const formattedOldPrice = formatPrice(product.price);
    const formattedDiscountedPrice = formatPrice(discountedPrice);

    return (
        <div className="relative">
            
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl">
            {/* İndirim Badge'i */}
            {discountPercentage > 0 && (
                <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    -%{discountPercentage}
                </div>
            )}
                <div className="flex flex-col">
                    <span className="text-md font-semibold text-[#5C4D44] mb-1">WhatsApp Özel Fiyat</span>
                    
                    {/* İndirimsiz/Eski Fiyat */}
                    {product.discountAmount > 0 && (
                        <p className="text-lg font-semibold text-gray-400 line-through mb-1">
                            {formattedOldPrice}
                        </p>
                    )}
                    
                    {/* Güncel Fiyat */}
                    <div className="flex items-center gap-2">
                        <p className="text-4xl font-bold text-[#2C1810] leading-none">
                            {formattedDiscountedPrice}
                        </p>
                    </div>
                </div>
                
                {/* Alt bilgi */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-[#5C4D44] opacity-75">
                        📦 Ücretsiz kargo • 🚚 Hızlı teslimat • ✅ Kalite garantisi
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductPrice;