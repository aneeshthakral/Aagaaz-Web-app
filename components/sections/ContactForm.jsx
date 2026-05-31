'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Star, Send } from 'lucide-react'

const enquiryTypes = [
  "Banquet & Wedding",
  "Kitty Party",
  "Corporate Event",
  "Room Booking",
  "Dining Reservation",
  "General Inquiry"
]

const guestCounts = [
  "Under 50",
  "50 - 100",
  "100 - 150",
  "150 - 200",
  "200 - 300",
  "300+"
]

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,00,000",
  "₹2,00,000 - ₹5,00,000",
  "₹5,00,000+"
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const fieldClassName = "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text transition-colors placeholder:text-text-light focus:border-accent focus:outline-none"

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        enquiryType: '',
        eventDate: '',
        guestCount: '',
        budget: '',
        message: ''
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-section-padding-y scroll-mt-24 bg-surface-subtle" id="enquiry">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-surface border border-accent/30 rounded-lg p-12">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="text-accent" size={32} />
              </div>
              <h3 className="font-display text-2xl text-text mb-4">
                Thank You for Reaching Out!
              </h3>
              <p className="text-text-light leading-relaxed mb-6">
                Your enquiry has been received successfully. Our team will review your requirements
                and get back to you within 2 hours during business hours.
              </p>
              <p className="text-sm text-accent font-medium">
                For urgent matters, please call +91-95920 99941
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-section-padding-y scroll-mt-24 bg-surface-subtle" id="enquiry">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-wine/10 border border-wine/20 rounded-full text-wine text-sm font-medium mb-4"
          >
            Detailed Enquiry
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-display-lg text-text mb-6"
          >
            Tell Us About
            <br />
            <span className="text-accent">Your Dream Event</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            The more details you share, the better we can tailor our proposal to make
            your celebration exactly as you've envisioned it.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-text font-medium">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={fieldClassName}
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-text font-medium">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={fieldClassName}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-text font-medium">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={fieldClassName}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Enquiry Type */}
              <div className="space-y-2">
                <label htmlFor="enquiryType" className="text-text font-medium">
                  Type of Event *
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={(e) => handleSelectChange('enquiryType', e.target.value)}
                  className={fieldClassName}
                >
                  <option value="">Select event type</option>
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* Event Date */}
              <div className="space-y-2">
                <label htmlFor="eventDate" className="flex items-center gap-2 text-text font-medium">
                  <Calendar size={16} />
                  Preferred Date
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className={fieldClassName}
                />
              </div>

              {/* Guest Count */}
              <div className="space-y-2">
                <label htmlFor="guestCount" className="flex items-center gap-2 text-text font-medium">
                  <Users size={16} />
                  Expected Guests
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={(e) => handleSelectChange('guestCount', e.target.value)}
                  className={fieldClassName}
                >
                  <option value="">Guest count</option>
                  {guestCounts.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <label htmlFor="budget" className="text-text font-medium">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => handleSelectChange('budget', e.target.value)}
                  className={fieldClassName}
                >
                  <option value="">Select budget</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-text font-medium">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className={`${fieldClassName} resize-none`}
                placeholder="Tell us more about your vision, special requirements, dietary preferences, decoration themes, or any other details that will help us create the perfect experience for you."
              />
              <p className="text-text-light text-xs">
                The more details you provide, the more accurate our proposal will be.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="bg-accent hover:bg-accent-hover text-accent-foreground px-12"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Send size={18} />
                    Send Enquiry
                  </div>
                )}
              </Button>

              <p className="text-text-light text-sm mt-4">
                We typically respond within 2 hours during business hours.
                <br />
                For immediate assistance, call <span className="text-accent font-medium">+91-95920 99941</span>
              </p>
            </div>
          </form>
        </motion.div>

        {/* Additional Support */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-surface border border-border rounded-lg">
            <div className="w-12 h-12 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Calendar className="text-accent" size={20} />
            </div>
            <h4 className="font-semibold text-text mb-2">Site Visit</h4>
            <p className="text-text-light text-sm">
              Schedule a complimentary tour of our facilities
            </p>
          </div>

          <div className="text-center p-6 bg-surface border border-border rounded-lg">
            <div className="w-12 h-12 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="text-secondary" size={20} />
            </div>
            <h4 className="font-semibold text-text mb-2">Consultation</h4>
            <p className="text-text-light text-sm">
              Free planning session with our event specialists
            </p>
          </div>

          <div className="text-center p-6 bg-surface border border-border rounded-lg">
            <div className="w-12 h-12 bg-wine/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Star className="text-wine" size={20} />
            </div>
            <h4 className="font-semibold text-text mb-2">Custom Quote</h4>
            <p className="text-text-light text-sm">
              Tailored proposal based on your specific needs
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
