'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { BlurText, ScrollReveal, LuxuryHover, StaggerContainer, ImageDrift } from '@/components/animations/MotionUtils'

const cuisines = [
  {
    name: "Indian",
    tagline: "Heritage & Spice",
    description: "Rich traditions and aromatic spices create authentic flavors that celebrate India's diverse culinary heritage.",
    specialties: ["Tandoor Specialties", "Regional Curries", "Traditional Breads", "Classic Biryanis"],
    icon: "🇮🇳",
    color: "from-amber/30 to-wine/20",
    accentColor: "wine",
    size: "large" // Featured card
  },
  {
    name: "Italian",
    tagline: "Passion & Tradition",
    description: "Fresh ingredients and time-honored techniques bring the warmth of Italy to every handcrafted dish.",
    specialties: ["Fresh Pasta", "Wood-Fired Pizzas", "Authentic Risottos", "Classic Antipasti"],
    icon: "🇮🇹",
    color: "from-accent/30 to-green-500/10",
    accentColor: "accent",
    size: "standard"
  },
  {
    name: "Oriental",
    tagline: "Art & Balance",
    description: "Bold flavors and artful presentation showcase the best of Asian culinary traditions.",
    specialties: ["Stir-Fry Classics", "Dim Sum Selection", "Noodle Varieties", "Wok Specialties"],
    icon: "🥢",
    color: "from-wine/25 to-accent/15",
    accentColor: "wine",
    size: "standard"
  },
  {
    name: "Continental",
    tagline: "Elegance & Craft",
    description: "Refined European classics prepared with modern flair and seasonal ingredients.",
    specialties: ["Grilled Meats", "Seasonal Vegetables", "Artisan Soups", "Classic Desserts"],
    icon: "🍽️",
    color: "from-accent/25 to-wine/15",
    accentColor: "accent",
    size: "wide" // Double width
  }
]

