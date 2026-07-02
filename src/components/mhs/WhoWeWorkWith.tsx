import { Sparkles, Sun, Scissors, UtensilsCrossed, Dumbbell } from "lucide-react";
import { Reveal } from "./Reveal";

const niches = [
  {
    icon: Sparkles,
    title: "Aesthetic Clinics & Med Spas",
    desc: "Before/after Reels, treatment process videos, and trust-building content that drives booking inquiries from Instagram. We speak the language of the aesthetic industry.",
  },
  {
    icon: Sun,
    title: "Solar Companies",
    desc: "Educational content, installation B-roll, and testimonial videos that build trust for a high-ticket product. Help customers understand why your company is the right choice.",
  },
  {
    icon: Scissors,
    title: "Salons & Beauty Studios",
    desc: "Transformation content, stylist spotlights, and service showcases. The businesses that post consistently in this niche consistently outperform those that don't.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafes",
    desc: "Food visuals, behind-the-scenes kitchen content, ambience Reels, and event coverage. Lahore's food scene grows on Instagram — we help you grow with it.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness Studios",
    desc: "Member transformations, trainer spotlights, workout Reels, and motivational content. The fitness niche rewards consistency more than almost any other.",
  },
];

export function WhoWeWorkWith() {
  return (
    <section className="section-padding section-bg relative bg-[#030712]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="label-eyebrow mb-4">Our Clients</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              Built for Lahore's fastest-growing{" "}
              <span className="text-gradient-teal-gold">service businesses.</span>
            </h2>
            <p className="mt-5 text-cool-gray text-base md:text-lg font-brand leading-relaxed">
              We work best with businesses that are already good at what they do — they just need
              someone to show it online, consistently.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {niches.map((n, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card-mhs p-6 h-full border-t-2 border-t-teal">
                <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center mb-4">
                  <n.icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="text-lg font-display font-semibold text-creator-white mb-3">{n.title}</h3>
                <p className="text-sm text-cool-gray leading-relaxed font-brand">{n.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 text-center text-sm text-cool-gray/80 font-brand">
            Also working with real estate agencies, educational institutes, and professional service
            businesses.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
