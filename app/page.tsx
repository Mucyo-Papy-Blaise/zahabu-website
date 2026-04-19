import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnersStrip from "@/components/PartnersStrip";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PartnersStrip />
      <ServicesSection/>
      <WhyChooseUs />
      <WhatWeBelieve />
      <Footer />
    </main>
  );
}