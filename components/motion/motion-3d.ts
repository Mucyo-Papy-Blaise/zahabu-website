export const EASE_3D: [number, number, number, number] = [0.19, 1, 0.22, 1];

export const SPRING_3D = {
  type: "spring" as const,
  stiffness: 320,
  damping: 28,
  mass: 0.85,
};

export const PERSPECTIVE_PX = 1200;

/** For hovers: snappy but smooth */
export const SPRING_HOVER = { type: "spring" as const, stiffness: 400, damping: 22, mass: 0.4 };

/** CTA / button hovers: keep feedback flat — avoid strong 3D (rotateX, z) on interactive controls. */
export const BTN_HOVER = {
  y: -2,
  scale: 1.02,
  boxShadow: "0 12px 28px -10px rgba(0,0,0,0.25)",
} as const;

export const BTN_TAP = { scale: 0.98 } as const;
