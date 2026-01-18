import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, LineChart, Building, Hotel, Stethoscope, ShoppingBag, ArrowRight, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    icon: Rocket,
    title: "SaaS & Tech Platforms",
    description: "Scale your product with autonomous AI agents and automated engineering workflows. We help startups and scale-ups build future-ready SaaS infrastructure.",
    challenges: ["Feature development bottlenecks", "User onboarding friction", "Infrastructure scalability", "Manual support overhead"],
    outcomes: ["Autonomous system integration", "Rapid product iteration", "Reduced operational costs", "Enhanced user activation"],
    image: "/images/industries/saas-tech.jpeg"
  },
  {
    icon: LineChart,
    title: "Finance & FinTech",
    description: "Leverage AI-powered risk intelligence and fraud detection systems to protect assets and build regulatory trust.",
    challenges: ["Fraudulent activity", "Compliance complexity", "Risk assessment lag", "Data security threats"],
    outcomes: ["Real-time fraud prevention", "Automated compliance audits", "Predictive risk modelling", "Enterprise-grade security"],
    image: "/images/industries/fintech.jpeg"
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description: "Automate marketplace management and use AI-driven marketing systems to dominate platforms like Amazon, Flipkart, and beyond.",
    challenges: ["Manual catalog management", "Ad spend inefficiency", "Marketplace competition", "Customer engagement"],
    outcomes: ["Automated catalog sync", "AI-optimized ad performance", "Increased marketplace ROI", "Data-driven growth strategy"],
    image: "/images/industries/ecommerce.jpeg"
  },
  {
    icon: Hotel,
    title: "Hospitality & Venues",
    description: "Streamline operations with autonomous booking systems for hotels, auditoriums, and turf venues with integrated AI assistants.",
    challenges: ["Booking management complexity", "Customer support volume", "Inventory optimization", "Seasonal demand shifts"],
    outcomes: ["24/7 autonomous booking", "AI-powered guest support", "Optimized venue occupancy", "Automated revenue management"],
    image: "/images/industries/hospitality.jpeg"
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    description: "Deploy secure, AI-enabled patient management and appointment platforms that optimize clinic workflows and patient care.",
    challenges: ["Appointment scheduling gaps", "Patient record management", "Digital patient engagement", "Workflow inefficiencies"],
    outcomes: ["Optimized scheduling systems", "Secure digital health records", "Enhanced patient experience", "Streamlined clinic operations"],
    image: "/images/industries/healthcare.jpeg"
  },
  {
    icon: Building,
    title: "Logistics & Delivery",
    description: "Implement AI-driven route optimization and delivery management systems to reduce costs and improve service speed.",
    challenges: ["Route inefficiency", "Delivery tracking gaps", "Operational cost rising", "Fleet management overhead"],
    outcomes: ["AI-optimized routing", "Real-time delivery intelligence", "Reduced fuel and labor costs", "Improved fleet efficiency"],
    image: "/images/industries/logistics.jpeg"
  },
];

const Industries = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden text-white snap-start">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A4133C]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="text-sm font-medium text-white">Industries</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
                Industry Applications
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/70 font-light mb-8">
                NorthMetriX serves businesses across sectors that value clarity, trust, and measurable outcomes. Discover how we can help your industry.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      {industries.map((industry, index) => (
        <section key={industry.title} className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-muted"} snap-start`}>
          <div className="container-max section-padding">
            <Reveal key={industry.title} delay={0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Challenges We Address
                      </h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Outcomes Delivered
                      </h4>
                      <ul className="space-y-2">
                        {industry.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to icon if image missing
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-muted flex items-center justify-center">
                      <industry.icon className="w-24 h-24 text-primary/20" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-hero snap-start">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-soft-gray mb-4">
            Your Sector, Optimized
          </h2>
          <p className="text-soft-gray/70 mb-8 max-w-xl mx-auto">
            See how NorthMetrix can be tailored to the specific needs of your industry.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Contact Industry Specialist
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
