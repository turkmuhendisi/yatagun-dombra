import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (_jsx("section", { className: "bg-gray-100 py-16 min-h-screen", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold text-center text-black mb-12", children: "S\u0131k\u00E7a Sorulan Sorular" }), _jsx("div", { className: "max-w-3xl mx-auto", children: faqs.map((faq, index) => (_jsxs("div", { className: "mb-4 border border-gray-300 rounded-lg overflow-hidden", children: [_jsxs("button", { onClick: () => toggleFAQ(index), className: "w-full text-left px-6 py-4 bg-white text-black font-semibold flex justify-between items-center", children: [faq.question, _jsx("span", { className: "text-xl", children: openIndex === index ? "−" : "+" })] }), openIndex === index && (_jsx("div", { className: "px-6 py-4 bg-gray-50 text-gray-700", children: faq.answer }))] }, index))) })] }) }));
}
export default FAQ;
