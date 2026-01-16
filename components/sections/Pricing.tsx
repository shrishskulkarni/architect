'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'

const packages = [
  {
    name: 'Basic',
    price: 'Starting at ₹2L',
    description: 'Perfect for small projects and consultations',
    features: [
      'Initial consultation',
      'Basic 2D floor plans',
      'Material recommendations',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: 'Starting at ₹5L',
    description: 'Comprehensive design and planning',
    features: [
      'Detailed 2D/3D plans',
      'Interior design concepts',
      'Material sourcing assistance',
      'Site visits (up to 3)',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 'Custom Quote',
    description: 'Full-service turnkey execution',
    features: [
      'Complete architectural design',
      '3D visualizations & walkthroughs',
      'Project management',
      'Turnkey execution',
      'Unlimited site visits',
      'Dedicated project manager',
      'Post-completion support',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="pricing" className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Pricing & Packages
          </h2>
          <div className="w-24 h-1 bg-accent-terracotta mx-auto mb-4"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Final quote depends on site size, scope, and specific requirements. Contact us for a
            personalized estimate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-background p-8 rounded-lg border-2 ${
                pkg.popular
                  ? 'border-accent-terracotta shadow-lg scale-105'
                  : 'border-accent-terracotta/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-terracotta text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif text-text-primary mb-2">{pkg.name}</h3>
              <div className="text-3xl font-serif text-accent-terracotta mb-2">{pkg.price}</div>
              <p className="text-text-secondary text-sm mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                onClick={handleScroll}
                className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                  pkg.popular
                    ? 'bg-accent-terracotta text-white hover:bg-accent-terracotta/90'
                    : 'border-2 border-accent-terracotta text-accent-terracotta hover:bg-accent-terracotta/5'
                }`}
              >
                Request Quote
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
