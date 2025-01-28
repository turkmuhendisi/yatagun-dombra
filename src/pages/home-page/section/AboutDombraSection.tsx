const AboutDombra = () => {
    return (
        <section className="bg-gray-100 py-16 text-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:gap-8">
                    {/* Görsel */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/dombra-stock-6zk4MdVk5OIMtNhou8AQJIhrJcazvy.jpg"
                            alt="Dombra Hakkında"
                            className="rounded-lg max-w-full lg:max-w-lg"
                        />
                    </div>

                    {/* Description */}
                    <div className="lg:w-1/2 flex items-center text-lg lg:text-2xl leading-relaxed text-justify">
                        <div>
                            <p className="mb-8">
                                <h2 className="text-3xl lg:text-4xl font-bold my-10 text-center">Dombra</h2>
                                Dombra, Orta Asya bozkırlarının ruhunu yansıtan bir enstrümandır.
                                Binlerce yıllık bir geçmişe sahip olan bu çalgı, Türk kültürünün en önemli
                                sembollerinden biridir.
                                Her bir tınısında tarihimizin izlerini bulabilir, ruhunuza dokunan melodilerle
                                atalarımızın
                                hikayelerini hissedebilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="my-20 text-nowrap lg:text-2xl text-center">
                    ✦ Her yankıda bir miras, her tınıda bir mana saklı. ✦
                </p>
            </div>
        </section>
    );
};

export default AboutDombra;
