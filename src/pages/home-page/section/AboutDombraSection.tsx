const AboutDombra = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#2C1810]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#1A0F0A]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <div className="relative inline-block">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C1810] leading-tight">
                            Dombra
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full"></div>
                    </div>
                    <p className="text-lg sm:text-xl text-[#5C4D44] mt-6 max-w-3xl mx-auto leading-relaxed">
                        Orta Asya bozkırlarının ruhunu yansıtan kadim enstrüman
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Image Section */}
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/20 to-[#1A0F0A]/20 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
                            <img
                                src="https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/oba-aVsayh3WPjkvWQYnBbTukCYVepZBzu.jpg"
                                alt="Dombra Hakkında"
                                className="relative rounded-3xl shadow-2xl max-w-full lg:max-w-lg transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/10 to-transparent rounded-3xl"></div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#2C1810] mb-6">
                                Binlerce Yıllık Miras
                            </h3>
                            <p className="text-lg text-[#5C4D44] leading-relaxed mb-6">
                                Dombra, Orta Asya bozkırlarının ruhunu yansıtan bir enstrümandır.
                                Binlerce yıllık bir geçmişe sahip olan bu çalgı, Türk kültürünün en önemli
                                sembollerinden biridir.
                            </p>
                            <p className="text-lg text-[#5C4D44] leading-relaxed">
                                Her bir tınısında tarihimizin izlerini bulabilir, ruhunuza dokunan melodilerle
                                atalarımızın hikayelerini hissedebilirsiniz.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-r from-[#2C1810]/5 to-transparent rounded-2xl p-6 border border-[#2C1810]/10">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-[#2C1810] mb-2">Geleneksel Yapı</h4>
                                <p className="text-[#5C4D44] text-sm">İki telli minimalist tasarım</p>
                            </div>

                            <div className="bg-gradient-to-r from-[#2C1810]/5 to-transparent rounded-2xl p-6 border border-[#2C1810]/10">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-[#2C1810] mb-2">Ruhsal Bağ</h4>
                                <p className="text-[#5C4D44] text-sm">Atalarımızın sesi ve mirası</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="mt-20 sm:mt-24">
                    <div className="bg-gradient-to-r from-[#2C1810]/5 to-[#1A0F0A]/5 rounded-3xl p-8 sm:p-12 text-center border border-[#2C1810]/10">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-6xl sm:text-7xl text-[#2C1810]/20 font-serif mb-6">"</div>
                            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C1810] leading-relaxed mb-6">
                                Her yankıda bir miras, her tınıda bir mana saklı.
                            </blockquote>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDombra;
