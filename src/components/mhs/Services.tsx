import { Video, Megaphone, MousePointerClick, MessageSquare, Search, Compass, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Video,
    title: "Social Media Content Production",
    desc: "Reels, posts, editing, content calendar, and campaign creative built to actually convert.",
    featured: true,
  },
  { icon: Megaphone, title: "Meta Ads Campaigns", desc: "Lead campaigns, retargeting, local awareness, and offer campaigns." },
  { icon: MousePointerClick, title: "Landing Pages", desc: "High-converting pages built for inquiries, bookings, and WhatsApp clicks." },
  { icon: MessageSquare, title: "WhatsApp Funnels", desc: "Lead capture, automated follow-up, qualification, and appointment flow." },
  { icon: Search, title: "Growth Audits", desc: "Diagnose what's stopping your business from getting more customers online." },
  { icon: Compass, title: "Campaign Strategy", desc: "Offers, hooks, CTAs, content angles, funnel mapping, and launch plans." },
];

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="label-eyebrow mb-4">Services</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
                Everything your business needs to turn
                <span className="text-gradient-teal-gold"> attention into customers</span>
              </h2>
            </div>
            <a href="#audit" className="btn-secondary-outline shrink-0">
              Get Free Growth Audit
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[220px]">
          {services.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className={s.featured ? "md:col-span-2 md:row-span-2" : ""}
            >
              <div
                className={`glass-panel glass-panel-hover h-full p-6 group relative overflow-hidden ${
                  s.featured ? "bg-gradient-to-br from-teal/10 via-transparent to-gold/5 border-teal/20" : ""
                }`}
              >
                {s.featured && (
                  <>
                    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-teal/15 blur-3xl animate-pulse-glow" />
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gold/10 blur-3xl" />
                  </>
                )}
                <div className="relative h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    s.featured ? "bg-gradient-to-br from-teal to-arrow-green text-obsidian" : "bg-white/5 text-teal border border-white/10"
                  }`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-display font-semibold text-creator-white mb-2 ${s.featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
                    {s.title}
                  </h3>
                  <p className={`text-cool-gray leading-relaxed ${s.featured ? "text-base" : "text-sm"}`}>
                    {s.desc}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-ui font-semibold text-teal group-hover:text-gold transition-colors">
                    Explore Service
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
