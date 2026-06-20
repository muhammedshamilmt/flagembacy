import YouthHero from "@/components/flag-youth/YouthHero";
import YouthSchedule from "@/components/flag-youth/YouthSchedule";
import YouthLeadership from "@/components/flag-youth/YouthLeadership";
import YouthParentZone from "@/components/flag-youth/YouthParentZone";
import Footer from "@/components/Footer";

export default function FlagYouthPage() {
  return (
    <main className="flex w-full flex-col items-center overflow-clip bg-black">
      <YouthHero />
      <YouthSchedule />
      <YouthLeadership />
      <YouthParentZone />
      <Footer />
    </main>
  );
}
