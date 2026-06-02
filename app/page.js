import { createPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout";
import {
  HeroCinematic,
  OfferingsGrid,
  StoryTeaser,
  DiningGlimpse,
  ExperiencesStrip,
  TestimonialsCarousel,
} from "@/components/sections";
import { EnhancedCTABand } from "@/components/sections/EnhancedCTABand";

export const metadata = createPageMetadata({
  title: "Banquet Halls, Rooms, Dining, and Celebrations in Ludhiana",
  description:
    "Aagaaz on Pakhowal Road, Ludhiana brings together banquet halls, kitty party venues, guest rooms, Fessta Restaurant, and event hospitality for celebrations, family gatherings, and corporate occasions.",
  path: "/",
  keywords: [
    "Aagaaz Ludhiana",
    "banquet hall on Pakhowal Road",
    "celebration venue Ludhiana",
    "hotel and banquet Ludhiana",
  ],
});

export default function Home() {
  return (
    <PageLayout whatsappMessage="Hi! I'd like to learn more about celebrating at Aagaaz.">
      {/* Cinematic Hero - The Aagaaz beginning concept */}
      <HeroCinematic />

      {/* Three Revenue Offerings - High up on the page */}
      <OfferingsGrid />

      {/* Story Teaser - Brief Aagaaz meaning */}
      <StoryTeaser />

      {/* Dining Glimpse - Fessta Restaurant showcase */}
      <DiningGlimpse />

      {/* Experiences Strip - Corporate events and celebrations */}
      <ExperiencesStrip />

      {/* Social Proof - Testimonials and stats */}
      <TestimonialsCarousel />

      {/* Enhanced Enquire Now - Form with contact details and map */}
      <EnhancedCTABand />
    </PageLayout>
  );
}
