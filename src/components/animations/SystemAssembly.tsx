import { useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar, Camera, Scissors, Send, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion, isMobile } from "@/lib/gsap";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

type Stage = {
  id: string;
  num: string;
  name: string;
  desc: string;
  Icon: LucideIcon;
  x: number;
  y: number;
  gold?: boolean;
};

// Canvas: 1080 x 320 — horizontal 5-stage assembly line
const STAGES: Stage[] = [
  {
    id: "s1",
    num: "01",
    name: "Plan",
    desc: "Monthly strategy session to define your content pillars, campaign direction, shoot brief, and content calendar. We decide what to create and why before we touch a camera.",
    Icon: Calendar,
    x: 110,
    y: 160,
  },
  {
    id: "s2",
    num: "02",
    name: "Shoot",
    desc: "Coordinated shoot day(s) at your location. We direct everything — Reels, B-roll, treatment processes, staff introductions, product showcases. You just show up. We handle the rest.",
    Icon: Camera,
    x: 300,
    y: 160,
  },
  {
    id: "s3",
    num: "03",
    name: "Edit",
    desc: "Professional video editing, caption writing, graphic design, and carousel creation. Every piece goes through our quality standard before it reaches your profile.",
    Icon: Scissors,
    x: 490,
    y: 160,
  },
  {
    id: "s4",
    num: "04",
    name: "Post",
    desc: "Scheduled publishing across Instagram (primary), Facebook, and secondary platforms with optimized captions, hashtags, and posting times. Nothing goes live without your approval.",
    Icon: Send,
    x: 680,
    y: 160,
  },
  {
    id: "s5",
    num: "05",
    name: "Grow",
    desc: "Monthly performance review, insights report, and content direction for next month. Your results compound over time. Consistent content builds trust faster than any single viral post.",
    Icon: TrendingUp,
    x: 870,
    y: 160,
    gold: true,
  },
];

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
      gsap.set(".sa-node", { opacity: 0, scale: 0.7, transformOrigin: "center" });
      gsap.set(".sa-sidebar-item", { opacity: 0.15 });
      gsap.set(".sa-path", { strokeDasharray: 600, strokeDashoffset: 600 });
      gsap.set(".sa-dot", { opacity: 0 });
      gsap.set(".sa-final", { opacity: 0, y: 16 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          pin: ".sa-pin-target",
          scrub: 1.2,
          start: "top top",
          end: "+=550%",
          anticipatePin: 1,
        },
      });

      for (let i = 0; i < STAGES.length; i++) {
        const s = STAGES[i];
        const start = i * (0.85 / STAGES.length);
        tl.to(`#node-${s.id}`, { opacity: 1, scale: 1, duration: 0.05 }, start);
        tl.to(`.sidebar-${s.id}`, { opacity: 1, duration: 0.04 }, start);
        if (i > 0) {
          const pid = `#path-${STAGES[i - 1].id}-${s.id}`;
          tl.to(pid, { strokeDashoffset: 0, duration: 0.08 }, start);
          tl.to(`#dot-${STAGES[i - 1].id}-${s.id}`, { opacity: 1, duration: 0.02 }, start);
        }
      }

      tl.to(".sa-node", { scale: 1.06, duration: 0.04, yoyo: true, repeat: 1 }, 0.88);
      tl.to(".sa-final", { opacity: 1, y: 0, duration: 0.06 }, 0.92);
    }, rootRef);
    return () => ctx.revert();
  }, [mobile]);

  if (mobile) return <MobileStack />;

  return (
    <section id="system" ref={rootRef} className="relative bg-[#030712]">
      <div className="sa-pin-target relative h-screen w-full overflow-hidden bg-[#030712]">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
          <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ top: "8%", left: "-2%", fontSize: "13vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>CONTENT</span>
          <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ bottom: "5%", right: "-2%", fontSize: "11vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>ENGINE</span>
        </div>

        <div className="relative h-full mx-auto max-w-7xl px-6 grid grid-rows-[auto_1fr_auto] py-10">
          <div className="text-center">
            <div className="label-eyebrow mb-3">The System</div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-creator-white">
              The Content Growth <span className="text-gradient-teal-gold">Engine™</span>
            </h2>
            <p className="mt-3 text-cool-gray font-brand text-sm md:text-base max-w-2xl mx-auto">
              A five-stage monthly content operations system. Not just posting — a complete,
              accountable content cycle delivered every single month.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_320px] gap-6 items-center mt-4">
            {/* Canvas */}
            <div className="relative w-full">
              <svg
                viewBox="0 0 1000 320"
                className="w-full h-auto max-h-[55vh]"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="tealGlowSys">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {STAGES.slice(1).map((s, i) => {
                  const prev = STAGES[i];
                  const finalStage = i === STAGES.length - 2;
                  return (
                    <path
                      key={`p-${prev.id}-${s.id}`}
                      id={`path-${prev.id}-${s.id}`}
                      d={pathD(prev, s)}
                      className="sa-path"
                      stroke={finalStage ? "#F0A500" : "#00C6A7"}
                      strokeWidth={2}
                      fill="none"
                      filter="url(#tealGlowSys)"
                    />
                  );
                })}

                {STAGES.slice(1).map((s, i) => {
                  const prev = STAGES[i];
                  const mid = { x: (prev.x + s.x) / 2, y: (prev.y + s.y) / 2 };
                  return (
                    <circle
                      key={`d-${prev.id}-${s.id}`}
                      id={`dot-${prev.id}-${s.id}`}
                      className="sa-dot"
                      cx={mid.x}
                      cy={mid.y}
                      r={4}
                      fill="#F0A500"
                    >
                      <animateMotion dur="2.2s" repeatCount="indefinite" path={pathD(prev, s)} />
                    </circle>
                  );
                })}

                {STAGES.map((s) => {
                  const color = s.gold ? "#F0A500" : "#00C6A7";
                  return (
                    <g key={s.id} id={`node-${s.id}`} className="sa-node">
                      <rect
                        x={s.x - 60}
                        y={s.y - 46}
                        width={120}
                        height={92}
                        rx={14}
                        fill="#0A1828"
                        stroke={color}
                        strokeWidth={1.5}
                        strokeOpacity={0.6}
                      />
                      <foreignObject x={s.x - 16} y={s.y - 34} width={32} height={32}>
                        <div
                          className={`w-8 h-8 rounded-md flex items-center justify-center ${
                            s.gold ? "bg-gold/15" : "bg-teal/15"
                          }`}
                        >
                          <s.Icon className={`w-4 h-4 ${s.gold ? "text-gold" : "text-teal"}`} />
                        </div>
                      </foreignObject>
                      <text
                        x={s.x}
                        y={s.y + 22}
                        textAnchor="middle"
                        fill="#F8FAFC"
                        fontSize={13}
                        fontFamily="Sora, sans-serif"
                        fontWeight={700}
                      >
                        {s.name}
                      </text>
                      <text
                        x={s.x}
                        y={s.y - 54}
                        textAnchor="middle"
                        fill={color}
                        fontSize={9}
                        fontFamily="Space Grotesk, sans-serif"
                        letterSpacing={2}
                      >
                        {s.num}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Sidebar descriptions */}
            <div className="hidden md:block space-y-3">
              {STAGES.map((s) => (
                <div
                  key={s.id}
                  className={`sa-sidebar-item sidebar-${s.id} border-l-2 pl-4 ${
                    s.gold ? "border-gold/60" : "border-teal/40"
                  }`}
                >
                  <div
                    className={`text-[10px] uppercase tracking-[0.25em] font-ui font-semibold ${
                      s.gold ? "text-gold" : "text-teal"
                    }`}
                  >
                    {s.num} — {s.name}
                  </div>
                  <p className="text-xs text-cool-gray font-brand leading-relaxed mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="sa-final text-creator-white font-display text-base md:text-lg mb-4 max-w-3xl mx-auto">
              While other agencies post content,{" "}
              <span className="text-gold">MHS-Productions operates your entire monthly content engine.</span>{" "}
              That's the difference.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("system_assembly_cta")}
              className="sa-final btn-primary-glow"
            >
              Get Free Audit
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
    <section id="system" className="section-padding relative bg-[#030712]">
      <div className="mx-auto max-w-md">
        <div className="text-center mb-10">
          <div className="label-eyebrow mb-3">The System</div>
          <h2 className="text-3xl font-display font-bold text-creator-white">
            The Content Growth <span className="text-gradient-teal-gold">Engine™</span>
          </h2>
          <p className="mt-3 text-cool-gray font-brand text-sm">
            A five-stage monthly content operations system.
          </p>
        </div>

        <div ref={stackRef} className="flex flex-col items-center">
          {STAGES.map((s, i) => (
            <div key={s.id} className="w-full flex flex-col items-center">
              <div
                className={`m-item card-mhs p-5 w-full opacity-0 translate-y-4 transition-all duration-500 ${
                  s.gold ? "border-gold/40" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center ${
                      s.gold
                        ? "bg-gold/15 border-gold/30"
                        : "bg-teal/15 border-teal/30"
                    }`}
                  >
                    <s.Icon className={`w-5 h-5 ${s.gold ? "text-gold" : "text-teal"}`} />
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.2em] font-ui ${
                      s.gold ? "text-gold" : "text-teal"
                    }`}
                  >
                    {s.num} — {s.name}
                  </div>
                </div>
                <p className="text-xs text-cool-gray font-brand mt-1 leading-relaxed">{s.desc}</p>
              </div>
              {i < STAGES.length - 1 && (
                <div className="relative w-px h-10 bg-teal/50 my-1">
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-creator-white font-display text-sm mb-4">
            While other agencies post content, MHS-Productions operates your entire monthly content
            engine.
          </p>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("system_assembly_cta_mobile")}
            className="btn-primary-glow"
          >
            Get Free Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
