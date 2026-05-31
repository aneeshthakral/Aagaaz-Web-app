import { createPageMetadata } from '@/lib/seo'
import PageLayout from '@/components/layout/PageLayout'
import ExperiencesHero from '@/components/sections/ExperiencesHero'
import EventTypes from '@/components/sections/EventTypes'
import CorporatePackages from '@/components/sections/CorporatePackages'
import CTABand from '@/components/sections/CTABand'

export const metadata = createPageMetadata({
  title: 'Corporate Events, Launches, and Team Celebrations',
  description: 'Host conferences, launches, workshops, achievement celebrations, and business gatherings at Aagaaz in Ludhiana with tailored event support and hospitality.',
  path: '/experiences',
  keywords: ['corporate event venue Ludhiana', 'conference hall Ludhiana', 'team celebration venue']
})

export default function ExperiencesPage() {
  return (
    <PageLayout>
      <ExperiencesHero />
      <EventTypes />
      <CorporatePackages />
      <CTABand />
    </PageLayout>
  )
}
