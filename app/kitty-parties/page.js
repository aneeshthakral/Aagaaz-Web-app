import { createPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout";
import { KittyHero } from "./components/KittyHero";
import { KittyOfferings } from "./components/KittyOfferings";
import { KittyPackages } from "./components/KittyPackages";
import { PlaceholderImage } from "@/components/shared";

export const metadata = createPageMetadata({
  title: "Kitty Party Halls in Ludhiana",
  description:
    "Plan a ladies' gathering at Ba-Dastoorr and Shafaq Halls at Aagaaz in Ludhiana, with space for themed kitty parties, lunches, and intimate celebrations.",
  path: "/kitty-parties",
  keywords: ["kitty party venue Ludhiana", "ladies party hall Ludhiana", "Ba-Dastoorr Hall", "Shafaq Hall"],
});

export default function KittyPartiesPage() {
  return (
    <PageLayout whatsappMessage="Hi! I'd like to enquire about kitty party venues at Aagaaz.">
      {/* Strong Hero Section */}
      <KittyHero />

      {/* What's On Offer */}
      <KittyOfferings />

      {/* Package Tiers */}
      <KittyPackages />

      {/* Gallery Showcase */}
      <section id="gallery" className="py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Kitty Party Gallery</h2>
            <p className="text-text-light">Coming soon - beautiful moments from our kitty celebrations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <PlaceholderImage
                key={i}
                width={400}
                height={300}
                alt={`Kitty ${i}`}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
