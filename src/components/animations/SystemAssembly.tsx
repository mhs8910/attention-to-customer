import { useEffect, useRef, useState } from "react";
import { ArrowRight, Target, Film, MousePointerClick, MessageCircle, RefreshCw, BarChart3, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion, isMobile } from "@/lib/gsap";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

type Mod = {
  id: string;
  num: string;
  name: string;
  outcome: string;
  desc: string;
  Icon: LucideIcon;
  x: number;
  y: number;
};

// Canvas: 900 x 500
const MODS: Mod[] = [
  { id: "n1", num: "01", name: "Meta Ads", outcome: "Paid attention — targeted and reaching the right people.", desc: "Lead, retargeting, awareness campaigns on Facebook & Instagram.", Icon: Target, x: 80, y: 120 },
  { id: "n2", num: "02", name: "Content System", outcome: "Reels and posts that build trust and pull the right audience.", desc: "Trust content that turns scrollers into qualified inquiries.", Icon: Film, x: 230, y: 250 },
  { id: "n3", num: "03", name: "Landing Page", outcome: "A page built to convert clicks into inquiries.", desc: "Conversion-focused pages — bookings, WhatsApp clicks, forms.", Icon: MousePointerClick, x: 380, y: 130 },
  { id: "n4", num: "04", name: "WhatsApp Funnel", outcome: "Structured replies that qualify and book leads.", desc: "Automated flows that capture and book leads on WhatsApp.", Icon: MessageCircle, x: 530, y: 250 },
  { id: "n5", num: "05", name: "Follow-Up System", outcome: "Nurture flows that recover leads who don't reply.", desc: "Sequenced follow-ups that re-engage dropped conversations.", Icon: RefreshCw, x: 680, y: 130 },
  { id: "n6", num: "06", name: "Performance Tracking", outcome: "Weekly performance review on every channel.", desc: "Live tracking — what's working, what to cut, what to scale.", Icon: BarChart3, x: 830, y: 250 },
];

const OUTPUT = { x: 980, y: 190, name: "CUSTOMERS" };

function pathD(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
}

