"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { EASE_3D, PERSPECTIVE_PX } from "./motion-3d";

type When = "inView" | "mount";

type Slide = "up" | "left" | "right";

type SectionTransitionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  when?: When;
  slide?: Slide;
};

const slideOffset: Record<Slide, { x: number; y: number }> = {
  up: { x: 0, y: 44 },
  left: { x: -36, y: 24 },
  right: { x: 36, y: 24 },
};

const slideTilt3D: Record<Slide, { rotateX: number; rotateY: number; z: number }> = {
  up: { rotateX: 10, rotateY: 0, z: -56 },
  left: { rotateX: 6, rotateY: -7, z: -44 },
  right: { rotateX: 6, rotateY: 7, z: -44 },
};

const threeD = {
  section: { transformStyle: "preserve-3d" as const },
  style: { transformPerspective: PERSPECTIVE_PX } as const,
};

export function SectionTransition({
  children,
  className,
  id,
  when = "inView",
  slide = "up",
}: SectionTransitionProps) {
  const reduceMotion = useReducedMotion();
  const o = slideOffset[slide];

  if (reduceMotion) {
    return (
      <section className={className} id={id}>
        {children}
      </section>
    );
  }

  if (when === "mount") {
    return (
      <motion.section
        className={className}
        id={id}
        style={{ ...threeD.style, ...threeD.section }}
        initial={{ opacity: 0, y: 36, z: -90, rotateX: 11, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, z: 0, rotateX: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE_3D }}
      >
        {children}
      </motion.section>
    );
  }

  const t3 = slideTilt3D[slide];
  return (
    <motion.section
      className={className}
      id={id}
      style={{ ...threeD.style, ...threeD.section }}
      initial={{
        opacity: 0,
        x: o.x,
        y: o.y,
        z: t3.z,
        rotateX: t3.rotateX,
        rotateY: t3.rotateY,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
      }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.68, ease: EASE_3D }}
    >
      {children}
    </motion.section>
  );
}
