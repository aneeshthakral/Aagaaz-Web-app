import { createPageMetadata } from '@/lib/seo'
import PageLayout from '@/components/layout/PageLayout'
import DiningHero from '@/components/sections/DiningHero'
import CuisineCards from '@/components/sections/CuisineCards'
import MenuHighlights from '@/components/sections/MenuHighlights'
import DiningGallery from '@/components/sections/DiningGallery'
import CTABand from '@/components/sections/CTABand'

export const metadata = createPageMetadata({
  title: 'Fessta Restaurant and Multi-Cuisine Dining',
  description: 'Dine at Fessta Restaurant at Aagaaz in Ludhiana with Indian, Italian, Oriental, and Continental menus served in an elegant hospitality setting.',
  path: '/dining',
  keywords: ['restaurant Ludhiana', 'Fessta Restaurant', 'multi-cuisine dining Ludhiana']
})

export default function DiningPage() {
  return (
    <PageLayout>
      <DiningHero />
      <CuisineCards />
      <MenuHighlights />
      <DiningGallery />
      <CTABand />
    </PageLayout>
  )
}
