import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

// NOTE: Replace these placeholder testimonials with real client quotes before launch.
const testimonials = [
  { quote: "Add real client testimonial here.", who: "Client name", role: "Business / Industry" },
  { quote: "Add real Loom audit reaction here.", who: "Client name", role: "Business / Industry" },
  { quote: "Add real campaign feedback here.", who: "Client name", role: "Business / Industry" },
];

export function Testimonials() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="label-eyebrow mb-4">Proof</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1]">
              What clients say about
              <span className="text-gradient-teal-gold"> the system</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass-panel glass-panel-hover p-7 h-full relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-teal/20" />
                <p className="text-creator-white text-base leading-relaxed mb-6">"{t.quote}"</p>
                <div className="pt-5 border-t border-white/[0.06]">
                  <div className="font-display font-semibold text-creator-white">{t.who}</div>
                  <div className="text-xs text-cool-gray font-ui mt-0.5">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
