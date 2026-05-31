'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { BlurText, ScrollReveal, ImageDrift, LuxuryHover } from '@/components/animations/MotionUtils'

export default function StoryHero() {
  const shouldReduceMotion = useReducedMotion()

  // Sanskrit/Hindi text animation
  const sanskritVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0.5 : 1.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section className="relative min-h-[100vh] flex items-center bg-gradient-to-br from-background via-surface-subtle to-background overflow-hidden">
      {/* Enhanced Decorative Elements with Motion */}
      <div className="absolute inset-0">
        <ImageDrift drift={12} duration={35} direction="random">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        </ImageDrift>

        <ImageDrift drift={8} duration={40} direction="up">
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-wine/6 rounded-full blur-3xl" />
        </ImageDrift>

        {/* Floating accent elements */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-3 h-16 bg-accent/20 rotate-12 blur-sm"
        />

        <motion.div
          animate={shouldReduceMotion ? {} : {
            y: [0, 15, 0],
            rotate: [0, -8, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-16 w-2 h-20 bg-wine/25 -rotate-12 blur-sm"
        />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Heritage Badge */}
          <ScrollReveal direction="up" delay={0.3} threshold={0.1} className="text-center mb-16">
            <motion.span
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-wine/10 to-accent/10 border border-wine/30 rounded-full text-wine text-sm font-medium backdrop-blur-sm"
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.05,
                backgroundColor: 'rgba(114, 47, 55, 0.15)',
                borderColor: 'rgba(114, 47, 55, 0.5)'
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-lg"
              >
                ✦
              </motion.span>
              Our Heritage
              <motion.span
                animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-2 h-2 bg-accent rounded-full"
              />
            </motion.span>
          </ScrollReveal>

          {/* Main Title with Enhanced Typography */}
          <div className="text-center mb-20">
            <BlurText
              text="Aagaaz"
              className="font-display text-6xl md:text-8xl lg:text-9xl text-accent mb-4 leading-none"
              delay={40}
              animateBy="words"
            />

            <ScrollReveal direction="up" delay={0.8} threshold={0.1}>
              <motion.h2
                className="font-display text-4xl md:text-5xl lg:text-6xl text-text leading-tight"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? undefined : { delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                The Art of
                <br />
                <span className="text-wine italic">Beautiful Beginnings</span>
              </motion.h2>
            </ScrollReveal>
          </div>

          {/* Two-Column Layout with Enhanced Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <ScrollReveal direction="left" delay={0.4} threshold={0.1}>
              <div className="space-y-10">
                {/* Sanskrit/Hindi Title */}
                <motion.div variants={sanskritVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h3 className="font-display text-4xl md:text-5xl text-secondary mb-6 text-center lg:text-left">
                    आगाज़
                    <span className="block text-2xl text-text-light font-normal mt-2">- A Beginning</span>
                  </h3>
                </motion.div>

                {/* Enhanced Story Content */}
                <div className="space-y-8 text-text-light leading-relaxed">
                  <ScrollReveal direction="up" delay={0.6} threshold={0.9}>
                    <p className="text-lg lg:text-xl" style={{ fontFamily: 'var(--font-fraunces)' }}>
                      In the heart of Punjab, where every celebration echoes with warmth and tradition,
                      stands{' '}
                      <motion.span
                        className="text-accent font-semibold"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        Aagaaz
                      </motion.span>
                      {' '}— more than just a venue, a philosophy of beginnings.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={0.8} threshold={0.9}>
                    <p className="text-lg">
                      The word <em className="text-wine font-medium">Aagaaz</em> means commencement,
                      the first note of a song, the first ray of dawn, the first step of a journey.
                      For over a decade, we have been privileged to witness countless beginnings.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={1.0} threshold={0.9}>
                    <motion.blockquote
                      className="border-l-4 border-accent/40 pl-6 py-4 bg-surface/30 rounded-r-lg"
                      whileHover={shouldReduceMotion ? {} : { x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-text italic text-lg">
                        "Every celebration deserves a setting as unique as its story.
                        We believe that the space where memories are made should honor
                        both the grandeur of the moment and the intimacy of its meaning."
                      </p>
                    </motion.blockquote>
                  </ScrollReveal>

                  {/* Milestone badges */}
                  <ScrollReveal direction="up" delay={1.2} threshold={0.9}>
                    <div className="flex flex-wrap gap-4 pt-6">
                      {[
                        { year: "2012", label: "Founded" },
                        { year: "1000+", label: "Celebrations" },
                        { year: "12", label: "Years Excellence" }
                      ].map((milestone, i) => (
                        <LuxuryHover key={i} hoverScale={1.05}>
                          <div className="px-4 py-2 bg-gradient-to-r from-accent/10 to-wine/10 border border-accent/20 rounded-lg text-center">
                            <div className="font-display text-accent font-bold">{milestone.year}</div>
                            <div className="text-xs text-text-light uppercase tracking-wider">{milestone.label}</div>
                          </div>
                        </LuxuryHover>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Enhanced Visual */}
            <ScrollReveal direction="right" delay={0.6} threshold={0.1}>
              <LuxuryHover hoverScale={1.02} hoverY={-8} className="relative">
                <ImageDrift drift={6} duration={25} direction="random">
                  <div className="relative bg-gradient-to-br from-accent/20 to-wine/20 rounded-2xl aspect-[4/3] overflow-hidden border border-border/30 backdrop-blur-sm">
                    {/* Enhanced placeholder with luxury details */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-wine/10" />

                    {/* Grain texture */}
                    <div
                      className="absolute inset-0 opacity-30 mix-blend-soft-light"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '64px 64px'
                      }}
                    />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center">
                      <motion.div
                        animate={shouldReduceMotion ? {} : {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-20 h-20 bg-gradient-to-br from-accent/40 to-wine/30 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl"
                      >
                        <span className="text-4xl">🏛️</span>
                      </motion.div>

                      <BlurText
                        text="Aagaaz Venue"
                        className="font-display text-2xl md:text-3xl text-text mb-3"
                        delay={60}
                        threshold={0.8}
                      />

                      <ScrollReveal direction="up" delay={0.4} threshold={0.8}>
                        <p className="text-text-light text-lg italic">Where every celebration begins</p>
                      </ScrollReveal>

                      {/* Decorative corner elements */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/40" />
                      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-wine/40" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-wine/40" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/40" />
                    </div>

                    {/* Floating accent dots */}
                    <motion.div
                      animate={shouldReduceMotion ? {} : {
                        y: [0, -10, 0],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-8 right-8 w-2 h-2 bg-accent/60 rounded-full"
                    />
                    <motion.div
                      animate={shouldReduceMotion ? {} : {
                        y: [0, 8, 0],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-wine/60 rounded-full"
                    />
                  </div>
                </ImageDrift>
              </LuxuryHover>
            </ScrollReveal>
          </div>
        </div>
      </Container>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 2.5, duration: shouldReduceMotion ? 0.3 : 0.8 }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-3 text-accent/80"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Continue the story</span>
          <div className="flex flex-col items-center gap-1">
            <motion.div
              animate={shouldReduceMotion ? {} : { height: ["0%", "100%", "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                repeatDelay: 1
              }}
              className="w-px h-6 bg-gradient-to-b from-accent to-wine origin-top"
            />
            <span className="text-lg">↓</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
