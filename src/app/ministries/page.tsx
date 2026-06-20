import MinistriesHero from "@/components/ministries/MinistriesHero";
import MinistriesGrid from "@/components/ministries/MinistriesGrid";
import Footer from "@/components/Footer";

export default function MinistriesPage() {
  return (
    <main className="flex w-full flex-col items-center overflow-clip bg-black">
      <MinistriesHero />
      <MinistriesGrid />
      <Footer />
    </main>
  );
}
