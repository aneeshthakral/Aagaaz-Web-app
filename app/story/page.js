import { createPageMetadata } from '@/lib/seo'
import PageLayout from '@/components/layout/PageLayout'
import StoryHero from '@/components/sections/StoryHero'
import StoryContent from '@/components/sections/StoryContent'
import StoryValues from '@/components/sections/StoryValues'
import CTABand from '@/components/sections/CTABand'

export const metadata = createPageMetadata({
  title: 'Our Story, Heritage, and Meaning of Aagaaz',
  description: 'Learn the meaning of Aagaaz and the hospitality story behind our banquet, dining, and stay experience in Ludhiana.',
  path: '/story',
  keywords: ['Aagaaz meaning', 'Aagaaz story', 'hospitality venue Ludhiana']
})

export default function StoryPage() {
  return (
    <PageLayout>
      <StoryHero />
      <StoryContent />
      <StoryValues />
      <CTABand />
    </PageLayout>
  )
}
