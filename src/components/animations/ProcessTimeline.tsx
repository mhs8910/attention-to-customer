import { useEffect, useRef } from "react";
import { ClipboardCheck, MessageSquare, Wrench, Camera, Send } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const steps = [
  {
    when: "Day 1",
    icon: ClipboardCheck,
    name: "Free Audit",
    desc: "Send us your Instagram profile. We record a 10-minute personalised video audit covering what's missing, what to fix, and exactly what to create next month. Free. No commitment.",
  },
  {
    when: "Days 2–3",
    icon: MessageSquare,
    name: "Strategy Session",
    desc: "One call or WhatsApp conversation where we align on content pillars, niche direction, what performs well in your industry, and the content calendar for Month 1.",
  },
  {
    when: "Days 4–6",
    icon: Wrench,
    name: "Build & Prepare",
    desc: "We prepare your content calendar, shoot brief, and creative direction so the shoot day runs smoothly. You receive the plan for review and approval before anything is produced.",
  },
  {
    when: "Week 2",
    icon: Camera,
    name: "Shoot Day",
    desc: "We arrive at your location with a clear brief. You direct your normal business activity. We capture Reels, B-roll, testimonials, and branded content — typically in 2–4 hours.",
  },
  {
    when: "Week 3–4",
    icon: Send,
    name: "Edit, Approve & Publish",
    desc: "Content is edited, captioned, and delivered to you via WhatsApp for approval. Once approved, everything is scheduled and published according to the optimal posting calendar.",
  },
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
    <section id="process" ref={rootRef} className="section-padding section-bg relative bg-[#030712]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-14">
          <div className="label-eyebrow mb-4">How It Works</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
            From first message to first post in{" "}
            <span className="text-gradient-teal-gold">one week.</span>
          </h2>
          <p className="mt-5 text-cool-gray text-base md:text-lg font-brand leading-relaxed">
            A clean, fast onboarding process with no confusion about what happens next.
          </p>
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
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold font-ui mb-1">{s.when}</div>
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
