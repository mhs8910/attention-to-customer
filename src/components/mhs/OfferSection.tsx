import { useState } from "react";
import { Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappUrl, trackCtaClick } from "@/lib/whatsapp";

export function OfferSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submit = () => {
    if (!name.trim() || !phone.trim()) return;
    const msg = `Hi MHS-Productions, I'd like to request my free growth audit.\n\nName: ${name}\nWhatsApp: ${phone}`;
    trackCtaClick("audit_form_submit");
    if (typeof window !== "undefined") {
      window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="audit" className="relative overflow-hidden" style={{ background: "#091B32" }}>
      <div className="section-padding relative">
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal/15 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="label-eyebrow mb-4">Free Audit</div>
            <h2 className="text-3xl md:text-[2.6rem] font-display font-bold leading-[1.1] text-creator-white">
              Get Your Free <span className="text-gradient-teal-gold">Growth Audit</span>
            </h2>
            <p className="mt-5 text-cool-gray text-base md:text-lg leading-relaxed font-brand">
              We'll review your Instagram, Meta ads, landing page, Google profile, and WhatsApp flow — then tell you
              exactly what's stopping customers from contacting you. No pitch. No invoice. Just a clear diagnosis.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 card-mhs p-6 md:p-8 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-cool-gray font-ui mb-2">
                    Your name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ahmed Khan"
                    className="w-full px-4 py-3 rounded-xl bg-deep-navy border border-teal/15 text-creator-white text-sm font-brand focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-cool-gray font-ui mb-2">
                    WhatsApp number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 3XX XXXXXXX"
                    inputMode="tel"
                    className="w-full px-4 py-3 rounded-xl bg-deep-navy border border-teal/15 text-creator-white text-sm font-brand focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                  />
                </div>
              </div>

              <button onClick={submit} className="btn-primary-glow w-full justify-center mt-5">
                Send Audit Request via WhatsApp
                <Send className="w-4 h-4" />
              </button>

              <p className="text-xs text-cool-gray/80 text-center mt-4 font-ui">
                Most audits are delivered within 24 hours.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
