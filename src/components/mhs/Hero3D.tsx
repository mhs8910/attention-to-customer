import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MessageSquare, Megaphone, MousePointerClick, Users, Video, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  label: string;
  sub: string;
  color: string;
  style: React.CSSProperties;
  delay?: number;
}

function FloatingCard({ icon, label, sub, color, style, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className="absolute glass-panel p-3.5 w-[180px] animate-float-slow shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]"
      style={{
        ...style,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${color}22`, color }}
        >
          {icon}
        </div>
        <div className="text-[10px] uppercase tracking-wider text-cool-gray font-ui font-semibold">
          {sub}
        </div>
      </div>
      <div className="text-sm font-display font-semibold text-creator-white">{label}</div>
      <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full animate-pulse-glow"
          style={{ background: color, width: "70%" }}
        />
      </div>
    </motion.div>
  );
}

export function Hero3D() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-100, 100], [8, -8]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [-100, 100], [-8, 8]), { stiffness: 80, damping: 20 });

  return (
    <div
      className="relative w-full h-[520px] md:h-[600px] lg:h-[640px]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left - rect.width / 2);
        my.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1200 }}
        className="absolute inset-0"
      >
        {/* Connection lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A88F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F0A500" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <g stroke="url(#line-grad)" strokeWidth="1.5" fill="none" strokeDasharray="4 6">
            <path d="M120,140 Q300,80 480,160" className="animate-pulse-glow" />
            <path d="M150,300 Q300,260 470,320" className="animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
            <path d="M140,460 Q300,420 460,480" className="animate-pulse-glow" style={{ animationDelay: "1s" }} />
            <path d="M130,200 Q280,360 470,420" className="animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          </g>
        </svg>

        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-teal/20 via-gold/10 to-transparent blur-3xl animate-pulse-glow" />

        {/* Central dashboard card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-panel p-5 w-[240px] shadow-[0_30px_80px_-20px_rgba(0,168,143,0.4)] border border-teal/30"
          style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-arrow-green animate-pulse-glow" />
              <span className="text-[10px] uppercase tracking-wider text-arrow-green font-ui font-semibold">Live</span>
            </div>
            <BarChart3 className="w-4 h-4 text-gold" />
          </div>
          <div className="text-xs text-cool-gray font-ui mb-1">Growth Dashboard</div>
          <div className="text-2xl font-display font-bold text-gradient-teal-gold mb-3">+247%</div>
          <div className="space-y-1.5">
            {[80, 65, 45, 90, 70].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${w}%` }}
                  transition={{ duration: 1.2, delay: 0.8 + i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-teal to-gold"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <FloatingCard
          icon={<Video className="w-4 h-4" />}
          label="Reels & Posts"
          sub="Content"
          color="#10B981"
          style={{ top: "8%", left: "2%" }}
          delay={0.3}
        />
        <FloatingCard
          icon={<Megaphone className="w-4 h-4" />}
          label="Meta Ads"
          sub="Campaigns"
          color="#F0A500"
          style={{ top: "12%", right: "4%" }}
          delay={0.5}
        />
        <FloatingCard
          icon={<MousePointerClick className="w-4 h-4" />}
          label="Landing Page"
          sub="Convert"
          color="#00A88F"
          style={{ top: "48%", left: "0%" }}
          delay={0.7}
        />
        <FloatingCard
          icon={<MessageSquare className="w-4 h-4" />}
          label="WhatsApp Funnel"
          sub="Nurture"
          color="#10B981"
          style={{ top: "52%", right: "2%" }}
          delay={0.9}
        />
        <FloatingCard
          icon={<Users className="w-4 h-4" />}
          label="New Customer"
          sub="Result"
          color="#F0A500"
          style={{ bottom: "4%", left: "8%" }}
          delay={1.1}
        />
      </motion.div>
    </div>
  );
}
