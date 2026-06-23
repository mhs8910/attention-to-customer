import { Search, Lightbulb, Video, Megaphone, MousePointerClick, MessageSquare } from "lucide-react";
import { Reveal } from "./Reveal";

const modules = [
  { num: "01", icon: Search, title: "Audit & Diagnosis", desc: "We find what's leaking leads and money.", out: "Growth report" },
  { num: "02", icon: Lightbulb, title: "Content Strategy", desc: "Hooks, angles, offers, and content pillars.", out: "Strategy doc" },
  { num: "03", icon: Video, title: "Content Production", desc: "Reels, posts, and creative built to convert.", out: "Monthly content" },
  { num: "04", icon: Megaphone, title: "Meta Ads Campaigns", desc: "Lead, awareness, retargeting, and offer ads.", out: "Live campaigns" },
  { num: "05", icon: MousePointerClick, title: "Landing Pages", desc: "Built for inquiries, bookings, WhatsApp clicks.", out: "Conversion page" },
  { num: "06", icon: MessageSquare, title: "WhatsApp Funnels", desc: "Capture, qualify, follow up, book.", out: "Customer flow" },
];

export function GrowthSystem() {
  return (
    <section id="growth-system" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/10 rounded-full blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="label-eyebrow mb-4">The MHS Growth System</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
              A connected system that turns attention into
              <span className="text-gradient-teal-gold"> paying customers</span>
            </h2>
            <p className="mt-6 text-cool-gray text-lg leading-relaxed">
              Inquiries become conversations. Conversations become customers. Every module is wired to the next.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass-panel glass-panel-hover p-6 h-full relative group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-gold/10 border border-teal/20 flex items-center justify-center">
                    <m.icon className="w-5 h-5 text-teal" />
                  </div>
                  <span className="font-brand text-2xl font-bold text-white/10 group-hover:text-gold/40 transition-colors">
                    {m.num}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-creator-white mb-2">{m.title}</h3>
                <p className="text-sm text-cool-gray leading-relaxed mb-5">{m.desc}</p>
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-cool-gray/70 font-ui">Output</span>
                  <span className="text-xs font-ui font-semibold text-gold">{m.out}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
