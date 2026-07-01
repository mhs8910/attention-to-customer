import { Sparkles, Sun } from "lucide-react";
import { Reveal } from "./Reveal";

const niches = [
  {
    icon: Sparkles,
    title: "Aesthetic Clinics & Dermatologists",
    pain: "Inconsistent bookings. No lead funnel. Instagram looks active but doesn't convert.",
    solution: "Content + Meta ads + WhatsApp booking flow = consistent consultation inquiries.",
  },
  {
    icon: Sun,
    title: "Solar Companies",
    pain: "High-trust sale. Long cycle. No system to qualify and nurture leads.",
    solution: "Landing page + form + WhatsApp funnel + follow-up = qualified solar inquiries at scale.",
  },
];

const others = ["Gyms", "Restaurants", "Training Institutes", "Real Estate", "Local Services"];

export function WhoWeWorkWith() {
  return (
    <section className="section-padding section-bg relative bg-[#030712]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="label-eyebrow mb-4">Built For</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              We specialise in businesses that need real{" "}
              <span className="text-gradient-teal-gold">customer growth</span>, not vanity metrics.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {niches.map((n, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card-mhs p-7 h-full border-t-2 border-t-teal">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center">
                    <n.icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-semibold text-creator-white">{n.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-ui mb-1.5">Pain</div>
                    <p className="text-sm text-cool-gray leading-relaxed font-brand">{n.pain}</p>
                  </div>
                  <div className="h-px bg-teal/15" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-teal font-ui mb-1.5">Solution</div>
                    <p className="text-sm text-creator-white leading-relaxed font-brand">{n.solution}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="text-xs uppercase tracking-widest text-cool-gray font-ui mr-2">Also:</span>
            {others.map((o) => (
              <span
                key={o}
                className="px-3 py-1.5 rounded-full bg-deep-navy border border-teal/15 text-sm text-cool-gray font-brand"
              >
                {o}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
