'use client'

import { motion } from 'framer-motion'
import { Home, Palette, Layout, Wrench, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Home,
    title: 'Residential Architecture',
    description:
      'Complete architectural design for homes, villas, and residential complexes with a focus on functionality and aesthetics.',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description:
      'Transform your interiors with curated designs that reflect your personality while maintaining luxury and comfort.',
  },
  {
    icon: Layout,
    title: '2D/3D Planning',
    description:
      'Detailed floor plans, 3D visualizations, and virtual walkthroughs to help you visualize your space before construction.',
  },
  {
    icon: Wrench,
    title: 'Renovation & Space Optimization',
    description:
      'Maximize your existing space potential with smart renovation solutions and space optimization strategies.',
  },
  {
    icon: CheckCircle,
    title: 'Turnkey Project Execution',
    description:
      'End-to-end project management from design to execution, ensuring seamless delivery of your dream space.',
  },
]

export default function Services() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">Services</h2>
          <div className="w-24 h-1 bg-accent-terracotta mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-light p-8 rounded-lg border border-accent-terracotta/10 hover:border-accent-terracotta/30 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-accent-terracotta/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent-terracotta" />
                </div>
                <h3 className="text-xl font-serif text-text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href="#contact"
                  onClick={handleScroll}
                  className="text-accent-terracotta hover:text-accent-terracotta/80 font-medium text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Enquire Now
                  <span>→</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
