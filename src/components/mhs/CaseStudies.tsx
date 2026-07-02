import { ArrowRight, Sun, Sparkles, Globe2, Stethoscope } from "lucide-react";
import { Reveal } from "./Reveal";
import { WA_DEFAULT, trackCtaClick } from "@/lib/whatsapp";

const projects = [
  {
    icon: Sparkles,
    badge: "Aesthetic Clinic — Lahore (DHA)",
    title: "Monthly Content System",
    did: "Monthly content system — Reels, carousels, treatment process videos, and Instagram profile optimization.",
    result: "Consistent content cadence established within first month. Professional Reels created for treatment categories previously unrepresented on their profile.",
  },
  {
    icon: Sun,
    badge: "Solar Energy Company — Lahore",
    title: "Sunshine Solar Energy",
    did: "Brand identity, content strategy, Meta Ads creative direction, and social media management. Reels built around installation B-roll and educational content.",
    result: "Instagram presence rebuilt from inactive to consistently posting. Content strategy aligned with sales cycle for high-ticket product.",
  },
  {
    icon: Globe2,
    badge: "International Brand — NAIXOL",
    title: "Digital Product Launch Content",
    did: "Content strategy, Instagram Reels production, and ad creative design for course launch campaigns.",
    result: "Course launch content assets delivered. Reels produced for multiple product offers across digital marketing training campaigns.",
  },
  {
    icon: Stethoscope,
    badge: "Aesthetic Gynecology Practice",
    title: "Digital Growth Blueprint",
    did: "Digital growth blueprint, content strategy, and social media direction for a specialist aesthetic clinic.",
    result: "Comprehensive strategy document and content system delivered. Platform-specific content plan created.",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="section-padding section-bg relative bg-[#030712]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="label-eyebrow mb-4">Our Work</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              Real projects. Real{" "}
              <span className="text-gradient-teal-gold">results.</span>
            </h2>
            <p className="mt-5 text-cool-gray text-base md:text-lg font-brand leading-relaxed">
              We've worked with businesses in Lahore across aesthetics, energy, and services. Details
              anonymized where applicable.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="card-mhs p-6 md:p-8 h-full border-t-2 border-t-teal group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-teal/10 border border-teal/25 text-teal text-[10px] font-ui font-semibold uppercase tracking-widest">
                    {p.badge}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-teal" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-creator-white mb-4">
                  {p.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-gold font-ui mb-1.5">
                      What we did
                    </div>
                    <p className="text-sm text-cool-gray leading-relaxed font-brand">{p.did}</p>
                  </div>
                  <div className="h-px bg-teal/15" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-teal font-ui mb-1.5">
                      Result
                    </div>
                    <p className="text-sm text-creator-white leading-relaxed font-brand">{p.result}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-xs text-cool-gray/70 font-ui italic max-w-2xl mx-auto">
            We don't fabricate case studies. These represent real projects with real deliverables.
            Results are described accurately without inflated metrics.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 text-center">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("case_studies_cta")}
              className="btn-primary-glow"
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
