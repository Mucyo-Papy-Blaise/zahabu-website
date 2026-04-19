import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 section-padding pt-4">
      {/* Floating navbar container with rounded edges */}
      <nav className="w-full bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-between px-8 py-4">
        
        {/* Left Nav Links */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-accent font-semibold">
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent transition-colors duration-200"
            >
              About Us
            </Link>
            {/* <Link
              href="/services"
              className="text-white hover:text-accent transition-colors duration-200"
            >
              Our Services
            </Link> */}
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="text-white font-black text-2xl tracking-tight italic">
            ZAHABU
          </span>
          <span className="text-white/40 text-xl font-thin">|</span>
          <span className="text-white text-sm font-light tracking-[0.3em] uppercase">
            Solution Ltd 
          </span>
        </div>

        {/* Right CTA Button — orange like inspiration */}
        <Link
          href="/submit-claim"
          className="bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-accent/80 transition-colors duration-200"
        >
          Contact-us ↗
        </Link>
      </nav>
    </div>
  );
}