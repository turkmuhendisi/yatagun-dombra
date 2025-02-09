import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MusicPlayer from "../../../components/MusicPlayer";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
    const navigate = useNavigate();
    return (_jsxs("section", { className: "bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center px-4", children: [_jsxs("div", { className: "max-w-4xl", children: [_jsxs("h1", { className: "text-5xl lg:text-7xl font-bold text-gray-900 mb-4 text-left", children: [_jsx("span", { className: "text-gray-900", children: "Bozk\u0131r ruhunu" }), " \u00F6zg\u00FCrce hissedin diye..."] }), _jsx("p", { className: "text-lg text-gray-600 mb-6", children: "Dombra ile dile gelen her nota, ge\u00E7mi\u015Fin izini s\u00FCrer; atalar\u0131m\u0131z\u0131n kalbinde ta\u015F\u0131d\u0131\u011F\u0131 g\u00FC\u00E7, azim ve irade bu t\u0131n\u0131larda hayat bulur." }), _jsx("button", { className: "bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition", onClick: () => navigate("/dombra-satin-al"), children: "\u00DCr\u00FCnleri Ke\u015Ffet" })] }), _jsx("div", { className: "mt-12", children: _jsx(MusicPlayer, {}) })] }));
}
