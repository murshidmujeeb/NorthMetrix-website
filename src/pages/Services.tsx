import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Rocket, Briefcase, ShieldCheck, Palette, Lightbulb, Puzzle, Bot, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const serviceCategories = [
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation Systems",
    description: "Intelligent systems that automate complex processes, enhance decision-making, and drive efficiency.",
    services: [
      {
        name: "AI Implementation & Business Automation",
        detail: "End-to-end integration of AI solutions to streamline business operations and reduce manual workloads.",
      },
      {
        name: "AI Agents & Autonomous Systems",
        detail: "Development of intelligent agents capable of performing complex tasks autonomously 24/7.",
      },
      {
        name: "AI-Powered Virtual Assistants",
        detail: "Smart chatbots and voice assistants for web and WhatsApp to enhance customer support.",
      },
      {
        name: "AI Lead Generation & Sales Automation",
        detail: "Automated systems to identify prospects and nurture leads through the sales funnel.",
      },
      {
        name: "Predictive Analytics & Decision Intelligence",
        detail: "Data-driven insights and forecasting models to support strategic business decisions.",
      },
      {
        name: "AI Content Repurposing Systems",
        detail: "Tools to automatically repurpose and distribute content across multiple platforms.",
      },
    ],
  },
  {
    id: "growth-marketing",
    icon: Rocket,
    title: "Growth & AI-Driven Marketing",
    description: "Data-backed marketing strategies amplified by artificial intelligence for maximum ROI.",
    services: [
      {
        name: "AI-Driven Digital Marketing Systems",
        detail: "Comprehensive marketing frameworks optimized by AI for targeted reach and engagement.",
      },
      {
        name: "Google Ads & Performance Marketing",
        detail: "High-performance ad campaigns managed for optimal conversion rates and lower CPA.",
      },
      {
        name: "Social Media Strategy & Promotion",
        detail: "Strategic content planning and promotion to build brand authority and audience loyalty.",
      },
      {
        name: "AI-Generated Video Advertisements",
        detail: "Production of high-quality video ads and brand films using generative AI technologies.",
      },
      {
        name: "AI-Powered Advertising Optimization",
        detail: "Real-time optimization of ad spend and targeting using machine learning algorithms.",
      },
    ],
  },
  {
    id: "digital-platforms",
    icon: Globe,
    title: "Digital Platforms & Engineering",
    description: "Robust, scalable, and secure digital platforms tailored to your business needs.",
    services: [
      {
        name: "Business & Corporate Websites",
        detail: "Professional, responsive websites designed to establish strong digital brand identity.",
      },
      {
        name: "E-Commerce & Marketplace Platforms",
        detail: "Scalable online stores with secure payment gateways and inventory management.",
      },
      {
        name: "Custom Web Applications & Dashboards",
        detail: "Bespoke web applications and administrative dashboards for specific business processes.",
      },
      {
        name: "ERP & Internal Business Systems",
        detail: "Integrated Enterprise Resource Planning systems to unify business functions.",
      },
      {
        name: "SaaS Platform Design & Development",
        detail: "End-to-end development of Software-as-a-Service products from MVP to scale.",
      },
    ],
  },
  {
    id: "industry-solutions",
    icon: Briefcase,
    title: "Industry-Specific Digital Solutions",
    description: "Specialized digital tools designed for the unique requirements of various industries.",
    services: [
      {
        name: "Online Food Ordering Systems",
        detail: "Websites and apps facilitating seamless food ordering and delivery management.",
      },
      {
        name: "Booking & Reservation Systems",
        detail: "Platforms for hotels, auditoriums, and turf venues to manage bookings efficiently.",
      },
      {
        name: "Healthcare & Appointment Platforms",
        detail: "Solutions for doctors and clinics to manage patient appointments and records.",
      },
      {
        name: "Logistics & Delivery Management",
        detail: "Systems to track shipments, manage fleets, and optimize delivery routes.",
      },
    ],
  },
  {
    id: "security-governance",
    icon: ShieldCheck,
    title: "AI Governance, Security & Trust",
    description: "Ensuring your AI and digital systems are secure, ethical, and compliant.",
    services: [
      {
        name: "Responsible AI Governance",
        detail: "Frameworks to ensure ethical use, transparency, and compliance of AI systems.",
      },
      {
        name: "Managed Cybersecurity & MDR",
        detail: "Proactive Managed Detection and Response services to protect against cyber threats.",
      },
      {
        name: "Fraud Detection & Risk Intelligence",
        detail: "AI-powered systems to detect anomalies and prevent financial fraud in real-time.",
      },
    ],
  },
  {
    id: "creative-brand",
    icon: Palette,
    title: "Creative & Brand Systems",
    description: "Visual identity and creative assets that resonate with your target audience.",
    services: [
      {
        name: "Brand Identity & Logo Design",
        detail: "Creation of memorable logos and brand guidelines that reflect your core values.",
      },
      {
        name: "Motion Graphics & Explainer Videos",
        detail: "Engaging animated videos to explain complex products or services simply.",
      },
      {
        name: "Digital Posters & Visual Media",
        detail: "High-impact visual content for social media, ads, and digital displays.",
      },
    ],
  },
  {
    id: "consulting-enablement",
    icon: Lightbulb,
    title: "Consulting & Enablement",
    description: "Strategic guidance to help you navigate digital transformation and AI adoption.",
    services: [
      {
        name: "AI Readiness Consulting",
        detail: "Assessing organizational readiness and planning for successful AI integration.",
      },
      {
        name: "Process Optimization & System Design",
        detail: "Analyzing and redesigning workflows to improve efficiency through technology.",
      },
      {
        name: "Technology Roadmapping",
        detail: "Strategic planning to align technology investments with long-term business goals.",
      },
    ],
  },
  {
    id: "integrations",
    icon: Puzzle,
    title: "Integrations & Add-Ons",
    description: "Seamless integrations to extend the functionality of your digital ecosystem.",
    services: [
      {
        name: "WhatsApp API Integration",
        detail: "Connecting WhatsApp Business API for automated customer communication.",
      },
      {
        name: "Marketplace Setup & Management",
        detail: "Assistance with setting up and managing catalogs on Amazon, Flipkart, and more.",
      },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-24 ${catIndex % 2 === 0 ? "bg-background" : "bg-muted"}`}
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
                    {category.description}
                  </p>
                </div>

                {/* Services List */}
                <div className="space-y-6">
                  {category.services.map((service, index) => (
                    <Reveal key={service.name} delay={0.1 * index}>
                      <div
                        className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-card-foreground mb-2">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.detail}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-soft-gray mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-soft-gray/70 mb-8 max-w-xl mx-auto">
            Whether you need a new platform, marketplace presence, or marketing system, we're here to help you execute with precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
