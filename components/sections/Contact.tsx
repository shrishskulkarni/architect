'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    serviceType: '',
    budgetRange: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        serviceType: '',
        budgetRange: '',
        message: '',
      })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in booking a consultation.\n\nName: ${formData.name || 'Not provided'}\nService: ${formData.serviceType || 'Not specified'}`
  )

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Book a Consultation
          </h2>
          <div className="w-24 h-1 bg-accent-terracotta mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-serif text-text-primary mb-4">Get in Touch</h3>
              <p className="text-text-secondary mb-8">
                Fill out the form or reach out directly. WeWe&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@architectstudio.com"
                className="flex items-center gap-3 text-text-secondary hover:text-accent-terracotta transition-colors"
              >
                <div className="w-12 h-12 bg-accent-terracotta/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-terracotta" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <p className="font-medium">hello@architectstudio.com</p>
                </div>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-text-secondary hover:text-accent-terracotta transition-colors"
              >
                <div className="w-12 h-12 bg-accent-terracotta/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent-terracotta" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Phone</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </a>

              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-accent-terracotta transition-colors"
              >
                <div className="w-12 h-12 bg-accent-terracotta/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent-terracotta" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">WhatsApp</p>
                  <p className="font-medium">Chat with us</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-background-light p-8 rounded-lg border border-accent-terracotta/10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-accent-terracotta/20 rounded-lg focus:outline-none focus:border-accent-terracotta transition-colors bg-background"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-accent-terracotta/20 rounded-lg focus:outline-none focus:border-accent-terracotta transition-colors bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-accent-terracotta/20 rounded-lg focus:outline-none focus:border-accent-terracotta transition-colors bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-text-primary mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-accent-terracotta/20 rounded-lg focus:outline-none focus:border-accent-terracotta transition-colors bg-background"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-accent-terracotta/20 rounded-lg focus:outline-none focus:border-accent-terracotta transition-colors bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Architecture</option>
                    <option value="interior">Interior Design</option>
                    <option value="planning">2D/3D Planning</option>
                    <option value="renovation">Renovation & Space Optimization</option>
                    <option value="turnkey">Turnkey Project Execution</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budgetRange"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-accent-terracotta/20 rounded-lg focus:outline-none focus:border-accent-terracotta transition-colors bg-background"
                  >
                    <option value="">Select budget</option>
                    <option value="under-5">Under ₹5L</option>
                    <option value="5-10">₹5L - ₹10L</option>
                    <option value="10-25">₹10L - ₹25L</option>
                    <option value="25-50">₹25L - ₹50L</option>
                    <option value="50+">₹50L+</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-accent-terracotta/20 rounded-lg focus:outline-none focus:border-accent-terracotta transition-colors bg-background resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm">
                  Thank you! WeWe&apos;ll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent-terracotta text-white rounded-lg hover:bg-accent-terracotta/90 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
