import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ServiceHeroSection from "@/components/service-components/ServiceHeroSection";
import StaffingSolution from "@/components/service-components/StaffingSolution";
import HRSolution from "@/components/service-components/HRSolution";
import Compliance from "@/components/service-components/Compliance";
import Industries from "@/components/service-components/Industries";

export default function Service() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div className="pt-10">
      <ServiceHeroSection />

      <div id="staffing-solutions">
        <StaffingSolution />
      </div>

      <div id="hr-solutions">
        <HRSolution />
      </div>

      <div id="compliance-industrial-relations">
        <Compliance />
      </div>

      <Industries />
    </div>
  );
}