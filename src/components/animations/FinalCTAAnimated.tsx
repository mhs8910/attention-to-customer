import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const WORD = "SEEN";

export function FinalCTAAnimated() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cta-char", {
        opacity: 0,
        y: 20,
        stagger: 0.04,
        duration: 0.5,
        scrollTrigger: { trigger: ".final-cta", start: "top 70%" },
      });
      gsap.from(".cta-line, .cta-sub, .cta-buttons > *, .cta-trust", {
        opacity: 0,
        y: 16,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: { trigger: ".final-cta", start: "top 70%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const particles = Array.from({ length: 24 }, (_, i) => i);

  return (
    <section ref={rootRef} className="final-cta section-padding relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ top: "10%", left: "-2%", fontSize: "14vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>GROW</span>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ bottom: "8%", right: "-2%", fontSize: "12vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>POST</span>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gold/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        {particles.map((i) => (
          <span
            key={i}
            className="cta-particle"
            style={{
              left: `${(i * 4.17) % 100}%`,
              width: `${3 + (i % 4)}px`,
              height: `${3 + (i % 4)}px`,
              animationDuration: `${4 + (i % 5)}s`,
              animationDelay: `${(i % 7) * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-4xl text-center relative">
        <div className="label-eyebrow mb-4">Get Started</div>
        <h2 className="text-4xl md:text-[3.5rem] font-display font-bold leading-[1.05] text-creator-white">
          <span className="cta-line block">Your business deserves</span>
          <span className="block mt-2">
            to be{" "}
            <span
              className="text-gold"
              style={{ textShadow: "0 0 50px rgba(240,165,0,0.6)" }}
            >
              {WORD.split("").map((c, i) => (
                <span key={i} className="cta-char inline-block">
                  {c}
                </span>
              ))}
            </span>
            .
          </span>
        </h2>
        <p className="cta-sub mt-6 text-cool-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-brand">
          We'll review your Instagram, show you exactly what's missing, and give you a content plan —
          completely free. No pitch. No pressure. Just clarity.
        </p>

        <div className="cta-buttons mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("final_primary")}
            className="btn-primary-glow w-full sm:w-auto justify-center text-base"
          >
            Request Free Audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("final_whatsapp")}
            className="btn-secondary-outline w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us Directly
          </a>
        </div>

        <div className="cta-trust mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-cool-gray font-ui">
          <span>• Free analysis</span>
          <span>• No commitment</span>
          <span>• Response within 24 hours</span>
          <span>• Lahore-based team</span>
        </div>
      </div>
    </section>
  );
}
