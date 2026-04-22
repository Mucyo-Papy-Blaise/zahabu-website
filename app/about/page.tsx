import AboutHero from "@/components/about/AboutHero";
import CompanyProfile from "@/components/about/CompanyProfile";
import MissionVision from "@/components/about/MissionVision";
import OurTeam from "@/components/about/OurTeam";
import OurClients from "@/components/about/OurClients";
import ContactSection from "@/components/about/ContactSection";

export default function AboutPage() {
  return (
    <main className="flex w-full min-h-0 flex-1 flex-col">
      <AboutHero />
      <CompanyProfile />
      <MissionVision />
      <OurTeam />
      <OurClients />
      <ContactSection />
    </main>
  );
}