import { Check, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Content System",
    best: "Businesses that need consistent content and stronger online presence.",
    items: ["Content strategy", "Reel ideas", "Editing", "Posting plan", "Monthly content calendar"],
    cta: "Apply For Audit",
  },
  {
    name: "Campaign System",
    best: "Businesses that need content + Meta ads + landing page.",
    items: ["Campaign strategy", "Creatives", "Meta ads setup", "Landing page", "Tracking & analytics"],
    cta: "Apply For Audit",
    recommended: true,
  },
  {
    name: "Full Acquisition System",
    best: "Businesses that want a complete content + ads + funnel + follow-up engine.",
    items: ["Everything in Campaign", "WhatsApp follow-up funnel", "Lead qualification", "Conversion optimization", "Performance reporting"],
    cta: "Apply For Audit",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="label-eyebrow mb-4">Packages</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
              Choose the growth system
              <span className="text-gradient-teal-gold"> your business needs</span>
            </h2>
            <p className="mt-6 text-cool-gray text-lg">
              Custom quote after your free audit — priced for the size and stage of your business.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className={`glass-panel p-7 h-full flex flex-col relative ${
                  t.recommended
                    ? "border-teal/40 bg-gradient-to-br from-teal/10 via-transparent to-gold/5 shadow-[0_30px_80px_-20px_rgba(0,168,143,0.3)]"
                    : "glass-panel-hover"
                }`}
              >
                {t.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-teal to-gold text-obsidian text-[10px] font-ui font-bold uppercase tracking-widest flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Recommended
                  </div>
                )}

                <h3 className="text-xl font-display font-semibold text-creator-white mb-2">{t.name}</h3>
                <p className="text-sm text-cool-gray mb-5 leading-relaxed">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-ui font-semibold block mb-1">Best for</span>
                  {t.best}
                </p>

                <div className="my-5">
                  <div className="text-3xl font-display font-bold text-creator-white">Custom Quote</div>
                  <div className="text-xs text-cool-gray font-ui mt-1">Priced after audit</div>
                </div>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {t.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <div className="w-5 h-5 rounded-md bg-teal/15 border border-teal/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-teal" />
                      </div>
                      <span className="text-creator-white/90">{it}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#audit"
                  className={t.recommended ? "btn-primary-glow w-full justify-center" : "btn-secondary-outline w-full justify-center"}
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
