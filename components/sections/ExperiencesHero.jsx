'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ExperiencesHero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-wine/90 to-midnight/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(201,169,97,0.1),transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center text-cream"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium">
              Corporate & Celebrations
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-display-xl md:text-display-2xl mb-6 leading-[0.9]"
          >
            Every Success
            <br />
            Deserves a
            <br />
            <span className="text-accent">Celebration</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto text-cream/90"
          >
            From milestone achievements to team building experiences, product launches to
            annual celebrations — create meaningful moments that bring people together and
            inspire lasting connections.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
              <Link href="/contact">Plan Your Event</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-cream/10">
              <Link href="#event-types">Explore Options</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-cream/20"
          >
            <div className="text-center">
              <div className="text-accent text-3xl font-display mb-2">50+</div>
              <div className="text-cream/80 text-sm">Corporate Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-3xl font-display mb-2">500</div>
              <div className="text-cream/80 text-sm">Guests Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-3xl font-display mb-2">24/7</div>
              <div className="text-cream/80 text-sm">Event Support</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}