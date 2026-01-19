import { FC, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types";
import {FaPause, FaPlay, FaSpotify} from "react-icons/fa";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";


import bozkirdombra from "../assets/musics/bozkır-ruhu-dombra.mp3";
import bozkir from "../assets/musics/bozkır-ruhu.mp3";
import bulut from "../assets/musics/bulutların-arasında.mp3";
import kizilYemin from "../assets/musics/kizil-yemin.mp3";
import kongulSadasi from "../assets/musics/kongul-sadasi.mp3";

interface Song {
    id: number;
    name: string;
    singer: string;
    platform: "spotify" | "apple" | "youtube";
    previewUrl: string;
    platformUrl: string;
}

const songs: Song[] = [
    {
        id: 1,
        name: "Bulutların Arasında",
        singer: "Yatagun Küğ",
        platform: "spotify",
        previewUrl: bulut,
        platformUrl:
            "https://open.spotify.com/intl-tr/artist/50lUKUPmY7cYwHUqI91C0x",
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
    }
];

const MusicPlayer: FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const swiperRef = useRef<SwiperClass | null>(null);

    const getPlatformIcon = (platform: "spotify" | "apple" | "youtube", url: string) => {
        const icons: Record<"spotify" | "apple" | "youtube", JSX.Element> = {
            spotify: <FaSpotify className="w-8 h-8 text-[#1DB954]" />,
            apple: <SiApplemusic className="w-8 h-8 text-[#FA233B]" />,
            youtube: <SiYoutubemusic className="w-8 h-8 text-[#FF0000]" />,
        };

        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
            >
                {icons[platform]}
            </a>
        );
    };


    const handlePlay = (song: Song) => {
        if (currentSong?.id === song.id && isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
            swiperRef.current?.autoplay?.start();
        } else {
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

    return (
        <div className="w-120 h-36 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4">
            <Swiper
                direction="vertical"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mr-12 h-28 overflow-hidden"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {songs.map((song) => (
                    <SwiperSlide key={song.id}>
                        <div className="flex items-start justify-between">
                            {/* Şarkı Bilgileri */}
                            <div className="flex-1 text-left">
                                <h3 className="text-xl font-semibold">{song.name}</h3>
                                <p className="text-gray-500">{song.singer}</p>
                                <button
                                    onClick={() => handlePlay(song)}
                                    className="mt-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
                                >
                                    {isPlaying && currentSong?.id === song.id ? (
                                        <FaPause className="text-black w-4 h-4"/> // Durdurma ikonu
                                    ) : (
                                        <FaPlay className="text-black w-4 h-4"/> // Oynatma ikonu
                                    )}
                                </button>
                                <audio
                                    ref={audioRef}
                                    onEnded={handleAudioEnd} // Müzik sona erdiğinde bu fonksiyon çağrılır
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
            <audio ref={audioRef} onEnded={handleAudioEnd} className="hidden"/>

            {/* Platform İkonları */}
            <div className="absolute top-16 right-0 flex flex-row space-x-3 p-3.5">
                {songs.map((song) => getPlatformIcon(song.platform, song.platformUrl))}
            </div>

        </div>
    );
};

export default MusicPlayer;