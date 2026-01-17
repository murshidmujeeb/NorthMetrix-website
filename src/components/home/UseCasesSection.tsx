import { Rocket, LineChart, Building, Hotel, Stethoscope, ShoppingBag } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const useCases = [
  {
    icon: Rocket,
    title: "SaaS & App Founders",
    description: "Measure user activation, retention, and growth signals to scale with confidence.",
  },
  {
    icon: LineChart,
    title: "Trading & Finance",
    description: "Build credibility and trust metrics for financial services and trading platforms.",
  },
  {
    icon: Building,
    title: "Local & Regional Businesses",
    description: "Consolidate reputation across platforms and drive authentic customer engagement.",
  },
  {
    icon: Hotel,
    title: "Hospitality & Venues",
    description: "Manage bookings, reviews, and guest experience metrics in one unified view.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    description: "Track patient satisfaction and build trusted digital presence for practices.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Sellers",
    description: "Optimize marketplace presence and understand customer trust signals.",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-max section-padding">
        {/* Section Header */}
        <MotionWrapper className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/50 border border-border mb-6">
            <span className="text-sm font-medium text-soft-gray">Industries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-soft-gray">
            From startups to enterprises, across industries that value clarity, trust, and measurable growth.
          </p>
        </MotionWrapper>

        {/* Use Cases Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <StaggerItem key={useCase.title}>
              <div className="group p-6 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-off-white mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-soft-gray leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}