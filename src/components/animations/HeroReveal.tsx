import { useEffect, useRef } from "react";
import { ArrowRight, ArrowDown, Megaphone, Film, LayoutTemplate, MessageCircle, Repeat, BarChart3 } from "lucide-react";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";
import { gsap, ScrollTrigger, prefersReducedMotion, isMobile } from "@/lib/gsap";

const ATTENTION_CHIPS = [
  { label: "views", x: "8%", y: "18%" },
  { label: "clicks", x: "88%", y: "14%" },
  { label: "DMs", x: "14%", y: "62%" },
  { label: "reels", x: "82%", y: "58%" },
  { label: "leads", x: "6%", y: "40%" },
  { label: "ads", x: "92%", y: "36%" },
  { label: "SEO", x: "20%", y: "82%" },
  { label: "GBP", x: "78%", y: "82%" },
  { label: "WhatsApp", x: "50%", y: "8%" },
];

const SYSTEM_CARDS = [
  { icon: Megaphone, label: "Meta Ads", x: "10%", y: "28%" },
  { icon: Film, label: "Content", x: "86%", y: "24%" },
  { icon: LayoutTemplate, label: "Landing Page", x: "6%", y: "70%" },
  { icon: MessageCircle, label: "WhatsApp", x: "88%", y: "68%" },
  { icon: Repeat, label: "Follow-up", x: "18%", y: "92%" },
  { icon: BarChart3, label: "Tracking", x: "80%", y: "92%" },
];

