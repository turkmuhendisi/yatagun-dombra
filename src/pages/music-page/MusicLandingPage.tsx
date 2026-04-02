import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FaInstagram, FaSpotify } from "react-icons/fa";
import {
    MdPauseCircleFilled,
    MdPlayCircleFilled,
    MdSkipNext,
    MdSkipPrevious,
    MdStopCircle,
} from "react-icons/md";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";
import backgroundImage from "../../assets/ytgnwp1.png";
import bozkirRuhuDombra from "../../assets/musics/bozkır-ruhu-dombra.mp3";
import bozkirRuhu from "../../assets/musics/bozkır-ruhu.mp3";
import bulutlarinArasinda from "../../assets/musics/bulutların-arasında.mp3";
import kizilYemin from "../../assets/musics/kizil-yemin.mp3";
import kongulSadasi from "../../assets/musics/kongul-sadasi.mp3";

type MusicTrack = {
    id: number;
    title: string;
    artist: string;
    src: string;
};

type PlatformLink = {
    label: string;
    url: string;
    icon: IconType;
    iconClassName: string;
};

const artistStatement =
    "Ezgiler sustu sanma; yalnızca güç topluyoruz, çünkü bozkırın sesi susmaz ve rüzgâr dombırayı çaldığında aynı kadim tınılarda yeniden buluşacağız.";

const tracks: MusicTrack[] = [
    {
        id: 1,
        title: "Kızıl Yemin",
        artist: "Yatagun Küğ",
        src: kizilYemin,
    },
    {
        id: 2,
        title: "Bulutların Arasında",
        artist: "Yatagun Küğ",
        src: bulutlarinArasinda,
    },
    {
        id: 3,
        title: "Bozkır Ruhu",
        artist: "Yatagun Küğ",
        src: bozkirRuhu,
    },
    {
        id: 4,
        title: "Bozkır Ruhu (Dombra)",
        artist: "Yatagun Küğ",
        src: bozkirRuhuDombra,
    },
    {
        id: 5,
        title: "Köngül Sadası",
        artist: "Yatagun Küğ",
        src: kongulSadasi,
    },
];

const platformLinks: PlatformLink[] = [
    {
        label: "Spotify",
        url: "https://open.spotify.com/intl-tr/artist/50lUKUPmY7cYwHUqI91C0x",
        icon: FaSpotify,
        iconClassName: "text-[#1ED760]",
    },
    {
        label: "Apple Music",
        url: "https://music.apple.com/tr/artist/yatagun-k%C3%BC%C4%9F/1772460693",
        icon: SiApplemusic,
        iconClassName: "text-[#ff4d6d]",
    },
    {
        label: "YouTube Music",
        url: "https://music.youtube.com/channel/UCVeDpNsgp1VsdV48VeWcj0g",
        icon: SiYoutubemusic,
        iconClassName: "text-[#ff1010]",
    },
];

const instagramLink: PlatformLink = {
    label: "Instagram",
    url: "https://www.instagram.com/yatagundombra/",
    icon: FaInstagram,
    iconClassName: "",
};

const formatTime = (seconds: number) => {
    const totalSeconds = Number.isFinite(seconds) ? Math.floor(seconds) : 0;
    const minutes = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, "0");
    const remainingSeconds = (totalSeconds % 60).toString().padStart(2, "0");

    return `${minutes}:${remainingSeconds}`;
};

function OverflowMarqueeText({
    text,
    className,
}: {
    text: string;
    className: string;
}) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);
    const [shouldMarquee, setShouldMarquee] = useState(false);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        const updateOverflow = () => {
            const container = containerRef.current;
            const textElement = textRef.current;

            if (!container || !textElement) {
                return;
            }

            const overflowAmount = textElement.scrollWidth - container.clientWidth;
            const isOverflowing = overflowAmount > 1;

            setShouldMarquee(isOverflowing);
            setDistance(isOverflowing ? textElement.scrollWidth + 32 : 0);
        };

        updateOverflow();
        void document.fonts?.ready.then(updateOverflow);

        const resizeObserver =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(updateOverflow)
                : null;

        if (containerRef.current) {
            resizeObserver?.observe(containerRef.current);
        }

        if (textRef.current) {
            resizeObserver?.observe(textRef.current);
        }

        window.addEventListener("resize", updateOverflow);

        return () => {
            resizeObserver?.disconnect();
            window.removeEventListener("resize", updateOverflow);
        };
    }, [text]);

    const marqueeStyle = shouldMarquee
        ? ({
              "--marquee-distance": `-${distance}px`,
              "--marquee-duration": `${Math.max(10, distance / 28)}s`,
          } as CSSProperties)
        : undefined;

    return (
        <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
            <div className={shouldMarquee ? "marquee-track" : "block w-full"} style={marqueeStyle}>
                <span ref={textRef} className={className}>
                    {text}
                </span>
                {shouldMarquee ? (
                    <span aria-hidden="true" className={`${className} pl-8`}>
                        {text}
                    </span>
                ) : null}
            </div>
        </div>
    );
}

