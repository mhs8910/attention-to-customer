import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-radial from-teal/20 via-gold/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass-panel p-10 md:p-16 text-center relative overflow-hidden border-teal/20">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-teal/15 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gold/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

            <div className="relative">
              <div className="flex justify-center mb-8">
                <Logo size={64} />
              </div>

              <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.05] mb-6">
                Ready to turn attention
                <br />
                <span className="text-gradient-teal-gold">into customers?</span>
              </h2>
              <p className="text-cool-gray text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Let's diagnose your current marketing system and show you exactly what needs to change.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="#audit" className="btn-primary-glow text-base">
                  Get Free Growth Audit
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#growth-system" className="btn-secondary-outline text-base">
                  See The Growth System
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
