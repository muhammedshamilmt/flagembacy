import KidsHero from "@/components/flag-kids/KidsHero";
import KidsActivities from "@/components/flag-kids/KidsActivities";
import KidsAgeGroups from "@/components/flag-kids/KidsAgeGroups";
import KidsRegister from "@/components/flag-kids/KidsRegister";
import Footer from "@/components/Footer";

export default function FlagKidsPage() {
  return (
    <main className="flex w-full flex-col items-center overflow-clip bg-black">
      <KidsHero />
      <KidsActivities />
      <KidsAgeGroups />
      <KidsRegister />
      <Footer />
    </main>
  );
}
