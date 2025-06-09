import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Product } from "../../../components/Product";
import FeaturedProductCard from "../../../components/FeaturedProductCard";
import {products} from "../../../components/products";

const FeaturedProducts: React.FC = () => {
    const featuredProducts: Product[] = useMemo(() => {
        return products.filter((product) => product.isFeatured/* && product.isStock*/);
    }, []);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isScrollable, setIsScrollable] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Mobil cihaz tespiti
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const checkScrollPosition = useCallback(() => {
        if (containerRef.current) {
            const { scrollLeft } = containerRef.current;
            
            // Mobilde hangi ürünün göründüğünü hesapla
            if (isMobile) {
                const cardWidth = 280 + 16; // Card width + gap
                const index = Math.round(scrollLeft / cardWidth);
                setCurrentIndex(Math.min(index, featuredProducts.length - 1));
            }
        }
    }, [isMobile, featuredProducts.length]);

    // Touch/Mouse başlangıç
    const handleStart = useCallback((clientX: number) => {
        if (containerRef.current) {
            setIsDragging(true);
            setStartX(clientX);
            setScrollLeft(containerRef.current.scrollLeft);
            containerRef.current.style.cursor = 'grabbing';
            containerRef.current.style.scrollBehavior = 'auto';
        }
    }, []);

    // Touch/Mouse hareket
    const handleMove = useCallback((clientX: number) => {
        if (!isDragging || !containerRef.current) return;
        
        const x = clientX;
        const walkX = (x - startX) * 1.5; // Daha hızlı scroll için çarpan
        containerRef.current.scrollLeft = scrollLeft - walkX;
    }, [isDragging, startX, scrollLeft]);

    // Touch/Mouse bitiş
    const handleEnd = useCallback(() => {
        if (containerRef.current) {
            setIsDragging(false);
            containerRef.current.style.cursor = 'grab';
            containerRef.current.style.scrollBehavior = 'smooth';
            
            // Mobilde snap to closest card
            if (isMobile) {
                const cardWidth = 280 + 16; // Card width + gap
                const currentScroll = containerRef.current.scrollLeft;
                const targetIndex = Math.round(currentScroll / cardWidth);
                const targetScroll = targetIndex * cardWidth;
                containerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
            }
        }
    }, [isMobile]);

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        e.preventDefault();
        handleMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleEnd();
    };

    const handleMouseLeave = () => {
        handleEnd();
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleEnd();
    };

    // Dot'a tıklayınca o ürüne git (mobil)
    const scrollToIndex = (index: number) => {
        if (containerRef.current && isMobile) {
            const cardWidth = 280 + 16; // Card width + gap
            const targetScroll = index * cardWidth;
            containerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const contentWidth = containerRef.current.scrollWidth;
            setIsScrollable(contentWidth > containerWidth);
            checkScrollPosition();
        }
    }, [featuredProducts, checkScrollPosition]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition, { passive: true });
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, [checkScrollPosition]);

    // Prevent context menu on long press (mobile)
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const preventContextMenu = (e: Event) => e.preventDefault();
            container.addEventListener('contextmenu', preventContextMenu);
            return () => container.removeEventListener('contextmenu', preventContextMenu);
        }
    }, []);

    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#2C1810]/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#1A0F0A]/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <div className="relative inline-block">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight">
                            Öne Çıkan Ürünler
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full"></div>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-[#5C4D44] mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed px-4">
                        En popüler ve özenle seçilmiş dombra koleksiyonumuz
                    </p>
                </div>

                {/* Featured Products Container */}
                <div className="relative">
                    {/* Products Scroll Container */}
                    <div
                        ref={containerRef}
                        className={`flex overflow-x-auto px-4 sm:px-2 py-4 custom-scrollbar select-none ${
                            isScrollable ? "justify-start" : "lg:justify-center"
                        }`}
                        style={{
                            cursor: isDragging ? "grabbing" : "grab",
                            userSelect: "none",
                            WebkitOverflowScrolling: "touch",
                            scrollBehavior: "smooth",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            scrollSnapType: isMobile ? "x mandatory" : "none",
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {featuredProducts.map((product, index) => (
                            <div 
                                key={product.id} 
                                className={`animate-fadeInUp flex-shrink-0 ${index === featuredProducts.length - 1 ? '' : 'mr-9 sm:mr-5 md:mr-6 lg:mr-8'}`}
                                style={{ 
                                    animationDelay: `${index * 150}ms`,
                                    scrollSnapAlign: isMobile ? "start" : "none",
                                    minWidth: isMobile ? "280px" : "auto",
                                    width: isMobile ? "280px" : "auto",
                                }}
                            >
                                <div className="pointer-events-auto">
                                    <FeaturedProductCard product={product} />
                                </div>
                            </div>
                        ))}
                        
                        {/* Extra padding for better mobile experience */}
                        <div className="flex-shrink-0 w-6 sm:w-2 lg:w-0"></div>
                    </div>
                </div>

                {/* Mobile Navigation Dots */}
                {isScrollable && isMobile && (
                    <div className="mt-6">
                        <div className="flex justify-center space-x-2">
                            {featuredProducts.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-[#2C1810] w-6' 
                                            : 'bg-[#2C1810]/30 hover:bg-[#2C1810]/50'
                                    }`}
                                    aria-label={`Ürün ${index + 1}'e git`}
                                />
                            ))}
                        </div>
                        <p className="text-center text-sm text-[#5C4D44] mt-3">
                            {currentIndex + 1} / {featuredProducts.length} • Kaydırarak gezinin
                        </p>
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-12 sm:mt-16 md:mt-20">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-white/20 max-w-2xl mx-auto">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C1810] mb-3 sm:mb-4">
                            Daha Fazla Ürün Keşfedin
                        </h3>
                        <p className="text-base sm:text-lg text-[#5C4D44] mb-4 sm:mb-6 px-2">
                            Tüm koleksiyonumuzu görmek için ürünler sayfasını ziyaret edin
                        </p>
                        <a 
                            href="/dombra-satin-al"
                            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#2C1810]/25 hover:transform hover:scale-105"
                        >
                            Tüm Ürünleri Gör
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 4px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #2C1810;
                    border-radius: 2px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #1A0F0A;
                }
                
                @media (max-width: 768px) {
                    .custom-scrollbar::-webkit-scrollbar {
                        height: 0px;
                    }
                }
                
                /* Smooth momentum scrolling for iOS */
                .custom-scrollbar {
                    -webkit-overflow-scrolling: touch;
                }
                
                /* Prevent text selection while dragging */
                .select-none {
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            `}</style>
        </section>
    );
};

export default FeaturedProducts;
