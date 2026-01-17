import { Globe, Rocket, Briefcase, ShieldCheck, Palette, Lightbulb, Puzzle, Bot } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const serviceCategories = [
  {
    title: "AI & Automation Systems",
    icon: Bot,
    services: [
      "AI Implementation & Business Automation",
      "AI Agents & Autonomous Systems",
      "AI-Powered Virtual Assistants",
      "AI Lead Generation & Sales Automation",
      "Predictive Analytics & Decision Intelligence",
      "AI Content Repurposing Systems",
    ],
  },
  {
    title: "Growth & Marketing",
    icon: Rocket,
    services: [
      "AI-Driven Digital Marketing Systems",
      "Google Ads & Performance Marketing",
      "Social Media Strategy & Promotion",
      "AI-Generated Video Ads & Brand Films",
      "AI-Powered Advertising Optimization",
    ],
  },
  {
    title: "Digital Platforms",
    icon: Globe,
    services: [
      "Business & Corporate Websites",
      "E-Commerce & Marketplace Platforms",
      "Custom Web Applications & Dashboards",
      "ERP & Internal Business Systems",
      "SaaS Platform Design & Development",
    ],
  },
  {
    title: "Industry Solutions",
    icon: Briefcase,
    services: [
      "Online Food Ordering Websites & Apps",
      "Hotel, Auditorium & Turf Booking Systems",
      "Doctor Appointment & Healthcare Platforms",
      "Logistics & Delivery Management Systems",
    ],
  },
  {
    title: "Security & Governance",
    icon: ShieldCheck,
    services: [
      "Responsible AI Governance & Compliance",
      "Managed Cybersecurity & MDR",
      "Fraud Detection & Risk Intelligence",
    ],
  },
  {
    title: "Creative & Brand",
    icon: Palette,
    services: [
      "Brand Identity & Logo Design",
      "Motion Graphics & Explainer Videos",
      "Digital Posters & Visual Media",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="mb-20">
          <Reveal>
            <h2 className="text-4xl sm:text-6xl font-thin text-white mb-6 tracking-tight">
              Our <span className="text-white/50">Services.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div className="h-[1px] w-full bg-white/10 mb-8" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
              Comprehensive digital growth systems designed for scale.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">
          {serviceCategories.map((category, index) => (
            <Reveal key={category.title} delay={0.1 * index}>
              <div className="group h-full pb-8 border-b border-white/10 hover:border-white transition-colors duration-500 cursor-pointer">
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-8">
                  <category.icon className="w-8 h-8 text-white group-hover:text-blue-500 transition-colors duration-300 stroke-[1] group-hover:scale-110 transform" />
                  <h3 className="text-2xl font-light text-white group-hover:text-blue-500 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Services List */}
                <ul className="space-y-4">
                  {category.services.map((service) => (
                    <li key={service} className="block group/item">
                      <span className="text-white/40 group-hover:text-white transition-colors text-base font-light block py-1 border-l-2 border-transparent hover:border-blue-500 pl-4 -ml-4 hover:translate-x-2 duration-300">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}