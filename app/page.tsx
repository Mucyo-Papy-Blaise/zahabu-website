import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnersStrip from "@/components/PartnersStrip";
import WhatWeBelieve from "@/components/WhatWeBelieve";

export default function Home() {
  return (
    <main className="flex w-full min-h-0 flex-1 flex-col">
      <HeroSection />
      <PartnersStrip />
      <ServicesSection />
      <WhyChooseUs />
      <WhatWeBelieve />
    </main>
  );
}