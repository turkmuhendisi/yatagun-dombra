import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/*const resources = {
    tr: {
        translation: {
            welcome: "Hoş Geldiniz",
            about: "Hakkımızda",
            faq: "Sıkça Sorulan Sorular",
            products: "Ürünler",
        },
    },
    en: {
        translation: {
            welcome: "Welcome",
            about: "About Us",
            faq: "Frequently Asked Questions",
            products: "Products",
        },
    },
};*/

i18n.use(initReactI18next).init({
    lng: "tr",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
