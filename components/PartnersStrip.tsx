"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTransition, SPRING_HOVER } from "@/components/motion";
import "./partners-strip.css";

const partners = [
  { name: "Britam", src: "/Britam.png", isImage: true },
  { name: "MAYFAIR", src: "/MAYFAIR.svg", isImage: true },
  { name: "MUA", src: "/MUA.svg", isImage: true },
  { name: "Prime", src: "/Prime.svg", isImage: true },
  // Duplicated for seamless infinite loop
  { name: "Britam", src: "/Britam.png", isImage: true },
  { name: "MAYFAIR", src: "/MAYFAIR.svg", isImage: true },
  { name: "MUA", src: "/MUA.svg", isImage: true },
  { name: "Prime", src: "/Prime.svg", isImage: true },
  { name: "Britam", src: "/Britam.png", isImage: true },
  { name: "MAYFAIR", src: "/MAYFAIR.svg", isImage: true },
  { name: "MUA", src: "/MUA.svg", isImage: true },
  { name: "Prime", src: "/Prime.svg", isImage: true },
  { name: "Britam", src: "/Britam.png", isImage: true },
  { name: "MAYFAIR", src: "/MAYFAIR.svg", isImage: true },
  { name: "MUA", src: "/MUA.svg", isImage: true },
  { name: "Prime", src: "/Prime.svg", isImage: true },
];

export default function PartnersStrip() {
  const reduce = useReducedMotion();

  return (
    <SectionTransition
      slide="up"
      className="bg-white border-y border-gray-100 py-8 overflow-hidden section-padding"
    >
      {/* Label */}
      <p className="text-center text-muted text-xs tracking-[0.3em] uppercase font-semibold mb-6">
        Trusted by Industry Leaders
      </p>

      {/* Scrolling track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="partners-track flex items-center gap-10 [perspective:800px]">
          {partners.map((partner, i) =>
            reduce ? (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center border border-gray-200 rounded-lg px-8 py-4 min-w-35 h-16 bg-white hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={100}
                  height={40}
                  className="object-contain max-h-8 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ) : (
              <motion.div
                key={i}
                className="shrink-0 flex items-center justify-center border border-gray-200 rounded-lg px-8 py-4 min-w-35 h-16 bg-white group"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  rotateX: -6,
                  rotateY: 2,
                  z: 40,
                  borderColor: "var(--color-primary, #0f3356)",
                  boxShadow: "0 18px 40px -14px rgba(0,0,0,0.2)",
                }}
                transition={SPRING_HOVER}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={100}
                  height={40}
                  className="object-contain max-h-8 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </SectionTransition>
  );
}
