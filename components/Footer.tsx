import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary w-full">
      {/* ── Contact Strip ─────────────────────────────────── */}
      <div className="section-padding py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/10">
        {/* Left — Contact Info */}
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-white text-3xl font-bold mb-3">
              Contact ZAHABU
            </h2>
            {/* Accent underline */}
            <div className="w-48 h-0.5 bg-accent rounded-full mb-5" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              If you&apos;re inquiring about a claim, service question, or general
              concern, please use the form below and we&apos;ll get back to you
              within 1–2 business days.
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 text-white/50 text-xs">
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="mt-0.5 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span>
              ZAHABU SOLUTIONS — Kigali, Rwanda. Available Mon–Fri, 8am–6pm.
            </span>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="bg-transparent border-b border-white/25 text-white placeholder:text-white/40 text-sm py-3 outline-none focus:border-accent transition-colors duration-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-b border-white/25 text-white placeholder:text-white/40 text-sm py-3 outline-none focus:border-accent transition-colors duration-200"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="bg-transparent border-b border-white/25 text-white placeholder:text-white/40 text-sm py-3 outline-none focus:border-accent transition-colors duration-200"
          />
          <input
            type="text"
            placeholder="Type your message"
            className="bg-transparent border-b border-white/25 text-white placeholder:text-white/40 text-sm py-3 outline-none focus:border-accent transition-colors duration-200"
          />

          <div className="mt-2">
            <button
              type="button"
              className="bg-accent text-white text-sm font-bold px-8 py-3 rounded-full hover:bg-accent/80 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────────────────── */}
      <div className="section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} ZAHABU Solutions. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-white/40 text-xs">
          <Link
            href="/privacy"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
