import { Database, Shield, Globe2, Scale } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { CountUp } from "@/components/ui/CountUp";

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
    <section className="py-32 bg-black text-white relative">
      <div className="absolute inset-0 bg-[#A4133C]/5 mix-blend-multiply pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <MotionWrapper variant="slideLeft" className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 mb-8 rounded-none">
              <span className="w-2 h-2 bg-[#A4133C]" />
              <span className="text-sm font-bold tracking-widest text-white/80 uppercase">Why NorthMetriX</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-light mb-8 leading-tight tracking-tight">
              Built on Clarity, <span className="text-white/50">Integrity,</span> and <span className="text-[#A4133C]">Intelligence.</span>
            </h2>

            <p className="text-xl text-white/60 mb-12 leading-relaxed font-light">
              We believe growth should be measurable, ethical, and sustainable. NorthMetriX provides the tools and insights to achieve exactly that.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-[#0A0A0A] border border-white/10 border-l-4 border-l-[#A4133C]">
                <p className="text-5xl font-bold text-white mb-2">
                  <CountUp value={100} suffix="%" />
                </p>
                <p className="text-sm text-white/50 font-medium uppercase tracking-wider">Real Data Focus</p>
              </div>
              <div className="p-8 bg-[#0A0A0A] border border-white/10 border-l-4 border-l-white/20">
                <p className="text-5xl font-bold text-white mb-2">24/7</p>
                <p className="text-sm text-white/50 font-medium uppercase tracking-wider">Monitoring</p>
              </div>
            </div>
          </MotionWrapper>

          {/* Right - Reason Cards */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <div className="group p-8 h-full bg-[#0A0A0A] border border-white/10 hover:border-[#A4133C] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-white/30 group-hover:text-[#A4133C] transition-colors duration-300">
                    <reason.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A4133C] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed font-light">
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