import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Hero3D } from "./Hero3D";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="label-eyebrow text-[11px]">Content • Campaigns • Conversions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] tracking-tight"
            >
              We Turn Local Business
              <br />
              <span className="text-gradient-teal-gold">Attention Into Real Customers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-lg text-cool-gray max-w-xl leading-relaxed"
            >
              MHS-Productions builds content systems, Meta ad campaigns, landing pages, and WhatsApp funnels
              that help local businesses generate inquiries, leads, bookings, and customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#audit" className="btn-primary-glow">
                Get Free Growth Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#growth-system" className="btn-secondary-outline">
                See The Growth System
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-sm text-cool-gray/80 max-w-lg font-ui"
            >
              Built for restaurants, clinics, salons, gyms, solar companies, real estate brands,
              and local service businesses.
            </motion.p>
          </div>

          {/* 3D Hero */}
          <div className="relative">
            <Hero3D />
          </div>
        </div>
      </div>
    </section>
  );
}
