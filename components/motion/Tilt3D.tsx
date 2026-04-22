"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type PointerEvent } from "react";

import { PERSPECTIVE_PX } from "./motion-3d";

const spring = { stiffness: 420, damping: 32, mass: 0.55 };

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
};

export function Tilt3D({ children, className, tiltAmount = 9 }: Tilt3DProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return <Tilt3DInner className={className} tiltAmount={tiltAmount}>{children}</Tilt3DInner>;
}

function Tilt3DInner({ children, className, tiltAmount = 9 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const x = useSpring(mx, spring);
  const y = useSpring(my, spring);
  const rotateX = useTransform(y, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(x, [0, 1], [-tiltAmount, tiltAmount]);

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  function onPointerLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <div
      className="h-full [perspective:var(--p)]"
      style={{ ["--p" as string]: `${PERSPECTIVE_PX}px` }}
    >
      <motion.div
        ref={ref}
        className={className}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          rotateX,
          rotateY,
        }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}
