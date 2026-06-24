export const WA_NUMBER = "923XXXXXXXXX";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = whatsappUrl(
  "Hi MHS-Productions, I'd like to request my free growth audit.",
);

export function trackCtaClick(label: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("event", "cta_click", { event_category: "engagement", event_label: label });
  }
}
