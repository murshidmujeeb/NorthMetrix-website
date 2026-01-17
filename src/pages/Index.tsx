import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { TrustMetricsPanel } from "@/components/home/TrustMetricsPanel";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhySection } from "@/components/home/WhySection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <InsightsSection />
      <CTASection />
      {/* <TrustedBySection /> - Optional, keeping it out for pure minimalism for now unless requested */}
    </Layout>
  );
};



export default Index;