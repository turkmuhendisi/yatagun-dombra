import MusicPlayer from "../../../components/MusicPlayer";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2C1810]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1A0F0A]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Dombras Image */}
                <div className="flex justify-center mb-4">
                    <img 
                        src= "https://hrow1mwvyrqtjvqe.public.blob.vercel-storage.com/assets/dombras-lwV8MLUSp15VQTVPQu1qo6Opkp2bnX.png" 
                        alt="Dombra Enstrümanları" 
                        className="max-w-md w-full h-auto object-contain"
                    />
                </div>

                {/* Main Hero Content */}
                <div className="space-y-8 py-6">
                    <div className="space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#2C1810] leading-relaxed pb-2">
                            <span className="block">Bozkır ruhunu</span>
                            <span className="bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] bg-clip-text text-transparent">
                                özgürce hissedin diye...
                            </span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] rounded-full mx-auto"></div>
                    </div>
                    
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#5C4D44] leading-relaxed max-w-4xl mx-auto py-4">
                        Dombra ile dile gelen her nota, geçmişin izini sürer; atalarımızın
                        kalbinde taşıdığı güç, azim ve irade bu tınılarda hayat bulur.
                    </p>

                    <div className="py-4">
                        <button
                            className="bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#2C1810]/25 hover:transform hover:scale-105"
                            onClick={() => navigate("/dombra-satin-al")}
                        >
                            Ürünleri Keşfet
                        </button>
                    </div>
                </div>

                {/* Music Player */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-4 text-center">
                        Bozkırın Sesini Dinleyin
                    </h3>
                    <MusicPlayer/>
                </div>

                {/* Instagram Link */}
                <div className="pt-8">
                    <a
                        href="https://www.instagram.com/yatagundombra/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center space-x-3 bg-white/70 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-lg border border-white/20 font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
                        </div>
                        <span className="text-[#2C1810] group-hover:text-[#1A0F0A]">yatagundombra</span>
                        <svg className="w-5 h-5 text-[#2C1810] group-hover:text-[#1A0F0A] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
