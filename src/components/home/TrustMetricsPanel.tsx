import { Shield, Award, CheckCircle, TrendingUp } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const metrics = [
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability",
  },
  {
    icon: Award,
    value: "4.8/5",
    label: "Customer Rating",
    description: "Based on 2,400+ reviews",
  },
  {
    icon: TrendingUp,
    value: "340+",
    label: "Enterprise Clients",
    description: "Fortune 500 companies",
  },
  {
    icon: CheckCircle,
    value: "50M+",
    label: "Data Points Daily",
    description: "Real-time processing",
  },
];

const certifications = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "ISO 27001", status: "Certified" },
  { name: "HIPAA", status: "Ready" },
];

export function TrustMetricsPanel() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container-max section-padding">
        <MotionWrapper>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Trust & Compliance
            </span>
            <h2 className="text-2xl font-bold text-off-white mt-2">
              Enterprise-Grade Security & Performance
            </h2>
          </div>
        </MotionWrapper>

        {/* Metrics Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="text-center p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-off-white mb-1">{metric.value}</p>
                <p className="text-sm font-medium text-soft-gray mb-1">{metric.label}</p>
                <p className="text-xs text-soft-gray/60">{metric.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications Bar */}
        <MotionWrapper delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border"
              >
                <CheckCircle className="w-4 h-4 text-teal-accent" />
                <span className="text-sm font-medium text-soft-gray">{cert.name}</span>
                <span className="text-xs text-primary font-semibold">{cert.status}</span>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
