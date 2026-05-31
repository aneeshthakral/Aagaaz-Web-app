import { createPageMetadata } from '@/lib/seo'
import PageLayout from '@/components/layout/PageLayout'
import GalleryHero from '@/components/sections/GalleryHero'
import GalleryGrid from '@/components/sections/GalleryGrid'

export const metadata = createPageMetadata({
  title: 'Gallery - Aagaaz Celebrations & Hospitality',
  description: 'Browse the Aagaaz gallery featuring banquet setups, dining experiences, guest rooms, and celebrations in Ludhiana.',
  path: '/gallery',
  keywords: ['Aagaaz gallery', 'banquet photos Ludhiana', 'venue gallery Ludhiana']
})

export default function GalleryPage() {
  return (
    <PageLayout>
      <GalleryHero />
      <GalleryGrid />
    </PageLayout>
  )
}
