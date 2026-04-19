const facts = [
  { label: "Established", value: "EST. 2025" },
  { label: "Headquarters", value: "Kigali, Rwanda" },
  { label: "Business Type", value: "Insurance Brokerage Firm" },
  { label: "Industry", value: "Financial Services – Insurance" },
  {
    label: "Regulator",
    value:
      "Currently seeking licensing with the National Bank of Rwanda (BNR)",
  },
];

export default function CompanyProfile() {
  return (
    <section className="bg-white section-padding py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Logo Visual */}
        <div className="flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Ghost outer circle */}
            <div className="absolute inset-0 rounded-full border border-gray-200" />
            {/* Main circle */}
            <div className="absolute inset-6 rounded-full border-2 border-primary flex flex-col items-center justify-center bg-white shadow-xl gap-2">
              <span className="text-accent text-4xl font-black tracking-tight leading-none">
                ZAHABU
              </span>
              <span className="text-primary text-xs font-light tracking-[0.45em] uppercase">
                Solutions Ltd.
              </span>
            </div>
            {/* Accent dot */}
            <div className="absolute top-4 right-8 w-3 h-3 rounded-full bg-accent" />
            {/* Decorative small circle */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full border border-accent/30" />
          </div>
        </div>

        {/* Right — Profile Info */}
        <div>
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            Company Profile
          </p>
          <div className="mb-2">
            <span className="inline-block bg-accent text-primary text-2xl font-bold px-4 py-1 rounded-sm mr-2">
              Company
            </span>
            <span className="text-primary text-4xl font-black uppercase tracking-wide">
              Profile
            </span>
          </div>
          <div className="w-10 h-0.5 bg-gray-200 rounded-full mb-6" />
          <p className="text-primary font-bold text-base mb-6">
            Insurance Brokerage Services in Rwanda
          </p>

          <ul className="flex flex-col gap-4">
            {facts.map((fact, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-primary text-sm leading-relaxed">
                  <span className="font-bold">{fact.label}:</span>{" "}
                  <span className="text-muted">{fact.value}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}