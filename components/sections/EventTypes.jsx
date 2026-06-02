'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const eventTypes = [
  {
    title: "Corporate Conferences",
    description: "Professional settings for board meetings, annual conferences, and strategic planning sessions with state-of-the-art AV support.",
    features: ["Full AV Equipment", "Professional Setup", "Catering Options", "WiFi & Tech Support"],
    capacity: "20-180 guests",
    icon: "📊"
  },
  {
    title: "Product Launches",
    description: "Create memorable moments for your brand with theatrical lighting, premium staging, and seamless event coordination.",
    features: ["Stage & Lighting", "Media Wall Setup", "Premium Service", "Brand Integration"],
    capacity: "50-300 guests",
    icon: "🚀"
  },
  {
    title: "Team Building",
    description: "Foster stronger connections with customized activities, collaborative spaces, and shared dining experiences.",
    features: ["Activity Coordination", "Flexible Spaces", "Team Challenges", "Group Dining"],
    capacity: "15-100 participants",
    icon: "🤝"
  },
  {
    title: "Achievement Celebrations",
    description: "Honor milestones, awards, and company achievements with elegant celebrations that reflect your success.",
    features: ["Award Ceremonies", "Recognition Events", "Networking Spaces", "Premium Service"],
    capacity: "25-200 guests",
    icon: "🏆"
  },
  {
    title: "Training & Workshops",
    description: "Professional learning environments with modern facilities, breakout spaces, and comprehensive support.",
    features: ["Interactive Setup", "Breakout Rooms", "Learning Materials", "Refreshment Breaks"],
    capacity: "10-80 participants",
    icon: "📚"
  },
  {
    title: "Client Entertainment",
    description: "Impress clients and partners with sophisticated hospitality experiences and memorable dining occasions.",
    features: ["VIP Service", "Private Dining", "Custom Menus", "Entertainment Options"],
    capacity: "8-50 guests",
    icon: "🥂"
  }
]

export default function EventTypes() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <section className="py-section-padding-y bg-surface-subtle" id="event-types">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium mb-4"
          >
            Event Categories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-display-lg text-text mb-6"
          >
            Experiences That
            <br />
            Inspire Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Whether celebrating achievements or building for the future,
            every corporate event becomes a moment of connection and growth.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {eventTypes.map((event) => (
            <motion.div
              key={event.title}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-surface border border-border rounded-lg p-6 group hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{event.icon}</span>
                <span className="text-sm text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {event.capacity}
                </span>
              </div>

              <h3 className="font-display text-xl text-text mb-3 group-hover:text-accent transition-colors">
                {event.title}
              </h3>

              <p className="text-text-light leading-relaxed mb-4">
                {event.description}
              </p>

              <div className="space-y-2">
                {event.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-text-light">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-text-light mb-6">
            Custom packages available for unique requirements and special occasions.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light text-surface">
            <Link href="/#enquire-now">Discuss Your Event</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}