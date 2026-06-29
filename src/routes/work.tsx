import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/mhs/Navbar";
import { Footer } from "@/components/mhs/Footer";
import { PageBackground } from "@/components/mhs/PageBackground";
import { SectionWrapper } from "@/components/mhs/SectionWrapper";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const SITE = "https://attention-to-customer.lovable.app";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — MHS-Productions" },
      {
        name: "description",
        content:
          "Real businesses, real systems, real results. Anonymized case studies from clinics, solar companies, realtors, and restaurants in Lahore.",
      },
      { property: "og:title", content: "Our Work — MHS-Productions" },
      { property: "og:description", content: "Real businesses. Real systems. Real results." },
    ],
    links: [{ rel: "canonical", href: SITE + "/work" }],
  }),
  component: WorkPage,
});

const cases = [
  {
    title: "Aesthetic Clinic, Lahore",
    before: "A skin clinic was getting Instagram views but zero WhatsApp inquiries.",
    system: "Reels content strategy + WhatsApp automation + landing page.",
    result: "Inquiry flow established within first 2 weeks of content + funnel going live.",
  },
  {
    title: "Solar Installation Company, Lahore",
    before: "Spending on Facebook ads with no landing page, losing every click.",
    system: "Meta Ads + dedicated landing page + follow-up sequence.",
    result: "Cost per lead dropped significantly once ads pointed to a conversion page.",
  },
  {
    title: "Property Dealer, Lahore",
    before: "No Google presence, no website, relying only on word of mouth.",
    system: "Google Business Profile optimization + social content.",
    result: "First Google Map appearances within 30 days of profile optimization.",
  },
  {
    title: "Restaurant / Food Brand, Lahore",
    before: "Posting randomly, no strategy, low engagement.",
    system: "Monthly content calendar + Reel direction + caption strategy.",
    result: "Consistent content cadence established, reach grew with strategic posting.",
  },
];

function WorkPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-foreground relative">
      <PageBackground variant="hero" ghostWords={["RESULTS", "PROOF", "GROWTH", "WORK", "CLIENTS"]} />
      <Navbar />
      <main className="pt-32 pb-20 px-5 md:px-6">
        <SectionWrapper className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-[10px] md:text-xs font-ui uppercase tracking-[0.22em] text-teal">
              Our Work
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] text-creator-white">
            Real Businesses. Real Systems.{" "}
            <span className="text-gradient-teal-gold">Real Results.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-cool-gray text-sm md:text-base font-brand italic">
            We respect client privacy. Names and identifying details are anonymized.
          </p>
        </SectionWrapper>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/8 bg-[#0A1828]/80 backdrop-blur-md p-7 overflow-hidden hover:border-teal/30 transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-gold" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/25 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-teal" />
                </div>
                <h2 className="text-lg md:text-xl font-display font-semibold text-creator-white">
                  {c.title}
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-ui mb-1.5">Before</div>
                  <p className="text-sm text-cool-gray font-brand">{c.before}</p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-teal font-ui mb-1.5">System Built</div>
                  <p className="text-sm text-creator-white font-brand">{c.system}</p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-ui mb-1.5">Result</div>
                  <p className="text-sm text-creator-white font-brand">{c.result}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <SectionWrapper className="max-w-3xl mx-auto text-center mt-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-creator-white">
            Ready to Build Your System?
          </h2>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("work_cta")}
            className="btn-primary-glow mt-8"
          >
            Get Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
