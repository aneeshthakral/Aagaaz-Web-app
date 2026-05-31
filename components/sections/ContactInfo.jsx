'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Phone, MessageCircle, Mail, MapPin, Clock, Users, Calendar, Star } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: "Primary Contact",
    details: [
      { label: "+91-95920 99941", href: "tel:+919592099941" }
    ],
    description: "Direct line for bookings and inquiries",
    available: "Available 24/7"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    details: [
      { label: "+91-62395 03191", href: "https://wa.me/916239503191" }
    ],
    description: "Quick responses and instant booking assistance",
    available: "Preferred for quick queries"
  },
  {
    icon: Mail,
    title: "Email Enquiries",
    details: [
      { label: "info@aagaaz.in", href: "mailto:info@aagaaz.in" },
      { label: "Event Enquiries", href: "mailto:info@aagaaz.in?subject=Event%20Enquiry%20for%20Aagaaz" }
    ],
    description: "Detailed proposals and formal communications",
    available: "Response within 2 hours"
  },
  {
    icon: MapPin,
    title: "Visit Our Venue",
    details: [
      { label: "Pakhowal Road", href: "https://www.google.com/maps/search/?api=1&query=Aagaaz%20Celebration%20%26%20Hospitality%2C%20Opp%20Silver%20Oak%20Garden%20%26%20Resort%2C%20Pakhowal%20Road%2C%20Ludhiana%2C%20Punjab%20142022%2C%20India" },
      { label: "Ludhiana, Punjab", href: "https://www.google.com/maps/search/?api=1&query=Aagaaz%20Celebration%20%26%20Hospitality%2C%20Opp%20Silver%20Oak%20Garden%20%26%20Resort%2C%20Pakhowal%20Road%2C%20Ludhiana%2C%20Punjab%20142022%2C%20India" }
    ],
    description: "See our facilities and discuss your celebration in person",
    available: "By appointment preferred"
  }
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 10:00 PM", note: "Extended hours for events" },
  { day: "Saturday - Sunday", hours: "8:00 AM - 11:00 PM", note: "Prime celebration days" },
  { day: "Public Holidays", hours: "24/7 Support", note: "Special occasion coverage" },
]

const specialServices = [
  { icon: Calendar, title: "Site Visits", description: "Complimentary venue tours by appointment" },
  { icon: Users, title: "Consultation", description: "Free planning sessions with our event specialists" },
  { icon: Star, title: "Custom Packages", description: "Tailored solutions for unique requirements" },
]

export default function ContactInfo() {
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
    <section className="py-section-padding-y bg-surface-subtle">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium mb-4"
          >
            Contact Information
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-display-lg text-text mb-6"
          >
            Ready to Connect
            <br />
            <span className="text-accent">When You Are</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Choose the way that feels most comfortable for you. We're here to listen,
            understand your vision, and help make it beautifully real.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-surface border border-border rounded-lg p-6 group hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <IconComponent size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-text mb-2 group-hover:text-accent transition-colors">
                      {method.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  {method.details.map((detail, idx) => (
                    <a
                      key={idx}
                      href={detail.href}
                      target={detail.href.startsWith('http') ? "_blank" : undefined}
                      rel={detail.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="block w-fit text-text font-medium underline decoration-border underline-offset-4 transition-colors hover:text-accent"
                    >
                      {detail.label}
                    </a>
                  ))}
                </div>

                <p className="text-text-light text-sm leading-relaxed mb-2">
                  {method.description}
                </p>

                <p className="text-secondary text-xs font-medium">
                  {method.available}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl text-text mb-6 flex items-center gap-3">
              <Clock className="text-accent" size={24} />
              Business Hours
            </h3>

            <div className="bg-surface border border-border rounded-lg p-6 space-y-4">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-start pb-4 border-b border-border-subtle last:border-b-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-text">{schedule.day}</p>
                    <p className="text-text-light text-sm">{schedule.note}</p>
                  </div>
                  <p className="text-secondary font-medium">{schedule.hours}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-text-light text-sm">
                <span className="font-medium text-secondary">Special Note:</span> For events and celebrations,
                we provide 24/7 support to ensure everything runs smoothly, regardless of the hour.
              </p>
            </div>
          </motion.div>

          {/* Special Services */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl text-text mb-6 flex items-center gap-3">
              <Star className="text-accent" size={24} />
              Special Services
            </h3>

            <div className="space-y-4">
              {specialServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={index}
                    className="bg-surface border border-border rounded-lg p-6 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <IconComponent size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text mb-2">{service.title}</h4>
                        <p className="text-text-light text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 p-6 bg-gradient-to-br from-wine/5 to-accent/5 border border-wine/20 rounded-lg">
              <h4 className="font-display text-lg text-text mb-3">Emergency Support</h4>
              <p className="text-text-light text-sm leading-relaxed">
                For urgent matters during events or last-minute changes, our emergency
                contact line is available 24/7 at <a className="font-medium text-secondary underline decoration-border underline-offset-4 hover:text-accent" href="tel:+919592099941">+91-95920 99941</a>.
                We're committed to making sure your celebration goes perfectly, no matter what.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
