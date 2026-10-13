
import { useRef, useState } from "react";
import { Link, useParams } from "react-router";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {IoVolumeMute , IoVolumeHigh} from "react-icons/io5"
import ContactCTA from "../components/contact-cta"
import content from "../data/microdramas"

const MicroDramaDetails = () => {
    const [episodeNumber,setEpisodeNumber]=useState(0);

    const handleEpisodes = (index) =>{
        setEpisodeNumber(index);
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })

    }
     
    const episodesRef = useRef(null);

    const scroll = (direction) => {
        const container = episodesRef.current;

        if (!container) return;

        container.scrollBy({
            left:
                direction === "left"
                    ? -container.clientWidth
                    : container.clientWidth,
            behavior: "smooth",
        });
    };
    const { slug } = useParams();

    const drama = content.find(
        (item) => item.slug === slug
    );

    const videoRef = useRef(null);

const [isMuted, setIsMuted] = useState(true);
const [progress, setProgress] = useState(0);

const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (video && video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
    }
};

const handleSeek = (e) => {
    const video = videoRef.current;

    if (video && video.duration) {
        video.currentTime = (Number(e.target.value) / 100) * video.duration;
        setProgress(Number(e.target.value));
    }
};

const toggleMute = () => {
    const video = videoRef.current;

    if (video) {
        video.muted = !video.muted;
        setIsMuted(video.muted);
    }
};

    if (!drama) {
        return (
            <main className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">
                        404
                    </p>

                    <h1 className="text-3xl font-semibold">
                        Micro-drama not found
                    </h1>

                    <Link
                        to="/"
                        className="inline-block mt-6 text-sm underline underline-offset-4"
                    >
                        Back to home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-white text-black">

            {/* ================= HERO ================= */}
            {/* Hero Image */}

            {/* <div className="relative w-full overflow-x-hidden h-screen aspect-video overflow-hidden bg-gray-100">

                <img src={drama.thumbnail} alt={drama.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 w-full h-full bg-black/60 "></div>

                <div className="absolute inset-0 flex flex-col justify-end items-start p-8 md:p-16 text-white">
                    <h1 className="uppercase text-7xl font-black tracking-wide">{drama.title}</h1>
                    <p className="text-lg w-[50%]">{drama.about}</p>
                </div>

            </div> */}

            <section className="lg:h-dvh w-full bg-black py-[25px] lg:py-[35px]">
                <div className="w-full mx-auto  px-[5vw] text-white grid  grid-cols-1 lg:grid-cols-2 gap-5 items-center ">
                    <div className="flex flex-col gap-6">
                        <p className="uppercase text-xs 2xl:text-sm">Micro-dramas for brands</p>
                        <p className="text-5xl lg:text-7xl 2xl:text-[5.5rem]">{drama.title}</p>
                        <p className="text-sm md:text-base lg:text-md md:w-[60%] 2xl:text-md tracking-wide">{drama.about}</p>
                    </div>
                    <div
    className="w-full lg:w-[300px] 2xl :w-[400px] lg:h-[80vh] justify-self-center rounded-[34px] border-[10px] border-[#0f0d12] relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.53)] max-[900px]:mx-auto"
>
    {/* Video */}
    <video
        ref={videoRef}
        src={drama.episodes[episodeNumber].videoUrl}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        className="w-full h-full object-cover block"
    />

    {/* Mute / Unmute Button */}
    <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        aria-pressed={!isMuted}
        className="absolute top-4 right-4 z-10 flex items-center justify-center
        w-10 h-10 rounded-full bg-black/50 text-white
        backdrop-blur-sm hover:bg-black/70 transition-colors"
    >
        {isMuted ? (
            <IoVolumeMute size={20} />
        ) : (
            <IoVolumeHigh size={20} />
        )}
    </button>

    {/* Video Progress Bar */}
    <div className="absolute bottom-3 left-3 right-3 h-[4px] bg-white/40 z-10 rounded-full">
        <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
            aria-label="Seek video"
            className="absolute inset-0 w-full h-full m-0 cursor-pointer appearance-none bg-transparent
            [&::-webkit-slider-runnable-track]:h-[4px
            ] [&::-webkit-slider-runnable-track]:bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-[10px]
            [&::-webkit-slider-thumb]:h-[10px]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:opacity-0
            [&::-webkit-slider-thumb]:border-white
            active:[&::-webkit-slider-thumb]:opacity-100
            focus-visible:[&::-webkit-slider-thumb]:opacity-100
            [&::-moz-range-track]:h-[4px]
            [&::-moz-range-thumb]:w-0
            [&::-moz-range-thumb]:h-0"
            style={{
                background: `linear-gradient(to right, white ${progress}%, transparent ${progress}%)`,
            }}
        />
    </div>
</div>

                </div>
            </section>


            {/* ================= EPISODES ================= */}

            {drama.episodes?.length > 0 && (

                <section className="border-t border-gray-200 px-6 md:px-10 lg:px-16 py-16">

                    <div className="mx-auto">

                        {/* Heading */}

                        <div className="flex items-end justify-between mb-8">

                            <div>

                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                    Episodes
                                </p>

                                <h2 className="text-3xl md:text-5xl font-semibold">
                                    {drama.title}
                                </h2>

                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2 items-center" >
                                    {/* LEFT BUTTON */}
                                    <button
                                        onClick={() => scroll("left")}
                                        className="w-10 h-10 bg-white border-black border-2 text-black flex items-center justify-center hover:bg-violet hover:text-white hover:border-violet "
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    {/* RIGHT BUTTON */}
                                    <button
                                        onClick={() => scroll("right")}
                                        className="w-10 h-10 border-black border-2 bg-white text-black flex items-center justify-center group-hover:visible hover:bg-violet hover:text-white hover:border-violet "
                                    >
                                        <FaChevronRight />

                                    </button>
                                </div>
                                <p className="text-sm text-gray-500">
                                    {drama.episodes.length} Episodes
                                </p>

                            </div>

                        </div>


                        {/* Episode List */}

                        <div className="group w-full flex gap-4 items-center">


                            {/* SCROLL CONTAINER */}
                            <div
                                ref={episodesRef}
                                className=" w-full
      flex gap-4
      overflow-x-auto
      scrollbar-none
      scroll-smooth
    "
                            >
                                {drama.episodes.map((episode, index) => (
                                    <div
                                        key={episode.id}
                                        className="
          shrink-0
          w-[60%]
          h-[300px]
          md:h-[400px]
          lg:h-[500px]
          sm:w-[35%]
          lg:w-[20%]
          aspect-square
          rounded-xl
          overflow-hidden
          relative
          bg-black
          text-white
        "  onClick={()=>handleEpisodes(index)}
                                    >
                                        <img
                                            src={episode.thumbnail}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            
                                        />

                                        <div className="absolute inset-0 bg-black/60" />

                                        <div className="absolute inset-0 z-10 flex flex-col justify-end p-4">
                                            <span className="text-lg font-extrabold">
                                                Episode {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <p className="text-sm mt-2">
                                                {episode.description}
                                            </p>

                                            <span className="text-sm flex items-center gap-3 mt-3">
                                                <FaPlay />
                                                {episode.duration}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>

                </section>

            )
            }


            {/* ================= BEHIND THE STORY ================= */}

            {/* {
    drama.credits && (

        <section className="border-t border-gray-200 px-6 md:px-10 lg:px-16 py-16">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">

                <div>

                    <p className="text-xs uppercase tracking-widest text-gray-500">
                        Behind the story
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                    <div>

                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                            Production
                        </p>

                        <p className="text-base">
                            {drama.credits.production}
                        </p>

                    </div>


                    <div>

                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                            Creative
                        </p>

                        <p className="text-base">
                            {drama.credits.creative}
                        </p>

                    </div>


                    <div>

                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                            Brand
                        </p>

                        <p className="text-base">
                            {drama.credits.brand}
                        </p>

                    </div>

                </div>

            </div>

        </section>

    )
} */}


            {/* ================= MORE MICRO-DRAMAS ================= */}

            {/* <section className="border-t border-gray-200 px-6 md:px-10 lg:px-16 py-16">

    <div className="max-w-7xl mx-auto">

        <div className="mb-8">

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Explore more
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
                More micro-dramas
            </h2>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {content.filter((item) => item.slug !== drama.slug).slice(0, 2).map((item) => (

                <Link
                    key={item.slug}
                    to={`/micro-dramas/${item.slug}`}
                    className="group"
                >

                    <div className="aspect-video overflow-hidden bg-gray-100">

                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                    </div>


                    <div className="flex items-center justify-between mt-4">

                        <h3 className="text-lg font-medium">
                            {item.title}
                        </h3>

                        <span className="text-sm text-gray-400">
                            ↗
                        </span>

                    </div>

                </Link>

            ))}

        </div>

    </div>

</section> */}
            {/* ================= ABOUT ================= */}

            {/* <section className="border-t border-gray-200 px-6 md:px-10 lg:px-16 py-16">

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">

        <div>

            <p className="text-xs uppercase tracking-widest text-gray-500">
                About the series
            </p>

        </div>


        <div>

            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
                {drama.about}
            </p>

        </div>

    </div>

</section> */}


            {/* CONTACT CTA */}
            <ContactCTA/>


        </main >
    );
};

export default MicroDramaDetails;
