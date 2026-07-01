import { Target, Film, MousePointerClick, MessageCircle, ClipboardCheck, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Target,
    title: "Meta Ads",
    desc: "We build lead, retargeting, and awareness campaigns on Facebook and Instagram that send people to a landing page built to convert.",
  },
  {
    icon: Film,
    title: "Social Media Content",
    desc: "Reels, carousels, and static posts built to create trust, attract the right audience, and generate inquiries — not just views.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    desc: "High-converting pages built for bookings, WhatsApp clicks, and inquiry submissions — not generic templates.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Funnels",
    desc: "Automated follow-up and qualification flows that capture, nurture, and book leads through WhatsApp Business.",
  },
  {
    icon: ClipboardCheck,
    title: "Growth Audits",
    desc: "A full diagnostic of your social media, ads, landing page, and WhatsApp flow — showing exactly where leads are leaking.",
  },
  {
    icon: MapPin,
    title: "Google Profile Optimization",
    desc: "We optimize your Google Business Profile for local discovery, trust, and map rankings in Lahore and Pakistan.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding section-bg relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ top: "10%", left: "-2%", fontSize: "14vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>SERVICES</span>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ bottom: "8%", right: "-2%", fontSize: "12vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>GROWTH</span>
      </div>
      <div className="mx-auto max-w-7xl relative">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="label-eyebrow mb-4">Services</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              Everything your business needs to turn attention into{" "}
              <span className="text-gradient-teal-gold">customers.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card-mhs p-6 h-full group">
                <div className="w-12 h-12 rounded-xl border border-teal/30 flex items-center justify-center mb-5 group-hover:bg-teal/10 transition-colors">
                  <s.icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="text-lg font-display font-semibold text-creator-white mb-2">{s.title}</h3>
                <p className="text-sm text-cool-gray leading-relaxed font-brand">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <a
              href="#audit"
              className="inline-flex items-center gap-2 text-teal hover:text-gold transition-colors font-ui font-semibold"
            >
              See all services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