export default function MusicLandingPage() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentTrack = tracks[currentTrackIndex];
    const InstagramIcon = instagramLink.icon;

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        audio.src = currentTrack.src;
        audio.load();
        setElapsedSeconds(0);
    }, [currentTrack.src]);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        if (isPlaying) {
            void audio.play().catch(() => {
                setIsPlaying(false);
            });
            return;
        }

        audio.pause();
    }, [currentTrack.src, isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;

        return () => {
            audio?.pause();
        };
    }, []);

    const handlePlayPause = () => {
        setIsPlaying((currentlyPlaying) => !currentlyPlaying);
    };

    const handleStop = () => {
        const audio = audioRef.current;

        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        setElapsedSeconds(0);
        setIsPlaying(false);
    };

    const changeTrack = (direction: -1 | 1) => {
        setCurrentTrackIndex((currentIndex) => {
            const nextIndex =
                (currentIndex + direction + tracks.length) % tracks.length;
            return nextIndex;
        });
    };

    const handleAudioEnded = () => {
        setCurrentTrackIndex(
            (currentIndex) => (currentIndex + 1) % tracks.length,
        );
    };

    return (
        <main
            className="relative min-h-[100svh] overflow-hidden bg-[#0f1418] text-white"
            aria-label="Yatagun Küğ resmi müzik sayfası"
        >
            <header className="sr-only">
                <h1>Yatagun Dombra | Yatagun Küğ resmi müzik sayfası</h1>
                <p>
                    Yatagun Küğ'ün yayınladığı müzikleri önizleyebilir, resmi
                    Spotify, Apple Music, YouTube Music ve Instagram
                    bağlantılarına ulaşabilirsiniz.
                </p>
            </header>

            <div className="absolute inset-0">
                <img
                    src={backgroundImage}
                    alt="Yatagun Küğ için hazırlanan kapak görseli"
                    className="h-full w-full object-cover object-[60%_center] md:object-center"
                    width={1920}
                    height={1080}
                    fetchPriority="high"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_30%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,13,0.24)_0%,rgba(5,10,13,0.08)_38%,rgba(5,10,13,0.16)_60%,rgba(5,10,13,0.46)_100%)]" />
            </div>

            <div className="relative z-10 flex min-h-[100svh] flex-col px-5 pb-6 pt-14 sm:px-8 sm:pb-8 sm:pt-16 lg:px-[58px] lg:pb-[67px] lg:pt-[64px]">
                <section className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col items-center pt-4 text-center sm:pt-6 lg:max-w-none lg:pt-[26px]">
                    <p className="copy-shadow max-w-[316px] text-[15px] font-medium leading-tight text-white/70 sm:max-w-[440px] sm:text-lg lg:max-w-[919px] lg:text-[2rem]">
                        {artistStatement}
                    </p>
                </section>

                <section className="relative z-20 mt-auto flex flex-col gap-4 lg:gap-[23px]">
                    <div className="flex items-center justify-center gap-3 lg:justify-start lg:gap-[22px]">
                        <div className="glass-panel flex h-[41px] items-center gap-4 rounded-[999px] px-3.5 sm:h-[48px] sm:gap-5 sm:px-4 lg:h-[65px] lg:gap-[30px] lg:px-[18px]">
                            {platformLinks.map(({ label, url, icon: Icon, iconClassName }) => (
                                <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    title={label}
                                >
                                    <Icon
                                        className={`text-[1.7rem] sm:text-[1.9rem] lg:text-[3rem] ${iconClassName}`}
                                    />
                                </a>
                            ))}
                        </div>

                        <a
                            href={instagramLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={instagramLink.label}
                            title={instagramLink.label}
                            className="glass-panel flex h-[41px] w-[41px] items-center justify-center rounded-[12px] sm:h-[48px] sm:w-[48px] lg:h-[65px] lg:w-[67px] lg:rounded-[20px]"
                        >
                            <span className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[linear-gradient(135deg,#ffd776_0%,#f56040_28%,#fd1d1d_62%,#833ab4_100%)] sm:h-[32px] sm:w-[32px] lg:h-[48px] lg:w-[48px] lg:rounded-[14px]">
                                <InstagramIcon className="text-[1rem] text-white sm:text-[1.1rem] lg:text-[1.75rem]" />
                            </span>
                        </a>
                    </div>

                    <div className="glass-panel flex min-h-[100px] w-full items-center rounded-[32px] px-4 py-4 sm:px-5 sm:py-5 lg:min-h-[140px] lg:rounded-[60px] lg:px-8 lg:py-7">
                        <button
                            type="button"
                            onClick={handlePlayPause}
                            aria-label={isPlaying ? "Müziği duraklat" : "Müziği oynat"}
                            className="shrink-0 text-white transition-transform duration-300 hover:scale-105"
                        >
                            {isPlaying ? (
                                <MdPauseCircleFilled className="copy-shadow text-[2.6rem] sm:text-[2.9rem] lg:text-[4.1rem]" />
                            ) : (
                                <MdPlayCircleFilled className="copy-shadow text-[2.6rem] sm:text-[2.9rem] lg:text-[4.1rem]" />
                            )}
                        </button>

                        <div className="ml-3 min-w-0 flex-1 text-left sm:ml-4 lg:ml-5">
                            <OverflowMarqueeText
                                text={currentTrack.title}
                                className="inline-block text-[1rem] font-bold uppercase tracking-[0.01em] text-white sm:text-[1.15rem] lg:text-[2rem]"
                            />
                            <p className="mt-0.5 truncate text-[0.78rem] font-normal uppercase tracking-[0.04em] text-white/80 sm:text-[0.9rem] lg:text-[1.25rem]">
                                {currentTrack.artist}
                            </p>
                            <p className="mt-1 text-[0.72rem] font-normal text-white/85 lg:hidden">
                                {formatTime(elapsedSeconds)}
                            </p>
                        </div>

                        <div className="hidden items-center lg:flex">
                            <span className="pr-6 text-xl font-semibold text-white">
                                {formatTime(elapsedSeconds)}
                            </span>
                        </div>

                        <div className="ml-3 flex shrink-0 items-center gap-1.5 sm:gap-2 lg:ml-6 lg:gap-5">
                            <button
                                type="button"
                                onClick={() => changeTrack(-1)}
                                aria-label="Önceki müzik"
                                className="text-white transition-transform duration-300 hover:scale-105"
                            >
                                <MdSkipPrevious className="copy-shadow text-[2.2rem] sm:text-[2.4rem] lg:text-[4.1rem]" />
                            </button>

                            <button
                                type="button"
                                onClick={handleStop}
                                aria-label="Müziği durdur"
                                className="text-white transition-transform duration-300 hover:scale-105"
                            >
                                <MdStopCircle className="copy-shadow text-[2.2rem] sm:text-[2.4rem] lg:text-[4.1rem]" />
                            </button>

                            <button
                                type="button"
                                onClick={() => changeTrack(1)}
                                aria-label="Sonraki müzik"
                                className="text-white transition-transform duration-300 hover:scale-105"
                            >
                                <MdSkipNext className="copy-shadow text-[2.2rem] sm:text-[2.4rem] lg:text-[4.1rem]" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="sr-only" aria-label="Müzik ve platform listesi">
                    <h2>Dinlenebilecek müzikler</h2>
                    <ul>
                        {tracks.map((track) => (
                            <li key={track.id}>
                                {track.title} - {track.artist}
                            </li>
                        ))}
                    </ul>

                    <h2>Resmi platform bağlantıları</h2>
                    <ul>
                        {platformLinks.map((platform) => (
                            <li key={platform.label}>
                                <a href={platform.url}>{platform.label}</a>
                            </li>
                        ))}
                        <li>
                            <a href={instagramLink.url}>{instagramLink.label}</a>
                        </li>
                    </ul>
                </section>
            </div>

            <audio
                ref={audioRef}
                preload="metadata"
                onEnded={handleAudioEnded}
                onTimeUpdate={(event) =>
                    setElapsedSeconds(event.currentTarget.currentTime)
                }
                className="hidden"
            />
        </main>
    );
}
