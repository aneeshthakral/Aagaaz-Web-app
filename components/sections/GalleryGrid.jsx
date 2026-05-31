'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import Lightbox from '@/components/shared/Lightbox'

// Gallery data organized by categories
const galleryData = {
  'All': [],
  'Banquet & Weddings': [
    { id: 1, title: 'Grand Wedding Reception', category: 'Banquet & Weddings', aspectRatio: 'aspect-[3/2]' },
    { id: 2, title: 'Nawaazissh Hall Setup', category: 'Banquet & Weddings', aspectRatio: 'aspect-[4/3]' },
    { id: 3, title: 'Bridal Arrangement', category: 'Banquet & Weddings', aspectRatio: 'aspect-[3/4]' },
    { id: 4, title: 'Anniversary Celebration', category: 'Banquet & Weddings', aspectRatio: 'aspect-[3/2]' },
    { id: 5, title: 'Wedding Stage Design', category: 'Banquet & Weddings', aspectRatio: 'aspect-square' },
    { id: 6, title: 'Reception Dining', category: 'Banquet & Weddings', aspectRatio: 'aspect-[4/3]' }
  ],
  'Kitty Parties': [
    { id: 7, title: 'Ba-Dastoorr Hall Decoration', category: 'Kitty Parties', aspectRatio: 'aspect-[3/2]' },
    { id: 8, title: 'Ladies Celebration', category: 'Kitty Parties', aspectRatio: 'aspect-square' },
    { id: 9, title: 'Shafaq Hall Setup', category: 'Kitty Parties', aspectRatio: 'aspect-[4/3]' },
    { id: 10, title: 'Theme Party Decor', category: 'Kitty Parties', aspectRatio: 'aspect-[3/2]' },
    { id: 11, title: 'Group Photography', category: 'Kitty Parties', aspectRatio: 'aspect-[5/4]' }
  ],
  'Luxury Rooms': [
    { id: 12, title: 'Deluxe Room Interior', category: 'Luxury Rooms', aspectRatio: 'aspect-[3/2]' },
    { id: 13, title: 'Suite Living Area', category: 'Luxury Rooms', aspectRatio: 'aspect-[4/3]' },
    { id: 14, title: 'Modern Bathroom', category: 'Luxury Rooms', aspectRatio: 'aspect-[3/4]' },
    { id: 15, title: 'Executive Suite', category: 'Luxury Rooms', aspectRatio: 'aspect-[3/2]' },
    { id: 16, title: 'Room Amenities', category: 'Luxury Rooms', aspectRatio: 'aspect-square' }
  ],
  'Dining & Food': [
    { id: 17, title: 'Fessta Restaurant', category: 'Dining & Food', aspectRatio: 'aspect-[3/2]' },
    { id: 18, title: 'Signature Plating', category: 'Dining & Food', aspectRatio: 'aspect-square' },
    { id: 19, title: 'Tandoori Specialties', category: 'Dining & Food', aspectRatio: 'aspect-[4/5]' },
    { id: 20, title: 'Italian Corner', category: 'Dining & Food', aspectRatio: 'aspect-[3/2]' },
    { id: 21, title: 'Chef at Work', category: 'Dining & Food', aspectRatio: 'aspect-[4/3]' },
    { id: 22, title: 'Dessert Presentation', category: 'Dining & Food', aspectRatio: 'aspect-[3/4]' }
  ],
  'Corporate Events': [
    { id: 23, title: 'Conference Setup', category: 'Corporate Events', aspectRatio: 'aspect-[3/2]' },
    { id: 24, title: 'Product Launch', category: 'Corporate Events', aspectRatio: 'aspect-[4/3]' },
    { id: 25, title: 'Team Building', category: 'Corporate Events', aspectRatio: 'aspect-square' },
    { id: 26, title: 'Award Ceremony', category: 'Corporate Events', aspectRatio: 'aspect-[3/2]' }
  ]
}

// Combine all images for the 'All' category
galleryData.All = Object.values(galleryData)
  .flat()
  .filter(item => item.id)
  .sort((a, b) => a.id - b.id)

const categories = Object.keys(galleryData)

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const currentImages = galleryData[activeCategory] || []

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <>
      <section className="pb-section-padding-y bg-background">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`
                  px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'bg-surface border border-border text-text-light hover:border-accent/30 hover:text-accent'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {currentImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`
                  ${image.aspectRatio}
                  ${index === 0 && activeCategory === 'All' ? 'col-span-2 row-span-2' : ''}
                  ${index === 5 && activeCategory === 'All' ? 'md:col-span-2' : ''}
                  group overflow-hidden rounded-lg border border-border bg-gradient-to-br from-accent/20 to-wine/20 transition-all hover:border-accent/30
                `}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-midnight/70 to-transparent p-4 text-left focus-visible:outline-none md:p-6"
                  aria-label={`Open ${image.title} in the gallery lightbox`}
                >
                  <span className="mb-1 text-xs font-medium text-cream/80 transition-opacity group-hover:opacity-100 md:opacity-0">
                    {image.category}
                  </span>
                  <h3 className="text-sm font-semibold text-surface transition-colors group-hover:text-accent md:text-base">
                    {image.title}
                  </h3>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Loading state for empty categories */}
          {currentImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-light">
                No images available in this category yet.
              </p>
            </div>
          )}

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border-subtle text-center">
            <div>
              <div className="text-2xl font-display text-accent mb-1">150+</div>
              <div className="text-text-light text-sm">Celebrations Captured</div>
            </div>
            <div>
              <div className="text-2xl font-display text-accent mb-1">500+</div>
              <div className="text-text-light text-sm">Happy Moments</div>
            </div>
            <div>
              <div className="text-2xl font-display text-accent mb-1">50+</div>
              <div className="text-text-light text-sm">Corporate Events</div>
            </div>
            <div>
              <div className="text-2xl font-display text-accent mb-1">1000+</div>
              <div className="text-text-light text-sm">Memories Created</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={currentImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </>
  )
}
