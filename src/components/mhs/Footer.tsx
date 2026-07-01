import { ArrowRight, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const columns = [
  {
    title: "Services",
    links: ["Meta Ads", "Content", "Landing Pages", "WhatsApp Funnels", "Growth Audits", "GBP Optimization"],
  },
  {
    title: "Company",
    links: ["About", "Work", "Process", "Blog", "Contact"],
  },
];

export function Footer() {
  return (
    <>
      <footer className="border-t border-teal/10 bg-[#030712]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-14">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
            <div>
              <Logo size={44} />
              <p className="mt-5 text-cool-gray font-brand max-w-xs">Turn Attention Into Customers.</p>
              <p className="mt-2 text-xs text-cool-gray/70 font-ui">Lahore, Pakistan</p>
            </div>

            {columns.map((c) => (
              <div key={c.title}>
                <div className="text-xs uppercase tracking-[0.2em] text-teal font-ui font-semibold mb-4">
                  {c.title}
                </div>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-cool-gray hover:text-creator-white transition-colors font-brand"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-teal font-ui font-semibold mb-4">
                Start Now
              </div>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick("footer_audit")}
                className="btn-primary-glow w-full justify-center"
              >
                Get your free growth audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-teal/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-xs text-cool-gray/70 font-ui">
              © 2026 MHS-Productions. All rights reserved.
            </p>
            <p className="text-xs text-cool-gray/70 font-ui">We turn attention into customers.</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile WhatsApp float */}
      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCtaClick("float_whatsapp")}
        aria-label="Message us on WhatsApp"
        className="md:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-teal text-deep-navy flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(0,198,167,0.6)] active:scale-95 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
