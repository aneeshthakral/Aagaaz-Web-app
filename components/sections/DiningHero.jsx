'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DiningHero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: shouldReduceMotion ? 0 : 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.4 : 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : i * 0.05,
        duration: shouldReduceMotion ? 0.4 : 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  const title = "Four Cuisines, One Extraordinary Experience"

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Atmospheric Background Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-midnight via-charcoal to-midnight"
      >
        {/* Grain Texture Overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px'
          }}
        />

        {/* Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-wine/30 via-transparent to-accent/20" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-amber/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-wine/20 to-transparent rounded-full blur-2xl" />

        {/* Geometric Accent */}
        <div className="absolute top-1/4 right-1/6 w-2 h-32 bg-accent/40 rotate-12 blur-sm" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-24 bg-wine/50 -rotate-12 blur-sm" />
      </motion.div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Restaurant Badge */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.span
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium backdrop-blur-sm"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.05, backgroundColor: 'rgba(201, 169, 97, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <span className={`w-2 h-2 bg-accent rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
              Fessta Restaurant
            </motion.span>
          </motion.div>

          {/* Dynamic Title with Letter Animation */}
          <div className="text-center mb-12">
            <motion.h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.85] text-cream">
              {title.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className={char === ' ' ? 'inline-block w-4' : 'inline-block'}
                  style={{
                    color: ['F', 'C', 'O', 'E', 'E'].includes(char) ? 'var(--accent)' : 'var(--cream)'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Elevated Description */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-cream/90 font-light"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              From the{' '}
              <motion.span
                className="text-accent font-medium"
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
                transition={{ duration: 0.2 }}
              >
                rich traditions of Indian cuisine
              </motion.span>{' '}
              to the elegance of Italian fare, the bold flavors of Oriental dishes
              to the refined classics of Continental cooking.
              <br />
              <motion.span
                className="text-wine font-medium italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : 2, duration: shouldReduceMotion ? 0.3 : 1 }}
              >
                Every meal at Fessta tells a story.
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.div
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.05, y: shouldReduceMotion ? 0 : -2 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 text-lg font-semibold shadow-2xl shadow-accent/25">
                <Link href="/contact">Reserve Your Table</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.05, y: shouldReduceMotion ? 0 : -2 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button asChild variant="outline" size="lg" className="border-2 border-cream/40 text-cream hover:bg-cream/10 backdrop-blur-sm px-8 py-4 text-lg">
                <Link href="#menu">View Menu Highlights</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Culinary Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "4", label: "World Cuisines", accent: "accent" },
              { number: "50+", label: "Signature Dishes", accent: "wine" },
              { number: "15", label: "Years Experience", accent: "amber" },
              { number: "★", label: "Fine Dining", accent: "accent" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.1, y: shouldReduceMotion ? 0 : -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`text-4xl font-display font-bold mb-2 text-${stat.accent}`}>
                  {stat.number}
                </div>
                <div className="text-cream/80 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 2.5, duration: shouldReduceMotion ? 0.3 : 0.8 }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-3 text-cream/90"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Discover</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
