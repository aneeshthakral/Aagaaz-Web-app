import { createPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout";
import { Container } from "@/components/layout/Container";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Read the basic website and enquiry terms for Aagaaz, including hospitality information, bookings, and contact expectations.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="bg-background py-20 md:py-28">
        <Container size="sm">
          <div className="space-y-8">
            <header className="space-y-4">
              <p className="text-secondary text-sm font-medium uppercase tracking-[0.2em]">
                Terms
              </p>
              <h1 className="font-display text-text text-4xl md:text-5xl">
                Terms of Service
              </h1>
              <p className="text-text-light">
                The Aagaaz website is intended to help guests explore our
                banquet, kitty party, room, restaurant, and event offerings in
                Ludhiana and to send booking or availability enquiries.
              </p>
            </header>

            <div className="text-text-light space-y-6 leading-7">
              <section className="space-y-2">
                <h2 className="text-text text-2xl font-semibold">
                  Website Information
                </h2>
                <p>
                  Content on this site is provided for general information and
                  may change as packages, menus, room types, or venue details
                  are updated.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-text text-2xl font-semibold">
                  Enquiries and Bookings
                </h2>
                <p>
                  Submitting an enquiry does not confirm a booking. Dates,
                  capacities, menus, and final arrangements are subject
                  to direct confirmation with Aagaaz.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-text text-2xl font-semibold">
                  Contact
                </h2>
                <p>
                  For current terms relating to a booking, please contact
                  Aagaaz directly at{" "}
                  <a className="text-secondary underline" href="mailto:info@aagaaz.in">
                    info@aagaaz.in
                  </a>{" "}
                  or{" "}
                  <a className="text-secondary underline" href="tel:+919592099941">
                    +91-95920-99941
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