export default function CuisineCards() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-section-padding-y bg-gradient-to-b from-background to-surface-subtle overflow-hidden" id="cuisines">
      <Container>
        {/* Enhanced Header with Blur Text */}
        <div className="text-center mb-20 relative">
          {/* Floating decorative elements */}
          <div className="absolute top-0 left-1/4 w-2 h-16 bg-accent/20 rotate-12 blur-sm" />
          <div className="absolute -top-8 right-1/3 w-1 h-12 bg-wine/30 -rotate-12 blur-sm" />

          <ScrollReveal direction="up" delay={0.2} threshold={0.1}>
            <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-wine/10 border border-accent/30 rounded-full text-secondary text-sm font-medium backdrop-blur-sm mb-6">
              <span className={`w-2 h-2 bg-accent rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
              Global Flavors
              <span className={`w-2 h-2 bg-wine rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
            </span>
          </ScrollReveal>

          <BlurText
            text="A Culinary Journey Around the World"
            className="font-display text-5xl md:text-6xl lg:text-7xl text-text mb-8 leading-tight"
            delay={80}
            animateBy="words"
          />

          <ScrollReveal direction="up" delay={0.6} threshold={0.1}>
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-fraunces)' }}>
              Each cuisine tells its own story through carefully sourced ingredients,
              authentic techniques, and passionate preparation that honors tradition
              while embracing innovation.
            </p>
          </ScrollReveal>

          {/* Decorative bottom accent */}
          <ScrollReveal direction="up" delay={0.8} threshold={0.1}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8" />
          </ScrollReveal>
        </div>

        {/* Asymmetrical Grid Layout with Enhanced Motion */}
        <StaggerContainer
          staggerDelay={0.15}
          direction="up"
          threshold={0.1}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {cuisines.map((cuisine, index) => (
            <LuxuryHover
              key={cuisine.name}
              hoverScale={1.02}
              hoverY={-12}
              className={`
                group cursor-pointer relative
                ${cuisine.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${cuisine.size === 'wide' ? 'md:col-span-2' : ''}
              `}
            >
              {/* Background with Grain Texture and Image Drift */}
              <ImageDrift
                drift={5}
                duration={25}
                direction="random"
                className={`
                  relative overflow-hidden rounded-2xl bg-gradient-to-br ${cuisine.color}
                  border border-border/50 backdrop-blur-sm
                  ${cuisine.size === 'large' ? 'min-h-[400px] p-8' : 'min-h-[300px] p-6'}
                  group-hover:border-accent/40 transition-all duration-700
                  before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]
                  after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-accent/5 after:to-wine/5
                `}
              >
                {/* Grain Texture */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-soft-light"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '128px 128px'
                  }}
                />

                {/* Floating Accent with drift */}
                <motion.div
                  animate={shouldReduceMotion ? {} : {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-accent/30 to-wine/30 rounded-full blur-xl"
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon & Tagline with enhanced hover */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.span
                      className="text-6xl filter drop-shadow-lg"
                      whileHover={shouldReduceMotion ? {} : {
                        scale: 1.2,
                        rotate: 8,
                        filter: 'drop-shadow(0 0 20px rgba(201, 169, 97, 0.4))'
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {cuisine.icon}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 0.7, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      className={`text-xs uppercase tracking-widest font-bold text-${cuisine.accentColor}`}
                    >
                      {cuisine.tagline}
                    </motion.span>
                  </div>

                  {/* Title with blur reveal */}
                  <BlurText
                    text={cuisine.name}
                    className={`
                      font-display text-text mb-4 group-hover:text-accent transition-colors duration-500
                      ${cuisine.size === 'large' ? 'text-4xl md:text-5xl' : 'text-3xl'}
                    `}
                    delay={60}
                    threshold={0.8}
                  />

                  {/* Description with scroll reveal */}
                  <ScrollReveal direction="up" delay={index * 0.1} threshold={0.9}>
                    <p className={`
                      text-text-light leading-relaxed mb-6 flex-grow
                      ${cuisine.size === 'large' ? 'text-lg' : 'text-base'}
                    `}>
                      {cuisine.description}
                    </p>
                  </ScrollReveal>

                  {/* Specialties with staggered reveals */}
                  <div className="space-y-3">
                    <motion.h4
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                      className={`
                        font-semibold text-${cuisine.accentColor} text-sm
                        uppercase tracking-wider flex items-center gap-2
                      `}
                    >
                      <motion.span
                        animate={shouldReduceMotion ? {} : { width: ["0%", "100%"] }}
                        transition={{ delay: index * 0.1 + 1, duration: 1.2 }}
                        className={`h-px bg-${cuisine.accentColor}`}
                        style={{ width: "16px" }}
                      />
                      Specialties
                    </motion.h4>

                    <StaggerContainer
                      staggerDelay={0.05}
                      direction="right"
                      threshold={0.9}
                      className={`
                        grid gap-2
                        ${cuisine.size === 'large' ? 'grid-cols-2' : 'grid-cols-1'}
                      `}
                    >
                      {cuisine.specialties.map((specialty, i) => (
                        <motion.div
                          key={specialty}
                          className="flex items-center group/item"
                          whileHover={shouldReduceMotion ? {} : { x: 4 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <motion.span
                            className={`w-2 h-2 bg-${cuisine.accentColor} rounded-full mr-3 flex-shrink-0`}
                            whileHover={shouldReduceMotion ? {} : {
                              scale: 1.5,
                              boxShadow: `0 0 10px var(--${cuisine.accentColor})`
                            }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-sm text-text-light group-hover/item:text-text transition-colors duration-300">
                            {specialty}
                          </span>
                        </motion.div>
                      ))}
                    </StaggerContainer>
                  </div>

                  {/* Enhanced hover indicator */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={shouldReduceMotion ? false : { scale: 0.8, rotate: -10 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.span
                      animate={shouldReduceMotion ? {} : { x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`text-${cuisine.accentColor} text-sm font-medium flex items-center gap-1`}
                    >
                      Discover
                      <span className="text-lg">→</span>
                    </motion.span>
                  </motion.div>
                </div>
              </ImageDrift>
            </LuxuryHover>
          ))}
        </StaggerContainer>

        {/* Bottom Accent with Quote */}
        <ScrollReveal direction="up" delay={0.4} threshold={0.1} className="text-center mt-20">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
          <motion.blockquote
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={shouldReduceMotion ? undefined : { once: true }}
            transition={shouldReduceMotion ? undefined : { delay: 0.6, duration: 1.5 }}
            className="text-text-light text-sm italic font-light max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            "Food is our common ground, a universal experience that brings hearts together across cultures."
          </motion.blockquote>
        </ScrollReveal>
      </Container>
    </section>
  )
}
