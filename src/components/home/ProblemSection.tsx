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
    <section className="py-32 bg-black text-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <MotionWrapper className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl font-light mb-6 tracking-tight">
            Growth Without Clarity Is <span className="text-[#A4133C]">Risky.</span>
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            Most businesses operate on assumptions. NorthMetriX brings precision.
          </p>
        </MotionWrapper>

        {/* Problem Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="group relative p-10 h-full bg-[#0A0A0A] border border-white/10 hover:border-[#A4133C] transition-all duration-500">
                {/* Icon */}
                <div className="w-16 h-16 rounded-none bg-[#A4133C]/10 flex items-center justify-center mb-8 border border-[#A4133C]/20 group-hover:bg-[#A4133C] transition-colors duration-500">
                  <problem.icon className="w-8 h-8 text-[#A4133C] group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-medium text-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-white/50 leading-relaxed font-light">
                  {problem.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#A4133C]/0 group-hover:border-[#A4133C] transition-colors duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}