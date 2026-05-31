'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/layout/Container'

const values = [
  {
    title: "Excellence in Every Detail",
    description: "From the arrangement of flowers to the timing of service, we believe that perfection lies in the accumulation of small, thoughtful gestures.",
    icon: "✨",
    color: "from-accent/20 to-accent/10"
  },
  {
    title: "Authentic Hospitality",
    description: "Our service comes from the heart, rooted in Punjab's tradition of treating guests not as customers, but as honored family members.",
    icon: "🤝",
    color: "from-wine/20 to-wine/10"
  },
  {
    title: "Cultural Sensitivity",
    description: "We understand that every celebration carries deep personal and cultural meaning. Our team respects and honors diverse traditions with equal care.",
    icon: "🎭",
    color: "from-amber/20 to-amber/10"
  },
  {
    title: "Innovation with Respect",
    description: "While we embrace modern amenities and contemporary design, we never lose sight of the timeless values that make celebrations meaningful.",
    icon: "🌟",
    color: "from-secondary/20 to-secondary/10"
  },
  {
    title: "Community Connection",
    description: "Aagaaz is woven into the fabric of Ludhiana's community. We are proud to be where families create legacies and businesses celebrate growth.",
    icon: "🏛️",
    color: "from-accent/20 to-wine/20"
  },
  {
    title: "Environmental Consciousness",
    description: "Beautiful beginnings should not come at the cost of our planet. We incorporate sustainable practices while maintaining luxury experiences.",
    icon: "🌱",
    color: "from-green-500/20 to-green-400/10"
  }
]

export default function StoryValues() {
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
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
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-4"
          >
            Our Values
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-display-lg text-text mb-6"
          >
            The Principles That
            <br />
            <span className="text-secondary">Guide Every Celebration</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-light max-w-3xl mx-auto"
          >
            These values are not just words on a wall — they are the foundation of every
            decision we make, every service we provide, and every relationship we build.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-surface border border-border rounded-lg overflow-hidden group hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${value.color}`} />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{value.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-text mb-2 group-hover:text-accent transition-colors leading-tight">
                      {value.title}
                    </h3>
                  </div>
                </div>

                <p className="text-text-light leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 p-12 bg-gradient-to-br from-surface-subtle to-background rounded-lg border border-border"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-text mb-6">
              Every story has its <span className="text-accent">Aagaaz</span>
            </h3>

            <p className="text-lg text-text-light leading-relaxed mb-8">
              We are honored to be part of your beginning. Whether you're planning a wedding
              that starts a lifetime together, a corporate celebration that marks achievement,
              or a simple gathering that strengthens bonds — we are here to ensure your
              Aagaaz is as beautiful as the story it begins.
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-text-light">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span>Founded 2012</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span>1000+ Celebrations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span>Ludhiana Heritage</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}