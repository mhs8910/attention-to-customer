import { Target, Film, MousePointerClick, MessageCircle, RefreshCw, BarChart3, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const modules = [
  { icon: Target, name: "Meta Ads", outcome: "Paid attention — targeted, optimised, converting." },
  { icon: Film, name: "Content System", outcome: "Reels and posts that build trust and pull the right audience." },
  { icon: MousePointerClick, name: "Landing Page", outcome: "A page built to convert clicks into inquiries." },
  { icon: MessageCircle, name: "WhatsApp Funnel", outcome: "Structured replies that qualify and book leads." },
  { icon: RefreshCw, name: "Follow-Up", outcome: "Nurture flows that recover leads who don't reply." },
  { icon: BarChart3, name: "Tracking", outcome: "Weekly performance review on every channel." },
];

export function GrowthSystem() {
  return (
    <section id="growth-system" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal/8 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="label-eyebrow mb-4">The MHS Growth System</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              A connected system that turns attention into{" "}
              <span className="text-gradient-teal-gold">paying customers.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {modules.map((m, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card-mhs p-6 h-full relative group">
                <div className="absolute top-4 right-4 text-[10px] font-ui font-bold text-teal/60 tracking-widest">
                  0{i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <m.icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="text-lg font-display font-semibold text-creator-white mb-2">{m.name}</h3>
                <p className="text-sm text-cool-gray leading-relaxed font-brand">{m.outcome}</p>
                {i < modules.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-teal/40" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-center">
            <div className="h-10 w-px bg-gradient-to-b from-transparent to-gold" />
            <div className="px-8 py-4 rounded-2xl border border-gold/30 bg-gold/5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-cool-gray font-ui mb-1 text-center">
                Outcome
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gold tracking-wide">CUSTOMERS</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-cool-gray mb-5 font-brand">This is what we build for your business.</p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("growth_system_cta")}
              className="btn-primary-glow"
            >
              Get Free Audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
