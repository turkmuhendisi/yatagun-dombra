import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-8 max-w-2xl mx-auto">
                {/* 404 Numarası */}
                <div className="relative">
                    <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] bg-clip-text text-transparent">
                        404
                    </h1>
                    <div className="absolute inset-0 text-8xl sm:text-9xl font-bold text-[#2C1810]/5 transform translate-x-2 translate-y-2 -z-10">
                        404
                    </div>
                </div>

                {/* Başlık ve Açıklama */}
                <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#2C1810]">
                        Bu otağda böyle bir yer bulunamadı
                    </h2>
                    <p className="text-lg text-[#5C4D44] leading-relaxed">
                        Görünüşe göre yanlış bir bağlantıya tıkladınız veya sayfa artık mevcut değil. 
                        Endişelenmeyin, ana sayfaya dönerek aradığınızı bulabilirsiniz.
                    </p>
                </div>

                {/* Ana Sayfa Butonu */}
                <div className="pt-4">
                    <Link to="/">
                        <button className="bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#2C1810]/25 hover:transform hover:scale-105">
                            Ana Sayfaya Dön
                        </button>
                    </Link>
                </div>

                {/* Görsel */}
                <div className="pt-8">
                    <div className="relative">
                        <img
                            src="https://i.imgur.com/qIufhof.png"
                            alt="404 Not Found"
                            className="w-72 sm:w-80 mx-auto rounded-2xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
