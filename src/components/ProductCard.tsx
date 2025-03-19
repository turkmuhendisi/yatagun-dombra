import React from "react";
import {Product} from "./Product";
import {Link} from "react-router-dom";
import {formatPrice} from "./formatPrice";

const ProductCard = React.memo(({ product }: { product: Product }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-auto flex flex-col justify-between h-full relative">
        {/* Stokta Yok Etiketi */}
        {!product.isStock && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                Stokta Yok
            </div>
        )}

        {/* Ürün Görseli */}
        <div className="w-full">
            <img
                src={product.images.at(0)}
                alt={product.name}
                className="w-full max-h-150 aspect-[1/1] object-cover"
                loading="lazy"
            />
        </div>

        {/* Ürün Bilgileri */}
        <div className="p-4 text-center flex-grow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 my-2">{formatPrice(product.price)}</p>
        </div>

        {/* Ürüne Git Butonu */}
        <div className="p-4">
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
                    .replace(/\s+/g, "-")}`}
                className="block"
            >
                <button
                    className={`text-lg w-full rounded-lg py-2 transition ${
                        product.isStock ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-300 cursor-not-allowed"
                    }`}
                    disabled={!product.isStock}
                >
                    {product.isStock ? "Ürüne Git" : "Tükendi"}
                </button>
            </Link>
        </div>
    </div>
));

export default ProductCard;
