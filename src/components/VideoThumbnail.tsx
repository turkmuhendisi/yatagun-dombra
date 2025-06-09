const VideoThumbnail = ({ 
    poster, 
    onClick, 
    isSelected = false 
}: { 
    poster: string; 
    onClick: () => void;
    isSelected?: boolean;
}) => {
    return (
        <div
            className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                isSelected 
                    ? "w-20 h-20" 
                    : "w-16 h-16"
            }`}
            onClick={onClick}
        >
            <img
                src={poster}
                alt="Video Thumbnail"
                className="w-full h-full object-cover brightness-75"
                draggable={false}
            />

            {/* Video Oynatma İkonu */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`p-2 rounded-full transition-all duration-300 ${
                    isSelected 
                        ? "bg-[#2C1810] bg-opacity-90" 
                        : "bg-black bg-opacity-50 group-hover:bg-opacity-70"
                }`}>
                    <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 5v14l11-7z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default VideoThumbnail;