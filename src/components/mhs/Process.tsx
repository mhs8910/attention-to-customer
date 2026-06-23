import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Diagnose", desc: "We audit your social media, ads, landing page, WhatsApp flow, offer, and competitors." },
  { n: "02", title: "Map", desc: "We design your customer journey from attention to inquiry to conversion." },
  { n: "03", title: "Produce", desc: "We create content, ads, landing assets, hooks, CTAs, and campaign creatives." },
  { n: "04", title: "Launch", desc: "We connect content, Meta ads, landing pages, and WhatsApp into one campaign system." },
  { n: "05", title: "Optimize", desc: "We review performance, improve creatives, fix leaks, and increase conversions." },
];

export function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-eyebrow mb-4">Process</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
              How we build your
              <span className="text-gradient-teal-gold"> growth system</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-teal/40 via-gold/30 to-transparent" />

          <div className="space-y-8 md:space-y-14">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-12 items-center`}>
                    <div className={`pl-16 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                      <div className="glass-panel p-6 inline-block w-full md:max-w-md">
                        <div className="flex items-center gap-3 mb-3 md:justify-start" style={left ? { justifyContent: "flex-end" } : {}}>
                          <span className="font-brand text-3xl font-bold text-gradient-teal-gold">{s.n}</span>
                          <span className="text-xs uppercase tracking-widest font-ui text-cool-gray">Step</span>
                        </div>
                        <h3 className="text-2xl font-display font-semibold text-creator-white mb-2">{s.title}</h3>
                        <p className="text-sm text-cool-gray leading-relaxed">{s.desc}</p>
                      </div>
                    </div>

                    {/* node */}
                    <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal to-gold shadow-[0_0_20px_rgba(0,168,143,0.6)] animate-pulse-glow" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#audit" className="btn-primary-glow">Get Free Growth Audit →</a>
        </div>
      </div>
    </section>
  );
}
