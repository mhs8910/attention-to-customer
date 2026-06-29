import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/mhs/Navbar";
import { AnimatedHeroSection } from "@/components/animations/AnimatedHeroSection";
import { ProblemSection } from "@/components/mhs/ProblemSection";
import { TransitionSection } from "@/components/animations/TransitionSection";
import { SystemAssembly } from "@/components/animations/SystemAssembly";
import { WhoWeWorkWith } from "@/components/mhs/WhoWeWorkWith";
import { OfferSection } from "@/components/mhs/OfferSection";
import { Services } from "@/components/mhs/Services";
import { CaseStudies } from "@/components/mhs/CaseStudies";
import { ProcessTimeline } from "@/components/animations/ProcessTimeline";
import { GrowthTest } from "@/components/mhs/GrowthTest";
import { FAQ, FAQ_ITEMS } from "@/components/mhs/FAQ";
import { FinalCTAAnimated } from "@/components/animations/FinalCTAAnimated";
import { Footer } from "@/components/mhs/Footer";

const SITE = "https://attention-to-customer.lovable.app";
const TITLE = "MHS-Productions | Turn Attention Into Customers";
const DESCRIPTION =
  "MHS-Productions builds the system that connects Meta ads, social content, landing pages, and WhatsApp into one customer acquisition engine for local businesses in Lahore and across Pakistan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Meta ads agency Lahore, content production Pakistan, WhatsApp funnel agency, landing page agency, growth audit, customer acquisition agency, MHS-Productions",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE + "/" },
      { property: "og:site_name", content: "MHS-Productions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "MHS-Productions",
          description: DESCRIPTION,
          url: SITE,
          areaServed: ["Lahore", "Pakistan"],
          address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
          serviceType: [
            "Meta Ads",
            "Social Media Content Production",
            "Landing Page Design",
            "WhatsApp Funnels",
            "Growth Audits",
            "Google Business Profile Optimization",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroReveal />
        <ProblemSection />
        <TransitionSection />
        <SystemAssembly />
        <WhoWeWorkWith />
        <OfferSection />
        <Services />
        <CaseStudies />
        <ProcessTimeline />
        <GrowthTest />
        <FAQ />
        <FinalCTAAnimated />
      </main>
      <Footer />
    </div>
  );
}
