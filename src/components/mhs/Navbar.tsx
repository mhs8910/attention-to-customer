import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const links = [
  { label: "System", href: "/#system" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "FAQs", href: "/#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-deep-navy/70 backdrop-blur-xl border border-teal/15 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              : "bg-transparent"
          }`}
        >
          <a href="#top" className="shrink-0" aria-label="MHS-Productions home">
            <Logo size={42} />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-ui text-cool-gray hover:text-creator-white transition-colors rounded-lg"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("nav_free_audit")}
              className="btn-primary-glow text-sm"
            >
              Free Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              className="lg:hidden p-2 rounded-lg border border-teal/15 text-creator-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-panel p-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-ui text-cool-gray hover:text-creator-white hover:bg-white/5 rounded-lg"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
