import { Link } from "react-router-dom";
import { FiShoppingBag, FiUser } from "react-icons/fi"; // React ikonları

export default function Navbar() {
    return (
        <nav className="bg-gray-50 text-black py-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold">Yatagun Dombra</h1>

                {/* Orta Menü Linkleri */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:underline">
                        Anasayfa
                    </Link>
                    <Link to="/about" className="hover:underline">
                        Biz kimiz?
                    </Link>
                    <Link to="/products" className="hover:underline">
                        Ürünler
                    </Link>
                    <Link to="/faq" className="hover:underline">
                        S.S.S.
                    </Link>
                </div>

                {/* Sağdaki İkonlar */}
                <div className="flex space-x-6">
                    <FiShoppingBag className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
                    <FiUser className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
                </div>
            </div>
        </nav>
    );
}
