import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // It does set current page path

    const getLinkClass = (path: string) =>
        location.pathname === path
            ? "font-bold text-[#2C1810] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#2C1810] after:to-[#1A0F0A] after:rounded-full" // Active section
            : "hover:text-[#2C1810] text-[#5C4D44] transition-colors duration-300 relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gradient-to-r hover:after:from-[#2C1810] hover:after:to-[#1A0F0A] hover:after:rounded-full hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300"; // Other sections

    return (
        <>
            <nav className="bg-white/95 backdrop-blur-lg text-[#2C1810] py-4 shadow-lg border-b border-white/20 sticky top-0 z-40">
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Hamburger Menu Button (Mobile) */}
                    <button
                        className="md:hidden text-2xl focus:outline-none p-2 rounded-xl hover:bg-[#2C1810]/10 transition-colors duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Logo */}
                    <Link to="/" className="group">
                        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                            Yatagun Dombra
                        </h1>
                    </Link>

                    {/* Desktop Menu Links */}
                    <div className="hidden md:flex space-x-8 lg:space-x-12">
                        <Link to="/" className={`text-lg font-semibold py-2 px-1 ${getLinkClass("/")}`}>
                            Anasayfa
                        </Link>
                        <Link to="/hakkimizda" className={`text-lg font-semibold py-2 px-1 ${getLinkClass("/hakkimizda")}`}>
                            Biz kimiz?
                        </Link>
                        <Link to="/dombra-satin-al" className={`text-lg font-semibold py-2 px-1 ${getLinkClass("/dombra-satin-al")}`}>
                            Ürünler
                        </Link>
                        <Link to="/sss" className={`text-lg font-semibold py-2 px-1 ${getLinkClass("/sss")}`}>
                            S.S.S.
                        </Link>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <Link 
                            to="/dombra-satin-al"
                            className="bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#2C1810]/25 hover:transform hover:scale-105"
                        >
                            Ürünleri Keşfet
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Slide Menu */}
            <div className={`fixed left-0 top-0 w-80 h-full bg-white/95 backdrop-blur-lg shadow-2xl transform transition-transform z-50 duration-300 md:hidden ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] bg-clip-text text-transparent">
                        Menü
                    </h2>
                    <button
                        className="text-[#2C1810] text-2xl p-2 rounded-xl hover:bg-[#2C1810]/10 transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col p-6 space-y-6">
                    <Link 
                        to="/" 
                        className={`group flex items-center p-4 rounded-2xl transition-all duration-300 ${
                            location.pathname === "/" 
                                ? "bg-gradient-to-r from-[#2C1810]/10 to-[#1A0F0A]/10 text-[#2C1810] font-bold" 
                                : "hover:bg-[#2C1810]/5 text-[#5C4D44] hover:text-[#2C1810]"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-lg font-semibold">Anasayfa</span>
                    </Link>

                    <Link 
                        to="/hakkimizda" 
                        className={`group flex items-center p-4 rounded-2xl transition-all duration-300 ${
                            location.pathname === "/hakkimizda" 
                                ? "bg-gradient-to-r from-[#2C1810]/10 to-[#1A0F0A]/10 text-[#2C1810] font-bold" 
                                : "hover:bg-[#2C1810]/5 text-[#5C4D44] hover:text-[#2C1810]"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-lg font-semibold">Biz Kimiz?</span>
                    </Link>

                    <Link 
                        to="/dombra-satin-al" 
                        className={`group flex items-center p-4 rounded-2xl transition-all duration-300 ${
                            location.pathname === "/dombra-satin-al" 
                                ? "bg-gradient-to-r from-[#2C1810]/10 to-[#1A0F0A]/10 text-[#2C1810] font-bold" 
                                : "hover:bg-[#2C1810]/5 text-[#5C4D44] hover:text-[#2C1810]"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-lg font-semibold">Ürünler</span>
                    </Link>

                    <Link 
                        to="/sss" 
                        className={`group flex items-center p-4 rounded-2xl transition-all duration-300 ${
                            location.pathname === "/sss" 
                                ? "bg-gradient-to-r from-[#2C1810]/10 to-[#1A0F0A]/10 text-[#2C1810] font-bold" 
                                : "hover:bg-[#2C1810]/5 text-[#5C4D44] hover:text-[#2C1810]"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-lg font-semibold">S.S.S.</span>
                    </Link>
                </div>

                {/* Mobile CTA Section */}
                <div className="absolute bottom-6 left-6 right-6">
                    <Link 
                        to="/dombra-satin-al"
                        className="w-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#2C1810]/25 hover:transform hover:scale-105 block"
                        onClick={() => setIsOpen(false)}
                    >
                        Ürünleri Keşfet
                    </Link>
                </div>
            </div>
        </>
    );
}
