import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaPause, FaPlay, FaSpotify } from "react-icons/fa";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";
import bozkirdombra from "../assets/musics/bozkır-ruhu-dombra.mp3";
import bozkir from "../assets/musics/bozkır-ruhu.mp3";
import bulut from "../assets/musics/bulutların-arasında.mp3";
const songs = [
    {
        id: 1,
        name: "Bulutların Arasında",
        singer: "Yatagun Küğ",
        platform: "spotify",
        previewUrl: bulut,
        platformUrl: "https://open.spotify.com/intl-tr/artist/50lUKUPmY7cYwHUqI91C0x",
    },
    {
        id: 2,
        name: "Bozkır Ruhu",
        singer: "Yatagun Küğ",
        platform: "apple",
        previewUrl: bozkir,
        platformUrl: "https://music.apple.com/tr/artist/yatagun-küğ/1772460693",
    },
    {
        id: 3,
        name: "Bozkır Ruhu (Dombra)",
        singer: "Yatagun Küğ",
        platform: "youtube",
        previewUrl: bozkirdombra,
        platformUrl: "https://music.youtube.com/channel/UCVeDpNsgp1VsdV48VeWcj0g",
    },
];
const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef(null);
    const swiperRef = useRef(null);
    const getPlatformIcon = (platform, url) => {
        const icons = {
            spotify: _jsx(FaSpotify, { className: "w-8 h-8 text-[#1DB954]" }),
            apple: _jsx(SiApplemusic, { className: "w-8 h-8 text-[#FA233B]" }),
            youtube: _jsx(SiYoutubemusic, { className: "w-8 h-8 text-[#FF0000]" }),
        };
        return (_jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "hover:opacity-80 transition-opacity", children: icons[platform] }));
    };
    const handlePlay = (song) => {
        if (currentSong?.id === song.id && isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
            swiperRef.current?.autoplay?.start();
        }
        else {
            setCurrentSong(song);
            setIsPlaying(true);
            swiperRef.current?.autoplay?.stop();
            if (audioRef.current) {
                audioRef.current.src = song.previewUrl;
                audioRef.current
                    .play()
                    .then(() => console.log(`Playing: ${song.name}`))
                    .catch((err) => console.error(`Failed to play audio: ${err}`));
            }
        }
    };
    const handleAudioEnd = () => {
        setIsPlaying(false);
        setCurrentSong(null);
        swiperRef.current?.autoplay?.start();
    };
    return (_jsxs("div", { className: "w-120 h-36 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4", children: [_jsx(Swiper, { direction: "vertical", autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                }, modules: [Autoplay], className: "mr-12 h-28 overflow-hidden", onSwiper: (swiper) => {
                    swiperRef.current = swiper;
                }, children: songs.map((song) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "flex items-start justify-between", children: _jsxs("div", { className: "flex-1 text-left", children: [_jsx("h3", { className: "text-xl font-semibold", children: song.name }), _jsx("p", { className: "text-gray-500", children: song.singer }), _jsx("button", { onClick: () => handlePlay(song), className: "mt-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition", children: isPlaying && currentSong?.id === song.id ? (_jsx(FaPause, { className: "text-black w-4 h-4" }) // Durdurma ikonu
                                    ) : (_jsx(FaPlay, { className: "text-black w-4 h-4" }) // Oynatma ikonu
                                    ) }), _jsx("audio", { ref: audioRef, onEnded: handleAudioEnd, className: "hidden" })] }) }) }, song.id))) }), _jsx("audio", { ref: audioRef, onEnded: handleAudioEnd, className: "hidden" }), _jsx("div", { className: "absolute top-16 right-0 flex flex-row space-x-3 p-3.5", children: songs.map((song) => (_jsx("div", { children: getPlatformIcon(song.platform, song.platformUrl) }, song.id))) })] }));
};
export default MusicPlayer;
