import { motion } from "framer-motion";
import { Zap, Video, Megaphone, MousePointerClick, MessageSquare, Repeat, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { icon: Zap, title: "Hook", sub: "Stop wasting ad spend", color: "#F0A500" },
  { icon: Video, title: "Reel", sub: "Short-form content", color: "#10B981" },
  { icon: Megaphone, title: "Meta Ad", sub: "Targeted campaign", color: "#F0A500" },
  { icon: MousePointerClick, title: "Landing", sub: "Clear offer", color: "#00A88F" },
  { icon: MessageSquare, title: "WhatsApp", sub: "Conversation starts", color: "#10B981" },
  { icon: Repeat, title: "Follow-up", sub: "Lead nurtured", color: "#F0A500" },
  { icon: Trophy, title: "Customer", sub: "Booking / sale", color: "#00A88F", final: true },
];

export function CampaignFlow() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-deep-navy/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-eyebrow mb-4">Campaign Flow</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
              Every piece of marketing
              <span className="text-gradient-teal-gold"> should have a job</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* connecting line desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, rotateY: 4 }}
                  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                  className={`glass-panel p-4 text-center relative ${
                    s.final ? "border-gold/40 shadow-[0_0_30px_-8px_rgba(240,165,0,0.4)]" : ""
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{
                      background: `${s.color}1a`,
                      border: `1px solid ${s.color}40`,
                      color: s.color,
                    }}
                  >
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="font-display font-semibold text-sm text-creator-white">{s.title}</div>
                  <div className="text-[10px] uppercase tracking-wider text-cool-gray font-ui mt-1">
                    {s.sub}
                  </div>
                  {!s.final && i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-3 h-3 -translate-y-1/2 rounded-full bg-teal/60 animate-pulse-glow" />
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
