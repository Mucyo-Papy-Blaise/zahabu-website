import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import CompanyProfile from "@/components/about/CompanyProfile";
import MissionVision from "@/components/about/MissionVision";
import OurTeam from "@/components/about/OurTeam";
import OurClients from "@/components/about/OurClients";
import ContactSection from "@/components/about/ContactSection";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <CompanyProfile />
      <MissionVision />
      <OurTeam />
      <OurClients />
      <ContactSection />
      <Footer />
    </main>
  );
}