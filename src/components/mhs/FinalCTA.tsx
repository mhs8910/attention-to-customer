import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-teal/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-4xl md:text-[3.25rem] font-display font-bold leading-[1.05] text-creator-white">
            Stop letting attention leak.
            <br />
            <span className="text-gradient-teal-gold">Start building the system.</span>
          </h2>
          <p className="mt-6 text-cool-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-brand">
            MHS-Productions audits your current setup, identifies exactly where leads are escaping, and builds the
            connected system that converts attention into customers.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("final_primary")}
              className="btn-primary-glow w-full sm:w-auto justify-center text-base"
            >
              Get Free Growth Audit
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
              Or message us directly on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
