import { ArrowRight, Lock, Sun, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const projects = [
  {
    icon: Sun,
    badge: "Website Design & Development",
    title: "Sunshine Solar Energy",
    desc: "Built a modern, conversion-focused website for Sunshine Solar Energy, a Lahore-based solar installation company. Goals: professional presence, service clarity, trust-building, and inquiry generation.",
    tags: ["Responsive Design", "Service-Focused Structure", "Mobile Optimised", "Conversion CTAs"],
    cta: "View Project Breakdown",
  },
  {
    icon: Sparkles,
    badge: "Brand Identity & Digital Strategy",
    title: "MHS-ScaleOps",
    desc: "Created the complete brand identity and digital presence for MHS-ScaleOps, a growth and automation initiative built around marketing systems and AI tools.",
    tags: ["Brand Identity", "Visual System", "Service Architecture", "Growth Messaging"],
    cta: "View Brand Breakdown",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="section-padding section-bg relative bg-[#030712]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="label-eyebrow mb-4">Work</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              Real projects. Real systems. Built for{" "}
              <span className="text-gradient-teal-gold">real businesses.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="card-mhs p-6 md:p-10 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center group">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-teal/10 border border-teal/25 text-teal text-xs font-ui font-semibold uppercase tracking-widest mb-4">
                    {p.badge}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-creator-white mb-3">{p.title}</h3>
                  <p className="text-cool-gray leading-relaxed font-brand mb-5">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-deep-navy border border-teal/15 text-xs font-ui text-cool-gray"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#audit"
                    className="inline-flex items-center gap-2 text-teal hover:text-gold transition-colors font-ui font-semibold"
                  >
                    {p.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Device mockup */}
                <div className="relative">
                  <div className="aspect-[16/10] rounded-2xl border border-teal/20 bg-gradient-to-br from-deep-navy to-[#050d18] p-4 relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="relative flex items-center gap-1.5 mb-3">
                      <div className="w-2 h-2 rounded-full bg-gold/60" />
                      <div className="w-2 h-2 rounded-full bg-teal/60" />
                      <div className="w-2 h-2 rounded-full bg-cool-gray/30" />
                    </div>
                    <div className="relative space-y-2">
                      <div className="w-2/3 h-3 rounded bg-creator-white/80" />
                      <div className="w-full h-2 rounded bg-cool-gray/30" />
                      <div className="w-4/5 h-2 rounded bg-cool-gray/30" />
                      <div className="mt-4 inline-flex px-3 py-1.5 rounded-lg bg-teal text-deep-navy text-xs font-ui font-semibold">
                        {p.title.split(" ")[0]} CTA
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="h-12 rounded-lg bg-teal/10 border border-teal/20" />
                        <div className="h-12 rounded-lg bg-gold/10 border border-gold/20" />
                        <div className="h-12 rounded-lg bg-teal/10 border border-teal/20" />
                      </div>
                    </div>
                    <p.icon className="absolute bottom-4 right-4 w-10 h-10 text-teal/30" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Sample audit preview */}
        <Reveal>
          <div className="mt-10 card-mhs p-6 md:p-8 relative overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 items-center">
              <div className="relative h-56 md:h-64 rounded-xl overflow-hidden border border-teal/15 bg-deep-navy">
                <div className="absolute inset-0 p-5 blur-[3px] opacity-70">
                  <div className="text-xs text-teal font-ui mb-2">GROWTH AUDIT — CONFIDENTIAL</div>
                  <div className="space-y-1.5">
                    <div className="w-full h-2 rounded bg-creator-white/40" />
                    <div className="w-5/6 h-2 rounded bg-cool-gray/40" />
                    <div className="w-3/4 h-2 rounded bg-cool-gray/40" />
                    <div className="w-full h-2 rounded bg-cool-gray/40" />
                    <div className="w-2/3 h-2 rounded bg-cool-gray/40" />
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="h-16 rounded bg-teal/15" />
                      <div className="h-16 rounded bg-gold/15" />
                    </div>
                    <div className="w-4/5 h-2 rounded bg-cool-gray/40 mt-3" />
                    <div className="w-3/5 h-2 rounded bg-cool-gray/40" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-transparent to-deep-navy/40 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-teal/70" />
                </div>
              </div>
              <div>
                <div className="label-eyebrow mb-3">Sample Audit</div>
                <h3 className="text-2xl font-display font-semibold text-creator-white mb-3">
                  This is the format of audit we deliver to every client.
                </h3>
                <p className="text-cool-gray font-brand mb-5">Want yours?</p>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick("sample_audit_cta")}
                  className="btn-primary-glow"
                >
                  Get Your Free Audit
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
