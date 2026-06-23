import { ArrowUpRight } from "lucide-react";

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
}

// MHS-Productions logo recreation: dark rounded square, white "MHS", teal arrow at S, gold "PRODUCTIONS"
export function Logo({ size = 44, showWordmark = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative flex items-center justify-center rounded-[22%] shrink-0"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(145deg, #0a1420, #050a12)",
          boxShadow: "0 4px 20px -6px rgba(0, 168, 143, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
        aria-label="MHS-Productions logo"
      >
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center font-brand font-bold text-white" style={{ fontSize: size * 0.34, letterSpacing: "-0.04em" }}>
            <span>MH</span>
            <span className="relative">
              S
              <ArrowUpRight
                className="absolute"
                style={{
                  color: "#10B981",
                  width: size * 0.22,
                  height: size * 0.22,
                  top: -size * 0.05,
                  right: -size * 0.18,
                  strokeWidth: 3,
                }}
              />
            </span>
          </div>
          <div
            className="font-brand font-semibold mt-0.5"
            style={{
              fontSize: size * 0.085,
              color: "#F0A500",
              letterSpacing: "0.18em",
            }}
          >
            PRODUCTIONS
          </div>
        </div>
      </div>
      {showWordmark && (
        <div className="flex flex-col leading-tight">
          <span className="font-brand font-bold text-white text-lg">MHS-Productions</span>
          <span className="text-[10px] text-cool-gray uppercase tracking-[0.2em] font-ui">Growth Systems</span>
        </div>
      )}
    </div>
  );
}