export function SystemAssembly() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
    const onResize = () => setMobile(isMobile());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (mobile || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(".sa-node", { opacity: 0, scale: 0.7, transformOrigin: "center" });
      gsap.set(".sa-label", { opacity: 0, y: 8 });
      gsap.set(".sa-sidebar-item", { opacity: 0.15, x: 0 });
      gsap.set(".sa-sidebar-item.active", { opacity: 1 });
      gsap.set(".sa-path", { strokeDasharray: 600, strokeDashoffset: 600 });
      gsap.set(".sa-dot", { opacity: 0 });
      gsap.set(".sa-output", { opacity: 0, scale: 0.6 });
      gsap.set(".sa-final-cta", { opacity: 0, y: 16 });
      gsap.set(".sa-final-headline", { opacity: 0, y: 12 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          pin: ".sa-pin-target",
          scrub: 1.2,
          start: "top top",
          end: "+=600%",
          anticipatePin: 1,
        },
      });

      // 6 module reveals across 0..0.9, final 0.9..1
      for (let i = 0; i < MODS.length; i++) {
        const m = MODS[i];
        const start = i * (0.9 / 6);
        tl.to(`#node-${m.id}`, { opacity: 1, scale: 1, duration: 0.05 }, start);
        tl.to(`#label-${m.id}`, { opacity: 1, y: 0, duration: 0.05 }, start + 0.01);
        tl.to(`.sidebar-${m.id}`, { opacity: 1, duration: 0.03 }, start);
        if (i > 0) {
          const pid = `#path-${MODS[i - 1].id}-${m.id}`;
          tl.to(pid, { strokeDashoffset: 0, duration: 0.07 }, start);
          tl.to(`#dot-${MODS[i - 1].id}-${m.id}`, { opacity: 1, duration: 0.02 }, start);
        }
      }

      // Final
      tl.to(".sa-node", { scale: 1.08, duration: 0.04, yoyo: true, repeat: 1 }, 0.9);
      tl.to(".sa-output", { opacity: 1, scale: 1, duration: 0.05 }, 0.92);
      tl.to("#path-n6-out", { strokeDashoffset: 0, duration: 0.05 }, 0.93);
      tl.to("#dot-n6-out", { opacity: 1, duration: 0.02 }, 0.95);
      tl.to(".sa-final-headline", { opacity: 1, y: 0, duration: 0.05 }, 0.96);
      tl.to(".sa-final-cta", { opacity: 1, y: 0, duration: 0.05 }, 0.97);
    }, rootRef);
    return () => ctx.revert();
  }, [mobile]);

  if (mobile) return <MobileStack />;

  return (
    <section id="growth-system" ref={rootRef} className="relative bg-[#030712]">
      <div className="sa-pin-target relative h-screen w-full overflow-hidden bg-[#030712]">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-teal/5 rounded-full blur-3xl" />

        <div className="relative h-full mx-auto max-w-7xl px-6 grid grid-rows-[auto_1fr_auto] py-10">
          <div className="text-center">
            <div className="label-eyebrow mb-3">The MHS Growth System</div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-creator-white">
              Watch attention turn into{" "}
              <span className="text-gradient-teal-gold">customers.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-[1fr_280px] gap-6 items-center mt-4">
            {/* Canvas */}
            <div className="relative w-full">
              <svg
                viewBox="0 0 1080 500"
                className="w-full h-auto max-h-[60vh]"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="tealGlow">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Paths */}
                {MODS.slice(1).map((m, i) => {
                  const prev = MODS[i];
                  return (
                    <path
                      key={`p-${prev.id}-${m.id}`}
                      id={`path-${prev.id}-${m.id}`}
                      d={pathD(prev, m)}
                      className="sa-path"
                      stroke="#00C6A7"
                      strokeWidth={2}
                      fill="none"
                      filter="url(#tealGlow)"
                    />
                  );
                })}
                <path
                  id="path-n6-out"
                  d={pathD(MODS[5], OUTPUT)}
                  className="sa-path"
                  stroke="#00C6A7"
                  strokeWidth={2}
                  fill="none"
                  filter="url(#tealGlow)"
                />

                {/* Traveling dots */}
                {MODS.slice(1).map((m, i) => {
                  const prev = MODS[i];
                  const mid = { x: (prev.x + m.x) / 2, y: (prev.y + m.y) / 2 };
                  return (
                    <circle
                      key={`d-${prev.id}-${m.id}`}
                      id={`dot-${prev.id}-${m.id}`}
                      className="sa-dot"
                      cx={mid.x}
                      cy={mid.y}
                      r={4}
                      fill="#F0A500"
                    >
                      <animateMotion dur="2.2s" repeatCount="indefinite" path={pathD(prev, m)} />
                    </circle>
                  );
                })}
                <circle
                  id="dot-n6-out"
                  className="sa-dot"
                  cx={MODS[5].x}
                  cy={MODS[5].y}
                  r={5}
                  fill="#F0A500"
                >
                  <animateMotion dur="2.2s" repeatCount="indefinite" path={pathD(MODS[5], OUTPUT)} />
                </circle>

                {/* Nodes */}
                {MODS.map((m) => (
                  <g key={m.id} id={`node-${m.id}`} className="sa-node">
                    <rect
                      x={m.x - 46}
                      y={m.y - 36}
                      width={92}
                      height={72}
                      rx={12}
                      fill="#0A1828"
                      stroke="#00C6A7"
                      strokeWidth={1.5}
                      strokeOpacity={0.5}
                    />
                    <foreignObject x={m.x - 14} y={m.y - 26} width={28} height={28}>
                      <div className="w-7 h-7 rounded-md bg-teal/15 flex items-center justify-center">
                        <m.Icon className="w-4 h-4 text-teal" />
                      </div>
                    </foreignObject>
                    <text
                      x={m.x}
                      y={m.y + 18}
                      textAnchor="middle"
                      fill="#F8FAFC"
                      fontSize={10}
                      fontFamily="Sora, sans-serif"
                      fontWeight={600}
                    >
                      {m.name}
                    </text>
                    <text
                      x={m.x}
                      y={m.y - 42}
                      textAnchor="middle"
                      fill="#00C6A7"
                      fontSize={8}
                      fontFamily="Space Grotesk, sans-serif"
                      letterSpacing={2}
                    >
                      {m.num}
                    </text>
                  </g>
                ))}

                {/* Output */}
                <g id="node-out" className="sa-output">
                  <rect
                    x={OUTPUT.x - 60}
                    y={OUTPUT.y - 40}
                    width={120}
                    height={80}
                    rx={14}
                    fill="#0A1828"
                    stroke="#F0A500"
                    strokeWidth={2}
                  />
                  <text
                    x={OUTPUT.x}
                    y={OUTPUT.y + 6}
                    textAnchor="middle"
                    fill="#F0A500"
                    fontSize={14}
                    fontFamily="Sora, sans-serif"
                    fontWeight={700}
                    letterSpacing={2}
                  >
                    CUSTOMERS
                  </text>
                  <foreignObject x={OUTPUT.x - 12} y={OUTPUT.y - 28} width={24} height={24}>
                    <div className="w-6 h-6 rounded-md bg-gold/15 flex items-center justify-center">
                      <Users className="w-4 h-4 text-gold" />
                    </div>
                  </foreignObject>
                </g>
              </svg>
            </div>

            {/* Sidebar */}
            <div className="hidden md:block space-y-3">
              {MODS.map((m) => (
                <div key={m.id} className={`sa-sidebar-item sidebar-${m.id} border-l-2 border-teal/40 pl-4`}>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-teal font-ui font-semibold">
                    {m.num} — {m.name}
                  </div>
                  <p className="text-xs text-cool-gray font-brand leading-relaxed mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final */}
          <div className="text-center mt-2">
            <p className="sa-final-headline text-cool-gray font-brand mb-4">
              This is what we build for your business.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("system_assembly_cta")}
              className="sa-final-cta btn-primary-glow"
            >
              Get Free Growth Audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStack() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stackRef.current) return;
    const els = stackRef.current.querySelectorAll<HTMLElement>(".m-item");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("m-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="growth-system" className="section-padding relative">
      <div className="mx-auto max-w-md">
        <div className="text-center mb-10">
          <div className="label-eyebrow mb-3">The MHS Growth System</div>
          <h2 className="text-3xl font-display font-bold text-creator-white">
            Attention → <span className="text-gradient-teal-gold">Customers</span>
          </h2>
        </div>

        <div ref={stackRef} className="flex flex-col items-center">
          {MODS.map((m, i) => (
            <div key={m.id} className="w-full flex flex-col items-center">
              <div className="m-item card-mhs p-5 w-full opacity-0 translate-y-4 transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-teal/15 border border-teal/30 flex items-center justify-center">
                    <m.Icon className="w-5 h-5 text-teal" />
                  </div>
                  <div className="text-[10px] text-teal uppercase tracking-[0.2em] font-ui">{m.num}</div>
                </div>
                <h3 className="text-base font-display font-semibold text-creator-white">{m.name}</h3>
                <p className="text-xs text-cool-gray font-brand mt-1">{m.desc}</p>
              </div>
              {i < MODS.length - 1 && (
                <div className="relative w-px h-10 bg-teal/50 my-1">
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold" />
                </div>
              )}
            </div>
          ))}

          <div className="relative w-px h-10 bg-teal/50 my-1" />
          <div className="m-item px-6 py-4 rounded-xl border-2 border-gold bg-gold/5 opacity-0 translate-y-4 transition-all duration-500">
            <div className="text-2xl font-display font-bold text-gold tracking-widest">CUSTOMERS</div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("system_assembly_cta_mobile")}
            className="btn-primary-glow"
          >
            Get Free Growth Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
