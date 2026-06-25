import { useEffect, useRef } from "react";
import { Search, Map, Hammer, Rocket, TrendingUp } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const steps = [
  { week: "Week 1", icon: Search, name: "Diagnose", desc: "We audit your full marketing presence and identify where leads are leaking." },
  { week: "Week 2", icon: Map, name: "Plan", desc: "We design your customer journey from ad → landing page → WhatsApp → booking." },
  { week: "Week 3", icon: Hammer, name: "Build", desc: "We create content, ad creatives, landing page, and WhatsApp flow." },
  { week: "Week 4", icon: Rocket, name: "Launch", desc: "We connect all pieces and activate the customer acquisition system." },
  { week: "Ongoing", icon: TrendingUp, name: "Optimize", desc: "We review performance weekly and improve what's not converting." },
];

export function ProcessTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.set(".pt-line", { strokeDasharray: 1200, strokeDashoffset: 1200 });
      gsap.to(".pt-line", {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });
      gsap.from(".pt-step", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });

      // Count up
      document.querySelectorAll<HTMLElement>(".pt-num").forEach((el) => {
        const target = Number(el.dataset.n || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={rootRef} className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-14">
          <div className="label-eyebrow mb-4">How We Work</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
            From audit to active system in <span className="text-gradient-teal-gold">4 weeks.</span>
          </h2>
        </div>

        <div className="relative">
          <svg className="hidden lg:block absolute left-0 right-0 top-12 w-full h-2" preserveAspectRatio="none" viewBox="0 0 1200 2">
            <line className="pt-line" x1="0" y1="1" x2="1200" y2="1" stroke="#00C6A7" strokeWidth="2" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="pt-step relative text-center lg:text-left">
                <div className="relative inline-flex lg:flex w-24 h-24 mx-auto lg:mx-0 rounded-2xl bg-deep-navy border border-teal/30 items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-teal" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-teal text-deep-navy text-xs font-ui font-bold flex items-center justify-center">
                    <span className="pt-num" data-n={i + 1}>0</span>
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold font-ui mb-1">{s.week}</div>
                <h3 className="text-xl font-display font-semibold text-creator-white mb-2">{s.name}</h3>
                <p className="text-sm text-cool-gray leading-relaxed font-brand">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
