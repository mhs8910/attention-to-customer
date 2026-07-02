import { CalendarX, Sparkles, Flame, TrendingDown, UserX, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const problems = [
  {
    icon: CalendarX,
    title: "You post randomly — or not at all",
    desc: "No content calendar. No strategy. Posts go up when someone remembers. Months pass without a single Reel.",
  },
  {
    icon: Sparkles,
    title: "Your Instagram doesn't reflect your actual quality",
    desc: "Your work is excellent. Your Instagram looks like no one is managing it. That gap costs you bookings every day.",
  },
  {
    icon: Flame,
    title: "You've tried posting yourself — it didn't stick",
    desc: "You filmed a few Reels, wrote some captions, burned out after three weeks. Consistency requires a system, not willpower.",
  },
  {
    icon: TrendingDown,
    title: "You're losing customers to competitors who post",
    desc: "In Lahore, the aesthetic clinic that posts 3 Reels a week books more appointments than the better one that posts twice a month. Visibility wins.",
  },
  {
    icon: UserX,
    title: "You hired a freelancer and got inconsistent delivery",
    desc: "They post for a month, go quiet, don't shoot, don't report. You don't know what you're getting month to month.",
  },
  {
    icon: Clock,
    title: "You don't have time for shoot days",
    desc: "Every time you think about content, it means coordinating a shoot, finding time, and then editing. It never happens.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding section-bg relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ top: "10%", left: "-2%", fontSize: "14vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>INVISIBLE</span>
        <span className="absolute font-display font-black text-creator-white whitespace-nowrap leading-none" style={{ bottom: "8%", right: "-2%", fontSize: "12vw", opacity: 0.03, filter: "blur(3px)", letterSpacing: "-0.04em" }}>SILENT</span>
      </div>
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <div className="label-eyebrow mb-4">The Problem</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-creator-white">
              Your business is invisible online.{" "}
              <span className="text-gradient-teal-gold">And you know it.</span>
            </h2>
            <p className="mt-6 text-cool-gray text-lg leading-relaxed font-brand">
              It's not that you don't care about social media. It's that running your business doesn't
              leave time to plan, shoot, edit, and post content consistently. That's what we fix.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card-mhs p-6 h-full border-l-2 border-l-gold/60 group">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-display font-semibold text-creator-white mb-2">{p.title}</h3>
                <p className="text-sm text-cool-gray leading-relaxed font-brand">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl font-display text-creator-white leading-relaxed">
              The answer isn't trying harder. It's having a{" "}
              <span className="text-teal">complete content team</span> — one that shows up every month
              with a plan, a camera, and a publishing schedule.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
