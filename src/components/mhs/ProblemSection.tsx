import { AlertTriangle, ShuffleIcon, MegaphoneOff, FileX, MessageCircleOff, Unlink } from "lucide-react";
import { Reveal } from "./Reveal";

const problems = [
  { icon: ShuffleIcon, title: "Random posting", desc: "Content looks active but doesn't create real inquiries or sales." },
  { icon: MegaphoneOff, title: "Ads without funnels", desc: "Meta ads send people nowhere useful — budget burned, nothing booked." },
  { icon: FileX, title: "Weak landing pages", desc: "Visitors don't understand the offer or what action to take." },
  { icon: MessageCircleOff, title: "Leaking WhatsApp leads", desc: "Messages come in but follow-up is slow, manual, or inconsistent." },
  { icon: Unlink, title: "No campaign system", desc: "Content, ads, landing pages, and WhatsApp are completely disconnected." },
];

export function ProblemSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <div className="label-eyebrow mb-4">The Real Problem</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
              Most local businesses don't have a content problem.
              <span className="text-gradient-teal-gold"> They have a conversion system problem.</span>
            </h2>
            <p className="mt-6 text-cool-gray text-lg max-w-2xl leading-relaxed">
              Many businesses post on Instagram, boost random ads, and reply manually on WhatsApp — but nothing
              connects. Content gets attention, but the attention leaks before it becomes customers.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="glass-panel glass-panel-hover p-6 h-full group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-destructive/15 flex items-center justify-center border border-destructive/20">
                    <p.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <AlertTriangle className="w-3.5 h-3.5 text-gold opacity-60" />
                </div>
                <h3 className="text-lg font-display font-semibold text-creator-white mb-2">{p.title}</h3>
                <p className="text-sm text-cool-gray leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.36}>
            <div className="glass-panel p-6 h-full border-teal/30 bg-gradient-to-br from-teal/10 to-gold/5">
              <div className="label-eyebrow mb-3">The fix</div>
              <h3 className="text-lg font-display font-semibold text-creator-white mb-2">
                A connected growth system
              </h3>
              <p className="text-sm text-cool-gray leading-relaxed">
                Content, ads, landing pages, and WhatsApp working together — every piece doing its job.
              </p>
              <a href="#growth-system" className="mt-4 inline-block text-sm font-ui font-semibold text-teal hover:text-gold transition-colors">
                See the system →
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#audit" className="btn-primary-glow">
            Get Free Growth Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
