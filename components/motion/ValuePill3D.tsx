"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SPRING_HOVER } from "./motion-3d";

type Props = { label: string; accent: boolean };

export function ValuePill3D({ label, accent }: Props) {
  const reduce = useReducedMotion();
  const className = `relative flex flex-col items-center px-6 py-3 rounded-sm font-bold text-sm tracking-widest uppercase cursor-default select-none ${
    accent
      ? "bg-accent text-primary"
      : "bg-gray-100 text-primary border border-gray-200"
  }`;
  if (reduce) {
    return (
      <div className={className}>
        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/30 rounded-full" />
        {label}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, scale: 1.05, rotateX: 8, z: 16, rotateY: -3 }}
      transition={SPRING_HOVER}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1000 }}
    >
      <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/30 rounded-full" />
      {label}
    </motion.div>
  );
}
