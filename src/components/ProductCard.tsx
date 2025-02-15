import React from "react";
import {Product} from "./types";
import {Link} from "react-router-dom";
import {formatPrice} from "./formatPrice";

const ProductCard = React.memo(({product}: { product: Product }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-auto flex flex-col justify-between h-full">
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
            <Link to={`/urun/${product.id}/${product.name}`} className="block">
                <button className="text-lg bg-gray-100 w-full rounded-lg py-2">Ürüne Git</button>
            </Link>
        </div>
    </div>
));

export default ProductCard;
