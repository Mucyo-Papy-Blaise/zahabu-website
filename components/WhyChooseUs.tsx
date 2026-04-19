"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

const reasons = [
  {
    title: "Dedicated to client-first solutions",
    description:
      "We focus on understanding and prioritizing each client's unique needs. Our solutions are tailored to deliver the best possible outcomes for them.",
    accent: true,
  },
  {
    title: "Efficient claims assistance",
    description:
      "We provide fast and hassle-free support throughout the claims process. Our team ensures quick resolution so clients can recover without delays.",
    accent: false,
  },
  {
    title: "Access to leading insurers in Rwanda",
    description:
      "We work closely with the top insurance providers in Rwanda. This ensures our clients get comprehensive coverage at competitive rates.",
    accent: true,
  },
];

const bgImage = "/insurance.jpg";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* Fixed/Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      {/* Dark primary overlay */}
      <div
        className="absolute inset-0 bg-primary opacity-85"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 section-padding py-24">
        {/* Header */}
        <div className="text-start mb-16">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            Why Us
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Why Choose ZAHABU?
          </h2>
          <span className="block w-96 h-0.5 bg-accent rounded-full" />
          <p className="text-white/60 text-base mt-2">
            From concept we deliver solutions built on trust, expertise, and
            client-first thinking.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl p-8 flex flex-col gap-4 ${
                reason.accent
                  ? "bg-accent text-primary"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/20"
              }`}
            >
              {/* Left border accent bar */}
              <div
                className={`absolute left-0 top-8 w-1 h-10 rounded-r-full ${
                  reason.accent ? "bg-primary" : "bg-accent"
                }`}
              />

              <h3
                className={`text-xl font-bold leading-snug ${
                  reason.accent ? "text-primary" : "text-white"
                }`}
              >
                {reason.title}
              </h3>

              {/* Short divider */}
              <div
                className={`w-8 h-0.5 rounded-full ${
                  reason.accent ? "bg-primary/40" : "bg-white/30"
                }`}
              />

              <p
                className={`text-sm leading-relaxed ${
                  reason.accent ? "text-primary/80" : "text-white/70"
                }`}
              >
                {reason.description}
              </p>

              {/* Decorative circle bottom right */}
              <div
                className={`absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-20 ${
                  reason.accent ? "bg-primary" : "bg-white"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
