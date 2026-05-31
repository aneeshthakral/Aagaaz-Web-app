import { createPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout";
import { BanquetHero } from "./components/BanquetHero";
import { BanquetOfferings } from "./components/BanquetOfferings";
import { BanquetPackages } from "./components/BanquetPackages";
import { BanquetGallery } from "./components/BanquetGallery";
import { BanquetEnquiry } from "@/components/shared";

export const metadata = createPageMetadata({
  title: "Nawaazissh Banquet Hall for Weddings and Events",
  description:
    "Host weddings, engagements, anniversaries, and family functions at Nawaazissh Banquet Hall at Aagaaz in Ludhiana, with elegant setups for 50 to 180 guests.",
  path: "/banquet",
  keywords: ["wedding hall Ludhiana", "banquet hall Ludhiana", "Nawaazissh Hall"],
});

export default function BanquetPage() {
  return (
    <PageLayout whatsappMessage="Hi! I'd like to enquire about banquet halls for my celebration at Aagaaz.">
      {/* Strong Hero Section */}
      <BanquetHero />

      {/* What's On Offer */}
      <BanquetOfferings />

      {/* Package Tiers */}
      <BanquetPackages />

      {/* Gallery Showcase */}
      <BanquetGallery />

      {/* Enquiry Block */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <BanquetEnquiry />
        </div>
      </section>
    </PageLayout>
  );
}
