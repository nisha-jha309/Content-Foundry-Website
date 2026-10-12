const ContactCTA = () =>{
  const layoutClass = "py-[105px] max-[1024px]:py-[70px] max-[900px]:py-[50px] max-[768px]:py-[30px] px-[5vw]";

    return(
      <section className={`bg-violet ${layoutClass} text-white`}>
        <div className="mx-auto max-w-[1440px]">

          {/* Label */}
          <div className="mb-4 uppercase tracking-[0.19em] text-black text-xs">
            Start a conversation
          </div>

          {/* Heading */}
          <h2
            className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]"
          >
            Have a story worth telling? <br className="max-[576px]:hidden" />
            Let’s make people watch.
          </h2>

          {/* Description */}
          <p
            className="
        max-w-[700px]
        text-[15px]
        leading-[1.6]
        text-white
        sm:text-base
        mt-6
      "
          >
            Tell us the brand, audience and ambition. We’ll find the right
            story and production route.
          </p>

          {/* CTA Buttons */}
          <div
            className="
        mt-6
        flex
        flex-col
        gap-3
        sm:flex-row
        sm:gap-4
      "
          >
            <a
              href="mailto:info@contentfoundry.in?subject=Content%20Foundry%20project"
              className="
          inline-flex
          w-fit
          items-center
          justify-center
          bg-[#171613]
          px-6
          py-4
          text-sm
          font-black
          text-white
          underline
          transition-opacity
          hover:opacity-80
        "
            >
              info@contentfoundry.in ↗
            </a>

            <a
              href="mailto:info@contentfoundry.in?subject=Content%20Foundry%20project"
              className="
          inline-flex
          w-fit
          items-center
          justify-center
          bg-[#171613]
          px-6
          py-4
          text-sm
          font-black
          text-white
          underline
          transition-opacity
          hover:opacity-80
        "
            >
              Get a quote ↗
            </a>
          </div>

        </div>
      </section>
    )
}

export default ContactCTA;