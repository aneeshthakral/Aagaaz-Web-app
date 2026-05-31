'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { MapPin, Navigation, Car, Plane } from 'lucide-react'

const fullAddress = "Aagaaz Celebration & Hospitality, Opp Silver Oak Garden & Resort, Pakhowal Road, Ludhiana, Punjab 142022, India"
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(fullAddress)}`
const embeddedMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=15&output=embed`

const directions = [
  {
    icon: Car,
    title: "By Car",
    description: "Take Pakhowal Road from Ludhiana city center. Aagaaz is easily accessible with ample parking available.",
    time: "15 minutes from city center"
  },
  {
    icon: Plane,
    title: "From Airport",
    description: "Sahnewal Airport is approximately 15 km away. Taxi and car rentals are readily available.",
    time: "25 minutes drive"
  },
  {
    icon: Navigation,
    title: "Public Transport",
    description: "Regular bus services and auto-rickshaws connect to Pakhowal Road from all parts of Ludhiana.",
    time: "Multiple routes available"
  }
]

const landmarks = [
  "Near Punjab Agricultural University",
  "Close to Guru Nanak Stadium",
  "Adjacent to major shopping complexes",
  "Well-connected to industrial areas"
]

export default function ContactMap() {
  const shouldReduceMotion = useReducedMotion()

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
            Find Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-display-lg text-text mb-6"
          >
            Visit Our
            <br />
            <span className="text-secondary">Beautiful Venue</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Located in the heart of Ludhiana on Pakhowal Road, Aagaaz is easily accessible
            and surrounded by the city's key landmarks and amenities.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-surface border border-border rounded-lg overflow-hidden">
              <iframe
                title="Map showing the Aagaaz venue on Pakhowal Road in Ludhiana"
                src={embeddedMapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-96 w-full border-0"
              />

              <div className="border-t border-border-subtle bg-surface-subtle p-4">
                <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                  >
                    <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer">
                      Open in Apple Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* Address Details */}
              <div className="p-6 border-t border-border-subtle">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-text mb-1">Complete Address</h4>
                    <p className="text-text-light leading-relaxed">
                      Aagaaz Celebration & Hospitality<br />
                      Opp Silver Oak Garden & Resort<br />
                      Pakhowal Road, Ludhiana 142022<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Directions & Landmarks */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Getting Here */}
            <div>
              <h3 className="font-display text-2xl text-text mb-6">Getting Here</h3>
              <div className="space-y-4">
                {directions.map((direction, index) => {
                  const IconComponent = direction.icon
                  return (
                    <div
                      key={index}
                      className="bg-surface border border-border rounded-lg p-4 hover:border-accent/30 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <IconComponent size={20} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-text">{direction.title}</h4>
                            <span className="text-secondary text-sm font-medium">{direction.time}</span>
                          </div>
                          <p className="text-text-light text-sm leading-relaxed">
                            {direction.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div>
              <h3 className="font-display text-2xl text-text mb-6">Nearby Landmarks</h3>
              <div className="bg-surface border border-border rounded-lg p-6">
                <ul className="space-y-3">
                  {landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center text-text-light">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div>
              <h3 className="font-display text-2xl text-text mb-6">Venue Facilities</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🅿️</div>
                  <h4 className="font-semibold text-text text-sm mb-1">Free Parking</h4>
                  <p className="text-text-light text-xs">200+ Spaces</p>
                </div>
                <div className="bg-surface border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">♿</div>
                  <h4 className="font-semibold text-text text-sm mb-1">Accessible</h4>
                  <p className="text-text-light text-xs">Wheelchair Friendly</p>
                </div>
                <div className="bg-surface border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <h4 className="font-semibold text-text text-sm mb-1">Security</h4>
                  <p className="text-text-light text-xs">24/7 Coverage</p>
                </div>
                <div className="bg-surface border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📶</div>
                  <h4 className="font-semibold text-text text-sm mb-1">WiFi</h4>
                  <p className="text-text-light text-xs">High-Speed Access</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
