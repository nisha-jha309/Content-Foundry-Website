import { useRef, useState } from "react";
import { Link } from "react-router";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FiPlus, FiMinus } from "react-icons/fi";
import logos from "../data/logo";
import WebsiteGif from "../../src/assets/content-foundry-show-reel.mp4";
import mockupDrama from "../../public/reel-drama.mp4";
import heroNaJaneKyu from "../../src/assets/hero-na-jane-kyu.webp";
import founderMagazine from "../../src/assets/founder-magazine.avif"
import Testimonial from "../components/testimonial";
import WhitePaperForm from "../components/white-paper-form.jsx";
import content from "../data/scrollCard";
import dramas from "../data/microdramas.js"
import ContactCTA from "../components/contact-cta.jsx"


const Home = () => {
  const [isOpenWhite, setIsOpenWhite] = useState(false);

  const moreWorkRef = useRef(null);

  const scrollWork = (direction) => {
    moreWorkRef.current?.scrollBy({
      left: direction * 400,
      behavior: "smooth",
    });
  };

  const seriesRef = useRef(null);

  const seriesScrollWork = (direction) => {
    seriesRef.current?.scrollBy({
      left: direction * 400,
      behavior: "smooth",
    });
  };

const formatStrip =[
              "Branded micro-dramas",
              "AI & shoot-based production",
              "Platform-ready edits",
              "Hindi & regional-language versions",
              "Brand films",
            ];

  const faqData = [
    {
      question: "What is a branded micro-drama?",
      answer:
        "A branded micro-drama is a short, episodic story with recurring characters and connected situations. Your product, service or brand values become a natural part of the narrative, giving viewers a reason to watch—and come back for the next episode.",
    },
    {
      question: "Why should my brand invest in micro-drama?",
      answer:
        "It can help people understand your product in a relatable setting, remember your brand and explore what you offer. Unlike a standalone advertisement, a series builds a continuing story. We connect that story to your business objective and evaluate its contribution alongside your existing marketing.",
    },
    {
      question: "Do you offer both AI-based and shoot-based production?",
      answer:
        "Yes. Content Foundry offers both, supported by an in-house shoot studio, complete production infrastructure and 30 years of advertising experience. We recommend the approach that best suits your story, product, visual style and budget.",
    },
    {
      question: "How will my brand appear in the story?",
      answer:
        "We give your brand a believable role through product use, a character’s decision or a benefit that matters to the situation. Your team reviews the concept, scripts, product claims and final edits at agreed stages.",
    },
    {
      question:
        "Where can we publish the series—and what if we have few followers?",
      answer:
        "The series can run on relevant channels such as Instagram, Facebook and YouTube, with LinkedIn for suitable B2B stories. A small follower base needs a discovery plan: paid amplification, creator collaborations and partner channels can help reach beyond your existing audience. These services are clearly scoped in the proposal.",
    },
    {
      question:
        "How many episodes should we create, and how long does production take?",
      answer:
        "Both depend on the story and objective. A 13-episode series is one option; a smaller pilot can test the idea first. We agree episode lengths, release cadence and production milestones after reviewing the brief and approval requirements.",
    },
    {
      question: "Can you create regional-language and international versions?",
      answer:
        "Yes. We can scope versions for Indian regions and international markets. We adapt dialogue, cultural references, voice and audience expectations so the story feels relevant—not simply translated.",
    },
    {
      question: "Is micro-drama suitable for MNCs, MSMEs and startups?",
      answer:
        "Yes, when the audience and brand proposition fit the story. An MNC may need consistency across markets, an MSME may want stronger product understanding, and a startup may need to explain a new idea. We tailor the scope to your business need.",
    },
    {
      question: "How do you measure success and ROI?",
      answer:
        "We agree measures before launch, which may include viewing completion, brand recall, product-page visits, qualified enquiries or bookings. Financial ROI considers total campaign cost and incremental contribution from sales. We do not guarantee fixed views or sales; performance depends on the story, audience, distribution and customer journey.",
    },
    {
      question:
        "How much does a series cost, and what usage rights do we receive?",
      answer:
        "Pricing depends on production approach, episode count, talent, locations, languages and supporting assets. Your proposal identifies costs, deliverables and revisions. The agreement specifies ownership and usage rights, including platforms, territories, duration and licensed elements.",
    },
    {
      question: "Can this become an ongoing content programme?",
      answer:
        "Yes. A series can grow into new seasons, storylines or regional versions. We review audience response and brand outcomes before expanding, so future content builds on what works.",
    },
    {
      question: "How do we get started?",
      answer:
        "Share your brand, audience and communication objective. In a Brand Story Session, we explore story directions, production options and a suitable next step. Visit contentfoundry.in or email info@contentfoundry.in to start a conversation.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  const feed = [{
    title: "Discovery",
    chips: [
      "YouTube Shorts",
      "Instagram Reels",
      "Facebook Reels",
    ],
    text: "Introduce your series through relevant short-video channels.",
  },
  {
    title: "Regional reach",
    chips: [
      "Josh",
      "Moj",
      "ShareChat",
      "Chingari",
    ],
    text: "Select platforms around your audience, language and market.",
  },
  {
    title: "Direct sharing",
    chips: [
      "WhatsApp Channels",
      "Status",
      "Opt-in communities",
    ],
    text: "Make episodes easy to share through permissioned channels and communities.",
  },
  ]
  const layoutClass = "py-[105px] max-[1024px]:py-[70px] max-[900px]:py-[50px] max-[768px]:py-[30px] px-[5vw]";
  const sameColorlayoutClass = "pb-[105px] max-[1024px]:pb-[70px] max-[900px]:py-[50px] max-[768px]:py-[30px] px-[5vw]";


  return (
    <div id="top">
      {/* HERO */}
      <section className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
        {/* Hero Copy */}
        <div className="flex flex-col justify-center px-[5vw] py-[65px] lg:py-[82px] lg:pl-[max(5vw,calc((100vw-1296px)/2))]">
          <div className="text-xs font-black uppercase tracking-[0.19em] text-violet">
            Branded micro-drama production in India
          </div>
          <h1 className="my-6 font-serif text-[clamp(52px,6vw,98px)] text-extrBold font-medium leading-[0.94] tracking-[-0.055em]">
            Make them
            <br className="hidden md:block" />
            {" "}watch the
            <br className="hidden lg:block" />
            {" "}next one.
          </h1>

          <p className="max-w-[520px] text-sm md:text-base leading-[1.6] text-[#4c4841]">
            Give your audience a story to follow—and your brand a meaningful role in it. We create AI-based and shoot-based micro-dramas that bring your product benefits to life, with a plan to reach the right viewers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#stories" className="inline-flex items-center justify-center bg-violet px-6 py-4 font-black text-s font-extrabold text-white hover:opacity-70">
              Watch our series ↗
            </a>
            <div onClick={() => setIsOpenWhite(true)} className="inline-flex items-center justify-center border border-ink bg-transparent px-6 py-4 font-black text-s font-extrabold hover:bg-black hover:text-white">
              Download White Paper ↗
            </div>
          </div>
        </div>

        {/* Hero Artwork */}
        <Link to="/micro-drama/na-jane-kyu">
          <div className="relative flex md:min-h-[480px] items-center justify-center overflow-hidden bg-purple lg:min-h-[500px] overflow-hidden">
            <img src={heroNaJaneKyu} alt="na jane kyu banner" className="w-full h-auto md:h-full object-cover hover:scale-[1.08] transition-transform duration-300 ease" />
          </div>
        </Link>

      </section>

      {/* white capture form */}
      {isOpenWhite && (<WhitePaperForm isOpenWhite={isOpenWhite} setIsOpenWhite={setIsOpenWhite} />)}

      {/* FORMAT STRIP */}
      <section className="overflow-hidden bg-ink py-6 text-white sm:py-7">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-[5vw] md:flex-row md:items-center md:gap-6">
          <b className="shrink-0 text-[11px] uppercase tracking-[0.17em] text-[#c9bdb0]">
            What we do
          </b>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-6 lg:gap-x-8">
            {formatStrip.map((service) => (
              <span
                key={service}
                className="text-xs font-extrabold leading-relaxed sm:text-sm lg:text-base "
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <section id="showreel" className="bg-[#211e22] py-8 md:py-10 lg:py-20  text-white">
        <div className="mx-auto max-w-[1440px] px-[5vw]">
          <div className="text-xs font-black uppercase tracking-[0.19em] text-violet mb-4 my-[13px_0_25px] lg:m-0">
            Our production capabilities
          </div>

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em]">
              Stories brought to life.
            </h2>

            <p className="lg:max-w-[420px] text-sm md:text-base leading-[1.6] text-[#ddd]">
              Explore our films, campaigns and storytelling work. With an in-house shoot studio, complete production infrastructure and 30 years of advertising experience behind us, we bring brand understanding to every production.
            </p>
          </div>
        </div>
        <div className=" mt-[30px] w-full overflow-hidden ">
          <video autoPlay loop muted playsInline className="block h-auto w-full h-auto object-cover" src={WebsiteGif} title="Website Gif" />
        </div>
      </section>

      {/* brands */}
      <section className={`${layoutClass} bg-paper border-b border-line`} aria-label="Credentials" >
        <div className="max-w-[1440px] mx-auto">
          <div className="uppercase tracking-[0.19em] text-xs font-black text-violet mb-5">
            Experience behind every story
          </div>

          <div className="grid grid-cols-4 border-t border-ink border-b border-line max-[768px]:grid-cols-1 py-6 max-[900px]:grid-cols-2 gap-4 md:gap-9 items-end">

            <div className="min-w-[900px]:p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                14+
              </b>

              <span className="text-sm text-muted">
                Brands and institutions served
              </span>
            </div>

            <div className="min-w-[900px]:p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,44px)] leading-none tracking-[-0.04em]">
                In-house
              </b>

              <span className="text-sm text-muted">
                Shoot studio & production
              </span>
            </div>

            <div className="min-w-[900px]:p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                10
              </b>

              <span className="text-sm text-muted">
                Episodes in Na Jane Kyu
              </span>
            </div>

            <div className="min-w-[900px]:p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                2
              </b>

              <span className="text-s text-muted">
                Production routes: shoot-based & AI
              </span>
            </div>

          </div>

          <p className="mt-4 text-sm text-muted">
            Founder Harshita Adlakha: cover story,
            Entrepreneurs Today 30 Under 30, July 2024.
            {" "}
            <a
              href="#founder"
              className="border-b border-current font-extrabold text-ink"
            >
              Meet her
            </a>
          </p>
          <div className="overflow-hidden mt-[34px]">
            <div className="flex w-max animate-logo-scroll gap-12">

              {[...logos, ...logos].map((client, index) => (
                <img
                  src={client.image}
                  key={index}
                  alt={client.name}
                  className="w-auto shrink-0 h-[24px] w-auto"
                />
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* STORIES */}
      <section id="stories" className={`${layoutClass}`}>
        <div className="max-w-[1440px] mx-auto">
          <div className="mx-auto flex flex-col justify-between lg:flex-row lg:items-start lg:gap-[35px]">
            <div>
              <div className="uppercase tracking-[0.19em] text-xs mb-4 font-black text-violet">
                Our micro-drama series
              </div>

              <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
                A story to follow.
                <br />
                A reason to return.
              </h2>
            </div>
            <div className="flex justify-between gap-4 items-end lg:flex-col gap-4 mt-6 lg:mt-0">

              <p className="text-base leading-[1.6] text-muted max-w-[420px]">
                Explore shoot-based and AI-created series, built around recurring characters and stories that unfold across episodes.
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={() => seriesScrollWork(-1)} className="h-[30px] w-[30px] md:h-[45px] md:w-[45px] cursor-pointer border border-[#27231f] bg-transparent text-base md:text-md hover:bg-violet hover:text-white hover:border-violet" >
                  ←
                </button>

                <button type="button" onClick={() => seriesScrollWork(1)} aria-label="Scroll work right" className="h-[30px] w-[30px] md:h-[45px] md:w-[45px] cursor-pointer border border-[#27231f] bg-transparent text-base md:text-md  hover:bg-violet hover:text-white hover:border-violet" >
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 overflow-scroll scrollbar-none mt-[35px]" ref={seriesRef}>
            {/* 
          <article className="group relative min-h-[420px] text-white overflow-hidden">
            <div className="z-0 absolute inset-0 group-hover:scale-[1.08] transition-transform duration-300 ease">
              <img src={naJaneKyu} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="z-0 absolute inset-0  bg-black/60"></div>

            <div className="z-1 absolute inset-0 p-7 flex flex-col justify-end">
              <span className="absolute top-7 left-7 bg-white text-[#222] px-3 py-[9px] text-[11px] font-black uppercase">Live Shoot</span>
              <small className="tracking-[0.17em] uppercase font-extrabold">10 episodes</small>
              <h3 className="font-serif text-[45px] my-3">Na Jane Kyu</h3>
              <a className="self-start mt-[25px] font-extrabold border-b border-white pb-[5px]" href="https://drive.google.com/drive/folders/1QXgc0IrbJApkh5S4xiy4BPzbbZrnoqvl?usp=sharing" target="_blank" rel="noopener" >
                Watch the series ↗
              </a>
            </div>
          </article>

          <article className="group text-white  min-h-[420px] relative p-7 flex flex-col justify-end overflow-hidden">
            <div className="z-0 absolute inset-0 group-hover:scale-[1.08] transition-transform duration-300 ease">
              <img src={campusDiaries} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="z-0 absolute inset-0  bg-black/60"></div>

            <div className="z-1 absolute inset-0 p-7 flex flex-col justify-end">
              <span className="absolute top-7 left-7 bg-white text-[#222] px-3 py-[9px] text-[11px] font-black uppercase">AI video</span>
              <small className="tracking-[0.17em] uppercase font-extrabold">Campus series</small>
              <h3 className="font-serif text-[45px] my-3">Campus Diary</h3>
              <span className="self-start mt-[25px] font-extrabold border-b border-white pb-[5px]">Coming soon</span>
            </div>

          </article> */}

           {dramas.map((item) => (
    <article
        key={item.slug}
        className="group relative min-h-[300px] md:min-h-[420px] flex-1 min-w-[280px] text-white overflow-hidden"
    >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 transition-transform duration-300 ease group-hover:scale-[1.08]">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
            />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-black/60" />

        {/* Content */}
        <div className="absolute inset-0 z-10 p-7 flex flex-col justify-end">
            <span className="absolute top-7 left-7 bg-white text-[#222] px-3 py-[9px] text-[11px] font-black uppercase">
                {item.badge}
            </span>

            <small className="tracking-[0.17em] uppercase font-extrabold">
                {item.category}
            </small>

            <h3 className="font-serif text-[clamp(28px,3vw,45px)] my-3">
                {item.title}
            </h3>

            {item.episodes?.length > 0 ? (
                <Link
                    className="self-start mt-[25px] font-extrabold border-b border-white pb-[5px]"
                    to={item.href}
                >
                    {item.link}
                </Link>
            ) : (
                <span className="self-start mt-[25px] font-extrabold border-b border-white pb-[5px]">
                    {item.link}
                </span>
            )}
        </div>
    </article>
))}

          </div>
        </div>

      </section>

      {/* OFFER */}
      <section id="whatwemake" className={`${layoutClass} bg-[#e8e0d5]`}>
        <div className="mx-auto max-w-[1440px]">
          <div className="uppercase tracking-[0.19em] text-xs font-black text-violet mb-4">what we make</div>
          <h2
            className="max-w-[850px] font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]" >
            From one film to a world
            <br className="hidden sm:block" />
            {" "}people come back to.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01 /",
                title: "Micro-dramas",
                text: "Short, episodic stories with hooks, recurring characters and a role for the brand that makes sense within the narrative.",
                href: "mailto:info@contentfoundry.in?subject=Micro-drama%20enquiry",
                link: "Discuss a series ↗",
              },
              {
                number: "02 /",
                title: "Brand films & ads",
                text: "Campaign films, commercials, product stories and social video conceived and produced from script to screen.",
                href: "#work",
                link: "See examples ↗",
              },
              {
                number: "03 /",
                title: "Original story worlds",
                text: "Develop a repeatable setting and cast for brand-owned series, with room for new episodes, formats and integrations.",
                href: "mailto:info@contentfoundry.in?subject=Original%20series%20enquiry",
                link: "Start a conversation ↗",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="flex min-h-[290px] flex-col bg-paper p-8"
              >
                <span className="font-black text-lg text-violet">
                  {item.number}
                </span>

                <h3 className="mt-8 font-serif text-3xl font-normal">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-copy">
                  {item.text}
                </p>

                <a
                  href={item.href}
                  className="mt-auto w-fit border-b border-ink pb-1 font-extrabold"
                >
                  {item.link}
                </a>
              </article>
            ))}
          </div>

          {/* PRODUCTION MODES */}
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <article className="min-h-[290px] bg-ink p-10 text-white">
              <em className="text-[11px] uppercase tracking-[0.15em] text-[#efae89]">
                Production route / 01
              </em>

              <h3 className="mt-10 font-serif text-4xl font-normal">
                Live shoot
              </h3>

              <p className="mt-3 max-w-xl text-base leading-7 text-white/80">
                Actors, locations, direction and camera craft for performances
                and worlds grounded in real life. This is the route behind Na
                Jane Kyu.
              </p>
            </article>

            <article className="min-h-[290px] bg-purple p-10 text-white">
              <em className="text-[11px] uppercase tracking-[0.15em] text-[#efae89]">
                Production route / 02
              </em>

              <h3 className="mt-10 font-serif text-4xl font-normal">
                AI production
              </h3>

              <p className="mt-3 max-w-xl text-base leading-7 text-white/80">
                AI-assisted or AI-generated visuals for ideas suited to a
                synthetic world. Human concept, writing, direction and
                quality control remain central. Example films to be added
                after approval.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section id="offer" className={`${sameColorlayoutClass} bg-offer`}>
        <div className="max-w-[1440px] mx-auto">
          <div className="uppercase tracking-[0.19em] text-xs mb-4 font-black text-violet">For brands, founders & marketing teams</div>
          <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
            Your brand, in a story that matters <br className="hidden md:block" /> to your audience.

          </h2>
          <div className="grid grid-cols-4 gap-[15px] mt-[35px] max-[900px]:grid-cols-1">

            {[
              [
                // "In the plot",
                // "Characters use your product in the story.",
                "Natural product integration",
                "Show how your product helps in a situation your audience recognises.",
              ],
              [
                // "Your own series",
                // "A story world built around your category.",
                "Your own branded series",
                "Build characters and stories around your audience and brand proposition.",
              ],
              [
                // "Presented by",
                // "Sponsor a series. Fastest way in.",
                "Series sponsorship",
                "Explore a sponsorship where the audience, story and partnership fit your brand.",
              ],
              [
                // "Explain it",
                // "Complex products made simple through characters.",
                "Make the benefit clear",
                "Explain a product or service through relatable situations and decisions.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="bg-paper p-7 border-t-4 border-violet"
              >
                <h3 className="font-serif text-base md:text-md lg:text-lg m-0 mb-[10px]">
                  {title}
                </h3>

                <p className="text-xs md:text-sm leading-[1.6] text-muted m-0">
                  {text}
                </p>
              </div>
            ))}

          </div>

          <h2 className="font-serif text-[clamp(30px,3.2vw,50px)] leading-[1.03] tracking-[-0.04em] mt-20 mb-[25px]">
            What your brand can gain.
          </h2>

          <div className="grid grid-cols-2 gap-x-10 mt-[25px] border-t border-line max-[900px]:grid-cols-1">

            {[
              [
                // "One shoot, many assets",
                // "Dozens of cuts from a single production.",
                "One series, multiple assets",
                "Plan episodes, teasers and platform edits from one production programme.",
              ],
              [
                // "Viewers return on their own",
                // "Repeat exposure you don't pay for again.",
                "A reason to return",
                "Recurring characters and unfolding stories can encourage viewers to watch again.",
              ],
              [
                // "Shared, not just shown",
                // "Cliffhangers get forwarded, adding free reach.",
                "Benefits people can understand",
                "Show your product’s relevance through believable situations and use.",
              ],
              [
                // "Budget behind what works",
                // "We test hooks first, then boost the winner.",
                "Learn before scaling",
                "Test opening hooks and audience response, then refine the next step.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="py-6 border-b border-line"
              >
                <b className="text-[18px]">
                  {title}
                </b>

                <p className="text-[15px] leading-[1.6] text-muted m-0 mt-2">
                  {text}
                </p>
              </div>
            ))}

          </div>

          {/* <div className="grid grid-cols-[1fr_1.6fr] gap-10 items-center bg-ink text-white p-10 mt-10 max-[900px]:grid-cols-1 max-[900px]:p-7">

            <div>
              <h3 className="font-serif text-[32px] m-0 mb-[10px]">
                What we report
              </h3>

              <p className="text-muted-light m-0">
                In your finance team's language.
              </p>
            </div>

            <div className="flex flex-wrap gap-[10px]">

              {[
                "Cost per returning viewer",
                "Cost per engaged minute",
                "Cost per enquiry or install",
              ].map((metric) => (
                <span
                  key={metric}
                  className="border border-white/30 px-[14px] py-[10px] font-bold text-[14px]"
                >
                  {metric}
                </span>
              ))}

            </div>

          </div> */}

          <div className="grid grid-cols-[1fr_1.6fr] gap-10 items-center bg-ink text-white p-10 mt-10 max-[900px]:grid-cols-1 max-[900px]:p-7">

            <div>
              <h3 className="font-serif text-[32px] m-0 mb-[10px]">
                Measure what matters
              </h3>

              <p className="text-muted-light m-0">
                Agree success measures around your business objective.
              </p>
            </div>

            <div className="flex flex-wrap gap-[10px]">

              {[
                // "Cost per returning viewer",
                // "Cost per engaged minute",
                // "Cost per enquiry or install",
                "Viewing completion & retention",
                "Brand understanding, where measured",
                "Qualified enquiries & cost per result",
              ].map((metric) => (
                <span
                  key={metric}
                  className="border border-white/30 px-[14px] py-[10px] font-bold text-[14px]"
                >
                  {metric}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* AMPLIFICATION */}
      <section id="amplify" className={`${layoutClass} bg-[#e8e0d5] bg-amp text-white`} >
        <div className="max-w-[1440px] mx-auto">

          <div className="uppercase tracking-[0.19em] text-xs font-black text-violet mb-4"> Amplification</div>
          <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
            Help the right audience <br className="max-[576px]:hidden visible" /> discover your story.
          </h2>

          <div className="grid grid-cols-[300px_1fr] gap-6 md:gap-14 mt-10 items-start max-[900px]:grid-cols-1">

            <div>
              <div role="img" aria-label="Vertical episode frame" className="max-w-[260px] aspect-[9/17] rounded-[34px] border-[10px] border-[#0f0d12]  relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.53)] max-[900px]:mx-auto" >
                <video src={mockupDrama} autoPlay muted loop className="w-full h-full object-cover"></video>
              </div>
            </div>

            <div className="flex flex-col gap-[14px]">

              {feed.map((feed) => (
                <div
                  key={feed.title}
                  className="group grid grid-cols-[230px_1fr] gap-7 py-[26px] border-t border-white/20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-3"
                >
                  <div>
                    <h3 className="font-serif text-[28px] m-0 mb-3">
                      {feed.title}
                    </h3>

                    <div className="flex flex-wrap gap-[7px]">
                      {feed.chips.map((chip) => (
                        <span key={chip} className="border border-white/30 px-[10px] py-[6px] text-[13px] font-bold hover:border-gray-500 hover:text-gray-500">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="m-0 text-[15px] text-white/80">
                    {feed.text}
                  </p>
                </div>
              ))}

            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 md:mt-15 max-[900px]:grid-cols-1">

            {[
              [
                // "Channel-ready",
                // "Included",
                // "Platform cuts, hooks, captions and a release plan.",
                "Channel-ready",
                "As scoped",
                "Platform edits, captions and release planning, as agreed in your scope.",
              ],
              [
                // "Seeded",
                // "Add-on",
                // "Creators and community partners carry the series.",
                "Creator partnerships",
                "Add-on",
                "Relevant creators and community partners, scoped separately.",
              ],
              [
                // "Boosted",
                // "Paid media",
                // "Targeted promotion on YouTube and Meta.",
                "Paid amplification",
                "Separate media budget",
                "Targeted promotion with a clearly defined media budget.",
              ],
            ].map(([title, label, text]) => (
              <div
                key={title}
                className="group border border-white/20 p-[30px] flex flex-col hover:bg-violet hover:border-violet"
              >
                <h3 className="font-serif text-[30px] m-0 mb-[6px]">
                  {title}
                </h3>

                <em className="not-italic text-[13px] text-violet group-hover:text-white font-extrabold mb-4">
                  {label}
                </em>

                <p className="text-[15px] m-0">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOUNDER */}
     
      <section id="founder" className={`${layoutClass} bg-cream`}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Cover  */}
          <div className=" md:min-w-[450px] md:max-w-[300px]">
            <img src={founderMagazine} alt="Harshita Adlakha on the cover of Entrepreneurs Today, 30 Under 30 special issue, July 2024" className="block w-full" />

            {/* <span className="absolute -right-8 top-4 bg-violet px-3 py-1 text-sm font-bold text-white rotate-45">
              Cover story
            </span> */}
          </div>

          {/* Content  */}
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-violet">
              The founder
            </div>

            <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
              Led by
              <br />
              Harshita Adlakha.
            </h2>

            {/* Recognition  */}
            <div className="mt-8 grid grid-cols-[90px_1fr] gap-x-5 gap-y-3 border-t border-line pt-5 text-sm">
              <b className="font-bold text-ink">Featured</b>
              <span className="text-[#4c4841]"> Cover story, Entrepreneurs Today</span>
              <b className="font-bold text-ink">Issue</b>
              <span className="text-[#4c4841]">30 Under 30 special, July 2024</span>
              <b className="font-bold text-ink">Category </b>
              <span className="text-[#4c4841]"> Advertising, Marketing and Media </span>
            </div>

            {/* Quote  */}
            <p className="mt-8 mb-7 max-w-[650px] font-serif text-base md:text-md leading-[1.35] text-ink md:text-[30px]">
              “A video is the moving face of your brand, capturing more
              attention and driving top-of-mind awareness.”
            </p>

            {/* Button  */}
            <a href="https://www.linkedin.com/in/harshita-adlakha-37a256152/" target="_blank" rel="noopener noreferrer" className="inline-flex border border-ink px-5 py-3 text-sm font-bold text-ink transition hover:bg-ink hover:text-white" >
              Connect on LinkedIn ↗
            </a>
          </div>

        </div>
      </section>


      {/* PROOF */}
      <section id="clients" className={`${layoutClass} text-white bg-[#201e1a]`}>
        <div className="mx-auto max-w-[1440px]">
          <div className="text-xs mb-4 font-black uppercase tracking-[0.19em] text-violet">
            Experience behind the stories
          </div>

          <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
            Trusted by brands that
            <br className="max-[576px]:hidden visible" />
            {" "}need the work to deliver.
          </h2>

          {/* LOGOS */}
          <div className="my-[30px] mb-[45px] flex flex-wrap gap-4">
            {["JCB", "Surya", "TECNO", "HMD", "GJEPC", "Incredible India",].map((logo) => (
              <span
                key={logo}
                className="border border-[#716b63] px-4 py-3 text-xs md:px-5 md:py-4 md:text-sm font-extrabold hover:border-gray-700 hover:text-gray-700"
              >
                {logo}
              </span>
            ))}
          </div>

          <div className="mb-[15px] text-xs font-black uppercase tracking-[0.19em] text-[#d6b4a3]">
            What our clients say
          </div>

          {/* TESTIMONIALS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Testimonial
              text="The film arrived quickly and at a fair price, and helped us secure our first Japanese customer."
              name="Vineet Taneja"
              role="CEO, ACE Automation Engineers"
            />

            <Testimonial
              text="Harshita and her team understood our brief, delivered within a reasonable time, and were creative and accommodating throughout."
              name="Payal Majmudar"
              role="Editor, Luxebook"
            />

            <Testimonial
              text="The project ran smoothly from beginning to delivery, and the quality of the finished work met our expectations."
              name="Lead, Branding and Communication"
              role="JCB India"
            />
          </div>

          {/* <p className="mt-[26px] text-[12px] text-[#bdb5ab]">
            Client feedback paraphrased from Content Foundry’s existing
            website. Confirm final wording with clients before launch.
          </p> */}
        </div>
      </section>

      {/* pilot points */}
      <section id="start" className={`${layoutClass}`}>

        <div className=" max-w-[1440px] mx-auto grid  grid-cols-2   gap-[50px]  items-start  max-[900px]:grid-cols-1">
          <div>

            <div className="uppercase tracking-[0.19em] text-xs mb-4 font-black text-violet">
              Find the story for your brand
            </div>

            <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] mb-6 tracking-[-0.04em] my-[13px_0_25px]">
              Let’s explore your brand’s story.
            </h2>

            <p className="text-base leading-[1.6] text-muted">
              Tell us your audience and objective. We’ll explore story directions, production options and a practical starting point.
            </p>

            <div className="flex gap-3 flex-wrap mt-6">

              <a href="mailto:info@contentfoundry.in?subject=Book%20a%20story%20session" className=" inline-flex items-center justify-center px-[22px] py-[15px] rounded-[2px] bg-violet text-white font-extrabold  text-s hover:opacity-80 ">
                Book a Brand Story Session  ↗
              </a>

            </div>

          </div>

          {/* PILOT STEPS */}

          <ol className="m-0 p-0 list-none border-t border-line">

            <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

              <span className="text-violet font-black">
                1
              </span>

              <div>
                One pilot episode
              </div>

            </li>


            <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

              <span className="text-violet font-black">
                2
              </span>

              <div>
                Three opening hooks to test
              </div>

            </li>


            <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

              <span className="text-violet font-black">
                3
              </span>

              <div>
                Series blueprint
              </div>

            </li>


            <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

              <span className="text-violet font-black">
                4
              </span>

              <div>
                Channel and amplification plan
              </div>

            </li>

          </ol>
        </div>


      </section>

      {/* WORK */}
      <section id="work" className={`${layoutClass} bg-[#eee6db]`}>
        {/* ================= HEADER ================= */}
        <div
          className="
      flex flex-col gap-6
      sm:gap-5
      lg:flex-row
      lg:items-end
      lg:justify-between
    "
        >
          <div>
            <div
              className="
          text-xs
          font-black
          uppercase
          tracking-[0.19em]
          text-violet
          sm:text-xs
          mb-4
        "
            >
              Explore our work
            </div>

            <h2
              className="
          mt-[13px]
          max-w-[700px]
          font-serif
          text-[clamp(36px,4vw,66px)]
          leading-[1.03]
          tracking-[-0.04em]
        "
            >
              Micro-dramas, brand films & commercials.
            </h2>
          </div>

          {/* ================= ARROWS ================= */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollWork(-1)}
              aria-label="Scroll work left"
              className="
          flex
          h-[30px]
          w-[30px]
          md:h-[45px]
          md:w-[45px]
          cursor-pointer
          items-center
          justify-center
          border
          border-[#27231f]
          bg-transparent
          text-xl
          transition-colors
          duration-200
          hover:border-violet
          hover:bg-violet
          hover:text-white
        "
            >
              <GoArrowLeft />
            </button>

            <button
              type="button"
              onClick={() => scrollWork(1)}
              aria-label="Scroll work right"
              className="
          flex
          h-[30px]
          w-[30px]
          md:h-[45px]
          md:w-[45px]
          cursor-pointer
          items-center
          justify-center
          border
          border-[#27231f]
          bg-transparent
          text-xl
          transition-colors
          duration-200
          hover:border-violet
          hover:bg-violet
          hover:text-white
        "
            >
              <GoArrowRight />
            </button>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-6 w-full overflow-visible sm:mt-[30px]">
          <div
            ref={moreWorkRef}
            className="
        flex
        w-full
        gap-4
        overflow-x-auto
        overflow-y-visible
        pt-[30px]
        pb-[40px]

        sm:pt-[70px]
        sm:pb-[100px]

        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
          >
            {content.map((card, index) => (
              <div
                key={card.slug || index}
                className="
            group
            relative
            h-[330px]
            w-[82vw]
            min-w-[82vw]
            shrink-0
            cursor-pointer

            sm:h-[350px]
            sm:w-[300px]
            sm:min-w-[300px]

            sm:hover:z-[100]
          "
              >
                {/* ================= CARD ================= */}
                <div
                  className="
              absolute
              left-0
              top-0
              h-[330px]
              w-full
              overflow-hidden
              rounded-xl
              bg-black

              transition-[height,transform,box-shadow]
              duration-300
              ease-out

              sm:h-[350px]
              sm:group-hover:h-[460px]
              sm:group-hover:-translate-y-[35px]
              sm:group-hover:shadow-2xl
            "
                >
                  {/* ================= IMAGE ================= */}
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="
                absolute
                inset-0
                h-full
                w-full
                object-cover

                transition-transform
                duration-500
                ease-out

                sm:group-hover:scale-105
              "
                  />

                  {/* ================= DARK GRADIENT ================= */}
                  <div
                    className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
              "
                  />

                  {/* ================= NUMBER ================= */}
                  <div
                    className="
                absolute
                left-4
                top-4
                z-20
                text-lg
                font-black
                text-white
              "
                  >
                    {String(index+1).padStart(2, "0")}
                  </div>

                  {/* ================= CARD CONTENT ================= */}
                  <div
                    className="
                absolute
                bottom-0
                left-0
                right-0
                z-20
                p-5

                sm:transition-all
                sm:duration-300
                sm:ease-out
                sm:group-hover:bottom-[130px]
              "
                  >
                    <span
                      className="
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-white/70
                "
                    >
                      {card.type}
                    </span>

                    <h3
                      className="
                  mt-1
                  max-w-[90%]
                  text-xl
                  font-bold
                  leading-tight
                  text-white
                "
                    >
                      {card.title}
                    </h3>

                    {/* ================= MOBILE CTA ================= */}
                    <div className="mt-4 sm:hidden">
                     
                        <Link
                          to={`/work/${card.slug}`}
                          className="
                      inline-flex
                      items-center
                      gap-2
                      bg-violet
                      px-4
                      py-2
                      text-xs
                      font-bold
                      text-white
                      transition-opacity
                      duration-200
                      hover:opacity-80
                    "
                        >
                         View work ↗
                        </Link>
                      ) 
                    </div>
                  </div>

                  {/* ================= DESKTOP HOVER PANEL ================= */}
                  <div
                    className="
                absolute
                bottom-0
                left-0
                right-0
                z-30
                hidden
                min-h-[130px]
                rounded-b-xl
                bg-[#171717]
                p-4
                text-white

                translate-y-full
                opacity-0

                transition-all
                duration-300
                ease-out

                sm:block
                sm:group-hover:translate-y-0
                sm:group-hover:opacity-100
              "
                  >
                    {/* DESCRIPTION */}
                    {card.description && (
                      <p
                        className="
                    mb-4
                    line-clamp-3
                    text-sm
                    leading-5
                    text-white/80
                  "
                      >
                        {card.description}
                      </p>
                    )}

                    {/* DESKTOP LINK */}
                  
                      <Link
                        to={`/work/${card.slug}`}
                        className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-violet
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    duration-200
                    hover:bg-red-500
                  "
                      >
                        View work ↗
                      </Link>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className={`${layoutClass} bg-[#f7f7f5]`}>
        <div className="max-w-[1440px] mx-auto">

          {/* Heading */}
          <div className="mb-9 md:mb-14">
            <span className="text-xs mb-4 font-bold uppercase tracking-[0.2em] text-violet">
              FAQs
            </span>

            <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
              Your questions,
              <br /> answered.
            </h2>

            <p className="md:w-[70%] text-md md:text-xl mt-5"> Understand the production options, distribution, costs and measurement before you start.</p>
          </div>

          {/* FAQ List */}
          <div className="border-t border-[#d6d6d2]">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#d6d6d2]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-8 py-4 md:py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-5">
                      <span className="text-xs font-bold text-[#999] pt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-base md:text-[24px] font-semibold text-[#171717]">
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className="shrink-0 h-6 w-6 md:w-10 md:h-10 border border-[#171717]
                           rounded-full flex items-center justify-center
                           text-[#171717]"
                    >
                      {isOpen ? (
                        <FiMinus className="text-base md:text-[20px]" />
                      ) : (
                        <FiPlus className="text-base md:text-[20px]" />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="md:pl-[53px] md:pr-14 pb-4 md:pb-8 md:max-w-[900px]">
                        <p className="text-sm md:text-[18px] leading-[1.7] text-[#555]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
      <ContactCTA/>
    </div>

  );
};

export default Home;