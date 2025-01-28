function About() {
    return (
        <section className="bg-gray-100 py-16 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Başlık */}
                <h2 className="text-4xl font-bold text-center text-black mb-12">
                    Hakkımızda
                </h2>

                {/* İçerik Bölümü */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
                    {/* Sol Taraf: Açıklama Metni */}
                    <div className="lg:w-1/2 text-left">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            <span className="font-bold text-black">Yatagun Dombra</span>, bozkırın sesi olan
                            dombra ve Türk kültürüne ait özel el işçiliğiyle hazırlanmış
                            dekoratif ürünleri sizlerle buluşturmak amacıyla kuruldu.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Geçmişten günümüze taşınan tınılar, her bir dombra telinde atalarımızın sesini
                            taşırken, özenle tasarlanan dekoratif ürünlerimiz Türk sanatını evlerinize getiriyor.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Yankılanan her ses, bir milletin hatırasını ve kudretini taşır.
                            Dombra ile dile gelen her nota, geçmişin izini sürer; atalarımızın kalbinde taşıdığı güç,
                            azim ve irade bu tınılarda hayat bulur. Göktürkler’in cesareti, Oğuz Han’ın kudreti,
                            bu sesle birlikte yeniden yükselir. <span
                            className="font-bold text-black">Yatagun Küğ</span> adıyla,
                            dombra ile taşınan bu kadim mirası sizlere sunuyorum.
                            Her tını, sizi tarihin derinliklerine çağırır;
                            dinleyen, sadece bir müzik değil, bir milletin ruhunu hisseder.
                        </p>
                    </div>

                    {/* Sağ Taraf: Görsel */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="src/assets/horses-wp.jpg"
                            alt="Türk Kültürü ve Dombra"
                            className="rounded-lg shadow-lg max-w-full lg:max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