export function HeroReveal() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      // Intro reveal
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-grid", { opacity: 0, duration: 0.5 })
        .from(".hero-eyebrow", { opacity: 0, y: 10, duration: 0.5 }, "-=0.2")
        .from(".hero-word", { opacity: 0, y: 30, duration: 0.7, stagger: 0.08 }, "-=0.2")
        .from(".hero-sub-line", { opacity: 0, y: 10, duration: 0.5, stagger: 0.04 }, "-=0.3")
        .from(".hero-cta", { opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.08, ease: "back.out(1.6)" }, "-=0.2")
        .from(".hero-trust", { opacity: 0, y: 8, duration: 0.5 }, "-=0.2")
        .from(".attn-chip", { opacity: 0, scale: 0.6, duration: 0.6, stagger: 0.05, ease: "back.out(1.4)" }, "-=0.4")
        .from(".sys-card", { opacity: 0, scale: 0.7, duration: 0.7, stagger: 0.08, ease: "back.out(1.6)" }, "-=0.5");

      // Continuous floats
      gsap.to(".attn-chip", {
        y: "+=14",
        duration: 3,
        ease: "sine.inOut",
        stagger: { each: 0.2, repeat: -1, yoyo: true },
        repeat: -1,
        yoyo: true,
      });

      // Scroll-driven assembly: cards drift toward center, lines draw, gold glow rises
      const mobile = isMobile();

      gsap.to(".sys-card", {
        x: (_i: number, el: Element) => {
          const r = (el as HTMLElement).getBoundingClientRect();
          const parent = (el.parentElement as HTMLElement).getBoundingClientRect();
          const cx = parent.left + parent.width / 2;
          return (cx - (r.left + r.width / 2)) * (mobile ? 0.35 : 0.55);
        },
        y: (_i: number, el: Element) => {
          const r = (el as HTMLElement).getBoundingClientRect();
          const parent = (el.parentElement as HTMLElement).getBoundingClientRect();
          const cy = parent.top + parent.height / 2;
          return (cy - (r.top + r.height / 2)) * 0.35;
        },
        scale: 0.92,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(".attn-chip", {
        opacity: 0.15,
        scale: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.fromTo(
        ".sys-line",
        { strokeDashoffset: 400 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        ".gold-glow",
        { opacity: 0.15, scale: 0.8 },
        {
          opacity: 0.85,
          scale: 1.25,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );

      // Parallax background orbs
      gsap.to(".orb-teal", {
        y: -80,
        ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".orb-gold", {
        y: -40,
        ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, rootRef);
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden min-h-[100svh]"
      style={{ perspective: "1400px" }}
    >
      {/* Layer 1: gradient base */}
      <div className="absolute inset-0 -z-30">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(0,168,143,0.18), transparent 60%), radial-gradient(ellipse 70% 55% at 85% 60%, rgba(240,165,0,0.10), transparent 60%), linear-gradient(180deg, #050E1A 0%, #061020 45%, #03080F 100%)",
          }}
        />
      </div>

      {/* Layer 2: blueprint grid + dots */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="hero-grid absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 pulse-dots opacity-40" />
      </div>

      {/* Layer 3: blurred orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="orb-teal absolute -top-32 -left-20 w-[520px] h-[520px] rounded-full bg-teal/15 blur-[120px]" />
        <div className="orb-gold absolute bottom-0 -right-20 w-[460px] h-[460px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      {/* Layer 4: attention chips (background, low z) */}
      <div className="absolute inset-0 -z-[5] pointer-events-none" aria-hidden>
        {ATTENTION_CHIPS.map((c) => (
          <span
            key={c.label}
            className="attn-chip absolute text-[10px] md:text-xs font-ui uppercase tracking-[0.18em] text-teal/70 px-2.5 py-1 rounded-full border border-teal/20 bg-deep-navy/40 backdrop-blur-sm hidden sm:inline-block"
            style={{ left: c.x, top: c.y, transform: "translate(-50%, -50%)" }}
          >
            {c.label}
          </span>
        ))}
      </div>

      {/* Layer 5: SVG connection lines */}
      <svg
        className="absolute inset-0 w-full h-full -z-[4] pointer-events-none hidden md:block"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="teal-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(0,198,167,0)" />
            <stop offset="50%" stopColor="rgba(0,198,167,0.55)" />
            <stop offset="100%" stopColor="rgba(240,165,0,0.45)" />
          </linearGradient>
        </defs>
        {/* curved paths from cards toward center */}
        {[
          "M120,250 C 380,260 480,420 600,450",
          "M1080,220 C 820,260 720,420 600,450",
          "M80,640 C 360,560 480,500 600,450",
          "M1120,620 C 840,560 720,500 600,450",
          "M220,840 C 380,700 480,540 600,460",
          "M980,840 C 820,700 720,540 600,460",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            className="sys-line"
            fill="none"
            stroke="url(#teal-line)"
            strokeWidth="1.4"
            strokeDasharray="400"
            strokeLinecap="round"
            opacity="0.9"
          />
        ))}
        <circle cx="600" cy="450" r="6" fill="rgba(240,165,0,0.9)" />
        <circle cx="600" cy="450" r="14" fill="none" stroke="rgba(240,165,0,0.4)" strokeWidth="1" />
      </svg>

      {/* Layer 6: floating glass system cards */}
      <div className="absolute inset-0 -z-[3] pointer-events-none hidden md:block" aria-hidden>
        {SYSTEM_CARDS.map(({ icon: Icon, label, x, y }, i) => (
          <div
            key={label}
            className="sys-card absolute flex items-center gap-2 px-3 py-2 rounded-lg border border-teal/25 bg-[#0A1828]/80 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,168,143,0.35)]"
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) rotateX(${i % 2 ? 6 : -4}deg) rotateY(${i % 2 ? -8 : 6}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <Icon className="w-3.5 h-3.5 text-teal" />
            <span className="text-[11px] font-ui uppercase tracking-[0.16em] text-creator-white/90">{label}</span>
          </div>
        ))}
      </div>

      {/* Gold conversion glow behind CUSTOMERS */}
      <div
        className="gold-glow absolute left-1/2 top-[46%] -translate-x-[10%] -translate-y-1/2 w-[420px] h-[260px] rounded-full bg-gold/30 blur-[100px] -z-[2] pointer-events-none"
        aria-hidden
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-5 md:px-6 text-center">
        <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          <span className="text-xs font-ui uppercase tracking-[0.22em] text-teal">
            Meta Ads · Content Systems · WhatsApp Funnels
          </span>
        </div>

        <h1 className="font-display font-bold text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight text-creator-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
          <span className="hero-word inline-block">ATTENTION</span>{" "}
          <span className="hero-word inline-block text-teal">→</span>{" "}
          <span className="hero-word inline-block text-gold" style={{ textShadow: "0 0 40px rgba(240,165,0,0.45)" }}>
            CUSTOMERS
          </span>
        </h1>

        <div className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-cool-gray leading-relaxed font-brand">
          <p className="hero-sub-line">Most businesses get views. Few turn them into customers.</p>
          <p className="hero-sub-line mt-2">
            MHS-Productions connects content, ads, landing pages, and WhatsApp into one acquisition system — so attention finally converts.
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
            Free Audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#growth-system" className="hero-cta btn-secondary-outline">
            See The System
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        <p className="hero-trust mt-10 text-xs md:text-sm text-cool-gray/80 font-ui">
          Built for realtors, property consultants, clinics, and local businesses across Lahore and Pakistan
        </p>
      </div>
    </section>
  );
}
