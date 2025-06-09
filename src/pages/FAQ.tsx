import { useState } from "react";

const faqs = [
    {
        question: "Dombra nasıl bir enstrümandır?",
        answer: "Dombra, Orta Asya Türklerinin geleneksel bir enstrümanıdır. İki telli yapısı ve bozkırın ruhunu yansıtan melodileriyle bilinir.",
    },
    {
        question: "Ürünler el yapımı mı?",
        answer: "Evet, dombra ve dekoratif ürünlerimizin büyük bir kısmı geleneksel el işçiliği ile üretilmektedir.",
    },
    {
        question: "Siparişler ne kadar sürede teslim edilir?",
        answer: "Siparişleriniz ortalama 3-5 iş günü içinde kargoya verilir. El yapımı özel üretimlerde bu süre biraz daha uzun olabilir.",
    },
    {
        question: "Ürünleriniz hangi malzemelerden yapılmaktadır?",
        answer: "Dombralarımız genellikle ceviz, ardıç ve dut ağacından yapılırken, dekoratif ürünlerde ahşap ve metal işçiliği kullanılmaktadır.",
    },
    {
        question: "Kargo ücreti var mı?",
        answer: "750 TL ve üzeri siparişlerde **kargo ücretsizdir**. Bunun altındaki siparişler için standart kargo ücreti uygulanır.",
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <section className="py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Başlık */}
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <div className="relative inline-block">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight px-4">
                                Sıkça Sorulan Sorular
                            </h1>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full"></div>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-[#5C4D44] mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed px-4">
                            Merak ettiğiniz konular hakkında detaylı bilgiler
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/70 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex justify-between items-center group transition-all duration-300"
                                >
                                    <span className="text-base sm:text-lg md:text-xl font-semibold text-[#2C1810] pr-4 group-hover:text-[#1A0F0A] leading-relaxed">
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                                        openIndex === index ? "rotate-180 scale-110" : "hover:scale-105"
                                    }`}>
                                        <svg 
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2.5} 
                                                d={openIndex === index ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
                                            />
                                        </svg>
                                    </div>
                                </button>
                                
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}>
                                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                                        <div className="bg-gradient-to-r from-[#2C1810]/5 to-transparent rounded-xl p-4 sm:p-5 md:p-6 border-l-4 border-[#2C1810]">
                                            <p className="text-sm sm:text-base md:text-lg text-[#5C4D44] leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Alt Bölüm: İletişim */}
                    <div className="mt-16 sm:mt-20 md:mt-24">
                        <div className="bg-gradient-to-r from-[#2C1810]/5 to-[#1A0F0A]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-[#2C1810]/10">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C1810] mb-3 sm:mb-4">
                                Sorunuz burada yok mu?
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-[#5C4D44] mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                                Başka sorularınız için bizimle iletişime geçebilirsiniz. 
                                Size yardımcı olmaktan mutluluk duyarız.
                            </p>
                            <a 
                                href={`https://wa.me/905355267480`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-emerald-500/25 hover:transform hover:scale-105"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
                                </svg>
                                <span className="hidden xs:inline">WhatsApp ile İletişim</span>
                                <span className="xs:hidden">İletişim</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;
