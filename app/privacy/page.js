import { createPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout";
import { Container } from "@/components/layout/Container";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Aagaaz in Ludhiana covering enquiries, contact details, and how guest information is handled on this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageLayout>
      <section className="bg-background py-20 md:py-28">
        <Container size="sm">
          <div className="space-y-8">
            <header className="space-y-4">
              <p className="text-secondary text-sm font-medium uppercase tracking-[0.2em]">
                Privacy
              </p>
              <h1 className="font-display text-text text-4xl md:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-text-light">
                This website is for hospitality enquiries related to Aagaaz,
                Ludhiana. When you submit an enquiry, we use the information you
                provide to respond to your request, discuss availability, and
                share relevant event, dining, or stay details.
              </p>
            </header>

            <div className="text-text-light space-y-6 leading-7">
              <section className="space-y-2">
                <h2 className="text-text text-2xl font-semibold">
                  Information We Collect
                </h2>
                <p>
                  We may collect your name, phone number, email address,
                  preferred dates, guest counts, and any event or stay details
                  you include in an enquiry.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-text text-2xl font-semibold">
                  How We Use It
                </h2>
                <p>
                  We use enquiry information to contact you, prepare proposals,
                  discuss bookings, and improve our guest communication.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-text text-2xl font-semibold">
                  Contact
                </h2>
                <p>
                  For privacy-related questions, contact Aagaaz at{" "}
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
