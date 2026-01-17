import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, CheckCircle, FileText, ArrowRight } from "lucide-react";
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
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
      <section className="py-24 bg-background">
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

          <div className="space-y-16">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={0.1}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "" : ""
                    }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <principle.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {principle.description}
                    </p>
                    <ul className="space-y-3">
                      {principle.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-square max-w-md mx-auto rounded-2xl bg-muted border border-border flex items-center justify-center">
                      <principle.icon className="w-32 h-32 text-primary/10" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-muted">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <Reveal width="100%">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Legal & Policies
              </h2>
            </Reveal>
            <Reveal delay={0.1} width="100%">
              <p className="text-muted-foreground">
                Read our policies to understand your rights and our obligations.
              </p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {policies.map((policy, index) => (
              <Reveal key={policy.name} delay={0.1 * index} width="100%">
                <Link
                  to={policy.href}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-4"
                >
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {policy.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{policy.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-max section-padding text-center">
          <Reveal width="100%">
            <h2 className="text-3xl font-bold text-soft-gray mb-4">
              Questions About Our Practices?
            </h2>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <p className="text-soft-gray/70 mb-8 max-w-xl mx-auto">
              We're happy to discuss our approach to trust, security, and ethics. Reach out to our team.
            </p>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Trust;
