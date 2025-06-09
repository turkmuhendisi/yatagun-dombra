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
            <nav className="bg-white/95 backdrop-blur-lg text-[#2C1810] py-3 sm:py-4 shadow-lg border-b border-white/20 sticky top-0 z-40">
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Hamburger Menu Button (Mobile & Small Tablet) */}
                    <button
                        className="lg:hidden text-xl sm:text-2xl focus:outline-none p-2 rounded-xl hover:bg-[#2C1810]/10 transition-colors duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Logo */}
                    <Link to="/" className="group">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                            Yatagun Dombra
                        </h1>
                    </Link>

                    {/* Desktop Menu Links (Hidden on mobile/tablet, shown on large screens) */}
                    <div className="hidden lg:flex space-x-6 xl:space-x-8 2xl:space-x-12">
                        <Link to="/" className={`text-base xl:text-lg font-semibold py-2 px-1 ${getLinkClass("/")}`}>
                            Anasayfa
                        </Link>
                        <Link to="/hakkimizda" className={`text-base xl:text-lg font-semibold py-2 px-1 ${getLinkClass("/hakkimizda")}`}>
                            Biz kimiz?
                        </Link>
                        <Link to="/dombra-satin-al" className={`text-base xl:text-lg font-semibold py-2 px-1 ${getLinkClass("/dombra-satin-al")}`}>
                            Ürünler
                        </Link>
                        <Link to="/sss" className={`text-base xl:text-lg font-semibold py-2 px-1 ${getLinkClass("/sss")}`}>
                            S.S.S.
                        </Link>
                    </div>

                    {/* Desktop CTA Button - Hidden on tablet to avoid duplication */}
                    <div className="hidden lg:block">
                        <Link 
                            to="/dombra-satin-al"
                            className="bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white px-4 xl:px-6 py-2.5 xl:py-3 rounded-xl xl:rounded-2xl font-semibold text-sm xl:text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#2C1810]/25 hover:transform hover:scale-105"
                        >
                            <span className="hidden xl:inline">Ürünleri Keşfet</span>
                            <span className="xl:hidden">Keşfet</span>
                        </Link>
                    </div>

                    {/* Spacer for tablet to center logo properly */}
                    <div className="hidden md:hidden lg:hidden w-16"></div>
                </div>

                {/* Tablet Menu Bar (Visible on medium screens only) */}
                <div className="hidden md:hidden lg:hidden justify-center mt-2 pt-3 border-t border-white/20">
                    <div className="flex space-x-6">
                        <Link to="/" className={`text-sm font-semibold py-2 px-3 rounded-xl ${getLinkClass("/")}`}>
                            Anasayfa
                        </Link>
                        <Link to="/hakkimizda" className={`text-sm font-semibold py-2 px-3 rounded-xl ${getLinkClass("/hakkimizda")}`}>
                            Hakkımızda
                        </Link>
                        <Link to="/dombra-satin-al" className={`text-sm font-semibold py-2 px-3 rounded-xl ${getLinkClass("/dombra-satin-al")}`}>
                            Ürünler
                        </Link>
                        <Link to="/sss" className={`text-sm font-semibold py-2 px-3 rounded-xl ${getLinkClass("/sss")}`}>
                            S.S.S.
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Slide Menu */}
            <div className={`fixed left-0 top-0 w-72 sm:w-80 h-full bg-white/95 backdrop-blur-lg shadow-2xl transform transition-transform z-50 duration-300 lg:hidden ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200/50">
                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] bg-clip-text text-transparent">
                        Menü
                    </h2>
                    <button
                        className="text-[#2C1810] text-xl sm:text-2xl p-2 rounded-xl hover:bg-[#2C1810]/10 transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <Link 
                        to="/" 
                        className={`group flex items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                            location.pathname === "/" 
                                ? "bg-gradient-to-r from-[#2C1810]/10 to-[#1A0F0A]/10 text-[#2C1810] font-bold" 
                                : "hover:bg-[#2C1810]/5 text-[#5C4D44] hover:text-[#2C1810]"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] mr-3 sm:mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-base sm:text-lg font-semibold">Anasayfa</span>
                    </Link>

                    <Link 
                        to="/hakkimizda" 
                        className={`group flex items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                            location.pathname === "/hakkimizda" 
                                ? "bg-gradient-to-r from-[#2C1810]/10 to-[#1A0F0A]/10 text-[#2C1810] font-bold" 
                                : "hover:bg-[#2C1810]/5 text-[#5C4D44] hover:text-[#2C1810]"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] mr-3 sm:mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-base sm:text-lg font-semibold">Biz Kimiz?</span>
                    </Link>

                    <Link 
                        to="/dombra-satin-al" 
                        className={`group flex items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                            location.pathname === "/dombra-satin-al" 
                                ? "bg-gradient-to-r from-[#2C1810]/10 to-[#1A0F0A]/10 text-[#2C1810] font-bold" 
                                : "hover:bg-[#2C1810]/5 text-[#5C4D44] hover:text-[#2C1810]"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] mr-3 sm:mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-base sm:text-lg font-semibold">Ürünler</span>
                    </Link>

                    <Link 
                        to="/sss" 
                        className={`group flex items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                            location.pathname === "/sss" 
                                ? "bg-gradient-to-r from-[#2C1810]/10 to-[#1A0F0A]/10 text-[#2C1810] font-bold" 
                                : "hover:bg-[#2C1810]/5 text-[#5C4D44] hover:text-[#2C1810]"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] mr-3 sm:mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-base sm:text-lg font-semibold">S.S.S.</span>
                    </Link>
                </div>

                {/* Mobile CTA Section */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <Link 
                        to="/dombra-satin-al"
                        className="w-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#2C1810]/25 hover:transform hover:scale-105 block"
                        onClick={() => setIsOpen(false)}
                    >
                        Ürünleri Keşfet
                    </Link>
                </div>
            </div>
        </>
    );
}
