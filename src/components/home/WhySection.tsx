import { Database, Shield, Globe2, Scale } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const reasons = [
  {
    icon: Database,
    title: "Data-First Approach",
    description: "Every decision backed by real, verifiable metrics and intelligent analytics.",
  },
  {
    icon: Shield,
    title: "Integrity & Ethics",
    description: "No fake users, no fake reviews. Only authentic growth that builds lasting trust.",
  },
  {
    icon: Globe2,
    title: "Global Scale",
    description: "Built to support local businesses and global enterprises alike.",
  },
  {
    icon: Scale,
    title: "Industry Agnostic",
    description: "Designed to scale across industries, from SaaS to healthcare to commerce.",
  },
];

export function WhySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <MotionWrapper variant="slideLeft">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/50 border border-border mb-6">
              <span className="text-sm font-medium text-soft-gray">Why NorthMetriX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-6">
              Built on Clarity, Integrity, and Intelligence
            </h2>
            <p className="text-lg text-soft-gray mb-8 leading-relaxed">
              We believe growth should be measurable, ethical, and sustainable. NorthMetriX provides the tools and insights to achieve exactly that.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-3xl font-bold text-teal-accent mb-1">100%</p>
                <p className="text-sm text-soft-gray">Real Data Focus</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-3xl font-bold text-teal-accent mb-1">Zero</p>
                <p className="text-sm text-soft-gray">Fake Metrics</p>
              </div>
            </div>
          </MotionWrapper>

          {/* Right - Reason Cards */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-off-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-soft-gray leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}