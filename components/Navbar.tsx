"use client";

import Link from "next/link";
import { useState } from "react";

const linkInactive =
  "text-white hover:text-accent transition-colors duration-200";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50 section-padding pt-3 sm:pt-4">
      <nav className="relative w-full rounded-2xl md:rounded-full bg-primary/80 backdrop-blur-sm px-4 py-3 sm:px-6 md:px-8 md:py-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="text-accent font-semibold">
                Home
              </Link>
              <Link href="/about" className={linkInactive}>
                About Us
              </Link>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <span className="text-white font-black text-2xl tracking-tight italic">
              ZAHABU
            </span>
            <span className="text-white/40 text-xl font-thin">|</span>
            <span className="text-white text-sm font-light tracking-[0.3em] uppercase">
              Solution Ltd
            </span>
          </div>

          <Link
            href="/submit-claim"
            className="bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-accent/80 transition-colors duration-200 shrink-0"
          >
            Contact-us ↗
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden flex-col gap-0">
          <div className="flex items-center justify-between gap-3 min-h-[2.5rem]">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-1.5 sm:gap-2 min-w-0"
            >
              <span className="text-white font-black text-lg sm:text-xl tracking-tight italic shrink-0">
                ZAHABU
              </span>
              <span className="text-white/40 text-base font-thin shrink-0 hidden sm:inline">
                |
              </span>
              <span className="text-white text-[10px] sm:text-xs font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase truncate">
                Solution Ltd
              </span>
            </Link>

            <button
              type="button"
              className="shrink-0 p-2 -mr-1 rounded-full text-white hover:bg-white/10 transition-colors"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            id="mobile-nav-menu"
            className={
              menuOpen
                ? "flex flex-col gap-1 border-t border-white/15 mt-3 pt-3"
                : "hidden"
            }
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="text-accent font-semibold text-sm font-medium py-2.5 px-1 rounded-lg hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`${linkInactive} text-sm font-medium py-2.5 px-1 rounded-lg hover:bg-white/5`}
            >
              About Us
            </Link>
            <Link
              href="/submit-claim"
              onClick={closeMenu}
              className="mt-1 bg-accent text-white text-sm font-bold px-4 py-3 rounded-full text-center hover:bg-accent/80 transition-colors duration-200"
            >
              Contact-us ↗
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
