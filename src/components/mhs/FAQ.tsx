import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "What does MHS-Productions do?", a: "We build connected growth systems for local businesses — combining social media content, Meta ads, landing pages, and WhatsApp funnels so attention converts into actual customers." },
  { q: "Do you only create content?", a: "No. Content is one part. Our edge is connecting content with ads, landing pages, and follow-up so every piece of marketing has a job." },
  { q: "Can you run Meta ads too?", a: "Yes. We design, launch, and optimize Meta ad campaigns — lead, retargeting, awareness, and offer campaigns built around your customer journey." },
  { q: "Do you build landing pages?", a: "Yes. We build conversion-focused landing pages designed for inquiries, bookings, and WhatsApp clicks — not generic templates." },
  { q: "What is a WhatsApp funnel?", a: "A WhatsApp funnel is an automated and structured follow-up system that captures leads, qualifies them, and books appointments through WhatsApp — where local customers actually reply." },
  { q: "What is a growth audit?", a: "A free diagnostic where we review your content, ads, landing page, WhatsApp flow, offer, and competitors, then give you a 30-day action plan." },
  { q: "How long does it take to launch a campaign?", a: "Most campaign systems launch within 2–4 weeks after the audit, depending on scope and content production." },
  { q: "Which businesses do you work with?", a: "Restaurants, clinics, salons, gyms, solar companies, real estate, education, and high-ticket local service businesses." },
  { q: "Do I need a big budget to start?", a: "No. We size the system to your stage. The audit shows you exactly what to invest in for the biggest impact first." },
  { q: "What happens after I request an audit?", a: "We review your business, prepare a personalized growth diagnostic, and reach out on WhatsApp with your action plan. No pressure, no hard pitch." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center mb-12">
            <div className="label-eyebrow mb-4">FAQ</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
              Questions, <span className="text-gradient-teal-gold">answered</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.03}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full text-left glass-panel p-5 md:p-6 transition-all ${
                    isOpen ? "border-teal/30 bg-gradient-to-br from-teal/5 to-transparent" : "hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display font-semibold text-creator-white text-base md:text-lg">{f.q}</h3>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-teal text-obsidian" : "bg-white/5 text-cool-gray"}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-cool-gray text-sm md:text-base leading-relaxed mt-4">{f.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
