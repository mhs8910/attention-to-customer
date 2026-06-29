import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/mhs/Navbar";
import { Footer } from "@/components/mhs/Footer";
import { PageBackground } from "@/components/mhs/PageBackground";
import { SectionWrapper } from "@/components/mhs/SectionWrapper";
import { whatsappUrl, WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const SITE = "https://attention-to-customer.lovable.app";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free Growth Audit — MHS-Productions" },
      {
        name: "description",
        content:
          "Request a free growth audit. We'll show you exactly where your business is losing customers — social media, website, Google, and WhatsApp.",
      },
      { property: "og:title", content: "Free Growth Audit — MHS-Productions" },
      {
        property: "og:description",
        content: "Let's find where your business is losing customers.",
      },
    ],
    links: [{ rel: "canonical", href: SITE + "/contact" }],
  }),
  component: ContactPage,
});

const benefits = [
  "Social media review",
  "Website conversion check",
  "Google profile assessment",
  "WhatsApp flow evaluation",
];

const trustSignals = ["No commitment", "Free analysis", "Response within 24hrs", "Lahore-based team"];

const businessTypes = [
  "Aesthetic Clinic",
  "Solar Company",
  "Property Dealer",
  "Restaurant",
  "Other",
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    type: businessTypes[0],
    link: "",
    phone: "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    const msg = [
      `Hi MHS-Productions, I'd like a free growth audit.`,
      ``,
      `Name: ${form.name}`,
      `Business Type: ${form.type}`,
      form.link ? `Link: ${form.link}` : null,
      `WhatsApp: ${form.phone}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    trackCtaClick("contact_form_submit");
    if (typeof window !== "undefined") {
      window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    }
  };

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen bg-[#030712] text-foreground relative">
      <PageBackground variant="hero" ghostWords={["AUDIT", "FREE", "GROW", "CONTACT", "START"]} />
      <Navbar />
      <main className="pt-32 pb-20 px-5 md:px-6">
        <SectionWrapper className="max-w-5xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-[10px] md:text-xs font-ui uppercase tracking-[0.22em] text-teal">
              Free Growth Audit
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] text-creator-white">
            Let's Find Where Your Business Is{" "}
            <span className="text-gradient-teal-gold">Losing Customers.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-cool-gray text-base md:text-lg font-brand">
            Send us your business page, website, or Google profile. We'll show you exactly what's stopping
            visitors from becoming inquiries — for free.
          </p>
        </SectionWrapper>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/8 bg-[#0A1828]/80 backdrop-blur-md p-7 md:p-9"
          >
            <div className="label-eyebrow mb-4">What you get</div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-creator-white">
              Your complete audit in 4 layers.
            </h2>
            <ul className="mt-6 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/15 border border-teal/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal" />
                  </div>
                  <span className="text-creator-white font-brand">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/8">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick("contact_direct_wa")}
                className="btn-secondary-outline w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                Or Message Us Directly on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/8 bg-[#0A1828]/80 backdrop-blur-md p-7 md:p-9 space-y-4"
          >
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-cool-gray font-ui">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="mt-1 w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-creator-white font-brand outline-none focus:border-teal/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-cool-gray font-ui">Business Type</label>
              <select
                value={form.type}
                onChange={(e) => update("type", e.target.value)}
                className="mt-1 w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-creator-white font-brand outline-none focus:border-teal/60"
              >
                {businessTypes.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-cool-gray font-ui">
                Website or Social Media Link (optional)
              </label>
              <input
                value={form.link}
                onChange={(e) => update("link", e.target.value)}
                className="mt-1 w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-creator-white font-brand outline-none focus:border-teal/60"
                placeholder="https://"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-cool-gray font-ui">WhatsApp Number</label>
              <input
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="mt-1 w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-creator-white font-brand outline-none focus:border-teal/60"
                placeholder="+92 3XX XXXXXXX"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-cool-gray font-ui">Message (optional)</label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={3}
                className="mt-1 w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-creator-white font-brand outline-none focus:border-teal/60"
                placeholder="Anything we should know?"
              />
            </div>

            <button type="submit" className="btn-primary-glow w-full justify-center">
              Request Free Audit
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-cool-gray text-center font-ui">
              We'll respond on WhatsApp within 24 hours.
            </p>
          </motion.form>
        </div>

        <SectionWrapper className="max-w-4xl mx-auto mt-16">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {trustSignals.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full bg-[#0A1828]/60 border border-teal/15 text-xs md:text-sm text-cool-gray font-brand backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
