import { Product } from "./Product";
import {formatPrice} from "./formatPrice";

type ProductPriceProps = { product: Product;};

const ProductPrice: React.FC<ProductPriceProps> = ({ product}) => {
    const discountedPrice = (product.price - product.discountAmount);

    const formattedOldPrice = formatPrice(product.price);
    const formattedDiscountedPrice = formatPrice(discountedPrice);

    return (
        <div className="w-auto flex flex-col text-right pr-6">
            {/* Base price */}
            <p className="text-sm font-semibold text-gray-500 line-through opacity-50 block">
                {formattedOldPrice}
            </p>

            {/* Discounted price */}
            <p className="text-xl font-semibold text-black block">
                {formattedDiscountedPrice}
            </p>
        </div>
    );
};

export default ProductPrice;