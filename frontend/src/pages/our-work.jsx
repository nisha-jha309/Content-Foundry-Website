import { Link } from "react-router";
import content from "../data/microdramas.js";
import { FaAngleDown } from "react-icons/fa6";
import ContactCTA from "../components/contact-cta.jsx";

const OurWork = () => {
    return (
        <>
            {/* WORK */}
            <section className="bg-black py-[60px] sm:py-[75px] lg:py-[90px] text-white">
                <div className="mx-auto max-w-[1440px] px-[5vw] flex justify-center flex-col items-center">
                    <p className="uppercase tracking-wider text-3xl mb-6">
                        Works
                    </p>

                    <div className="flex gap-3 items-center rounded-full py-2 px-4 bg-[#17140C] uppercase">
                        Micro-dramas <FaAngleDown />
                    </div>
                </div>
            </section>

            {/* DRAMA THUMBNAILS */}
            <section className="py-6 bg-white">

                <div className="listing-cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-[5vw]">
                    {content.map((item) => (
                        <Link
                            to={item.href}
                            key={item.slug}
                            className="listing-card group relative h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-xl"
                        >
                            {/* Thumbnail */}
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Black Overlay */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Bottom Content */}
                            <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5 text-white">
                                <p className="text-xs uppercase tracking-wider mb-1">
                                    {item.type}
                                </p>

                                <h2 className="text-base md:text-xl lg:text-2xl font-medium leading-tight">
                                    {item.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>

            </section>

            {/* CONTACT CTA */}
            <ContactCTA />
        </>
    );
};

export default OurWork;
