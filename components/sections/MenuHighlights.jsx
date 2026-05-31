'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BlurText, ScrollReveal, LuxuryHover, StaggerContainer, CountUp } from '@/components/animations/MotionUtils'

const menuHighlights = [
  {
    category: "Signature Indian",
    tagline: "Heritage Flavors",
    color: "wine",
    dishes: [
      {
        name: "Royal Paneer Makhani",
        description: "Cottage cheese in rich tomato and cashew gravy, finished with cream",
        price: "485",
        featured: true
      },
      {
        name: "Tandoori Mixed Grill",
        description: "Chef's selection of marinated meats and vegetables from the tandoor",
        price: "695"
      },
      {
        name: "Hyderabadi Biryani",
        description: "Aromatic basmati rice layered with tender meat and saffron",
        price: "625"
      }
    ]
  },
  {
    category: "Italian Favorites",
    tagline: "Artisan Traditions",
    color: "accent",
    dishes: [
      {
        name: "Truffle Mushroom Risotto",
        description: "Creamy arborio rice with wild mushrooms and truffle oil",
        price: "545",
        featured: true
      },
      {
        name: "Wood-Fired Margherita",
        description: "Classic pizza with San Marzano tomatoes, fresh mozzarella, and basil",
        price: "425"
      },
      {
        name: "Linguine alle Vongole",
        description: "Fresh clams with white wine, garlic, and Italian parsley",
        price: "595"
      }
    ]
  },
  {
    category: "Oriental Selection",
    tagline: "Wok Masters",
    color: "wine",
    dishes: [
      {
        name: "Kung Pao Chicken",
        description: "Wok-tossed with peanuts, chilies, and Sichuan peppercorns",
        price: "465"
      },
      {
        name: "Thai Green Curry",
        description: "Aromatic coconut curry with lemongrass and Thai basil",
        price: "485"
      },
      {
        name: "Crispy Peking Duck",
        description: "Traditional preparation with pancakes, scallions, and hoisin sauce",
        price: "795",
        featured: true
      }
    ]
  },
  {
    category: "Continental Classics",
    tagline: "European Elegance",
    color: "accent",
    dishes: [
      {
        name: "Grilled Atlantic Salmon",
        description: "Pan-seared with herbs, served with roasted vegetables",
        price: "725"
      },
      {
        name: "Beef Tenderloin Medallions",
        description: "With red wine reduction and garlic mashed potatoes",
        price: "895",
        featured: true
      },
      {
        name: "Ratatouille Tart",
        description: "Seasonal vegetables in puff pastry with herb oil",
        price: "385"
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
                      relative p-6 rounded-xl border border-border/50 backdrop-blur-sm transition-all duration-500
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

                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1 min-w-0">
                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.2 + dishIndex * 0.1 + 0.8 }}
                          className="font-display text-xl text-text mb-2 leading-tight group-hover:text-accent transition-colors duration-300"
                        >
                          {dish.name}
                        </motion.h4>

                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.2 + dishIndex * 0.1 + 1 }}
                          className="text-text-light leading-relaxed text-sm"
                        >
                          {dish.description}
                        </motion.p>
                      </div>

                      <div className="flex-shrink-0">
                        <motion.div
                          className={`text-right`}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.2 + dishIndex * 0.1 + 1.2 }}
                        >
                          <div className="text-xs text-text-light mb-1">₹</div>
                          <CountUp
                            end={parseInt(dish.price)}
                            duration={1.5}
                            className={`font-display text-2xl font-semibold text-${category.color}`}
                          />
                        </motion.div>
                      </div>
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
                Prices subject to change. Please ask your server about seasonal specialties
                and chef's recommendations.
              </p>
            </motion.div>

            <LuxuryHover hoverScale={1.05} hoverY={-4}>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-surface px-8 py-4 text-lg font-semibold shadow-2xl shadow-secondary/25"
              >
                <Link href="/contact">Reserve Your Table</Link>
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
