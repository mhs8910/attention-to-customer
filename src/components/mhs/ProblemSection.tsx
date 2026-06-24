import { Zap, TrendingDown, Unlock, MessageSquareOff, ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";

const problems = [
  {
    icon: Zap,
    title: "Random posting",
    desc: "Your content gets views but doesn't create inquiries because there's no CTA, no funnel, and no path to WhatsApp.",
  },
  {
    icon: TrendingDown,
    title: "Ads without a destination",
    desc: "Meta ads drive traffic to a business page with no clear offer. Budget spent. Zero bookings.",
  },
  {
    icon: Unlock,
    title: "Weak landing pages",
    desc: "Visitors don't know what to do. No clear offer, no trust proof, no urgent CTA.",
  },
  {
    icon: MessageSquareOff,
    title: "Slow WhatsApp replies",
    desc: "Leads message and never get a structured response. They move on in 15 minutes.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <div className="label-eyebrow mb-4">The Real Problem</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              Most businesses don't have a content problem.{" "}
              <span className="text-gradient-teal-gold">They have a disconnected system problem.</span>
            </h2>
            <p className="mt-6 text-cool-gray text-lg leading-relaxed font-brand">
              You post. You boost. You reply on WhatsApp. But nothing is connected. Attention enters and leaks before
              it ever becomes a customer.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card-mhs p-6 h-full border-l-2 border-l-teal/60 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-creator-white mb-2">{p.title}</h3>
                <p className="text-sm md:text-base text-cool-gray leading-relaxed font-brand">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="h-12 w-px bg-gradient-to-b from-transparent to-teal" />
          <a
            href="#growth-system"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/30 bg-teal/5 text-teal text-sm font-ui font-semibold hover:bg-teal/10 transition-colors"
          >
            The fix
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
