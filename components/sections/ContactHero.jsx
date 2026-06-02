'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react'
import { BlurText, ScrollReveal, LuxuryHover, StaggerContainer, CountUp } from '@/components/animations/MotionUtils'

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion()

  const contactMethods = [
    {
      icon: Phone,
      label: "Call Now",
      value: "+91-95920 99941",
      href: "tel:+919592099941",
      color: "accent",
      priority: "immediate"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91-62395 03191",
      href: "https://wa.me/916239503191",
      color: "secondary",
      priority: "quick",
      external: true
    },
    {
      icon: Clock,
      label: "Open Daily",
      value: "24/7 Support",
      color: "accent",
      priority: "available",
      interactive: false
    },
    {
      icon: MapPin,
      label: "Pakhowal Road",
      value: "Ludhiana, Punjab",
      href: "https://www.google.com/maps/search/?api=1&query=Aagaaz%20Celebration%20%26%20Hospitality%2C%20Opp%20Silver%20Oak%20Garden%20%26%20Resort%2C%20Pakhowal%20Road%2C%20Ludhiana%2C%20Punjab%20142022%2C%20India",
      color: "accent",
      priority: "location",
      external: true
    }
  ]

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-br from-background via-surface-subtle to-background overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-24 right-20 w-2 h-20 bg-secondary/20 rotate-12 blur-sm"
        />

        <motion.div
          animate={shouldReduceMotion ? {} : {
            y: [0, 12, 0],
            rotate: [0, -8, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-16 w-1.5 h-16 bg-accent/25 -rotate-12 blur-sm"
        />
      </div>

      {/* Atmospheric background gradients */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-radial from-secondary/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-accent/6 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Badge */}
          <ScrollReveal direction="up" delay={0.2} threshold={0.1}>
            <motion.span
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium backdrop-blur-sm mb-12"
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.05,
                backgroundColor: 'rgba(114, 47, 55, 0.15)',
                borderColor: 'rgba(114, 47, 55, 0.5)'
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-2 h-2 bg-secondary rounded-full"
              />
              Get in Touch
              <motion.span
                animate={shouldReduceMotion ? {} : { rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-lg text-accent"
              >
                ✦
              </motion.span>
            </motion.span>
          </ScrollReveal>

          {/* Enhanced Main Title */}
          <BlurText
            text="Let's Plan Your Perfect Beginning"
            className="font-display text-6xl md:text-7xl lg:text-8xl text-text mb-12 leading-[0.85]"
            delay={60}
            animateBy="words"
          />

          {/* Enhanced Description */}
          <ScrollReveal direction="up" delay={0.8} threshold={0.1}>
            <motion.p
              className="text-2xl md:text-3xl text-text-light leading-relaxed mb-16 max-w-4xl mx-auto"
              style={{ fontFamily: 'var(--font-fraunces)' }}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              transition={shouldReduceMotion ? undefined : { delay: 1.2, duration: 1.2 }}
            >
              Whether you're envisioning an{' '}
              <motion.span
                className="text-secondary font-medium"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                intimate gathering
              </motion.span>
              {' '}or a{' '}
              <motion.span
                className="text-accent font-medium"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                grand celebration
              </motion.span>
              , our team is here to bring your dreams to life with warmth, expertise, and attention to every detail.
            </motion.p>
          </ScrollReveal>

          {/* Enhanced Quick Contact Actions */}
          <StaggerContainer
            staggerDelay={0.1}
            direction="up"
            threshold={0.1}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              const isButton = method.interactive !== false

              return isButton ? (
                <LuxuryHover
                  key={index}
                  hoverScale={1.02}
                  hoverY={-4}
                  className="group"
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className={`
                      flex items-center gap-4 p-6 h-auto border-${method.color}/30 text-${method.color}
                      hover:bg-${method.color}/10 hover:border-${method.color}/50
                      bg-surface/60 backdrop-blur-sm transition-all duration-500
                      group-hover:shadow-xl group-hover:shadow-${method.color}/20
                    `}
                  >
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 w-full"
                    >
                      <motion.div
                        className={`p-2 bg-${method.color}/10 rounded-lg group-hover:bg-${method.color}/20 transition-colors`}
                        whileHover={shouldReduceMotion ? {} : { rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                      <div className="text-left">
                        <div className="font-semibold text-base">{method.label}</div>
                        <div className="text-sm opacity-80">{method.value}</div>
                      </div>
                    </a>
                  </Button>
                </LuxuryHover>
              ) : (
                <motion.div
                  key={index}
                  className={`
                    flex items-center gap-4 p-6 bg-surface/60 border border-${method.color}/30 rounded-lg backdrop-blur-sm
                    hover:border-${method.color}/50 transition-all duration-500
                  `}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`p-2 bg-${method.color}/10 rounded-lg`}
                    animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <IconComponent size={24} className={`text-${method.color}`} />
                  </motion.div>
                  <div className="text-left">
                    <div className="font-semibold text-text">{method.label}</div>
                    <div className="text-sm text-text-light">{method.value}</div>
                  </div>
                </motion.div>
              )
            })}
          </StaggerContainer>

          {/* Enhanced Response Time & CTA */}
          <ScrollReveal direction="up" delay={1.2} threshold={0.1}>
            <div className="space-y-8">
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 text-text-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-accent rounded-full"
                  />
                  <span>Average response time:</span>
                  <CountUp
                    end={30}
                    suffix=" minutes"
                    className="font-semibold text-accent"
                  />
                </div>
                <span className="text-secondary">during business hours</span>
              </motion.div>

              <LuxuryHover hoverScale={1.05} hoverY={-6}>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary-light text-surface px-10 py-4 text-lg font-semibold shadow-2xl shadow-secondary/25"
                >
                  <a href="/#enquire-now">Send Detailed Enquiry</a>
                </Button>
              </LuxuryHover>
            </div>
          </ScrollReveal>

          {/* Floating decorative elements */}
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
            className="absolute top-20 right-12 w-3 h-3 border border-accent/40 rounded-full"
          />
          <motion.div
            animate={shouldReduceMotion ? {} : {
              rotate: [360, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-24 left-8 w-2 h-2 bg-secondary/50 rounded-full"
          />
        </div>
      </Container>
    </section>
  )
}
