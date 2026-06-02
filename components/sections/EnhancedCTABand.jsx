"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { Container } from "../layout/Container";
import { ArrowRight, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import Link from "next/link";

/**
 * Enhanced CTA Band - Enquire Now form with contact details and map
 * Single form for all enquiries with dropdown-driven simplicity
 */

const enquiryTypes = [
  "Wedding / Reception",
  "Kitty Party",
  "Room Booking",
  "Corporate Event",
  "Birthday Celebration",
  "Anniversary",
  "General Enquiry"
];

const guestCounts = [
  "Under 25",
  "25-50",
  "50-100",
  "100-150",
  "150-200",
  "200+"
];

// PASTE YOUR REAL WEB3FORMS ACCESS KEY HERE BEFORE GOING LIVE.
const WEB3FORMS_ACCESS_KEY = "PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE";

export function EnhancedCTABand() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    enquiryType: "",
    guestCount: "",
    eventDate: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Aagaaz Website Enquiry",
        from_name: "Aagaaz Website",
        botcheck: "",
        name: formData.name,
        phone: formData.phone,
        enquiry_type: formData.enquiryType,
        guest_count: formData.guestCount,
        event_date: formData.eventDate,
        message: formData.message
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your enquiry right now.");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        enquiryType: "",
        guestCount: "",
        eventDate: "",
        message: ""
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="enquire-now" className="bg-midnight relative overflow-hidden py-24 text-white lg:py-32">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a961' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        >
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="font-display mb-6 text-4xl font-semibold lg:text-6xl">
              Ready to begin
              <span className="text-accent block">your celebration?</span>
            </h2>
            <p className="mb-8 text-xl font-light leading-relaxed text-white/80 lg:text-2xl">
              Five decades of trust. Thousands of celebrations. Your perfect beginning starts here.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              {isSubmitted ? (
                <div className="rounded-2xl border border-accent/30 bg-white/5 p-8 text-center backdrop-blur-sm">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <Send className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">Thank You!</h3>
                  <p className="text-white/80">
                    Your enquiry has been received. We'll contact you within 24 hours to discuss your celebration.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <h3 className="mb-6 text-2xl font-semibold">Get in Touch</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    {/* Name & Phone */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-accent focus:outline-none"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-accent focus:outline-none"
                      />
                    </div>

                    {/* Dropdowns */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        required
                        className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none"
                      >
                        <option value="">Celebration Type</option>
                        {enquiryTypes.map(type => (
                          <option key={type} value={type} className="bg-midnight text-white">
                            {type}
                          </option>
                        ))}
                      </select>

                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none"
                      >
                        <option value="">Guest Count</option>
                        {guestCounts.map(count => (
                          <option key={count} value={count} className="bg-midnight text-white">
                            {count}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Event Date */}
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none"
                    />

                    {/* Message */}
                    <textarea
                      name="message"
                      placeholder="Any special requirements or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-accent focus:outline-none resize-none"
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 w-full py-4 text-lg font-medium disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Enquiry"}
                    </Button>

                    {submitError ? (
                      <p className="text-sm font-medium text-red-300" role="alert">
                        {submitError}
                      </p>
                    ) : null}
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact & Map Side */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
              className="space-y-8"
            >
              {/* Contact Options */}
              <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
                {/* Phone */}
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <Phone className="text-accent h-6 w-6" />
                  <div>
                    <div className="mb-1 text-sm font-medium">Call Us</div>
                    <a
                      href="tel:+919592099941"
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      +91 95920 99941
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <MessageCircle className="text-accent h-6 w-6" />
                  <div>
                    <div className="mb-1 text-sm font-medium">WhatsApp</div>
                    <a
                      href="https://wa.me/916239503191"
                      className="text-sm text-white/80 transition-colors hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <MapPin className="text-accent h-6 w-6" />
                  <div>
                    <div className="mb-1 text-sm font-medium">Visit Us</div>
                    <span className="text-sm text-white/80">
                      Pakhowal Road, Ludhiana
                    </span>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps?q=30.865056,75.802771&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aagaaz Location"
                  />
                </div>

                {/* Map Action Buttons */}
                <div className="flex gap-2 p-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/30 text-white hover:bg-white/10"
                  >
                    <a
                      href="https://www.google.com/maps?q=30.865056,75.802771"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/30 text-white hover:bg-white/10"
                  >
                    <a
                      href="https://maps.apple.com/?q=Aagaaz&ll=30.865056,75.802771"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Apple Maps
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust indicator */}
          <motion.div
            className="mt-16 border-t border-white/10 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.6,
            }}
          >
            <p className="text-sm text-white/80">
              Join 500+ families who chose Aagaaz for their special moments
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default EnhancedCTABand;
