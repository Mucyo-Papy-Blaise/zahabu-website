"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/insurance.jpg"
        alt="Auto Appraisal Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary opacity-85" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-6">
        <div>
          {/* Static Title */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            WELCOME TO ZAHABU <br />
            SOLUTIONS LTD
          </h1>

          {/* Typing Text */}
          <h2 className="text-accent text-xl md:text-2xl font-semibold">
            <Typewriter
              words={[
                "Your Trusted Insurance Partner",
                "Reliable Coverage Solutions",
                "Protecting What Matters Most",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>
        </div>
      </div>
    </section>
  );
}