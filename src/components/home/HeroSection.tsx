import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center bg-black overflow-hidden px-6 lg:px-20">
      {/* Background/Overlay */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Massive Animated Logo Watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "circOut" }}
        className="absolute -right-20 lg:right-0 top-1/2 -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none"
      >
        <img src={logo} alt="" className="w-[100vw] lg:w-[60vw] max-w-[1000px] h-auto invert brightness-0 grayscale opacity-100" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1666px] mx-auto grid lg:grid-cols-2 gap-12 items-center text-left">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/60 uppercase tracking-[0.2em] text-sm">
              North Metrix
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight mix-blend-difference"
          >
            Growth <br />
            <span className="text-white/50">Intelligence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 max-w-xl leading-relaxed font-light"
          >
            We deliver AI-enabled digital, automation, and intelligence systems that help businesses measure, optimize, and scale what truly drives growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <Button variant="hero-outline" size="lg" className="border-white text-white hover:bg-white hover:text-black rounded-none px-12 py-6 text-sm tracking-widest" asChild>
              <Link to="/contact">
                REQUEST QUOTE
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
