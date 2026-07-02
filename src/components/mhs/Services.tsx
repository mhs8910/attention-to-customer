import { Video, Calendar, Layers, PenLine, Clock, BarChart3 } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Video,
    title: "Instagram Reels Production",
    desc: "Professional short-form videos planned, directed, edited, and ready to post. 6–20 Reels per month depending on your package. Hook-first structure built to stop the scroll.",
    tag: "Core Service",
    accent: "teal",
  },
  {
    icon: Calendar,
    title: "Content Strategy & Calendar",
    desc: "Monthly strategy sessions that define what you post, when you post, and why. No random ideas — every piece of content has a purpose and a place in your growth plan.",
    tag: "Core Service",
    accent: "teal",
  },
  {
    icon: Layers,
    title: "Graphic Carousels & Static Posts",
    desc: "Branded carousels, educational posts, and promotional graphics designed to your visual identity. 4–12 designed posts per month included in every package.",
    tag: "Core Service",
    accent: "teal",
  },
  {
    icon: PenLine,
    title: "Caption Writing & Hashtag Strategy",
    desc: "Captions written in your brand voice for every post. Strategic hashtag research to maximize local reach in Lahore and your target audience's geography.",
    tag: "Core Service",
    accent: "teal",
  },
  {
    icon: Clock,
    title: "Scheduling & Publishing",
    desc: "Every post scheduled at the optimal time for your audience. We handle Instagram, Facebook, and secondary platforms. You review and approve. We post.",
    tag: "Core Service",
    accent: "teal",
  },
  {
    icon: BarChart3,
    title: "Monthly Performance Report",
    desc: "Clear monthly report showing what was posted, reach and engagement metrics, what's working, and the content direction for next month. You always know what your retainer produced.",
    tag: "Included in All Packages",
    accent: "gold",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding section-bg relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ top: "10%", left: "-2%", fontSize: "14vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>SHOOT</span>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ bottom: "8%", right: "-2%", fontSize: "12vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>EDIT</span>
      </div>
      <div className="mx-auto max-w-7xl relative">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="label-eyebrow mb-4">Services</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              Everything your business needs to stay{" "}
              <span className="text-gradient-teal-gold">visible online.</span>
            </h2>
            <p className="mt-5 text-cool-gray text-base md:text-lg font-brand leading-relaxed">
              Six focused services, delivered as one connected monthly system.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const isGold = s.accent === "gold";
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className={`card-mhs p-6 h-full group ${
                    isGold ? "border-gold/30" : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-colors ${
                      isGold
                        ? "border-gold/30 bg-gold/10 group-hover:bg-gold/15"
                        : "border-teal/30 group-hover:bg-teal/10"
                    }`}
                  >
                    <s.icon className={`w-5 h-5 ${isGold ? "text-gold" : "text-teal"}`} />
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.22em] font-ui font-semibold mb-2 ${
                      isGold ? "text-gold" : "text-teal"
                    }`}
                  >
                    {s.tag}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-creator-white mb-2">{s.title}</h3>
                  <p className="text-sm text-cool-gray leading-relaxed font-brand">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
