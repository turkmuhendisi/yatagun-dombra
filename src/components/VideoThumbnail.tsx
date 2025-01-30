const VideoThumbnail = ({ poster, onClick }: { poster: string; onClick: () => void }) => {
    return (
        <div
            className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 cursor-pointer rounded-md border-2 border-gray-200"
            onClick={onClick}
        >
            <img
                src={poster}
                alt="Video Thumbnail"
                className="w-full h-full object-cover rounded-md brightness-75"
            />

            {/* Video Oynatma İkonu */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 p-2 rounded-full">
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
