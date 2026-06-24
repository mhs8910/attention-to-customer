import { Search, Map, Hammer, Rocket, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { week: "Week 1", icon: Search, name: "Diagnose", desc: "We audit your full marketing presence and identify where leads are leaking." },
  { week: "Week 2", icon: Map, name: "Plan", desc: "We design your customer journey from ad → landing page → WhatsApp → booking." },
  { week: "Week 3", icon: Hammer, name: "Build", desc: "We create content, ad creatives, landing page, and WhatsApp flow." },
  { week: "Week 4", icon: Rocket, name: "Launch", desc: "We connect all pieces and activate the customer acquisition system." },
  { week: "Ongoing", icon: TrendingUp, name: "Optimize", desc: "We review performance weekly and improve what's not converting." },
];

export function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="label-eyebrow mb-4">How We Work</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              From audit to active system in{" "}
              <span className="text-gradient-teal-gold">4 weeks.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative text-center lg:text-left">
                  <div className="relative inline-flex lg:flex w-24 h-24 mx-auto lg:mx-0 rounded-2xl bg-deep-navy border border-teal/30 items-center justify-center mb-5">
                    <s.icon className="w-7 h-7 text-teal" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-teal text-deep-navy text-xs font-ui font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold font-ui mb-1">{s.week}</div>
                  <h3 className="text-xl font-display font-semibold text-creator-white mb-2">{s.name}</h3>
                  <p className="text-sm text-cool-gray leading-relaxed font-brand">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
