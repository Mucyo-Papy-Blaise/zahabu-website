"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SPRING_HOVER } from "./motion-3d";

type Props = { children: string; className?: string };

export function SectorPill({ children, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <span className={className}>{children}</span>;
  }
  return (
    <motion.span
      className={className}
      whileHover={{ y: -3, scale: 1.04, z: 12, rotateX: -2 }}
      whileTap={{ scale: 0.98 }}
      style={{ transformStyle: "preserve-3d" }}
      transition={SPRING_HOVER}
    >
      {children}
    </motion.span>
  );
}
