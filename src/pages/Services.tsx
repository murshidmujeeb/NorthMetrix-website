import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/services";

const Services = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden text-white snap-start">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A4133C]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="text-sm font-medium text-white">Services</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
                Digital Enablement & Growth Services
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/70 font-light mb-8">
                Beyond analytics, we help businesses execute their digital presence and growth through comprehensive platform development, marketplace enablement, and marketing systems.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90">
                <Link to="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <section
          key={category.title}
          className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-muted"} snap-start`}
        >
          <div className="container-max section-padding">
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Category Header */}
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {/* Fallback for description since shared data might not have it yet unless updated */}
                    Typically, we provide tailored {category.title} solutions to accelerate your growth.
                  </p>
                </div>

                {/* Services List */}
                <div className="space-y-6">
                  {category.services.map((service, idx) => (
                    <Reveal key={service} delay={0.1 * idx}>
                      <div
                        className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-card-foreground mb-2">
                          {service}
                        </h3>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Process/Approach (Optional) */}
      <section className="py-24 bg-background snap-start">
        <div className="container-max section-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Approach</h2>
            <p className="text-muted-foreground mb-12">
              We don't just deliver services; we build systems. Our process is collaborative, data-driven, and focused on long-term value creation.
            </p>
          </div>
          {/* Steps Grid - Simplified for now */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Audit & Strategy", desc: "Understanding your current state." },
              { step: "02", title: "Design & Build", desc: "Creating the infrastructure." },
              { step: "03", title: "Launch & Scale", desc: "Go-to-market execution." },
              { step: "04", title: "Measure & Optimize", desc: "Continuous improvement." }
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-muted border border-border">
                <div className="text-4xl font-bold text-primary/20 mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero snap-start">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-soft-gray mb-4">
            Build With Us
          </h2>
          <p className="text-soft-gray/70 mb-8 max-w-xl mx-auto">
            Ready to upgrade your digital infrastructure? Let's discuss your specific needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Start a Project
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

// Enhancement: Scroll to hash when location changes
import { useEffect as useReactEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ServicesWrapper = () => {
  const { hash } = useLocation();

  useReactEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      const scrollContainer = document.getElementById("scroll-container") || window;

      if (element) {
        // Small timeout to ensure DOM is ready/layout is settled
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      const scrollContainer = document.getElementById("scroll-container");
      if (scrollContainer) scrollContainer.scrollTo(0, 0);
      else window.scrollTo(0, 0);
    }
  }, [hash]);

  return <Services />;
};

export default ServicesWrapper;
