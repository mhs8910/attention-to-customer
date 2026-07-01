import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

export const FAQ_ITEMS = [
  {
    q: "What does MHS-Productions actually do?",
    a: "We build the complete system that turns attention into customers — Meta ads, social content, landing pages, and WhatsApp funnels — connected and optimised as one pipeline rather than disconnected pieces.",
  },
  {
    q: "Do you only work with businesses in Lahore?",
    a: "We're based in Lahore and serve local businesses across Pakistan. We also work remotely with businesses outside Pakistan when the offer and audience fit our system.",
  },
  {
    q: "How long until I see results from Meta ads?",
    a: "Most clients see the first qualified inquiries within the first 7–14 days of launch. Sustained, predictable lead flow typically stabilises by week 3–4 once the system is optimised.",
  },
  {
    q: "What if I already have a Meta ads account?",
    a: "Even better. We audit your existing campaigns, keep what works, and rebuild what doesn't. You keep ownership of your ad account, pixel, and historical data.",
  },
  {
    q: "Do you work with businesses that have a small budget?",
    a: "Yes — the 7-Day Growth Test is built for that. It's a short, focused engagement to prove the system works for your business before committing to a larger retainer.",
  },
  {
    q: "What is a growth audit?",
    a: "A free diagnostic of your Instagram, Meta ads, landing page, Google Business Profile, and WhatsApp flow. You get a clear written breakdown of exactly where leads are leaking and what to fix first.",
  },
  {
    q: "How is MHS-Productions different from other agencies?",
    a: "Most agencies sell one piece — ads, or content, or a website. We build the connected system around all of them so attention actually becomes customers, not just views.",
  },
  {
    q: "Do you build websites and landing pages?",
    a: "Yes. We build conversion-focused landing pages and full websites optimised for bookings, WhatsApp clicks, and inquiry submissions — not generic templates.",
  },
  {
    q: "What is a WhatsApp funnel?",
    a: "A structured flow on WhatsApp Business that captures inquiries, qualifies leads with the right questions, sends follow-ups, and books appointments — so no lead is forgotten.",
  },
  {
    q: "What happens after I request the free audit?",
    a: "We reply on WhatsApp, ask a few questions about your business and current setup, and deliver the written audit within 24 hours in most cases. No pressure, no pitch — just clarity.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding section-bg relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ top: "10%", left: "-2%", fontSize: "14vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>QUESTIONS</span>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ bottom: "8%", right: "-2%", fontSize: "12vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>SYSTEM</span>
      </div>
      <div className="mx-auto max-w-3xl relative">
        <Reveal>
          <div className="text-center mb-10">
            <div className="label-eyebrow mb-4">FAQ</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              Questions, <span className="text-gradient-teal-gold">answered.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.03}>
                <div
                  className={`card-mhs overflow-hidden transition-colors ${
                    isOpen ? "border-teal/40" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-creator-white text-base md:text-lg">
                      {item.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-lg border border-teal/30 bg-teal/5 flex items-center justify-center text-teal">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-6 text-cool-gray leading-relaxed font-brand">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("faq_whatsapp")}
              className="inline-flex items-center gap-2 text-teal hover:text-gold transition-colors font-ui font-semibold"
            >
              Still have questions? Message us on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
