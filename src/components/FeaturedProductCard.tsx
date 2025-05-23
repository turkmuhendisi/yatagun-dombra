import React from "react";
import { Product } from "./Product";
import {Link} from "react-router-dom";
import {formatPrice} from "./formatPrice";

const FeaturedProductCard = React.memo(({ product }: { product: Product }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden min-w-[300px] max-w-[300px]">
        <div className="w-full">
            <img
                src={product.images.at(0)}
                alt={product.name}
                className="w-full max-h-150 aspect-[1/1] object-cover"
                loading="lazy"
            />
        </div>
        <div className="p-4 text-center flex-grow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 my-2">{formatPrice(product.price)}</p>
        </div>
        <div className="p-4">
            {/* Ürüne Git Butonu */}
            <Link
                to={`/urun/${product.id}/${product.name
                    .toLowerCase()
                    .replace(/ğ/g, "g")
                    .replace(/ü/g, "u")
                    .replace(/ş/g, "s")
                    .replace(/ı/g, "i")
                    .replace(/ö/g, "o")
                    .replace(/ç/g, "c")
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-")}-${product.category}`}
                className="block"
            >
                <button className="text-lg bg-gray-100 w-full rounded-lg py-2 hover:bg-gray-200 transition">
                    Ürüne Git
                </button>
            </Link>
        </div>
    </div>
));

export default FeaturedProductCard;