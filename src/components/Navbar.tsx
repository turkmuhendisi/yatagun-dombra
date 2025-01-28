import { useState } from "react";
import { Link } from "react-router-dom";
// import { FiShoppingBag, FiUser } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-50 text-black py-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Hamburger Menü Butonu (Mobil) */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Logo */}
                <h1 className="text-2xl font-bold">Yatagun Dombra</h1>

                {/* Orta Menü Linkleri (Masaüstü Görünüm) */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:underline">Anasayfa</Link>
                    <Link to="/about" className="hover:underline">Biz kimiz?</Link>
                    <Link to="/products" className="hover:underline">Ürünler</Link>
                    <Link to="/faq" className="hover:underline">S.S.S.</Link>
                </div>

                {/* Sağdaki İkonlar */}

                {/*<div className="flex space-x-6">
                    <FiShoppingBag className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
                    <FiUser className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
                </div>*/}
            </div>

            {/* Açılır Menü (Mobil) */}
            <div className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transform transition-transform z-50 duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button
                    className="absolute top-5 right-5 text-black text-2xl focus:outline-none"
                    onClick={() => setIsOpen(false)}
                >
                    <FaTimes />
                </button>

                <ul className="mt-20 space-y-6 px-6 text-lg font-semibold text-black">
                    <li>
                        <Link to="/" className="block hover:text-gray-700" onClick={() => setIsOpen(false)}>Anasayfa</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block hover:text-gray-700" onClick={() => setIsOpen(false)}>Biz Kimiz?</Link>
                    </li>
                    <li>
                        <Link to="/products" className="block hover:text-gray-700" onClick={() => setIsOpen(false)}>Ürünler</Link>
                    </li>
                    <li>
                        <Link to="/faq" className="block hover:text-gray-700" onClick={() => setIsOpen(false)}>S.S.S.</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
