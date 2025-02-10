import React from "react";
import { Product } from "./types";
import {Link} from "react-router-dom";

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
            <p className="text-gray-500 my-2">{product.price}</p>
        </div>
        <div className="p-4">
            {/* Ürüne Git Butonu */}
            <Link to={`/urun/${product.id}/${product.name}`} className="block">
                <button className="text-lg bg-gray-100 w-full rounded-lg py-2 hover:bg-gray-200 transition">
                    Ürüne Git
                </button>
            </Link>
        </div>
    </div>
));

export default FeaturedProductCard;