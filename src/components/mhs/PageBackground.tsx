import { useId } from "react";

type Variant = "hero" | "section" | "minimal";

const ALL_GHOST_WORDS = [
  { text: "ATTENTION", top: "4%", left: "-3%", size: "16vw" },
  { text: "CUSTOMERS", top: "60%", left: "6%", size: "20vw" },
  { text: "GROWTH", top: "32%", left: "60%", size: "15vw" },
  { text: "SYSTEM", top: "76%", left: "55%", size: "18vw" },
  { text: "FUNNELS", top: "16%", left: "70%", size: "13vw" },
  { text: "TRUST", top: "50%", left: "-2%", size: "14vw" },
  { text: "LEADS", top: "86%", left: "25%", size: "15vw" },
];

interface Props {
  variant?: Variant;
  ghostWords?: string[];
  fixed?: boolean;
}

export function PageBackground({ variant = "section", ghostWords, fixed = true }: Props) {
  const id = useId();
  const showGhost = variant !== "minimal";
  const glowOpacity = variant === "hero" ? 1 : variant === "section" ? 0.55 : 0;

  let words = ALL_GHOST_WORDS;
  if (ghostWords) {
    words = ghostWords.map((w, i) => {
      const base = ALL_GHOST_WORDS[i % ALL_GHOST_WORDS.length];
      return { ...base, text: w };
    });
  } else if (variant === "section") {
    words = ALL_GHOST_WORDS.slice(0, 4);
  }

  const baseOpacity = variant === "hero" ? 0.08 : 0.05;

  return (
    <div
      aria-hidden
      className={`${fixed ? "fixed" : "absolute"} inset-0 -z-10 overflow-hidden pointer-events-none`}
    >
      {/* Gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(0,198,167,0.10), transparent 35%), radial-gradient(circle at 80% 65%, rgba(240,165,0,0.13), transparent 30%), linear-gradient(180deg, #030712 0%, #061426 50%, #020817 100%)",
        }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-25" />

      {/* Glow blobs */}
      {glowOpacity > 0 && (
        <>
          <div
            className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full blur-3xl"
            style={{ background: "rgba(0,198,167,0.10)", opacity: glowOpacity }}
          />
          <div
            className="absolute -bottom-40 -right-40 w-[55vw] h-[55vw] rounded-full blur-3xl"
            style={{ background: "rgba(240,165,0,0.10)", opacity: glowOpacity }}
          />
        </>
      )}

      {/* Ghost words */}
      {showGhost &&
        words.map((w, i) => (
          <span
            key={`${id}-${i}-${w.text}`}
            className="absolute font-display font-black text-creator-white whitespace-nowrap select-none leading-none"
            style={{
              top: w.top,
              left: w.left,
              fontSize: w.size,
              filter: "blur(2px)",
              opacity: baseOpacity,
              letterSpacing: "-0.04em",
            }}
          >
            {w.text}
          </span>
        ))}
    </div>
  );
}
