import { Instagram, Linkedin, Youtube, MessageSquare } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  { title: "Explore", links: ["Services", "Growth System", "Work", "Process"] },
  { title: "Company", links: ["Pricing", "FAQ", "Contact"] },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/[0.06] bg-deep-navy/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <Logo size={48} />
            <p className="mt-5 text-sm text-cool-gray max-w-xs leading-relaxed">
              Content, campaigns, and conversion systems for local business growth.
            </p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Linkedin, Youtube, MessageSquare].map((Ico, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-cool-gray hover:text-teal hover:border-teal/30 transition-colors"
                  aria-label="Social link"
                >
                  <Ico className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="label-eyebrow mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-cool-gray hover:text-creator-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="label-eyebrow mb-4">Start Now</div>
            <p className="text-sm text-cool-gray mb-4">Get your free growth audit.</p>
            <a href="#audit" className="btn-primary-glow text-sm">
              Get Free Audit
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cool-gray font-ui">© 2026 MHS-Productions. All rights reserved.</p>
          <p className="text-xs text-cool-gray font-ui">We turn attention into customers.</p>
        </div>
      </div>
    </footer>
  );
}
