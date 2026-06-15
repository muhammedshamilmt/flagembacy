import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import QuickPillars from "@/components/QuickPillars";
import ServiceTimes from "@/components/ServiceTimes";
import MinistriesOverview from "@/components/MinistriesOverview";
import LatestSermon from "@/components/LatestSermon";
import Testimonials from "@/components/Testimonials";
import UpcomingEvents from "@/components/UpcomingEvents";
import GiveBanner from "@/components/GiveBanner";
import Footer from "@/components/Footer";

// Note: AlbumBanner and VisionStatement are preserved in the components folder but removed from the main flow to match the exact blueprint.
// import AlbumBanner from "@/components/AlbumBanner";
// import VisionStatement from "@/components/VisionStatement";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-clip bg-black">
      <HeroSection />
      <WelcomeSection />
      <UpcomingEvents />
      <QuickPillars />
      <ServiceTimes />
      <MinistriesOverview />
      <LatestSermon />
      <Testimonials />
      <GiveBanner />
      <Footer />
    </main>
  );
}
