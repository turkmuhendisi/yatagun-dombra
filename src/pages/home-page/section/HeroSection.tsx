import MusicPlayer from "../../../components/MusicPlayer";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-4xl">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4 text-left">
                    <span className="text-gray-900">Bozkır ruhunu</span> özgürce hissedin diye...
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Dombra ile dile gelen her nota, geçmişin izini sürer; atalarımızın
                    kalbinde taşıdığı güç, azim ve irade bu tınılarda hayat bulur.
                </p>
                <button
                    className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
                    onClick={() => navigate("/dombra-satin-al")}
                >
                    Ürünleri Keşfet
                </button>
            </div>

            <div className="mt-12">
                <MusicPlayer/>
            </div>

            <a
                href="https://www.instagram.com/yatagundombra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 mt-8 lg:mt-16 font-semibold lg:text-xl transition"
            >
                <FontAwesomeIcon icon={faInstagram} size="lg" className="text-black" />
                <span>yatagundombra</span>
            </a>
        </section>
    );
}
