'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const galleryItems = [
  {
    title: "Signature Plating",
    category: "Food Artistry",
    aspectRatio: "aspect-square"
  },
  {
    title: "Tandoori Specialties",
    category: "Indian Cuisine",
    aspectRatio: "aspect-[4/5]"
  },
  {
    title: "Fresh Pasta Station",
    category: "Italian Kitchen",
    aspectRatio: "aspect-[3/2]"
  },
  {
    title: "Elegant Dining Space",
    category: "Restaurant Ambiance",
    aspectRatio: "aspect-[4/3]"
  },
  {
    title: "Chef's Table Experience",
    category: "Live Cooking",
    aspectRatio: "aspect-square"
  },
  {
    title: "Wine Pairing",
    category: "Beverage Selection",
    aspectRatio: "aspect-[3/4]"
  }
]

export default function DiningGallery() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <section className="py-section-padding-y bg-background">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-secondary text-sm font-medium mb-4"
          >
            Visual Gallery
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-display-lg text-text mb-6"
          >
            Where Food Meets Art
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Every dish is a masterpiece, every moment a memory.
            See how culinary passion comes to life at Fessta.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`
                ${item.aspectRatio}
                ${index === 0 ? 'col-span-2 row-span-2' : ''}
                ${index === 2 ? 'md:col-span-2' : ''}
                bg-gradient-to-br from-accent/20 to-wine/20
                rounded-lg overflow-hidden group
                border border-border hover:border-accent/30 transition-colors
              `}
            >
              <div className="w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-midnight/70 to-transparent">
                <span className="text-xs text-cream/80 font-medium mb-1">
                  {item.category}
                </span>
                <h3 className="text-surface font-semibold group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
