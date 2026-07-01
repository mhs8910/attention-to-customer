import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function TransitionSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.to(rootRef.current, {
        backgroundColor: "#091B32",
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.from(".tr-line-1", {
        opacity: 0,
        y: 24,
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
        duration: 0.8,
      });
      gsap.from(".tr-line-2", {
        opacity: 0,
        y: 24,
        scrollTrigger: { trigger: rootRef.current, start: "top 60%" },
        duration: 0.8,
        delay: 0.2,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative py-32 md:py-40 bg-[#030712]"
      style={{ backgroundColor: "#030712" }}
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="mx-auto max-w-3xl px-6 text-center relative">
        <p className="tr-line-1 text-2xl md:text-4xl font-display font-bold text-creator-white leading-tight">
          What if every piece of your marketing worked together?
        </p>
        <p className="tr-line-2 mt-6 text-lg md:text-2xl font-display font-semibold text-teal animate-pulse-glow">
          That's what MHS-Productions builds.
        </p>
      </div>
    </section>
  );
}
