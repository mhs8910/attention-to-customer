import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappUrl, trackCtaClick } from "@/lib/whatsapp";

const deliverables = [
  "Campaign strategy",
  "3–5 ad creatives",
  "Meta campaign setup",
  "WhatsApp / lead form",
  "7-day monitoring",
  "Final performance report",
];

const APPLY_URL = whatsappUrl(
  "Hi MHS-Productions, I'd like to apply for the 7-Day Growth Test.",
);

export function GrowthTest() {
  return (
    <section className="relative">
      <div className="section-padding">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="label-eyebrow mb-4">Paid Starter Offer</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
                Not ready for a full retainer? Start with the{" "}
                <span className="text-gradient-teal-gold">7-Day Growth Test.</span>
              </h2>
              <p className="mt-5 text-cool-gray text-base md:text-lg leading-relaxed font-brand">
                We run a 7-day paid campaign system for your business — strategy, creatives, Meta campaign setup,
                WhatsApp flow, and a final report. If you don't see measurable improvement in your inquiry flow, we
                discuss a full refund.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-mhs p-7 md:p-10 border-teal/30">
              <div className="grid md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-3 mb-8">
                {deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-teal/15 border border-teal/30 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-teal" />
                    </div>
                    <span className="text-sm md:text-base text-creator-white font-brand">{d}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 pt-6 border-t border-teal/15">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-cool-gray font-ui mb-1">From</div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-creator-white">
                    PKR 25,000 <span className="text-base font-normal text-cool-gray">setup fee</span>
                  </div>
                  <div className="text-xs text-cool-gray mt-1 font-ui">Ad spend billed separately.</div>
                </div>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick("growth_test_apply")}
                  className="btn-primary-glow"
                >
                  Apply for the 7-Day Test
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
