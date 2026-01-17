import { AlertTriangle, Eye, TrendingDown } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const problems = [
  {
    icon: TrendingDown,
    title: "Unreliable Growth Metrics",
    description: "Businesses struggle to trust their own data, making decisions based on incomplete or misleading signals.",
  },
  {
    icon: Eye,
    title: "Fragmented Reputation",
    description: "Reviews and trust signals are scattered across platforms, creating noise instead of clarity.",
  },
  {
    icon: AlertTriangle,
    title: "No Unified View",
    description: "There is no clear way to measure trust, traction, and credibility together in one place.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container-max section-padding">
        {/* Section Header */}
        <MotionWrapper className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
            Growth Without Clarity Is Risky
          </h2>
          <p className="text-lg text-soft-gray">
            Most businesses operate on assumptions. NorthMetriX brings precision.
          </p>
        </MotionWrapper>

        {/* Problem Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="group relative p-8 rounded-2xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-off-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-soft-gray leading-relaxed">
                  {problem.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}