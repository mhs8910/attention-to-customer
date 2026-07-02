import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

type Plan = {
  name: string;
  price: string;
  period: string;
  best: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Starter Package",
    price: "PKR 55,000",
    period: "/month",
    best: "Salons, small restaurants, gyms starting their content journey",
    features: [
      "1 Shoot Day/month (half-day)",
      "6–8 edited Reels",
      "4 graphic carousels/posts",
      "Monthly content calendar",
      "Captions for all posts",
      "Scheduling & posting (Instagram + Facebook)",
      "Monthly strategy check-in",
      "2 revision rounds",
    ],
  },
  {
    name: "Content Growth Engine",
    price: "PKR 95,000",
    period: "/month",
    best: "Aesthetic clinics, solar companies, established salons & restaurants ready to grow",
    featured: true,
    badge: "MOST POPULAR",
    features: [
      "2 Shoot Days/month",
      "10–14 edited Reels",
      "6–8 designed carousels/posts",
      "Monthly content strategy session",
      "Full content calendar",
      "Captions, hashtags & posting timing",
      "Instagram + Facebook + TikTok",
      "Campaign planning (seasonal/offers)",
      "Monthly performance report",
      "3 revision rounds",
      "WhatsApp content approvals",
    ],
  },
  {
    name: "Brand Content Partner",
    price: "PKR 175,000",
    period: "/month",
    best: "Real estate brands, larger clinics, franchises, premium restaurants",
    features: [
      "3–4 Shoot Days/month",
      "20+ edited Reels",
      "10–12 designed posts",
      "Quarterly brand content strategy",
      "Campaign planning + ad creative production",
      "Full multi-platform management",
      "Daily story posting",
      "Monthly analytics deep-dive report",
      "Priority turnaround",
      "Dedicated WhatsApp account manager",
    ],
  },
];

export function GrowthTest() {
  return (
    <section id="pricing" className="relative section-bg bg-[#030712]">
      <div className="section-padding">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-4">
              <div className="label-eyebrow mb-4">Packages</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
                One system. <span className="text-gradient-teal-gold">Three sizes.</span>
              </h2>
              <p className="mt-5 text-cool-gray text-base md:text-lg leading-relaxed font-brand">
                All packages include strategy, shooting, editing, captions, and posting. You choose
                the volume.
              </p>
              <p className="mt-2 text-xs text-cool-gray/70 font-ui">
                Prices in PKR. All packages are monthly retainers with no lock-in after Month 1.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div
                  className={`card-mhs p-7 h-full flex flex-col relative ${
                    p.featured
                      ? "border-gold/50 shadow-[0_20px_60px_-20px_rgba(240,165,0,0.35)]"
                      : ""
                  }`}
                >
                  {p.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold text-deep-navy text-[10px] font-ui font-bold tracking-widest">
                      {p.badge}
                    </div>
                  )}
                  <h3 className="text-lg font-display font-semibold text-creator-white mb-1">
                    {p.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-2xl md:text-3xl font-display font-bold text-creator-white">
                      {p.price}
                    </span>
                    <span className="text-cool-gray text-sm font-ui ml-1">{p.period}</span>
                  </div>
                  <p className="text-xs text-cool-gray leading-relaxed font-brand mb-5">
                    <span className="text-gold font-ui uppercase tracking-widest text-[10px]">Best for: </span>
                    {p.best}
                  </p>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 mt-0.5 rounded-md bg-teal/15 border border-teal/30 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-teal" />
                        </div>
                        <span className="text-sm text-cool-gray font-brand leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WA_DEFAULT}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCtaClick(`pricing_${p.name}`)}
                    className={
                      p.featured
                        ? "btn-primary-glow w-full justify-center"
                        : "btn-secondary-outline w-full justify-center"
                    }
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 card-mhs p-7 md:p-9 border-gold/40 max-w-4xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-creator-white mb-3">
                Not ready for a retainer yet?
              </h3>
              <p className="text-cool-gray font-brand leading-relaxed mb-6 max-w-2xl mx-auto">
                Start with a Free Instagram Audit. We'll record a 10-minute personalised video review
                of your current Instagram — what's missing, what to fix, and exactly what to post next
                month. No cost, no commitment.
              </p>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick("free_audit_entry")}
                className="btn-primary-glow"
              >
                Request Free Audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
