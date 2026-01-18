import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Users, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-big-white.svg"; // Updated logo import
import { Reveal } from "@/components/ui/Reveal";

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description: "We believe insights should be actionable, not overwhelming. Every metric we surface is designed to drive decisions.",
  },
  {
    icon: Lightbulb,
    title: "Integrity First",
    description: "We never support shortcuts or artificial growth. Real businesses need real metrics to make real progress.",
  },
  {
    icon: Users,
    title: "Global Mindset",
    description: "Built to serve businesses everywhere, from local enterprises to global companies, with the same level of precision.",
  },
];

const About = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden text-white snap-start">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#A4133C]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <span className="text-sm font-medium text-white">About Us</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
                  The Story Behind NorthMetriX
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg sm:text-xl text-white/70 font-light">
                  We started with a simple question: Why is it so hard for businesses to measure what truly matters for growth?
                </p>
              </Reveal>
            </div>
            <div className="flex justify-center">
              <Reveal delay={0.3}>
                <img src={logo} alt="NorthMetriX" className="w-60 h-auto object-contain invert brightness-0" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background snap-start">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To help businesses measure, build, and scale trust, user traction, and performance using real data and intelligent metrics. We believe growth should be transparent, ethical, and sustainable.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-lg font-medium text-primary">Measure What Matters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted snap-start">
        <div className="container-max section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we build and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-background snap-start">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We envision a world where every business, regardless of size or industry, has access to the same quality of growth intelligence that was once reserved for large enterprises.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A world where growth is measured honestly, trust is built authentically, and businesses compete on the strength of their value, not the depth of their pockets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                NorthMetriX is building the infrastructure to make that vision a reality.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-hero border border-soft-gray/10">
              <blockquote className="text-xl text-soft-gray font-medium leading-relaxed">
                "The future belongs to businesses that can see clearly through the noise and act on what truly matters."
              </blockquote>
              <p className="mt-4 text-soft-gray/60 text-sm">— NorthMetriX Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero snap-start">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-soft-gray mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-soft-gray/70 mb-8 max-w-xl mx-auto">
            Whether you're looking for growth intelligence or want to partner with us, we'd love to hear from you.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
