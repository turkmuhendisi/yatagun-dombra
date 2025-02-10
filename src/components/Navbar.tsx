import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // It does set current page path

    const getLinkClass = (path: string) =>
        location.pathname === path
            ? "font-bold text-black" // Active section
            : "hover:underline text-gray-700"; // Other sections

    return (
        <nav className="bg-gray-50 text-black py-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Hamburger Menu Button (Mobil) */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Logo */}
                <h1 className="text-2xl font-bold">Yatagun Dombra</h1>

                {/* Middle Menu Links (Desktop View) */}
                <div className="hidden md:flex space-x-8">
                    <Link to="" className={getLinkClass("")}>Anasayfa</Link>
                    <Link to="/hakkimizda" className={getLinkClass("/hakkimizda")}>Biz kimiz?</Link>
                    <Link to="/dombra-satin-al" className={getLinkClass("/dombra-satin-al")}>Ürünler</Link>
                    <Link to="/sss" className={getLinkClass("/sss")}>S.S.S.</Link>
                </div>
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
                        <Link to="" className={getLinkClass("")} onClick={() => setIsOpen(false)}>Anasayfa</Link>
                    </li>
                    <li>
                        <Link to="/hakkimizda" className={getLinkClass("/about")} onClick={() => setIsOpen(false)}>Biz Kimiz?</Link>
                    </li>
                    <li>
                        <Link to="/dombra-satin-al" className={getLinkClass("/dombra-satin-al")} onClick={() => setIsOpen(false)}>Ürünler</Link>
                    </li>
                    <li>
                        <Link to="/sss" className={getLinkClass("/sss")} onClick={() => setIsOpen(false)}>S.S.S.</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
