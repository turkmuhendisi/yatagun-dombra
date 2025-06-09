function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <section className="py-16 sm:py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Başlık */}
                    <div className="text-center mb-16 sm:mb-20">
                        <div className="relative inline-block">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C1810] leading-tight">
                                Hakkımızda
                            </h1>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full"></div>
                        </div>
                        <p className="text-lg sm:text-xl text-[#5C4D44] mt-6 max-w-3xl mx-auto leading-relaxed">
                            Bozkırın sesi olan dombra ve Türk kültürüne ait özel el işçiliği
                        </p>
                    </div>

                    {/* Ana İçerik */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                        {/* Sol Taraf: Metin İçeriği */}
                        <div className="space-y-8">
                            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                                <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Misyonumuz</h3>
                                <p className="text-lg text-[#5C4D44] leading-relaxed">
                                    <span className="font-bold text-[#2C1810]">Yatagun Dombra</span>, bozkırın sesi olan
                                    dombra ve Türk kültürüne ait özel el işçiliğiyle hazırlanmış
                                    dekoratif ürünleri sizlerle buluşturmak amacıyla kuruldu.
                                </p>
                            </div>

                            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                                <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Vizyonumuz</h3>
                                <p className="text-lg text-[#5C4D44] leading-relaxed">
                                    Geçmişten günümüze taşınan tınılar, her bir dombra telinde atalarımızın sesini
                                    taşırken, özenle tasarlanan dekoratif ürünlerimiz Türk sanatını evlerinize getiriyor.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-[#2C1810]/5 to-[#1A0F0A]/5 rounded-3xl p-8 border border-[#2C1810]/10">
                                <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Yatagun Küğ</h3>
                                <p className="text-lg text-[#5C4D44] leading-relaxed mb-4">
                                    Yankılanan her ses, bir milletin hatırasını ve kudretini taşır.
                                    Dombra ile dile gelen her nota, geçmişin izini sürer; atalarımızın kalbinde taşıdığı güç,
                                    azim ve irade bu tınılarda hayat bulur.
                                </p>
                                <p className="text-lg text-[#5C4D44] leading-relaxed">
                                    Göktürkler'in cesareti, Oğuz Han'ın kudreti, bu sesle birlikte yeniden yükselir.
                                    <span className="font-bold text-[#2C1810]"> Yatagun Küğ</span> adıyla,
                                    dombra ile taşınan bu kadim mirası sizlere sunuyorum.
                                    Her tını, sizi tarihin derinliklerine çağırır;
                                    dinleyen, sadece bir müzik değil, bir milletin ruhunu hisseder.
                                </p>
                            </div>
                        </div>

                        {/* Sağ Taraf: Görsel */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/20 to-[#1A0F0A]/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                                <img
                                    src="https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/horse-oAgTXsecJYdmbfjq3ZK0lFMS08MfmM.jpg"
                                    alt="Türk Kültürü ve Dombra"
                                    className="relative rounded-3xl shadow-2xl max-w-full lg:max-w-xl transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/10 to-transparent rounded-3xl"></div>
                            </div>
                        </div>
                    </div>

                    {/* Alt Bölüm: Değerler */}
                    <div className="mt-20 sm:mt-24">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2C1810] mb-12">
                            Değerlerimiz
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#2C1810] mb-2">Kalite</h3>
                                <p className="text-[#5C4D44]">El işçiliği ile özenle hazırlanan ürünler</p>
                            </div>

                            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#2C1810] mb-2">Gelenek</h3>
                                <p className="text-[#5C4D44]">Atalarımızdan miras aldığımız değerler</p>
                            </div>

                            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 text-center sm:col-span-2 lg:col-span-1">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#2C1810] mb-2">Sanat</h3>
                                <p className="text-[#5C4D44]">Türk kültürünün eşsiz sanat eserleri</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
