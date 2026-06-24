import { ArrowRight, ArrowDown } from "lucide-react";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 pulse-dots" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          <span className="text-xs font-ui uppercase tracking-[0.2em] text-teal">
            Meta Ads · Content Systems · WhatsApp Funnels
          </span>
        </div>

        <h1 className="font-display font-bold text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4rem] tracking-tight text-creator-white">
          Your Instagram Gets Views.
          <br />
          Your <span className="text-gradient-teal-gold">Customers</span> Don't.
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-cool-gray leading-relaxed font-brand">
          MHS-Productions builds the system that connects your Meta ads, content, landing page, and WhatsApp into a
          single customer acquisition engine — so attention finally converts.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("hero_primary")}
            className="btn-primary-glow"
          >
            Get Free Growth Audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#growth-system" className="btn-secondary-outline">
            See The System
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-10 text-xs md:text-sm text-cool-gray/80 font-ui">
          Used by aesthetic clinics, solar companies, and local businesses across Lahore and Pakistan
        </p>
      </div>
    </section>
  );
}
