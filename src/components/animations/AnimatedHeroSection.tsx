import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Globe,
  Instagram,
  MapPin,
  MessageCircle,
  Megaphone,
  Users,
  Sparkles,
} from "lucide-react";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const GHOST_WORDS = [
  { text: "ATTENTION", top: "6%", left: "-4%", size: "18vw" },
  { text: "CUSTOMERS", top: "62%", left: "8%", size: "22vw" },
  { text: "GROWTH", top: "34%", left: "60%", size: "16vw" },
  { text: "SYSTEM", top: "78%", left: "55%", size: "20vw" },
  { text: "FUNNELS", top: "18%", left: "70%", size: "14vw" },
  { text: "TRUST", top: "50%", left: "-2%", size: "15vw" },
  { text: "LEADS", top: "88%", left: "25%", size: "16vw" },
];

type DashCard = {
  icon: typeof Globe;
  label: string;
  status: string;
  body: React.ReactNode;
  highlight?: boolean;
};

const DASH_CARDS: DashCard[] = [
  {
    icon: Globe,
    label: "Website",
    status: "Trust Layer",
    body: (
      <div className="flex items-end gap-1 h-8">
        {[40, 60, 55, 75, 70, 90, 85].map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-sm bg-teal/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: Instagram,
    label: "Social Media",
    status: "Attention Layer",
    body: (
      <div className="space-y-1.5">
        {[80, 55, 70].map((w, i) => (
          <div key={i} className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full bg-teal/70" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MapPin,
    label: "Google Profile",
    status: "Local Discovery",
    body: (
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current">
            <path d="M10 1l2.6 5.9 6.4.6-4.8 4.4 1.4 6.4L10 15l-5.6 3.3 1.4-6.4L1 7.5l6.4-.6L10 1z" />
          </svg>
        ))}
        <span className="ml-1 text-[10px] font-ui text-cool-gray">4.9</span>
      </div>
    ),
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Funnel",
    status: "Inquiry Flow",
    body: (
      <div className="space-y-1">
        <div className="w-3/4 h-2 rounded-full rounded-bl-none bg-teal/20" />
        <div className="w-2/3 h-2 rounded-full rounded-br-none bg-white/8 ml-auto" />
        <div className="w-1/2 h-2 rounded-full rounded-bl-none bg-teal/30" />
      </div>
    ),
  },
  {
    icon: Megaphone,
    label: "Meta Ads",
    status: "Traffic Engine",
    body: (
      <div className="flex items-end gap-1 h-8">
        {[30, 50, 45, 70, 90, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-teal/40 to-teal"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: Users,
    label: "Leads",
    status: "Qualified",
    body: (
      <div className="font-display text-2xl font-bold text-creator-white">
        24<span className="text-cool-gray text-sm font-ui ml-1">/wk</span>
      </div>
    ),
  },
  {
    icon: Sparkles,
    label: "Customers",
    status: "Conversion",
    highlight: true,
    body: (
      <div className="font-display text-2xl font-bold text-gold drop-shadow-[0_0_18px_rgba(240,165,0,0.55)]">
        +18%
      </div>
    ),
  },
];

function GhostWord({
  word,
  bgTextY,
  bgTextOpacity,
}: {
  word: (typeof GHOST_WORDS)[number];
  bgTextY: MotionValue<number>;
  bgTextOpacity: MotionValue<number>;
}) {
  return (
    <motion.span
      aria-hidden
      className="absolute font-display font-black text-creator-white whitespace-nowrap select-none leading-none"
      style={{
        top: word.top,
        left: word.left,
        fontSize: word.size,
        filter: "blur(2px)",
        y: bgTextY,
        opacity: bgTextOpacity,
        letterSpacing: "-0.04em",
      }}
    >
      {word.text}
    </motion.span>
  );
}

export function AnimatedHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Hero copy: visible immediately
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08, 0.30, 0.38], [1, 1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.08], [20, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.08], [6, 0]);
  const heroFilter = useTransform(heroBlur, (v) => `blur(${v}px)`);

  // Dashboard
  const dashboardY = useTransform(scrollYProgress, [0.28, 0.50], [160, 0]);
  const dashboardScale = useTransform(scrollYProgress, [0.28, 0.50], [0.88, 1]);
  const dashboardOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.45, 0.88, 0.96],
    [0, 1, 1, 0]
  );
  const dashboardBlur = useTransform(scrollYProgress, [0.28, 0.50], [18, 0]);
  const dashboardFilter = useTransform(dashboardBlur, (v) => `blur(${v}px)`);

  // Ghost typography parallax
  const bgTextY = useTransform(scrollYProgress, [0, 1], [80, -300]);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.15, 0.75, 1.0], [0.06, 0.1, 0.07, 0.03]);

  // Glow
  const glowScale = useTransform(scrollYProgress, [0, 0.4, 0.9], [0.9, 1.1, 0.95]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.9], [0.2, 0.5, 0.2]);

  // Lines appear with dashboard
  const linePathLength = useTransform(scrollYProgress, [0.35, 0.60], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative bg-[#030712]"
      style={{ height: reduced ? "auto" : "650vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Layer 1: gradients */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(0,198,167,0.12), transparent 35%), radial-gradient(circle at 80% 65%, rgba(240,165,0,0.16), transparent 30%), linear-gradient(180deg, #030712 0%, #061426 50%, #020817 100%)",
          }}
        />

        {/* Layer 2: blueprint grid */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        {/* Layer 3: ghost typography parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          {GHOST_WORDS.map((w) => (
            <GhostWord key={w.text} word={w} bgTextY={bgTextY} bgTextOpacity={bgTextOpacity} />
          ))}
        </div>

        {/* Layer 4: conversion arc glow */}
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] pointer-events-none"
          style={{
            scale: glowScale,
            opacity: glowOpacity,
            background:
              "radial-gradient(ellipse at 25% 50%, rgba(0,198,167,0.55), transparent 55%), radial-gradient(ellipse at 75% 50%, rgba(240,165,0,0.6), transparent 55%)",
            filter: "blur(40px)",
          }}
        />

        {/* Layer 5: floating particles */}
        {!reduced && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="absolute w-1 h-1 rounded-full bg-teal/40"
                style={{
                  left: `${(i * 73) % 100}%`,
                  bottom: `-${(i * 13) % 40}px`,
                  animation: `cta-rise ${10 + (i % 5) * 2}s linear ${i * 0.7}s infinite`,
                }}
              />
            ))}
          </div>
        )}

        {/* Hero Content */}
        <motion.div
          className="relative z-10 h-full flex items-center justify-center px-5 md:px-6"
          style={{ opacity: heroOpacity, y: heroY, filter: heroFilter }}
        >
          <div className="max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-[10px] md:text-xs font-ui uppercase tracking-[0.22em] text-teal">
                Lahore's Growth System for Local Businesses
              </span>
            </div>

            <h1 className="font-display font-bold text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[5rem] tracking-tight text-creator-white">
              Your Business Gets{" "}
              <span
                className="text-teal"
                style={{ textShadow: "0 0 40px rgba(0,198,167,0.4)" }}
              >
                Views.
              </span>
              <br />
              We Turn Them Into{" "}
              <span
                className="text-gold"
                style={{ textShadow: "0 0 50px rgba(240,165,0,0.5)" }}
              >
                Customers.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-cool-gray leading-relaxed font-brand">
              MHS-Productions builds the complete customer acquisition system — websites, content, ads,
              Google, and WhatsApp — so every rupee of attention you earn converts into an inquiry.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick("hero_primary")}
                className="btn-primary-glow"
              >
                Free Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#growth-system" className="btn-secondary-outline">
                See The System
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            <p className="mt-10 text-xs md:text-sm text-cool-gray/80 font-ui">
              Built for realtors, clinics, solar companies, restaurants, and local businesses
              across Lahore and Pakistan.
            </p>
          </div>
        </motion.div>

        {/* Dashboard layer */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center px-5"
          style={{
            opacity: dashboardOpacity,
            y: dashboardY,
            scale: dashboardScale,
            filter: dashboardFilter,
          }}
        >
          <div className="relative w-full max-w-6xl">
            {/* SVG connection lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
              viewBox="0 0 1000 520"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="cx-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(0,198,167,0.1)" />
                  <stop offset="50%" stopColor="rgba(0,198,167,0.8)" />
                  <stop offset="100%" stopColor="rgba(240,165,0,0.7)" />
                </linearGradient>
              </defs>
              {[
                "M140,120 C 280,160 380,220 500,260",
                "M500,120 C 480,180 490,220 500,260",
                "M860,120 C 720,160 620,220 500,260",
                "M140,400 C 280,360 380,300 500,260",
                "M500,400 C 500,340 500,300 500,260",
                "M860,400 C 720,360 620,300 500,260",
              ].map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="url(#cx-line)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ pathLength: linePathLength, opacity: 0.6 }}
                />
              ))}
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pointer-events-auto">
              {DASH_CARDS.map((c, i) => {
                const Icon = c.icon;
                const isHighlight = c.highlight;
                return (
                  <div
                    key={c.label}
                    className={`relative rounded-xl border p-3.5 md:p-4 backdrop-blur-md transition-colors ${
                      isHighlight
                        ? "border-gold/40 bg-gradient-to-br from-gold/10 to-[#0A1828]/80 shadow-[0_20px_60px_-20px_rgba(240,165,0,0.45)]"
                        : "border-white/8 bg-[#0A1828]/75 hover:border-teal/35"
                    } ${i === 6 ? "col-span-2 md:col-span-1" : ""}`}
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-md ${
                            isHighlight ? "bg-gold/15 text-gold" : "bg-teal/10 text-teal"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[11px] md:text-xs font-ui uppercase tracking-[0.14em] text-creator-white">
                          {c.label}
                        </span>
                      </div>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isHighlight ? "bg-gold" : "bg-teal"
                        } animate-pulse`}
                      />
                    </div>
                    <div className="text-[10px] font-ui uppercase tracking-[0.16em] text-cool-gray/80 mb-2.5">
                      {c.status}
                    </div>
                    <div>{c.body}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
