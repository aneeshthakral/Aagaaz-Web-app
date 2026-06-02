'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BlurText, ScrollReveal, LuxuryHover, StaggerContainer } from '@/components/animations/MotionUtils'

const menuHighlights = [
  {
    category: "Appetisers",
    tagline: "Perfect Beginnings",
    color: "wine",
    dishes: [
      {
        name: "Paneer Multani Tikka",
        description: "Tandoor-roasted paneer stuffed with cashews, raisins and almonds. We picked this because the stuffed preparation shows real kitchen craft.",
        featured: true
      },
      {
        name: "Paneer Papdi",
        description: "Our chef's special cottage cheese roasted with herbs and spices. The signature dish every chef takes pride in.",
        featured: false
      },
      {
        name: "Mushroom Tandoori Tikka",
        description: "Butter mushrooms marinated in tandoori masala and clay-oven cooked. Vegetarian tandoor done right."
      },
      {
        name: "Chicken Banjara",
        description: "Mild-spiced chicken tikka with egg coating, tandoor-finished. The egg coating keeps every bite juicy."
      },
      {
        name: "Chicken Kali Mirch Tikka",
        description: "Curd-marinated chicken with cashews, cream and rare spices. Black pepper heat balanced by the creamy marinade."
      },
      {
        name: "Grilled Fish with Butter Sauce",
        description: "Fish fillets topped with buttery lemon sauce. Simple preparation lets the fish quality shine through."
      }
    ]
  },
  {
    category: "Fresh Salads",
    tagline: "Garden Fresh",
    color: "accent",
    dishes: [
      {
        name: "Cheese Pineapple Salad",
        description: "Fresh cheese and sweet pineapple in seasonal greens. The combination gives you sweet, savory and fresh in every forkful.",
        featured: true
      }
    ]
  },
  {
    category: "Main Course",
    tagline: "Heart of the Meal",
    color: "wine",
    dishes: [
      {
        name: "Paneer Lababdar",
        description: "Authentic Punjabi cottage cheese in tomato-cashew gravy. The luscious combination has fed families for generations.",
        featured: true
      },
      {
        name: "Shyam Savera Kofta",
        description: "Mughlai cottage cheese and vegetable koftas in rich, aromatic curry. Two-tone koftas that look like dawn breaking.",
        featured: false
      },
      {
        name: "Mutton Rogan Josh",
        description: "Kashmir delight with warm spices and slow-cooking method. The long, gentle cooking makes the meat surrender completely."
      },
      {
        name: "Rara Chicken",
        description: "Unique chicken recipe combining pieces with mutton keema. Double the protein, double the flavor depth."
      },
      {
        name: "Butter Chicken",
        description: "The famous dish in buttery gravy with traditional Punjabi spices. When done right, this is what brings people back."
      }
    ]
  },
  {
    category: "Sweet Endings & Breads",
    tagline: "Perfect Finishes",
    color: "accent",
    dishes: [
      {
        name: "Sizzling Brownie",
        description: "Hot brownie with chocolate sauce and vanilla ice cream on a sizzling plate. The drama makes the dessert taste even better.",
        featured: true
      },
      {
        name: "Vanilla Affogato",
        description: "Vanilla ice cream drowned in hot espresso. Italian simplicity that turns ice cream into an event."
      },
      {
        name: "Fried Ice Cream",
        description: "Deep-fried breaded ice cream scoop. The hot-cold contrast hits different every single time."
      },
      {
        name: "Aagaaz Special Kulcha",
        description: "Our signature thin, crisp whole wheat kulcha from the tandoor. Every house needs a bread that guests remember.",
        featured: true
      },
      {
        name: "Chur-Chur Naan",
        description: "Flaky, layered naan that breaks apart in your hands. The texture makes every bite of curry stick perfectly."
      }
    ]
  }
]

