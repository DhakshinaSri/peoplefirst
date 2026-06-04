import AboutHeroSection from "@/components/about-components/AboutHeroSection";
import VisionMission from  "@/components/about-components/VisionMission";
import GoalsSection from "@/components/about-components/GoalsSection";
import Quality from "@/components/about-components/Quality";

export default function About() {
  return (
    <div className="pt-20">
      <AboutHeroSection />
      <VisionMission />
      <GoalsSection />
      <Quality />
    </div>
  );
}