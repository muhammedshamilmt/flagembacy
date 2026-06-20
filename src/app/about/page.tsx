import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import CoreBeliefs from "@/components/about/CoreBeliefs";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import Affiliations from "@/components/about/Affiliations";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex w-full flex-col items-center overflow-clip bg-black">
      <AboutHero />
      <OurStory />
      <CoreBeliefs />
      <LeadershipTeam />
      <Affiliations />
      <Footer />
    </main>
  );
}
