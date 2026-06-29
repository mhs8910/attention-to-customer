import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/mhs/Navbar";
import { Footer } from "@/components/mhs/Footer";
import { PageBackground } from "@/components/mhs/PageBackground";
import { SectionWrapper } from "@/components/mhs/SectionWrapper";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const SITE = "https://attention-to-customer.lovable.app";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MHS-Productions" },
      {
        name: "description",
        content:
          "Meta Ads, social content, landing pages, WhatsApp funnels, Google profile optimization, and growth audits — every tool your business needs to convert attention into customers.",
      },
      { property: "og:title", content: "Services — MHS-Productions" },
      {
        property: "og:description",
        content:
          "Every tool your business needs to convert attention into customers.",
      },
    ],
    links: [{ rel: "canonical", href: SITE + "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    name: "Meta Ads",
    desc: "We build lead generation, retargeting, and awareness campaigns on Facebook and Instagram. Every ad points to a landing page built to convert. We handle creative strategy, audience targeting, budget optimization, and performance tracking.",
    includes: [
      "Ad strategy & creative direction",
      "Campaign setup & audience targeting",
      "A/B testing copy and visuals",
      "Landing page integration",
      "Weekly performance reports",
      "Retargeting sequences",
    ],
    who: "Businesses ready to invest in paid acquisition and scale qualified leads.",
  },
  {
    n: "02",
    name: "Social Media Content",
    desc: "Reels, carousels, and static posts that build trust, attract inquiries, and position your business as the go-to in your niche. Not random posting — a content system.",
    includes: [
      "Monthly content calendar",
      "Script writing & direction",
      "Reel editing with hooks",
      "Caption & hashtag strategy",
      "Platform-specific formatting",
      "Engagement optimization",
    ],
    who: "Clinics, realtors, and local brands who want consistent inbound from Instagram.",
  },
  {
    n: "03",
    name: "Landing Pages",
    desc: "High-converting pages built for one goal: get the visitor to contact you. No distractions. No templates. Just clear messaging and a conversion path.",
    includes: [
      "Custom design & copy",
      "WhatsApp CTA integration",
      "Mobile-first layout",
      "Fast loading",
      "Lead form setup",
      "Analytics integration",
    ],
    who: "Anyone running ads, sending traffic, or wanting a real conversion-focused web presence.",
  },
  {
    n: "04",
    name: "WhatsApp Funnels",
    desc: "Automated follow-up and qualification flows so no lead goes cold. From first message to booked appointment.",
    includes: [
      "WhatsApp Business setup",
      "Automated greeting messages",
      "Lead qualification script",
      "Follow-up sequences",
      "CRM integration",
      "Response templates",
    ],
    who: "Businesses where most leads come through WhatsApp and follow-up is currently manual.",
  },
  {
    n: "05",
    name: "Google Business Profile Optimization",
    desc: "Local businesses win customers through Google Maps. We optimize your profile so you rank and convert when people search for your service in Lahore.",
    includes: [
      "Profile audit & setup",
      "Keyword optimization",
      "Photo strategy",
      "Review management guidance",
      "Post scheduling",
      "Local SEO foundation",
    ],
    who: "Any local business — clinics, restaurants, dealers — that depends on local search.",
  },
  {
    n: "06",
    name: "Growth Audits",
    desc: "A complete diagnostic of your digital presence. We show you exactly where leads are leaking — social media, website, Google, WhatsApp — and how to fix it.",
    includes: [
      "Social media audit",
      "Website conversion review",
      "Google profile audit",
      "WhatsApp flow review",
      "Competitor gap analysis",
      "Priority fix roadmap",
    ],
    who: "Owners who feel they're spending without results and want a clear next step.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-foreground relative">
      <PageBackground variant="hero" ghostWords={["WEBSITE", "CONTENT", "ADS", "WHATSAPP", "GOOGLE", "FUNNELS"]} />
      <Navbar />
      <main className="pt-32 pb-20 px-5 md:px-6">
        <SectionWrapper className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-[10px] md:text-xs font-ui uppercase tracking-[0.22em] text-teal">
              Our Services
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] text-creator-white">
            Every Tool Your Business Needs to{" "}
            <span className="text-gradient-teal-gold">Convert Attention</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-cool-gray text-base md:text-lg font-brand">
            Each service is a module in the system — but the real result comes when they work together.
          </p>
        </SectionWrapper>

        <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">
          {services.map((s, i) => (
            <SectionWrapper key={s.n} amount={0.2}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/8 bg-[#0A1828]/80 backdrop-blur-md p-6 md:p-10 hover:border-teal/30 transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-3">
                    <div className="font-display font-black text-6xl md:text-7xl text-gradient-teal-gold leading-none">
                      {s.n}
                    </div>
                    <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold text-creator-white">
                      {s.name}
                    </h2>
                  </div>
                  <div className="md:col-span-9 space-y-5">
                    <p className="text-cool-gray leading-relaxed font-brand">{s.desc}</p>
                    <div>
                      <div className="label-eyebrow mb-3">What's included</div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {s.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2 text-sm text-creator-white font-brand">
                            <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-white/5">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-ui">Who it's for</span>
                      <p className="mt-1 text-sm text-cool-gray font-brand">{s.who}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper className="max-w-3xl mx-auto text-center mt-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-creator-white">
            Not sure which service you need?
          </h2>
          <p className="mt-4 text-cool-gray font-brand">
            Start with a free audit. We'll tell you what's actually missing.
          </p>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("services_cta")}
            className="btn-primary-glow mt-8"
          >
            Book a Free Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
