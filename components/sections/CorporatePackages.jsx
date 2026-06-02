'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const packages = [
  {
    name: "Essential",
    description: "Perfect for meetings and small gatherings",
    availability: "Details on enquiry",
    duration: "Best for compact events",
    features: [
      "Professional venue setup",
      "Basic AV equipment included",
      "Welcome refreshments",
      "WiFi access",
      "Dedicated coordinator",
      "Flexible timing (4 hours)"
    ],
    ideal: "Team meetings, training sessions, small conferences",
    color: "border-accent"
  },
  {
    name: "Professional",
    description: "Comprehensive solution for corporate events",
    availability: "Details on enquiry",
    duration: "Best for mid-size events",
    features: [
      "Premium venue decoration",
      "Advanced AV & presentation tools",
      "Full meal service",
      "Branded materials support",
      "Photography coordination",
      "Extended timing (8 hours)",
      "Breakout space included"
    ],
    ideal: "Product launches, conferences, client events",
    color: "border-secondary",
    popular: true
  },
  {
    name: "Executive",
    description: "Luxury experience for distinguished gatherings",
    availability: "Details on enquiry",
    duration: "Best for premium events",
    features: [
      "Bespoke event design",
      "Premium staging & lighting",
      "Multi-course dining experience",
      "Dedicated event manager",
      "VIP service throughout",
      "Custom branding integration",
      "Full-day access",
      "Accommodation coordination"
    ],
    ideal: "Board meetings, VIP events, milestone celebrations",
    color: "border-accent"
  }
]

export default function CorporatePackages() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
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
            Service Packages
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-display-lg text-text mb-6"
          >
            Tailored Solutions
            <br />
            For Every Occasion
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Choose from our carefully crafted packages, each designed to deliver
            exceptional experiences while meeting your specific event requirements.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -12 }}
              transition={{ duration: 0.3 }}
              className={`
                relative bg-surface border-2 ${pkg.color} rounded-lg overflow-hidden
                ${pkg.popular ? 'shadow-xl scale-105' : 'hover:shadow-lg'}
                transition-all
              `}
            >
              {pkg.popular && (
                <div className="absolute -top-px left-1/2 transform -translate-x-1/2">
                  <span className="inline-block bg-secondary text-surface text-xs font-semibold px-3 py-1 rounded-b-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="font-display text-2xl text-text mb-2">
                  {pkg.name}
                </h3>

                <p className="text-text-light mb-4">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-display text-accent">
                    {pkg.availability}
                  </span>
                  <span className="text-text-light ml-1">
                    {pkg.duration}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-text text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border-subtle pt-6 mb-6">
                  <p className="text-xs text-text-light font-medium mb-2">IDEAL FOR:</p>
                  <p className="text-sm text-text">{pkg.ideal}</p>
                </div>

                <Button
                  asChild
                  className={`w-full ${pkg.popular ? 'bg-secondary hover:bg-secondary-light' : 'bg-accent hover:bg-accent-hover'}`}
                >
                  <Link href="/#enquire-now">Get Quote</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 p-8 bg-surface-subtle rounded-lg"
        >
          <h3 className="font-display text-xl text-text mb-4">
            Need Something Different?
          </h3>
          <p className="text-text-light mb-6">
            Every event is unique. We create custom packages tailored to your specific
            requirements and timeline. Let us design the perfect experience for you.
          </p>
          <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10">
            <Link href="/#enquire-now">Discuss Custom Package</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