export default function MenuHighlights() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-section-padding-y bg-gradient-to-br from-surface-subtle via-background to-surface-subtle relative overflow-hidden" id="menu">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-20 bg-wine/10 rotate-12 blur-sm" />
      <div className="absolute bottom-32 right-16 w-1 h-16 bg-accent/15 -rotate-12 blur-sm" />
      <div className="absolute top-1/2 left-1/4 w-px h-24 bg-gradient-to-b from-accent/20 to-transparent" />

      <Container>
        {/* Enhanced Header */}
        <div className="text-center mb-20 relative">
          <ScrollReveal direction="up" delay={0.2}>
            <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-wine/10 to-accent/10 border border-wine/20 rounded-full text-wine text-sm font-medium backdrop-blur-sm mb-6">
              <span className={`w-2 h-2 bg-wine rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
              Menu Highlights
              <span className={`w-2 h-2 bg-accent rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
            </span>
          </ScrollReveal>

          <BlurText
            text="Signature Dishes Worth the Journey"
            className="font-display text-5xl md:text-6xl lg:text-7xl text-text mb-8 leading-tight"
            delay={60}
            animateBy="words"
          />

          <ScrollReveal direction="up" delay={0.6} threshold={0.1}>
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed mb-12" style={{ fontFamily: 'var(--font-fraunces)' }}>
              Each dish is crafted with passion, using the finest ingredients
              and time-honored techniques passed down through generations.
              Every plate tells a story of culinary mastery.
            </p>
          </ScrollReveal>

          {/* Decorative divider */}
          <ScrollReveal direction="up" delay={0.8}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-wine/40" />
              <div className="w-2 h-2 bg-accent rounded-full" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent/40" />
            </div>
          </ScrollReveal>
        </div>

        {/* Menu Grid with Enhanced Layout */}
        <StaggerContainer
          staggerDelay={0.2}
          direction="up"
          threshold={0.1}
          className="grid md:grid-cols-2 gap-16 mb-20"
        >
          {menuHighlights.map((category, categoryIndex) => (
            <LuxuryHover
              key={category.category}
              hoverY={-8}
              className="group"
            >
              {/* Category Header */}
              <div className="relative mb-8">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 + 0.5, duration: 1.2 }}
                  className={`absolute bottom-0 left-0 h-px bg-${category.color}/40 origin-left`}
                  style={{ width: "100%" }}
                />

                <BlurText
                  text={category.category}
                  className="font-display text-3xl md:text-4xl text-secondary mb-2"
                  delay={40}
                  threshold={0.8}
                />

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.7, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 + 0.7, duration: 0.8 }}
                  className={`text-${category.color} text-sm uppercase tracking-wider font-medium`}
                >
                  {category.tagline}
                </motion.p>
              </div>

              {/* Dishes */}
              <StaggerContainer
                staggerDelay={0.08}
                direction="up"
                threshold={0.9}
                className="space-y-8"
              >
                {category.dishes.map((dish, dishIndex) => (
                  <motion.div
                    key={dish.name}
                    className={`
                      relative flex h-full flex-col rounded-xl border border-border/50 p-6 backdrop-blur-sm transition-all duration-500
                      ${dish.featured
                        ? `bg-gradient-to-br from-${category.color}/5 to-${category.color}/10 border-${category.color}/30`
                        : 'bg-surface/60 hover:bg-surface/80'
                      }
                      group-hover:border-${category.color}/40
                    `}
                    whileHover={shouldReduceMotion ? {} : {
                      scale: 1.02,
                      y: -2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Featured badge */}
                    {dish.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + dishIndex * 0.1 + 1 }}
                        className={`absolute -top-2 -right-2 w-6 h-6 bg-${category.color} rounded-full flex items-center justify-center`}
                      >
                        <span className="text-surface text-xs">★</span>
                      </motion.div>
                    )}

                    <div className={`w-full ${dish.featured ? 'pr-6 sm:pr-8' : ''}`}>
                      <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + dishIndex * 0.1 + 0.8 }}
                        className="mb-2 text-xl leading-tight text-text transition-colors duration-300 group-hover:text-accent"
                      >
                        {dish.name}
                      </motion.h4>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + dishIndex * 0.1 + 1 }}
                        className="text-sm leading-relaxed text-text-light"
                      >
                        {dish.description}
                      </motion.p>
                    </div>

                    {/* Hover decoration */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-${category.color}/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{ width: "60%" }}
                    />
                  </motion.div>
                ))}
              </StaggerContainer>
            </LuxuryHover>
          ))}
        </StaggerContainer>

        {/* Enhanced Bottom CTA */}
        <ScrollReveal direction="up" delay={0.4} threshold={0.1}>
          <div className="text-center bg-gradient-to-br from-surface to-surface-subtle p-12 rounded-2xl border border-border/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8"
            >
              <BlurText
                text="Ready for a Culinary Journey?"
                className="font-display text-2xl md:text-3xl text-text mb-4"
                delay={50}
              />
              <p className="text-text-light mb-6 max-w-md mx-auto">
                Menu details coming soon. Please ask your server about seasonal specialties
                and chef's recommendations.
              </p>
            </motion.div>

            <LuxuryHover hoverScale={1.05} hoverY={-4}>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-surface px-8 py-4 text-lg font-semibold shadow-2xl shadow-secondary/25"
              >
                <Link href="/#enquire-now">Reserve Your Table</Link>
              </Button>
            </LuxuryHover>

            {/* Decorative elements */}
            <motion.div
              animate={shouldReduceMotion ? {} : {
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-4 right-8 w-3 h-3 border border-accent/30 rounded-full"
            />
            <motion.div
              animate={shouldReduceMotion ? {} : {
                rotate: [360, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-6 left-6 w-2 h-2 bg-wine/40 rounded-full"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
