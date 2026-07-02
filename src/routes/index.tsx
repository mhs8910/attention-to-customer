import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/mhs/Navbar";
import { PageBackground } from "@/components/mhs/PageBackground";
import { AnimatedHeroSection } from "@/components/animations/AnimatedHeroSection";
import { ProblemSection } from "@/components/mhs/ProblemSection";
import { TransitionSection } from "@/components/animations/TransitionSection";
import { SystemAssembly } from "@/components/animations/SystemAssembly";
import { Services } from "@/components/mhs/Services";
import { WhoWeWorkWith } from "@/components/mhs/WhoWeWorkWith";
import { GrowthTest } from "@/components/mhs/GrowthTest";
import { CaseStudies } from "@/components/mhs/CaseStudies";
import { ProcessTimeline } from "@/components/animations/ProcessTimeline";
import { FAQ, FAQ_ITEMS } from "@/components/mhs/FAQ";
import { FinalCTAAnimated } from "@/components/animations/FinalCTAAnimated";
import { Footer } from "@/components/mhs/Footer";

const SITE = "https://attention-to-customer.lovable.app";
const TITLE = "MHS-Productions | Your Complete Content Team in Lahore";
const DESCRIPTION =
  "MHS-Productions runs your complete monthly social media content engine — strategy, shoot days, editing, and posting — for aesthetic clinics, solar companies, salons, restaurants and gyms in Lahore and across Pakistan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "content production agency Lahore, Instagram Reels production Pakistan, social media agency Lahore, aesthetic clinic marketing, solar company content, salon Instagram, restaurant social media, MHS-Productions",
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
            "Instagram Reels Production",
            "Content Strategy",
            "Graphic Design",
            "Social Media Management",
            "Content Scheduling",
            "Monthly Performance Reporting",
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
    <div className="min-h-screen bg-[#030712] text-foreground relative">
      <PageBackground variant="hero" />
      <Navbar />
      <main>
        <AnimatedHeroSection />
        <ProblemSection />
        <TransitionSection />
        <SystemAssembly />
        <Services />
        <WhoWeWorkWith />
        <GrowthTest />
        <CaseStudies />
        <ProcessTimeline />
        <FAQ />
        <FinalCTAAnimated />
      </main>
      <Footer />
    </div>
  );
}
