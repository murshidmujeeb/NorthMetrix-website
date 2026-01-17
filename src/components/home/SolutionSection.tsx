import { Star, Users, TrendingUp } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const pillars = [
  {
    icon: Star,
    title: "Reputation Intelligence",
    description: "Aggregate and analyze reviews, ratings, and trust signals from across the digital ecosystem into actionable insights.",
  },
  {
    icon: Users,
    title: "User & Traction Analytics",
    description: "Track real users, activation patterns, and engagement metrics to understand what drives genuine growth.",
  },
  {
    icon: TrendingUp,
    title: "Growth Signals & Metrics",
    description: "Identify which actions and strategies actually build trusted, sustainable growth for your business.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-max section-padding">
        {/* Section Header */}
        <MotionWrapper className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/50 border border-border mb-6">
            <span className="text-sm font-medium text-soft-gray">Core Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
            The Growth Intelligence Platform
          </h2>
          <p className="text-lg text-soft-gray">
            Three integrated pillars that transform how you measure, understand, and accelerate business growth.
          </p>
        </MotionWrapper>

        {/* Pillars Grid */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="group relative h-full">
                <div className="h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-off-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-soft-gray leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Visual Connector */}
        <MotionWrapper delay={0.4} className="hidden lg:flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <div className="w-32 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-3 h-3 rounded-full bg-primary/50" />
            <div className="w-32 h-px bg-primary/50" />
            <div className="w-3 h-3 rounded-full bg-primary/50" />
            <div className="w-32 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}