import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

export const FAQ_ITEMS = [
  {
    q: "Do you guarantee followers or leads?",
    a: "We guarantee delivery, quality, and consistency — which are the inputs to results. Followers and leads depend on your offer, audience, algorithm, and many external factors. What we guarantee is that consistent, professional content is one of the most proven ways to build the trust that makes leads possible. We report what happens each month so you can see momentum building.",
  },
  {
    q: "What if I'm not comfortable on camera?",
    a: "Most of our best content doesn't require the owner on camera. Product showcases, treatment process B-roll, facility tours, staff introductions, and before/after content all produce excellent Reels without you being in front of the lens. We'll build content direction around what's comfortable for your business.",
  },
  {
    q: "How long does a shoot day take?",
    a: "Typically 2–4 hours. We arrive with a clear brief, direct everything, and leave efficiently. You don't need to prepare beyond being at your location. We manage the shot list, angles, and direction.",
  },
  {
    q: "Can I see examples of your work?",
    a: "Yes. We've worked with Sunshine Solar Energy (solar content), NAIXOL International (digital product Reels), and several aesthetic clinics and service businesses in Lahore. We'll share relevant examples on our first call or audit.",
  },
  {
    q: "What platforms do you manage?",
    a: "Our primary platform is Instagram. All packages include Facebook cross-posting. Growth and Premium packages include TikTok. Premium packages include YouTube Shorts and daily story posting.",
  },
  {
    q: "Is there a contract or lock-in?",
    a: "Month-to-month after Month 1. We ask for a minimum 1-month commitment so there's time to produce and evaluate content properly. After that, you're free to continue or cancel with notice.",
  },
  {
    q: "What's the difference between you and a freelancer?",
    a: "A freelancer typically does one thing — posts, or edits, or designs. MHS-Productions does all five stages: Plan, Shoot, Edit, Post, Grow. You get a complete content team, not one person with one skill set, for a predictable monthly cost.",
  },
  {
    q: "How quickly can we start?",
    a: "We can typically onboard within 5–7 days of signing. The first content batch goes live in Week 3–4. Strategy and shoot briefing happen in the first week.",
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
            <div className="label-eyebrow mb-4">FAQs</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              Questions we get asked{" "}
              <span className="text-gradient-teal-gold">every week.</span>
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
