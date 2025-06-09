import React from "react";
import {Product} from "./Product";
import {Link} from "react-router-dom";
import {formatPrice} from "./formatPrice";

const ProductCard = React.memo(({product}: { product: Product }) => (
    <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden flex flex-col h-full relative">
        {/* Stok Durumu */}
        {!product.isStock && (
            <div className="absolute top-3 right-3 z-10">
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-xl font-medium border-2 border-red-100 shadow-sm text-base">
                    Stokta Yok
                </div>
            </div>
        )}

        {/* Ürün Görseli */}
        <div className="relative w-full aspect-square overflow-hidden bg-white">
            <img
                src={product.images.at(0)}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>

        {/* Ürün Bilgileri */}
        <div className="p-5 text-center flex-grow">
            <h3 className="text-lg font-semibold text-[#2C1810] line-clamp-2 mb-2">{product.name}</h3>
            <p className="text-[#2C1810] font-medium text-lg">{formatPrice(product.price)}</p>
        </div>

        {/* Ürüne Git Butonu */}
        <div className="p-5 pt-0">
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
                <button 
                    className={"w-full py-2.5 px-4 rounded-xl font-medium transition-colors duration-200 bg-gray-100 text-black hover:bg-gray-200"}>
                    Ürünü İncele
                </button>
            </Link>
        </div>
    </div>
));

export default ProductCard;