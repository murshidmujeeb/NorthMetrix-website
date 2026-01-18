import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, CheckCircle, FileText, ArrowRight, FileCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    icon: Shield,
    title: "Transparency",
    description: "We are clear about our methodologies, how we collect data, and how we generate insights. No black boxes.",
    details: [
      "Open documentation of our processes",
      "Clear explanations of all metrics",
      "Honest communication about limitations",
      "Regular updates on methodology changes",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Enterprise-grade security measures protect your business data at every level of our platform.",
    details: [
      "Encrypted data transmission and storage",
      "Regular security audits",
      "Access controls and authentication",
      "Compliance with data protection standards",
    ],
  },
  {
    icon: Eye,
    title: "Ethical Practices",
    description: "Real users, real reviews, real metrics. We never support or enable artificial growth tactics.",
    details: [
      "No fake user generation",
      "No fake review practices",
      "No artificial metric inflation",
      "Focus on authentic, sustainable growth",
    ],
  },
];

const policies = [
  { name: "Privacy Policy", href: "/privacy", description: "How we handle your data" },
  { name: "Terms of Service", href: "/terms", description: "Our service agreement" },
];

const Trust = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden text-white snap-start">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A4133C]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="text-sm font-medium text-white">Trust & Compliance</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
                Built on Trust
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/70 font-light">
                Our commitment to transparency, security, and ethical practices is foundational to everything we do. We believe trust must be earned through actions, not words.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-background snap-start">
        <div className="container-max section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal width="100%">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Core Principles
              </h2>
            </Reveal>
            <Reveal delay={0.1} width="100%">
              <p className="text-muted-foreground">
                The standards that guide how we build, operate, and serve our clients.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={0.1 * index}>
                <div
                  className="p-8 rounded-2xl bg-card border border-border text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-muted snap-start">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Transparent Policies
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We believe in plain language and clear terms. Our policies are designed to protect you, not confuse you.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <Link to="/privacy" className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <FileCheck className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Privacy Policy</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                  <Link to="/terms" className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Terms of Service</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                  <Link to="/gdpr" className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">GDPR & Compliance</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="p-8 rounded-3xl bg-background border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Security Overview
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  We use industry-standard encryption and security measures to protect your data.
                </p>
                <ul className="space-y-3">
                  {["TLS 1.3 Encryption", "24/7 Monitoring", "Regular Audits", "Data Backups", "Access Controls"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero snap-start">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-soft-gray mb-4">
            Have Questions?
          </h2>
          <p className="text-soft-gray/70 mb-8 max-w-xl mx-auto">
            Our compliance team is available to answer any questions regarding our security and privacy practices.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Contact Compliance Team
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Trust;
