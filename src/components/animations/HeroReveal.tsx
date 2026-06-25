import { useEffect, useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function HeroReveal() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-grid", { opacity: 0, duration: 0.4 })
        .from(".hero-eyebrow", { opacity: 0, y: 10, duration: 0.5 }, "-=0.2")
        .from(".hero-word", { opacity: 0, y: 30, duration: 0.7, stagger: 0.08 }, "-=0.2")
        .from(".hero-sub-line", { opacity: 0, y: 10, duration: 0.5, stagger: 0.04 }, "-=0.3")
        .from(".hero-cta", { opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.08, ease: "back.out(1.6)" }, "-=0.2")
        .from(".hero-trust", { opacity: 0, y: 8, duration: 0.5 }, "-=0.2");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 pulse-dots" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-6 text-center">
        <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          <span className="text-xs font-ui uppercase tracking-[0.2em] text-teal">
            Meta Ads · Content Systems · WhatsApp Funnels
          </span>
        </div>

        <h1 className="font-display font-bold text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5rem] tracking-tight text-creator-white">
          <span className="hero-word inline-block">ATTENTION</span>{" "}
          <span className="hero-word inline-block text-teal">→</span>{" "}
          <span className="hero-word inline-block text-gold">CUSTOMERS</span>
        </h1>

        <div className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-cool-gray leading-relaxed font-brand">
          <p className="hero-sub-line">Your Instagram gets views. Your customers don't.</p>
          <p className="hero-sub-line mt-2">
            MHS-Productions builds the system that connects Meta ads, content, landing pages, and WhatsApp into one
            customer acquisition engine — so attention finally converts.
          </p>
        </div>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("hero_primary")}
            className="hero-cta btn-primary-glow"
          >
            Get Free Growth Audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#growth-system" className="hero-cta btn-secondary-outline">
            See The System
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        <p className="hero-trust mt-10 text-xs md:text-sm text-cool-gray/80 font-ui">
          Used by aesthetic clinics, solar companies, and local businesses across Lahore and Pakistan
        </p>
      </div>
    </section>
  );
}
