import { Link } from "react-router";
import { useState } from "react";
import StartProjectForm from "../components/start-project-form";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import Logo from "../../public/content-foundry.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full sticky inset-0 bg-cream z-1000000 border-b border-line px-[5vw]">
        <header className="mx-auto flex h-[78px] w-full max-w-[1440px] items-center justify-between gap-5 scroll:border-none">
          <a href="/#top" className="h-auto w-[60px]" >
            <img src={Logo} alt="content" className="w-full h-full object-cover" />
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>

          <nav className="hidden items-center gap-[10px] text-sm lg:text-xs lg:gap-3 xl:gap-5 font-bold sm:gap-[30px] lg:flex">
            <a href="/#stories" className="hidden transition-opacity hover:opacity-60 md:block"  >
              Micro-dramas
            </a>
            <a href="/#whatwemake" className="hidden transition-opacity hover:opacity-60 md:block" >
              What we make
            </a>
            <a href="/#offer" className="hidden transition-opacity hover:opacity-60 md:block" >
              For companies
            </a>
            <a href="/#amplify" className="hidden transition-opacity hover:opacity-60 md:block" >
              Amplification
            </a>
            <Link to="/our-work" className="hidden transition-opacity hover:opacity-60 md:block" >
              Our work
            </Link>
            <a href="/#founder" className="hidden transition-opacity hover:opacity-60 md:block">
              Founder
            </a>
            <a href="/#clients" className="hidden transition-opacity hover:opacity-60 md:block" >
              Clients
            </a>
            <button onClick={() => setIsOpen(true)} className="inline-flex items-center justify-center bg-violet px-5 py-4 text-sm font-extrabold text-white transition-opacity hover:opacity-85" >
              Start a project ↗
            </button>
            <a href="tel:+919811346401" className="hidden md:items-center gap-3 transition-opacity hover:opacity-60 md:flex" >
              <FiPhoneCall size={20} /> +91 98113 46401
            </a>
          </nav>

          {isMenuOpen && (
            <nav className="absolute left-0 top-full z-50 flex max-h-[calc(100dvh-78px)] w-full flex-col gap-5 overflow-y-auto border-b border-line bg-cream px-[5vw] py-6 text-base font-bold shadow-lg lg:hidden">

              <a href="/#stories" onClick={() => setIsMenuOpen(false)}>
                Micro-dramas
              </a>

              <a href="/#whatwemake" onClick={() => setIsMenuOpen(false)}>
                What we make
              </a>

              <a href="/#offer" onClick={() => setIsMenuOpen(false)}>
                For companies
              </a>

              <a href="/#amplify" onClick={() => setIsMenuOpen(false)}>
                Amplification
              </a>

              <Link to="/our-work" onClick={() => setIsMenuOpen(false)}>
                Our work
              </Link>

              <a href="/#founder" onClick={() => setIsMenuOpen(false)}>
                Founder
              </a>

              <a href="/#clients" onClick={() => setIsMenuOpen(false)}>
                Clients
              </a>

              <a
                href="tel:+919811346401"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <FiPhoneCall size={18} />
                +91 98113 46401
              </a>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsOpen(true);
                }}
                className="flex w-full items-center justify-center bg-violet px-5 py-4 text-sm font-extrabold text-white"
              >
                Start a project ↗
              </button>
            </nav>
          )}
        </header>
      </div>
      {
        isOpen && (
          <StartProjectForm isOpen={isOpen} setIsOpen={setIsOpen} />

        )
      }
    </>

  )

}

export default Navbar;
