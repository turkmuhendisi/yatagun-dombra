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
        <section className="bg-gray-100 py-16 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Başlık */}
                <h2 className="text-4xl font-bold text-center text-black mb-12">Sıkça Sorulan Sorular</h2>

                {/* S.S.S. Akordeon Yapısı */}
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-4 bg-white text-black font-semibold flex justify-between items-center"
                            >
                                {faq.question}
                                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
