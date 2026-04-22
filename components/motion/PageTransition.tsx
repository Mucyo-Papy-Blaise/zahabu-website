"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { EASE_3D, PERSPECTIVE_PX } from "./motion-3d";

type PageTransitionProps = { children: ReactNode };

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="flex min-h-0 min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
        {children}
      </div>
    );
  }

  return (
    <div
      className="min-h-0 min-w-0 max-w-full flex-1 overflow-x-clip [perspective:var(--p)]"
      style={{ ["--p" as string]: `${PERSPECTIVE_PX}px` }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="flex min-h-0 min-w-0 max-w-full flex-1 flex-col overflow-x-clip"
          style={{ transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 28, rotateX: 7, z: -48 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: -5, z: -32 }}
          transition={{ duration: 0.5, ease: EASE_3D }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
