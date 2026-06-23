import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/mhs/Navbar";
import { Hero } from "@/components/mhs/Hero";
import { TrustBar } from "@/components/mhs/TrustBar";
import { ProblemSection } from "@/components/mhs/ProblemSection";
import { GrowthSystem } from "@/components/mhs/GrowthSystem";
import { Services } from "@/components/mhs/Services";
import { CampaignFlow } from "@/components/mhs/CampaignFlow";
import { CaseStudies } from "@/components/mhs/CaseStudies";
import { Process } from "@/components/mhs/Process";
import { OfferSection } from "@/components/mhs/OfferSection";
import { Pricing } from "@/components/mhs/Pricing";
import { Testimonials } from "@/components/mhs/Testimonials";
import { FAQ } from "@/components/mhs/FAQ";
import { FinalCTA } from "@/components/mhs/FinalCTA";
import { Footer } from "@/components/mhs/Footer";

const TITLE = "MHS-Productions | Content & Campaign Systems For Local Business Growth";
const DESCRIPTION =
  "MHS-Productions helps local businesses turn attention into customers through social media content, Meta ads, landing pages, WhatsApp funnels, and conversion-focused campaign systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "content production agency, digital growth agency, Meta ads agency, landing page agency, WhatsApp funnel agency, social media content agency, local business marketing, customer acquisition agency, MHS-Productions" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "MHS-Productions",
          description: DESCRIPTION,
          areaServed: "Local businesses",
          serviceType: [
            "Social Media Content Production",
            "Meta Ads Campaigns",
            "Landing Page Design",
            "WhatsApp Funnels",
            "Growth Audits",
            "Campaign Strategy",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What does MHS-Productions do?", acceptedAnswer: { "@type": "Answer", text: "We build connected growth systems combining content, Meta ads, landing pages, and WhatsApp funnels for local businesses." } },
            { "@type": "Question", name: "What is a growth audit?", acceptedAnswer: { "@type": "Answer", text: "A free diagnostic of your content, ads, landing page, WhatsApp flow, offer, and competitors with a 30-day action plan." } },
          ],
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
        <Hero />
        <TrustBar />
        <ProblemSection />
        <GrowthSystem />
        <Services />
        <CampaignFlow />
        <CaseStudies />
        <Process />
        <OfferSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
