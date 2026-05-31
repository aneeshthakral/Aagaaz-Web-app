'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { BlurText, ScrollReveal, ImageDrift } from '@/components/animations/MotionUtils'

export default function GalleryHero() {
  const shouldReduceMotion = useReducedMotion()

  const letterVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 100, filter: 'blur(10px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: shouldReduceMotion ? 0 : i * 0.05,
        duration: shouldReduceMotion ? 0.4 : 1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  const title = "Moments That Live Forever"

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-br from-background via-surface-subtle to-background overflow-hidden">
      {/* Floating decorative elements with drift */}
      <ImageDrift drift={8} duration={30} direction="random">
        <div className="absolute top-20 left-1/4 w-2 h-20 bg-accent/10 rotate-12 blur-sm" />
      </ImageDrift>

      <ImageDrift drift={6} duration={25} direction="up">
        <div className="absolute bottom-32 right-1/3 w-1 h-16 bg-wine/15 -rotate-12 blur-sm" />
      </ImageDrift>

      {/* Atmospheric background layers */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-radial from-wine/8 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Luxury badge with enhanced animation */}
          <ScrollReveal direction="up" delay={0.2} threshold={0.1}>
            <motion.span
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium backdrop-blur-sm mb-12"
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.05,
                backgroundColor: 'rgba(201, 169, 97, 0.15)',
                borderColor: 'rgba(201, 169, 97, 0.5)'
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-accent rounded-full"
              />
              Visual Stories
              <motion.span
                animate={shouldReduceMotion ? {} : { rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-lg"
              >
                ✦
              </motion.span>
            </motion.span>
          </ScrollReveal>

          {/* Dynamic title with letter-by-letter animation */}
          <div className="mb-12">
            <motion.h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.85] text-text">
              {title.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={`
                    inline-block
                    ${char === ' ' ? 'w-4' : ''}
                    ${['M', 'T', 'L', 'F'].includes(char) ? 'text-accent' : 'text-text'}
                  `}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Enhanced description */}
          <ScrollReveal direction="up" delay={0.8} threshold={0.1}>
            <motion.p
              className="text-2xl md:text-3xl text-text-light leading-relaxed max-w-4xl mx-auto mb-16"
              style={{ fontFamily: 'var(--font-fraunces)' }}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              transition={shouldReduceMotion ? undefined : { delay: 1.5, duration: 1.2 }}
            >
              Every celebration tells a{' '}
              <motion.span
                className="text-accent font-medium italic"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                story
              </motion.span>
              . From intimate gatherings to grand affairs,
              witness the magic that unfolds when dreams meet the perfect setting.
            </motion.p>
          </ScrollReveal>

          {/* Gallery statistics with enhanced counters */}
          <ScrollReveal direction="up" delay={1.2} threshold={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: 150, label: "Celebrations Captured", suffix: "+" },
                { number: 500, label: "Happy Moments", suffix: "+" },
                { number: 50, label: "Corporate Events", suffix: "+" },
                { number: 1000, label: "Memories Created", suffix: "+" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center group"
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-display font-bold text-accent mb-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {stat.number}
                    <span className="text-wine">{stat.suffix}</span>
                  </motion.div>
                  <motion.div
                    className="text-text-light text-sm uppercase tracking-wider font-medium group-hover:text-text transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Decorative scroll indicator */}
          <ScrollReveal direction="up" delay={1.8} threshold={0.1}>
            <motion.div
              className="flex flex-col items-center gap-4 mt-20 text-text-light"
              animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <span className="text-xs uppercase tracking-widest font-medium">Explore Gallery</span>
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={shouldReduceMotion ? {} : { height: ["0%", "100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent origin-top"
                />
                <span className="text-accent text-lg">↓</span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
