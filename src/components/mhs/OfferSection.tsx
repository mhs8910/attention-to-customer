import { useState } from "react";
import { Check, Send, ShieldCheck, Instagram, MessageSquare, MousePointerClick, Target, Telescope, ClipboardList } from "lucide-react";
import { Reveal } from "./Reveal";

const deliverables = [
  { icon: Instagram, label: "Instagram & content audit" },
  { icon: Target, label: "Meta ads audit" },
  { icon: MousePointerClick, label: "Landing page audit" },
  { icon: MessageSquare, label: "WhatsApp follow-up audit" },
  { icon: ClipboardList, label: "Offer clarity check" },
  { icon: Telescope, label: "Competitor scan" },
  { icon: ShieldCheck, label: "30-day growth action plan" },
];

export function OfferSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="audit" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="label-eyebrow mb-4">Free Offer</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
              Start with a
              <span className="text-gradient-teal-gold"> free growth audit</span>
            </h2>
            <p className="mt-6 text-cool-gray text-lg leading-relaxed">
              We'll review your current marketing system and show where your business is leaking leads.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-10 items-stretch">
          {/* Audit dashboard visual */}
          <Reveal>
            <div className="glass-panel p-7 h-full relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-teal/15 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-cool-gray font-ui mb-1">Your Audit Includes</div>
                    <div className="text-2xl font-display font-bold text-creator-white">Growth Diagnostic</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-arrow-green/15 border border-arrow-green/30 text-arrow-green text-xs font-ui font-semibold">
                    FREE
                  </div>
                </div>

                <ul className="space-y-3">
                  {deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-teal/30 transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
                        <d.icon className="w-4 h-4 text-teal" />
                      </div>
                      <span className="text-sm text-creator-white font-ui flex-1">{d.label}</span>
                      <Check className="w-4 h-4 text-arrow-green" />
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20">
                  <p className="text-sm text-creator-white leading-relaxed">
                    <span className="font-display font-semibold text-gold">No pressure. No hard pitch.</span>{" "}
                    Just a clear breakdown of what's stopping your business from turning attention into customers.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="glass-panel p-7 h-full border-teal/20">
              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="mb-2">
                    <h3 className="text-xl font-display font-semibold text-creator-white mb-1">
                      Request Your Free Audit
                    </h3>
                    <p className="text-sm text-cool-gray">Takes under 60 seconds.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Name" name="name" required />
                    <Field label="Business name" name="business" required />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="WhatsApp number" name="phone" type="tel" required />
                    <Field label="Instagram / website" name="link" />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cool-gray font-ui mb-1.5">
                      What do you want more of?
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-creator-white text-sm font-ui focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                    >
                      <option value="">Select an outcome</option>
                      <option>Leads</option>
                      <option>Bookings</option>
                      <option>WhatsApp messages</option>
                      <option>Store visits</option>
                      <option>Sales</option>
                      <option>Better content</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cool-gray font-ui mb-1.5">
                      Your biggest marketing problem right now
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-creator-white text-sm font-ui focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all resize-none"
                      placeholder="Tell us what's not working..."
                    />
                  </div>

                  <button type="submit" className="btn-primary-glow w-full justify-center mt-2">
                    Request Free Audit
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-cool-gray/70 text-center font-ui">
                    Or message us directly — <a href="#" className="text-teal hover:text-gold">Send My Business Page</a>
                  </p>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-arrow-green/15 border border-arrow-green/40 flex items-center justify-center mb-5">
                    <Check className="w-8 h-8 text-arrow-green" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-creator-white mb-2">
                    Audit request received
                  </h3>
                  <p className="text-cool-gray max-w-sm">
                    We'll review your business and respond with next steps.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-cool-gray font-ui mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-creator-white text-sm font-ui focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
      />
    </div>
  );
}
