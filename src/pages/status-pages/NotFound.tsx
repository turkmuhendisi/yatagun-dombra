import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <h1 className="text-7xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mt-4">Bu otağda böyle bir yer bulunamadı.</h2>
            <p className="text-gray-500 mt-2">Görünüşe göre yanlış bir bağlantıya tıkladınız veya sayfa artık mevcut değil.</p>

            <Link to="/" className="mt-6">
                <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-gray-800">
                    Ana Sayfaya Dön
                </button>
            </Link>

            <img
                src="https://i.imgur.com/qIufhof.png"
                alt="404 Not Found"
                className="w-72 mt-8"
            />
        </div>
    );
};

export default NotFound;
