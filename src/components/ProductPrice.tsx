import { Product } from "./types";
import {formatPrice} from "./formatPrice";

type ProductPriceProps = { product: Product; discountPercentage: number; };

const ProductPrice: React.FC<ProductPriceProps> = ({ product, discountPercentage }) => {
    const discountedPrice = (product.price * (1 - discountPercentage / 100));

    const formattedOldPrice = formatPrice(product.price);
    const formattedDiscountedPrice = formatPrice(discountedPrice);

    return (
        <div className="w-auto flex flex-col text-right pr-6">
            {/* Eski fiyat (üstü çizili ve soluk) */}
            <p className="text-sm font-semibold text-gray-500 line-through opacity-50 block">
                {formattedOldPrice}
            </p>

            {/* İndirimli fiyat */}
            <p className="text-xl font-semibold text-black block">
                {formattedDiscountedPrice}
            </p>
        </div>
    );
};

export default ProductPrice;
