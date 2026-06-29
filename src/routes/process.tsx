import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/mhs/Navbar";
import { Footer } from "@/components/mhs/Footer";
import { PageBackground } from "@/components/mhs/PageBackground";
import { SectionWrapper } from "@/components/mhs/SectionWrapper";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const SITE = "https://attention-to-customer.lovable.app";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — MHS-Productions" },
      {
        name: "description",
        content:
          "From your first message to a working customer acquisition system — here's exactly how MHS-Productions builds growth for your business.",
      },
      { property: "og:title", content: "Our Process — MHS-Productions" },
      {
        property: "og:description",
        content: "How we build your customer acquisition system, step by step.",
      },
    ],
    links: [{ rel: "canonical", href: SITE + "/process" }],
  }),
  component: ProcessPage,
});

const steps = [
  {
    n: "01",
    title: "Free Growth Audit",
    time: "Day 1",
    what: "We review your existing digital presence: social media, website, Google profile, and WhatsApp. We identify where attention is leaking and what's stopping visitors from becoming customers.",
    get: "A clear picture of your current gaps and a prioritized fix list.",
  },
  {
    n: "02",
    title: "Strategy & System Design",
    time: "Days 2–5",
    what: "We map out your complete customer acquisition system. Which platforms, what content, what ads, what funnel. Designed specifically for your business type and target customer.",
    get: "A custom 30-day growth roadmap.",
  },
  {
    n: "03",
    title: "Build & Deploy",
    time: "Week 2–3",
    what: "We build what you need: landing page, WhatsApp automation, social content calendar, ad creatives, Google profile updates. Everything connected.",
    get: "A live, working system ready to receive leads.",
  },
  {
    n: "04",
    title: "Launch & Optimize",
    time: "Week 4",
    what: "We launch campaigns, publish content, and start driving traffic into your system. We monitor performance daily and optimize.",
    get: "Real data, real leads, and continuous improvement.",
  },
  {
    n: "05",
    title: "Monthly Growth System",
    time: "Ongoing",
    what: "Content, ads, optimization, and reporting — month after month. As your results improve, we scale what works.",
    get: "A growing customer acquisition engine that compounds over time.",
  },
];

function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-foreground relative">
      <PageBackground variant="hero" ghostWords={["PROCESS", "SYSTEM", "BUILD", "GROWTH", "LAUNCH"]} />
      <Navbar />
      <main className="pt-32 pb-20 px-5 md:px-6">
        <SectionWrapper className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-[10px] md:text-xs font-ui uppercase tracking-[0.22em] text-teal">
              Our Process
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] text-creator-white">
            How We Build Your{" "}
            <span className="text-gradient-teal-gold">Customer Acquisition System</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-cool-gray text-base md:text-lg font-brand">
            From your first message to a system that converts — here's exactly what happens.
          </p>
        </SectionWrapper>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal/40 via-teal/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: left ? -30 : 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  {/* Node */}
                  <span className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full bg-teal shadow-[0_0_20px_rgba(0,198,167,0.8)] -translate-x-1/2" />

                  <div className={`pl-14 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <div className="font-display font-black text-5xl md:text-6xl text-gradient-teal-gold leading-none">
                      {s.n}
                    </div>
                    <div className="mt-2 text-xs font-ui uppercase tracking-[0.2em] text-gold">{s.time}</div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-display font-bold text-creator-white">
                      {s.title}
                    </h2>
                  </div>

                  <div className={`pl-14 md:pl-0 mt-4 md:mt-0 ${left ? "md:pl-10" : "md:pr-10"}`}>
                    <div className="rounded-2xl border border-white/8 bg-[#0A1828]/80 backdrop-blur-md p-6 hover:border-teal/30 transition-colors">
                      <p className="text-cool-gray leading-relaxed font-brand">{s.what}</p>
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-teal font-ui">You get</span>
                        <p className="mt-1 text-sm text-creator-white font-brand">{s.get}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <SectionWrapper className="max-w-3xl mx-auto text-center mt-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-creator-white">
            Ready to start with step one?
          </h2>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("process_cta")}
            className="btn-primary-glow mt-8"
          >
            Book Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
