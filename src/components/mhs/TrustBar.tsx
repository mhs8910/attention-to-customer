import { Video, Megaphone, MousePointerClick, MessageSquare, Search, Target, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Video, label: "Content Systems" },
  { icon: Megaphone, label: "Meta Ads" },
  { icon: MousePointerClick, label: "Landing Pages" },
  { icon: MessageSquare, label: "WhatsApp Funnels" },
  { icon: Search, label: "Growth Audits" },
  { icon: Target, label: "Conversion Strategy" },
  { icon: MapPin, label: "Local Business Focus" },
];

export function TrustBar() {
  return (
    <section className="relative py-14 border-y border-white/[0.05] bg-deep-navy/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {items.map((it, i) => (
              <div
                key={i}
                className="glass-panel glass-panel-hover px-4 py-2.5 flex items-center gap-2.5"
              >
                <it.icon className="w-4 h-4 text-teal" />
                <span className="text-xs md:text-sm font-ui font-medium text-creator-white">
                  {it.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
