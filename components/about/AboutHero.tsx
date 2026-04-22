"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_3D, PERSPECTIVE_PX, SectionTransition } from "@/components/motion";

export default function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <SectionTransition
      when="mount"
      className="relative w-full min-h-[70vh] overflow-hidden flex items-end"
    >
      <Image
        src="/nurse.webp"
        alt="About ZAHABU Solutions"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary opacity-80" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-tl-full" />

      <div
        className="relative z-10 section-padding pb-20 pt-44 [perspective:var(--a-p)]"
        style={{ ["--a-p" as string]: `${PERSPECTIVE_PX}px` }}
      >
        {reduce ? (
          <div className="max-w-2xl">
            <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-4">Who We Are</p>
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4">
              About <span className="text-accent">ZAHABU</span>
              <br />
              Solutions Ltd.
            </h1>
            <div className="w-14 h-1 bg-accent rounded-full mb-6" />
            <p className="text-white/65 text-base max-w-lg leading-relaxed">
              Rwanda&apos;s emerging insurance brokerage firm — built on trust, expertise, and a
              commitment to putting clients first. Established in 2025, headquartered in Kigali.
            </p>
          </div>
        ) : (
          <motion.div
            className="max-w-2xl [transform-style:preserve-3d]"
            style={{ transformStyle: "preserve-3d" }}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
            }}
          >
            <motion.p
              className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-4"
              style={{ transformPerspective: PERSPECTIVE_PX }}
              variants={{
                hidden: { opacity: 0, rotateX: 28, y: 16, z: -32 },
                show: { opacity: 1, rotateX: 0, y: 0, z: 0, transition: { duration: 0.6, ease: EASE_3D } },
              }}
            >
              Who We Are
            </motion.p>
            <motion.h1
              className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4"
              style={{ transformPerspective: PERSPECTIVE_PX }}
              variants={{
                hidden: { opacity: 0, rotateX: 22, y: 28, z: -48 },
                show: { opacity: 1, rotateX: 0, y: 0, z: 0, transition: { duration: 0.7, ease: EASE_3D } },
              }}
            >
              About <span className="text-accent">ZAHABU</span>
              <br />
              Solutions Ltd.
            </motion.h1>
            <motion.div
              className="w-14 h-1 bg-accent rounded-full mb-6"
              style={{ transformOrigin: "left center" }}
              variants={{
                hidden: { opacity: 0, scaleX: 0, rotateX: 60, z: -20 },
                show: { opacity: 1, scaleX: 1, rotateX: 0, z: 0, transition: { duration: 0.5, ease: EASE_3D } },
              }}
            />
            <motion.p
              className="text-white/65 text-base max-w-lg leading-relaxed"
              style={{ transformPerspective: PERSPECTIVE_PX }}
              variants={{
                hidden: { opacity: 0, rotateX: 12, y: 12, z: -20 },
                show: { opacity: 1, rotateX: 0, y: 0, z: 0, transition: { duration: 0.55, ease: EASE_3D } },
              }}
            >
              Rwanda&apos;s emerging insurance brokerage firm — built on trust, expertise, and a
              commitment to putting clients first. Established in 2025, headquartered in Kigali.
            </motion.p>
          </motion.div>
        )}
      </div>
    </SectionTransition>
  );
}
