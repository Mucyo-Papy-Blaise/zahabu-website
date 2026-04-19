import Image from "next/image";

const values = [
  { label: "Integrity", accent: false },
  { label: "Professionalism", accent: false },
  { label: "Innovation", accent: true },
  { label: "Customer-Centered", accent: true },
  { label: "Transparency", accent: false },
];

export default function WhatWeBelieve() {
  return (
    <section className="w-full min-h-150 flex flex-col lg:flex-row overflow-hidden">
      {/* ── Left Content ─────────────────────────────────── */}
      <div className="flex-1 bg-white section-padding py-20 flex flex-col justify-center">
        {/* Decorative circle top */}
        <div className="w-4 h-4 rounded-full border-2 border-gray-300 mb-8" />

        <h2 className="text-primary text-5xl font-bold leading-tight">
          What We Believe
        </h2>
        <span className="block w-48 h-0.5 bg-accent mt-3 rounded-full mb-10" />
         
        {/* Values grid — staggered like the image */}
        <div className="flex flex-col gap-3 mb-10">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-3">
            <ValuePill label="Integrity" accent={false} />
            <ValuePill label="Professionalism" accent={false} />
            <ValuePill label="Innovation" accent={true} />
          </div>
          {/* Row 2 — offset to create the staggered look */}
          <div className="flex flex-wrap gap-3 ml-0">
            <ValuePill label="Customer-Centered" accent={true} />
            <ValuePill label="Transparency" accent={false} />
          </div>
        </div>

        {/* Decorative circle bottom */}
        <div className="w-6 h-6 rounded-full border-2 border-gray-200 mb-6" />

        {/* Mission statement */}
        <p className="text-primary text-lg font-bold leading-relaxed max-w-md">
          We are committed to providing innovative, reliable, and personalized
          insurance solutions to individuals and organizations across Rwanda.
        </p>
      </div>

      {/* ── Right Image — diagonal clip ──────────────────── */}
      <div
        className="relative lg:w-[55%] min-h-[400px] lg:min-h-full"
        style={{
          clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <Image
          src="/nurse.webp"
          alt="ZAHABU Insurance professional care"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

/* ── Value Pill Sub-component ───────────────────────────── */
function ValuePill({ label, accent }: { label: string; accent: boolean }) {
  return (
    <div
      className={`relative flex flex-col items-center px-6 py-3 rounded-sm font-bold text-sm tracking-widest uppercase cursor-default select-none ${
        accent
          ? "bg-accent text-primary"
          : "bg-gray-100 text-primary border border-gray-200"
      }`}
    >
      {/* Top accent bar */}
      <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/30 rounded-full" />
      {label}
    </div>
  );
}
