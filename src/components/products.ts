import {Product} from "./Product";

const formatUrl = (product: Product) => {
    return product.url
        ? product.url
        : `/urun/${product.id}/${product.name
            .toLowerCase()
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/[^a-z0-9\s-]/g, "") // Özel karakterleri kaldırır
            .replace(/\s+/g, "-")}`; // Boşlukları "-" ile değiştirir
};

export const products: Product[] = [
    {
        id: 1,
        name: "Bozkır",
        price: 10000,
        discountAmount: 1500,
        description: "Orta Seviye Profesyonel Kaplama Dombra",
        url: "https://www.hepsiburada.com/yari-profesyonel-dombra-bozkir-pm-HBC00007V73GR?magaza=Yatagun%20K%C3%BC%C4%9F&",
        features: [
            "Ölçüsü: 48 cm, kompakt yapısıyla rahat taşınabilir ve kolay çalınabilir.",
            "19 perdeli geniş ses aralığı sunarak geleneksel dombra küylerine uyum sağlar.",
            "Özel kaplama tasarım, estetik görünümüyle dikkat çeker ve dombra çalma deneyimini daha keyifli hale getirir.",
            "Derin rezonans ve zengin akustik, net ve berrak ses çıkışı sunar.",
            "Hafif ama dayanıklı yapı, uzun süreli kullanımda konfor sağlar.",
            "Bas ve tiz dengesi optimize edilmiştir, güçlü bas frekansları ve parlak tizlerle dengeli bir ton sunar.",
            "Ahşap burgular, doğal akort stabilitesi sağlayarak uzun vadede sorunsuz bir çalma deneyimi sunar.",
            "Bu dombra, estetik tasarımı ve akustik performansıyla orta seviye dombra severler için mükemmel bir seçenektir.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Kayın ağacından yapılmış gövde, sağlam yapısı ve doğal rezonansıyla güçlü ve dengeli bir ton üretir.",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-1-AJdIFPNKVkAHgrLqMMrDm5Td1eJumI.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-2-FJDarGV90Tr42JGk8Btxvti2fUbM1b.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-3-iNxRBqNiqk8bjSBhTlXcibAQKvN3mX.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-4-ZE1kq3P42aaapS8e3YS6LjbGAbe8S4.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-5-qYNK6lqS9U6GT6UtAL7QMd0zIMWFnd.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-6-XciRqbHTcDFEEewz5rqbCQuc1aqcMR.jpg"
        ],
        video: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/bozk%C4%B1r-teaser-qge9na7GoBz9eHeJfaT8daVOec5MIY.mp4",
        videoThumbnail: "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra1/d1-1-AJdIFPNKVkAHgrLqMMrDm5Td1eJumI.jpg",
        category: "dombra",
        isFeatured: false,
        isStock: true
    },
    {
        id: 2,
        name: "Bozkır Nefesi",
        price: 14000,
        discountAmount: 1000,
        description: "Üst Kalite Profesyonel Dombra",
        url: "https://www.hepsiburada.com/ust-seviye-profesyonel-dombra-bozkir-nefesi-pm-HBC00007V741R?magaza=Yatagun%20K%C3%BC%C4%9F&",
        features: [
            "19 perde ile geniş ses aralığına sahip, hem geleneksel hem modern küylerine uygun.",
            "Ön kapak kemik işlemeli, hem estetik hem de akustik performansa katkı sağlayan zarif ve özel bir tasarıma sahiptir.",
            "Derin ve güçlü rezonans, her notanın berrak ve dengeli duyulmasını sağlar.",
            "Özel tasarlanmış ses deliği, titreşimi optimize ederek dombra sesinin doğal tınısını en iyi şekilde yansıtır.",
            "Oval ve çok parçalı arka kapak, sesin yayılımını artırarak daha zengin ve dolgun bir akustik sunar.",
            "Hafif ama dayanıklı yapı, uzun süreli çalma deneyiminde konfor sağlar.",
            "Güçlü baslar ve parlak tizler, geleneksel ve modern dombra küylerine uyumlu, dengeli bir ton üretir.",
            "Özgün Kazak ve Türk motifleri, kültürel mirası yansıtan şık bir görünüm sunar.",
            "Bu dombra, doğal ahşap rezonansı ve kaliteli işçiliğiyle en saf ve güçlü dombra sesini sunmak için özenle tasarlandı.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Kayın ve çam ağacından ustalıkla üretilmiş, doğal rezonansıyla güçlü ve berrak bir ses sunar.",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-1-zW42CGebmBqfrOiLQj9K40ypvWdMiG.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-2-3mOUzege6ARwjVH6K7RHo5evVxOzbk.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-3-GibbXVgtzDROthVdudMgk0IAG5VaMb.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-4-NVuNP9sohKvQ5H38qNariTsTpd2nQ9.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-5-Ui51PtfLV5jDQUG4BDs56IIMbXgsPR.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra2/d2-6-ELML3zTer7nIJ69HX1BfXb9rXyCOuD.jpg"
        ],
        category: "dombra",
        isFeatured: false,
        isStock: false
    },
    {
        id: 3,
        name: "Tuna",
        price: 6370,
        discountAmount: 370,
        description: "Desenli Amatör Dombra",
        url: "https://www.hepsiburada.com/desenli-amator-dombra-tuna-pm-HBC00007V74IU?magaza=Yatagun%20K%C3%BC%C4%9F&",
        features: [
            "19 perdeli yapısıyla geleneksel dombra icralarına uygun, geniş ses aralığı sunar.",
            "Özel oyma desenli üst kapak, geleneksel Türk ve Kazak motifleriyle süslenmiş estetik bir tasarım sunar.",
            "Hafif yapısı, çalımı kolaylaştırarak uzun süreli kullanımda konfor sağlar.",
            "Oval ve çok parçalı arka kapak, sesin yayılımını artırarak daha güçlü bir rezonans sunar.",
            "Temiz baslar ve dengeli tizler, net ve akıcı bir ton üretir.",
            "Ahşap burgular, doğal bir akort stabilitesi sağlayarak uzun ömürlü kullanım sunar.",
            "Bu dombra, amatör ve orta seviye dombra icracıları için ideal olup, hem estetik hem de müzikal performans açısından dengeli bir deneyim sunuyor.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Dut ağacından üretilmiş gövde, sıcak ve doğal bir ton karakteri sunarak dengeli bir ses üretir.",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-1-okwONo9n0LGskYO9RV3QeIeoxuyykd.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-2-zNpeMGuEbz933TLa1pMCcfGhDhxSZT.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-3-UrXCMoO8MY7ATNFI0rSjoNN23N7IEz.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-4-a8uvUphaL6UDXhx2GK320CiR0SlxqE.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-5-8725xaW417I7znHAXkg3yuWIk6LuU8.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra3/d3-6-2eZYTKD2hom9mD3Ph8Noa52QWs6Hac.jpg"
        ],
        category: "dombra",
        isFeatured: false,
        isStock: false
    },
    {
        id: 4,
        name: "Gök",
        price: 10000,
        discountAmount: 1000,
        description: "Kartal Motifli Orta Seviye Dombra",
        url: "https://www.hepsiburada.com/yari-profesyonel-dombra-gok-pm-HBC00007V74CA?magaza=Yatagun%20K%C3%BC%C4%9F&",
        features: [
            "19 perde yapısıyla geniş bir tonal aralık sunar, dengeli ve net ses üretimi sağlar.",
            "Özel oyma kartal motifi, estetik bir görünüm sunarken kültürel ve sanatsal bir kimlik kazandırır.",
            "Derin ve güçlü rezonans, her notanın berrak ve dengeli duyulmasını sağlar.",
            "Özel tasarlanmış ses deliği, titreşimi optimize ederek dombra sesinin doğal tınısını en iyi şekilde yansıtır.",
            "Oval ve çok parçalı arka kapak, sesin yayılımını artırarak daha zengin ve dolgun bir akustik sunar.",
            "Hafif ama dayanıklı yapı, uzun süreli çalma deneyiminde konfor sağlar.",
            "Dengeli baslar ve parlak tizler, geleneksel ve modern dombra küylerine uyumlu, temiz ve güçlü bir ton üretir.",
            "Bu dombra, doğal ahşap rezonansı, estetik tasarımı ve kaliteli işçiliğiyle hem görselliği hem de müzikal performansı bir arada sunuyor.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Kayın ağacından üretilmiş gövde, güçlü rezonansıyla doğal ve zengin bir ton sunar.",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-1-N4G0FXpZTTuBw6fOHhO70itWBS1ykt.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-2-N903cOZRwLlsMe3cdR4daH8WXnppwt.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-3-ERNz7e2ABDKp7Cqur9RvKTKYLejCzF.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-4-bZbslRc6bCCX24XZAaePGon0P0URdL.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-5-plQsdrIzCmi4wRXBDPkEtBOqLbyzit.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra4/d4-6-mMcxhuSC91ioJLGF646ivadiR86FA1.jpg"
        ],
        category: "dombra",
        isFeatured: false,
        isStock: true
    },
    {
        id: 6,
        name: "Yılkı",
        price: 6500,
        discountAmount: 500,
        description: "At Desenli Amatör Dombra",
        url: "https://www.hepsiburada.com/at-desenli-amator-dombra-yilki-pm-HBC00007Y81ZB?magaza=Yatagun%20K%C3%BC%C4%9F",
        features: [
            "19 perdeli yapısıyla geleneksel dombra icralarına uygun, geniş ses aralığı sunar.",
            "Özel oyma desenli üst kapak, geleneksel Türk ve Kazak motifleriyle süslenmiş estetik bir tasarım sunar.",
            "Hafif yapısı, çalımı kolaylaştırarak uzun süreli kullanımda konfor sağlar.",
            "Oval ve çok parçalı arka kapak, sesin yayılımını artırarak daha güçlü bir rezonans sunar.",
            "Temiz baslar ve dengeli tizler, net ve akıcı bir ton üretir.",
            "Ahşap burgular, doğal bir akort stabilitesi sağlayarak uzun ömürlü kullanım sunar.",
            "Bu dombra, amatör ve orta seviye dombra icracıları için ideal olup, hem estetik hem de müzikal performans açısından dengeli bir deneyim sunuyor.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Gürgen ve ceviz ağacı kombinasyonu ile üretilmiştir.",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra6/d6-3-k2jnr6KOApoGoW0NeG3uoesA5tLZBm.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra6/d6-1-997EjUHGMyyzdoEgAezYvzWM7dz760.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra6/d6-2-3AB7hn2Ie96jUZziQYljaszyVqzkIB.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra6/d6-4-IlQeyqMoh34iO4aHG4qxy7boGM726P.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra6/d6-5-CZ22ma7R1uS1foWkpSVoSWX1dEvfkb.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra6/d6-6-x0yUzcwVt5vPcMjlljmvivKkm0gG4Z.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra6/d6-7-ymqDiURIYDK26kHLJUUg4eqSDggz4U.webp"
        ],
        category: "dombra",
        isFeatured: false,
        isStock: false
    },
    {
        id: 7,
        name: "Toybozkır",
        price: 6500,
        discountAmount: 500,
        description: "Amatör Dombra",
        url: "https://www.hepsiburada.com/amator-dombra-dombira-toybozkir-pm-HBC000089W5R8?magaza=Yatagun%20K%C3%BC%C4%9F",
        features: [
            "19 perdeli yapısıyla geleneksel dombra icralarına uygun, geniş ses aralığı sunar.",
            "Doğal Dut Ağacı Gövde – Doğal dut ağacından üretilmiş gövdesi, sıcak, dengeli ve tok bir ses karakteri sunar. Ahşabın doğal yapısı, her dokunuşta eşsiz bir his verir.",
            "Özel Oyma Desenli Kapak – Türk ve Kazak motifleri ile süslenmiş, el işçiliğiyle hazırlanmış üst kapak, bu enstrümana sadece bir müzik aleti değil, aynı zamanda sanatsal bir değer kazandırıyor.",
            "Güçlü Rezonans ve Net Tonlar – Oval ve çok parçalı arka kapak yapısı, sesi en iyi şekilde yayarak her notanın güçlü ve berrak duyulmasını sağlar. Temiz baslar ve dengeli tizler ile net ve akıcı bir ton üretimi sunar.",
            "Ahşap Burgular ve Uzun Süreli Akort Stabilitesi – Dayanıklı ahşap burgular sayesinde, akort kolay kolay bozulmaz ve uzun süre sabit kalabilir.",
            "Hava Şartlarına Duyarlılık – Ahşap yapısı nedeniyle sıcaklık ve nem değişimlerinden etkilenebilir. Sıcak havalarda: Ahşap genleşebilir, teller gevşeyebilir ve akort düşebilir.Soğuk havalarda: Ahşap sıkışabilir, teller gerilebilir ve akort yükselebilir.",
            "Hafif ve Ergonomik Yapı – Uzun süreli kullanımlarda bile bilekleri yormaz, kolay çalım imkanı sunar. Yeni başlayanlar için de rahat bir öğrenme süreci sağlar.",
            "Geleneksel ve Modern Kullanıma Uygun – Hem bireysel performanslarda hem de topluluk içinde çalım için idealdir. Geleneksel müziğin yanı sıra farklı türlerde icra etmek isteyenler için de uygundur.",
            " Yanında gelen aksesuarlar: Taşıma kılıfı (modele göre değişiklik gösterebilir).Bakım önerisi: Ahşap yüzeyi uzun ömürlü kullanabilmek için doğrudan güneş ışığından ve nemli ortamlardan uzak tutunuz. Düzenli olarak kuru bir bezle temizleyerek parlaklığını koruyabilirsiniz.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Dut Ağacı",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra7/d7-1-esQK2l8LpmDIjoNaaSZl4VjjI0Mqog.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra7/d7-2-brHlKc7ZeNZx8lSF99nGEukwRkjAbt.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra7/d7-3-cNpvVBb77fxY5qBhDEqUM3dGtlAhWj.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra7/d7-4-TrTKr5JXFmgLUdmhxfk2pnMdVm8uPX.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra7/d7-5-2VQ10v22T8hJbsIA3Ye1cVSpBFa8yJ.webp"
        ],
        category: "dombra",
        isFeatured: true,
        isStock: false
    },
    {
        id: 8,
        name: "Altay",
        price: 6500,
        discountAmount: 500,
        description: "Desenli Amatör Dombra",
        url: "",
        features: [
            "19 perdeli yapısıyla geleneksel dombra icralarına uygun, geniş ses aralığı sunar.",
            "Doğal Dut Ağacı Gövde – Doğal dut ağacından üretilmiş gövdesi, sıcak, dengeli ve tok bir ses karakteri sunar. Ahşabın doğal yapısı, her dokunuşta eşsiz bir his verir.",
            "Özel Oyma Desenli Kapak – Türk ve Kazak motifleri ile süslenmiş, el işçiliğiyle hazırlanmış üst kapak, bu enstrümana sadece bir müzik aleti değil, aynı zamanda sanatsal bir değer kazandırıyor.",
            "Güçlü Rezonans ve Net Tonlar – Oval ve çok parçalı arka kapak yapısı, sesi en iyi şekilde yayarak her notanın güçlü ve berrak duyulmasını sağlar. Temiz baslar ve dengeli tizler ile net ve akıcı bir ton üretimi sunar.",
            "Ahşap Burgular ve Uzun Süreli Akort Stabilitesi – Dayanıklı ahşap burgular sayesinde, akort kolay kolay bozulmaz ve uzun süre sabit kalabilir.",
            "Hafif ve Ergonomik Yapı – Uzun süreli kullanımlarda bile bilekleri yormaz, kolay çalım imkanı sunar. Yeni başlayanlar için de rahat bir öğrenme süreci sağlar.",
            "Hava Şartlarına Duyarlılık – Ahşap yapısı nedeniyle sıcaklık ve nem değişimlerinden etkilenebilir. Sıcak havalarda: Ahşap genleşebilir, teller gevşeyebilir ve akort düşebilir. Soğuk havalarda: Ahşap sıkışabilir, teller gerilebilir ve akort yükselebilir.",
            "Yanında gelen aksesuarlar: Taşıma kılıfı (modele göre değişiklik gösterebilir).Bakım önerisi: Ahşap yüzeyi uzun ömürlü kullanabilmek için doğrudan güneş ışığından ve nemli ortamlardan uzak tutunuz. Düzenli olarak kuru bir bezle temizleyerek parlaklığını koruyabilirsiniz.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Dut Ağacı",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra8/d8-1-0x5GtpUn2anorJ8ei80kOCy2vfap2W.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra8/d8-2-CjZP2qWB6n87UQSu3nda8Ml3jotr4K.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra8/d8-3-4z7pMCFW7Bv36gtEsDB4SqjKL8d0AE.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra8/d8-4-bVfigaU7Og9VQhEbBvZxt9XkmHXnds.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra8/d8-5-DJsqZ6Qow83qZZBD1xWj0aguKnEZDS.webp"
        ],
        category: "dombra",
        isFeatured: false,
        isStock: false
    },
    {
        id: 9,
        name: "Tınlay",
        price: 10000,
        discountAmount: 500,
        description: "Geleneksel Motifli Yarı Profesyonel Dombra",
        url: "https://www.hepsiburada.com/geleneksel-motifli-yari-profesyonel-dombra-dombira-tinlay-pm-HBC000089W4B5?magaza=Yatagun%20K%C3%BC%C4%9F",
        features: [
            "19 Perdeli Geniş Tonal Aralık – Geleneksel ve modern dombra/dombıra müziği için mükemmel bir ses karakteri sunar. Temiz ve güçlü baslar ile parlak tizler arasında dengeli bir frekans aralığına sahiptir.",
            "Amatör Dombralar/Dombıralara Göre Daha Dayanıklı Sap – Daha sağlam bir tutuş ve gelişmiş bir çalım hissi sunar. Daha kontrollü ve hassas bir icra sağlar.",
            "Özel Oyma Motifler – Türk ve Kazak kültürüne özgü geleneksel desenlerle birlikte sadece bir müzik aleti değil, aynı zamanda sanatsal bir obje sunar. Her bir motif, ustaların el işçiliğiyle özel olarak hazırlanmıştır.",
            "Derin ve Güçlü Rezonans – Oval ve çok parçalı arka kapak yapısı sayesinde her notanın berrak ve güçlü duyulmasını sağlar, sahnede ve bireysel icralarda üstün bir akustik sunar.",
            "Özel Tasarlanmış Ses Deliği – Titreşimi optimize eden yapısıyla dombra/dombıra sesinin doğal tınısını en iyi şekilde yansıtır ve daha geniş bir frekans aralığı oluşturur.",
            "Hafif ama Dayanıklı Yapı – Gelişmiş malzeme kullanımıyla üretilmiş olup, ergonomik yapısıyla uzun süreli çalımda bile rahatlık sağlar. Biraz daha ağır ama daha dengeli bir yapıya sahiptir.",
            "Kayın ağacı, güçlü rezonansıyla doğal ve zengin bir ton sunar. Kaplama: El işçiliği ile şekillendirilmiş, estetik ve dayanıklı yüzey.",
            "Hava Şartlarına Duyarlılık: Sıcak havalarda: Ahşap genleşebilir, teller gevşeyebilir ve akort düşebilir.Soğuk havalarda: Ahşap sıkışabilir, teller gerilebilir ve akort yükselebilir.",
            "Yanında gelen aksesuarlar: Taşıma kılıfı (modele göre değişiklik gösterebilir).Bakım önerisi: Ahşap yüzeyi uzun ömürlü kullanabilmek için doğrudan güneş ışığından ve nemli ortamlardan uzak tutunuz. Düzenli olarak kuru bir bezle temizleyerek parlaklığını koruyabilirsiniz.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Kayın Ağacı",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra9/d9-1-yrLSokjhhJrm2kyGYaXyVactRB9BN3.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra9/d9-2-IZCgxJsIbsEpEalucnJVIRPd71enZA.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra9/d9-3-TmXzNcG2kjtbg0AZiFKAXN88uKJ5Nj.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra9/d9-4-IstUi2xdNk1RlTh8CKa34GN8JFxA8V.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra9/d9-5-y84DyX1qTOjbn5YRoWcEZPNc8huLVx.webp"
        ],
        category: "dombra",
        isFeatured: true,
        isStock: false
    },
    {
        id: 10,
        name: "Köktay",
        price: 10000,
        discountAmount: 500,
        description: "At Desenli Yarı Profesyonel Dombra",
        url: "https://www.hepsiburada.com/at-desenli-yari-profesyonel-dombra-dombira-koktay-pm-HBC000089W4WK?magaza=Yatagun%20K%C3%BC%C4%9F",
        features: [
            "19 Perdeli Geniş Tonal Aralık – Geleneksel ve modern dombra/dombıra müziği için mükemmel bir ses karakteri sunar. Temiz ve güçlü baslar ile parlak tizler arasında dengeli bir frekans aralığına sahiptir.",
            "Amatör Dombralar/Dombıralara Göre Daha Dayanıklı Sap – Daha sağlam bir tutuş ve gelişmiş bir çalım hissi sunar. Daha kontrollü ve hassas bir icra sağlar.",
            "Özel Oyma Motifler – Türk ve Kazak kültürüne özgü geleneksel desenlerle birlikte sadece bir müzik aleti değil, aynı zamanda sanatsal bir obje sunar. Her bir motif, ustaların el işçiliğiyle özel olarak hazırlanmıştır.",
            "Derin ve Güçlü Rezonans – Oval ve çok parçalı arka kapak yapısı sayesinde her notanın berrak ve güçlü duyulmasını sağlar, sahnede ve bireysel icralarda üstün bir akustik sunar.",
            "Özel Tasarlanmış Ses Deliği – Titreşimi optimize eden yapısıyla dombra/dombıra sesinin doğal tınısını en iyi şekilde yansıtır ve daha geniş bir frekans aralığı oluşturur.",
            "Hafif ama Dayanıklı Yapı – Gelişmiş malzeme kullanımıyla üretilmiş olup, ergonomik yapısıyla uzun süreli çalımda bile rahatlık sağlar. Biraz daha ağır ama daha dengeli bir yapıya sahiptir.",
            "Kayın ağacı, güçlü rezonansıyla doğal ve zengin bir ton sunar.Kaplama: El işçiliği ile şekillendirilmiş, estetik ve dayanıklı yüzey.",
            "Hava Şartlarına Duyarlılık: Sıcak havalarda: Ahşap genleşebilir, teller gevşeyebilir ve akort düşebilir.Soğuk havalarda: Ahşap sıkışabilir, teller gerilebilir ve akort yükselebilir.",
            "Yanında gelen aksesuarlar: Taşıma kılıfı (modele göre değişiklik gösterebilir).Bakım önerisi: Ahşap yüzeyi uzun ömürlü kullanabilmek için doğrudan güneş ışığından ve nemli ortamlardan uzak tutunuz. Düzenli olarak kuru bir bezle temizleyerek parlaklığını koruyabilirsiniz.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Kayın Ağacı",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra10/d10-1-PyxsRYOeUIYVIrNm9eZsW7PnJ7OVLa.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra10/d10-2-HD0hYoUoILp6kKcmYHOAq41H8c64oy.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra10/d10-3-wCUIm1zmo9E3PaqhDaZrF4JoVaO40j.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra10/d10-4-VZ9Aejvr3gH7zQgD7aSb1qFEmhKScz.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra10/d10-5-TVN2o9toJdXakvQzcLCi2mrvUkeSgv.webp"
        ],
        category: "dombra",
        isFeatured: true,
        isStock: true
    },
    {
        id: 11,
        name: "Künbatır",
        price: 10000,
        discountAmount: 500,
        description: "Geleneksel Motifli Yarı Profesyonel Dombra",
        url: "https://www.hepsiburada.com/geleneksel-motifli-yari-profesyonel-dombra-dombira-kunbatir-pm-HBC000089W39F?magaza=Yatagun%20K%C3%BC%C4%9F",
        features: [
            "19 Perdeli Geniş Tonal Aralık – Geleneksel ve modern dombra/dombıra müziği için mükemmel bir ses karakteri sunar. Temiz ve güçlü baslar ile parlak tizler arasında dengeli bir frekans aralığına sahiptir.",
            "Amatör Dombralar/Dombıralara Göre Daha Dayanıklı Sap – Daha sağlam bir tutuş ve gelişmiş bir çalım hissi sunar. Daha kontrollü ve hassas bir icra sağlar.",
            "Özel Oyma Motifler – Türk ve Kazak kültürüne özgü geleneksel desenlerle birlikte sadece bir müzik aleti değil, aynı zamanda sanatsal bir obje sunar. Her bir motif, ustaların el işçiliğiyle özel olarak hazırlanmıştır.",
            "Derin ve Güçlü Rezonans – Oval ve çok parçalı arka kapak yapısı sayesinde her notanın berrak ve güçlü duyulmasını sağlar, sahnede ve bireysel icralarda üstün bir akustik sunar.",
            "Özel Tasarlanmış Ses Deliği – Titreşimi optimize eden yapısıyla dombra/dombıra sesinin doğal tınısını en iyi şekilde yansıtır ve daha geniş bir frekans aralığı oluşturur.",
            "Hafif ama Dayanıklı Yapı – Gelişmiş malzeme kullanımıyla üretilmiş olup, ergonomik yapısıyla uzun süreli çalımda bile rahatlık sağlar. Biraz daha ağır ama daha dengeli bir yapıya sahiptir.",
            "Kayın ağacı, güçlü rezonansıyla doğal ve zengin bir ton sunar.Kaplama: El işçiliği ile şekillendirilmiş, estetik ve dayanıklı yüzey.",
            "Hava Şartlarına Duyarlılık: Sıcak havalarda: Ahşap genleşebilir, teller gevşeyebilir ve akort düşebilir.Soğuk havalarda: Ahşap sıkışabilir, teller gerilebilir ve akort yükselebilir.",
            "Yanında gelen aksesuarlar: Taşıma kılıfı (modele göre değişiklik gösterebilir).Bakım önerisi: Ahşap yüzeyi uzun ömürlü kullanabilmek için doğrudan güneş ışığından ve nemli ortamlardan uzak tutunuz. Düzenli olarak kuru bir bezle temizleyerek parlaklığını koruyabilirsiniz.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Kayın Ağacı",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra11/d11-1-PzLspvfPayK2XoLvgOdMQenDuWuoHs.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra11/d11-2-7nB6NTuNkgBpbXHX9s12fdDpN1i6WX.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra11/d11-3-caVjv9RSIoevOEDPuQBUChROLmeyix.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra11/d11-4-6tPOxDTqHEeFRLW6dc5QKliGhCh0Qf.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra11/d11-5-qN5Clnpw8BfIZBUntC7ND2mPFDmFwm.webp"
        ],
        category: "dombra",
        isFeatured: true,
        isStock: true
    },
    {
        id: 12,
        name: "Gök (Siyah)",
        price: 10000,
        discountAmount: 500,
        description: "Kartal Motifli Yarı Profesyonel Dombra",
        url: "https://www.hepsiburada.com/kartal-desenli-yari-profesyonel-dombra-dombira-gok-siyah-pm-HBC000089W23E?magaza=Yatagun%20K%C3%BC%C4%9F",
        features: [
            "19 Perdeli Geniş Tonal Aralık – Geleneksel ve modern dombra/dombıra müziği için mükemmel bir ses karakteri sunar. Temiz ve güçlü baslar ile parlak tizler arasında dengeli bir frekans aralığına sahiptir.",
            "Amatör Dombralar/Dombıralara Göre Daha Dayanıklı Sap – Daha sağlam bir tutuş ve gelişmiş bir çalım hissi sunar. Daha kontrollü ve hassas bir icra sağlar.",
            "Özel Oyma Motifler – Türk ve Kazak kültürüne özgü geleneksel desenlerle birlikte sadece bir müzik aleti değil, aynı zamanda sanatsal bir obje sunar. Her bir motif, ustaların el işçiliğiyle özel olarak hazırlanmıştır.",
            "Derin ve Güçlü Rezonans – Oval ve çok parçalı arka kapak yapısı sayesinde her notanın berrak ve güçlü duyulmasını sağlar, sahnede ve bireysel icralarda üstün bir akustik sunar.",
            "Özel Tasarlanmış Ses Deliği – Titreşimi optimize eden yapısıyla dombra/dombıra sesinin doğal tınısını en iyi şekilde yansıtır ve daha geniş bir frekans aralığı oluşturur.",
            "Hafif ama Dayanıklı Yapı – Gelişmiş malzeme kullanımıyla üretilmiş olup, ergonomik yapısıyla uzun süreli çalımda bile rahatlık sağlar. Biraz daha ağır ama daha dengeli bir yapıya sahiptir.",
            "Kayın ağacı, güçlü rezonansıyla doğal ve zengin bir ton sunar.Kaplama: El işçiliği ile şekillendirilmiş, estetik ve dayanıklı yüzey.",
            "Hava Şartlarına Duyarlılık: Sıcak havalarda: Ahşap genleşebilir, teller gevşeyebilir ve akort düşebilir.Soğuk havalarda: Ahşap sıkışabilir, teller gerilebilir ve akort yükselebilir.",
            "Yanında gelen aksesuarlar: Taşıma kılıfı (modele göre değişiklik gösterebilir).Bakım önerisi: Ahşap yüzeyi uzun ömürlü kullanabilmek için doğrudan güneş ışığından ve nemli ortamlardan uzak tutunuz. Düzenli olarak kuru bir bezle temizleyerek parlaklığını koruyabilirsiniz.",
            "Peşin fiyatına taksit imkânı."
        ],
        reviews: [],
        metarial: "Kayın Ağacı",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra12/d12-1-tbfbwQ59fFwviKTDQmMoFAuPU0Kjki.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra12/d12-2-DqKK7hsWVDasup27qi2e2qb3AXQ5Vx.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra12/d12-3-7HwsXLDyUZrGy5etqH2un02dVTI72R.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra12/d12-4-nYxvuN3O2DJaIE1rG5nEGNbS6FTKjG.webp",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/dombras/dombra12/d12-5-GT87siaxXeE1e6AjpAl2jlAstvl98S.webp"
        ],
        category: "dombra",
        isFeatured: true,
        isStock: false
    },
    {
        id: 13,
        name: "Bozkurt Vakti Siyah",
        price: 800,
        discountAmount: 150,
        description: "Yatagun Özel Tasarım Ahşap Duvar Saati",
        url: "https://www.hepsiburada.com/bozkurt-vakti-ozel-tasarim-duvar-saati-pm-HBC00007VJG8Q?magaza=Yatagun%20K%C3%BC%C4%9F",
        features: [
            "Türk kültürünün özünü taşıyan bu özel tasarım ahşap saat, " +
            "geçmişin izlerini ve Bozkır ruhunu günümüze taşıyor. Göktürk motifleri, " +
            "Türk tamgaları ve geleneksel sembollerle bezeli bu eşsiz saat, sadece zamanı değil, " +
            "aynı zamanda bir kültürü temsil ediyor." +
            "Merkezde yer alan Bozkurt, Türk milletinin bağımsızlık ve özgürlük ruhunu simgelerken, " +
            "çevresindeki semboller Oğuzlardan Göktürklere kadar uzanan derin bir mirası yansıtıyor. " +
            "Doğal ahşap malzeme ile üretilen bu saat, estetik tasarımı ve ince işçiliğiyle bulunduğu ortama asalet ve karakter katıyor.",
            "Saatin tasarımında Türklerin kadim sembolleri, Göktürk alfabesi, ay-yıldız, ok ve yay, " +
            "kurt başı ve daha birçok anlamlı detay özenle işlenmiştir. " +
            "Her bir detayıyla ecdadımızın izini taşıyan Yatagun Özel Tasarım Saati, evinizde, ofisinizde veya özel " +
            "koleksiyonunuzda zamana anlam katacak bir parça olacak.",
            "🛠 El işçiliği lazer kesim.",
            "🌿 Doğal ahşap ve zarif tasarım.",
            "⏳ Tarih ve kültürle iç içe bir zaman yolculuğu.",
            "📌 Özel üretim – Sınırlı stok"
        ],
        reviews: [],
        metarial: "6mm MDF",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock1/c1-1-HWnm5bZ1lwfA0uFVDETjpR5MsRIsos.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock1/c1-2-in7i6xqxe1FPBkbOI7OhkeJzly5lhx.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock1/c1-3-ygWtKcoMKbOKMnoOFI6PTdnxTRnDJA.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock1/c1-4-kWWiMcX7D0nFVv3M3kVjAv9kJ66GJo.jpg"
        ],
        category: "dekorasyon",
        isFeatured: false,
        isStock: true
    },
    {
        id: 14,
        name: "Bozkurt Vakti Kahverengi",
        price: 800,
        discountAmount: 150,
        description: "Yatagun Özel Tasarım Ahşap Duvar Saati",
        url: "https://www.hepsiburada.com/bozkurt-vakti-ozel-tasarim-duvar-saati-pm-HBC00007VJIU8?magaza=Yatagun%20K%C3%BC%C4%9F",
        features: [
            "Türk kültürünün özünü taşıyan bu özel tasarım ahşap saat, " +
            "geçmişin izlerini ve Bozkır ruhunu günümüze taşıyor. Göktürk motifleri, " +
            "Türk tamgaları ve geleneksel sembollerle bezeli bu eşsiz saat, sadece zamanı değil, " +
            "aynı zamanda bir kültürü temsil ediyor." +
            "Merkezde yer alan Bozkurt, Türk milletinin bağımsızlık ve özgürlük ruhunu simgelerken, " +
            "çevresindeki semboller Oğuzlardan Göktürklere kadar uzanan derin bir mirası yansıtıyor. " +
            "Doğal ahşap malzeme ile üretilen bu saat, estetik tasarımı ve ince işçiliğiyle bulunduğu ortama asalet ve karakter katıyor.",
            "Saatin tasarımında Türklerin kadim sembolleri, ay-yıldız, ok ve yay, " +
            "kurt başı ve daha birçok anlamlı detay özenle işlenmiştir. " +
            "Her bir detayıyla ecdadımızın izini taşıyan Yatagun Özel Tasarım Saati, evinizde, ofisinizde veya özel " +
            "koleksiyonunuzda zamana anlam katacak bir parça olacak.",
            "🛠 El işçiliği lazer kesim.",
            "🌿 Doğal ahşap ve zarif tasarım.",
            "⏳ Tarih ve kültürle iç içe bir zaman yolculuğu.",
            "📌 Özel üretim – Sınırlı stok"
        ],
        reviews: [],
        metarial: "6mm MDF",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock2/c2-1-ByIRCtKzAbyMxEYKYybrcCB4O2Cav9.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock2/c2-2-qw9DMVw1jo8YkVDXs9zPmZZCtTcoEc.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock2/c2-3-Ou8l3EKjKfwd7Vr5wMaXGxj894QZLR.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock2/c2-4-N5qZlY1DkPfA9j3JABQsvFfUGCion6.jpg"
        ],
        category: "dekorasyon",
        isFeatured: false,
        isStock: true
    },
    {
        id: 15,
        name: "Şahlanış",
        price: 750,
        discountAmount: 150,
        description: "Yatagun Özel Tasarım Ahşap Duvar Saati",
        url: "https://www.hepsiburada.com/sahlanis-siyah-ozel-tasarim-duvar-saati-pm-HBC00007VJHNE?magaza=Yatagun%20K%C3%BC%C4%9F",
        features: [
            "Türk kültürünün özünü taşıyan bu özel tasarım ahşap saat, " +
            "geçmişin izlerini ve Bozkır ruhunu günümüze taşıyor. Göktürk motifleri, " +
            "Türk tamgaları ve geleneksel sembollerle bezeli bu eşsiz saat, sadece zamanı değil, " +
            "aynı zamanda bir kültürü temsil ediyor." +
            "Merkezde yer alan Bozkurt, Türk milletinin bağımsızlık ve özgürlük ruhunu simgelerken, " +
            "çevresindeki semboller Oğuzlardan Göktürklere kadar uzanan derin bir mirası yansıtıyor. " +
            "Doğal ahşap malzeme ile üretilen bu saat, estetik tasarımı ve ince işçiliğiyle bulunduğu ortama asalet ve karakter katıyor.",
            "Saatin tasarımında Türklerin kadim sembolleri, ay-yıldız, ok ve yay, " +
            "kurt başı ve daha birçok anlamlı detay özenle işlenmiştir. " +
            "Her bir detayıyla ecdadımızın izini taşıyan Yatagun Özel Tasarım Saati, evinizde, ofisinizde veya özel " +
            "koleksiyonunuzda zamana anlam katacak bir parça olacak.",
            "🛠 El işçiliği lazer kesim.",
            "🌿 Doğal ahşap ve zarif tasarım.",
            "⏳ Tarih ve kültürle iç içe bir zaman yolculuğu.",
            "📌 Özel üretim – Sınırlı stok"
        ],
        reviews: [],
        metarial: "6mm MDF",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock3/c3-1-05FVkMhLHRhVcCwCogLCdfjKn9MyP1.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock3/c3-2-740RtEBwJrilpmjlC3UvzRyleknki9.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock3/c3-3-mkHvPclxk7eGi0kqbqTNzXVDwMuteQ.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock3/c3-4-ii34mlMTMY1cubPSVLyb55Vf4XImAr.jpg"
        ],
        category: "dekorasyon",
        isFeatured: false,
        isStock: true
    },
    {
        id: 16,
        name: "Kızıl Kartal",
        price: 800,
        discountAmount: 150,
        description: "Yatagun Özel Tasarım Ahşap Duvar Saati",
        url: "",
        features: [
            "Türk kültürünün özünü taşıyan bu özel tasarım ahşap saat, " +
            "geçmişin izlerini ve Bozkır ruhunu günümüze taşıyor. Göktürk motifleri, " +
            "Türk tamgaları ve geleneksel sembollerle bezeli bu eşsiz saat, sadece zamanı değil, " +
            "aynı zamanda bir kültürü temsil ediyor." +
            "Merkezde yer alan Bozkurt, Türk milletinin bağımsızlık ve özgürlük ruhunu simgelerken, " +
            "çevresindeki semboller Oğuzlardan Göktürklere kadar uzanan derin bir mirası yansıtıyor. " +
            "Doğal ahşap malzeme ile üretilen bu saat, estetik tasarımı ve ince işçiliğiyle bulunduğu ortama asalet ve karakter katıyor.",
            "Saatin tasarımında Türklerin kadim sembolleri, ay-yıldız, ok ve yay, " +
            "kurt başı ve daha birçok anlamlı detay özenle işlenmiştir. " +
            "Her bir detayıyla ecdadımızın izini taşıyan Yatagun Özel Tasarım Saati, evinizde, ofisinizde veya özel " +
            "koleksiyonunuzda zamana anlam katacak bir parça olacak.",
            "🛠 El işçiliği lazer kesim.",
            "🌿 Doğal ahşap ve zarif tasarım.",
            "⏳ Tarih ve kültürle iç içe bir zaman yolculuğu.",
            "📌 Özel üretim – Sınırlı stok"
        ],
        reviews: [],
        metarial: "6mm MDF",
        images: [
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock4/c4-1-jqHWVO0eUAkC6ZoQNdkw4c4XfsWj42.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock4/c4-2-3S7rtQU5b2kM9VpeDJKzP4bzvZc8sE.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock4/c4-3-KlImvkaCeB3Zgp1jlvzCEA2X8eId9t.jpg",
            "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/products/decorations/clock4/c4-4-ZUpRQP4ldBAZNvmtGZgjA5srQC76dn.jpg"
        ],
        category: "dekorasyon",
        isFeatured: false,
        isStock: true
    }
];

products.forEach((product) => {
    if (!product.url) {
        product.url = formatUrl(product);
    }
});