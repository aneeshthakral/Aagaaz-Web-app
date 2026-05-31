import { createPageMetadata } from '@/lib/seo'
import PageLayout from '@/components/layout/PageLayout'
import ContactHero from '@/components/sections/ContactHero'
import ContactInfo from '@/components/sections/ContactInfo'
import ContactMap from '@/components/sections/ContactMap'
import { GeneralEnquiry } from '@/components/shared'

export const metadata = createPageMetadata({
  title: 'Contact Us - Plan Your Celebration at Aagaaz',
  description: 'Contact Aagaaz in Ludhiana for banquet bookings, kitty parties, rooms, restaurant visits, and corporate events. Call, WhatsApp, or visit us on Pakhowal Road.',
  path: '/contact',
  keywords: ['contact Aagaaz', 'Aagaaz Ludhiana phone', 'Pakhowal Road venue contact']
})

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <section className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <GeneralEnquiry />
        </div>
      </section>
    </PageLayout>
  )
}
