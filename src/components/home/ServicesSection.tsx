import { Reveal } from "@/components/ui/Reveal";
import { serviceCategories } from "@/data/services";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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

        {/* Services Grid - Headings Only */}
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">
          {serviceCategories.map((category, index) => (
            <Reveal key={category.title} delay={0.1 * index}>
              <Link
                to={`/services#${category.id}`}
                className="block group h-full pb-8 border-b border-white/10 hover:border-white transition-colors duration-500 cursor-pointer"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4">
                  <category.icon
                    className="w-8 h-8 text-white group-hover:text-[#A4133C] transition-all duration-300 stroke-[1] transform group-hover:scale-110"
                  />
                  <h3 className="text-2xl font-light text-white group-hover:text-[#A4133C] transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}