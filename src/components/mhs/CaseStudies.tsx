import { ArrowUpRight, UtensilsCrossed, Sparkles, Sun, Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";

// NOTE: Replace placeholder results below with real client outcomes once available.
const cases = [
  {
    icon: UtensilsCrossed,
    industry: "Restaurant",
    title: "Restaurant Campaign System",
    problem: "Low weekday footfall",
    built: "Reels + Meta ads + WhatsApp booking flow",
    result: "[Add real result here]",
  },
  {
    icon: Sparkles,
    industry: "Skin Clinic",
    title: "Skin Clinic Lead Funnel",
    problem: "Inconsistent inquiries",
    built: "Offer page + ad creatives + WhatsApp follow-up",
    result: "[Add real result here]",
  },
  {
    icon: Sun,
    industry: "Solar",
    title: "Solar Business Growth System",
    problem: "Leads not converting",
    built: "Service page + content + form + WhatsApp flow",
    result: "[Add real result here]",
  },
  {
    icon: Briefcase,
    industry: "Local Services",
    title: "Local Service Booking Funnel",
    problem: "No clear online customer journey",
    built: "Landing page + retargeting + lead qualification",
    result: "[Add real result here]",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="label-eyebrow mb-4">Work</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
              Built for local businesses that need
              <span className="text-gradient-teal-gold"> real customer growth</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="glass-panel glass-panel-hover p-7 h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal/5 rounded-full blur-3xl group-hover:bg-teal/15 transition-all" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <c.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-ui font-semibold text-cool-gray">
                        {c.industry}
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-cool-gray group-hover:text-teal group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-semibold text-creator-white mb-5">
                    {c.title}
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-cool-gray/70 font-ui mb-1">Problem</div>
                      <div className="text-creator-white">{c.problem}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-cool-gray/70 font-ui mb-1">Built</div>
                      <div className="text-creator-white">{c.built}</div>
                    </div>
                    <div className="pt-3 border-t border-white/[0.06]">
                      <div className="text-[10px] uppercase tracking-widest text-gold font-ui mb-1">Result</div>
                      <div className="text-creator-white font-display font-semibold">{c.result}</div>
                    </div>
                  </div>

                  <a href="#audit" className="mt-6 inline-flex items-center gap-1.5 text-sm font-ui font-semibold text-teal group-hover:text-gold transition-colors">
                    View Breakdown
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#audit" className="btn-primary-glow">Get Free Growth Audit →</a>
        </div>
      </div>
    </section>
  );
}
