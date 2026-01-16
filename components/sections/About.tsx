'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">About</h2>
          <div className="w-24 h-1 bg-accent-terracotta mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Architect"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-text-primary">
              Crafting Spaces with Purpose
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              With over a decade of experience in architecture and interior design, I specialize in
              creating spaces that seamlessly blend modern minimalism with subtle traditional Indian
              aesthetics. Every project is approached with meticulous attention to detail, ensuring
              that form meets function in the most elegant way.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              My design philosophy centers around creating timeless spaces that reflect the client&apos;s
              personality while maintaining a sense of luxury and sophistication. I believe in
              sustainable design practices and work closely with clients to bring their vision to
              life.
            </p>
            <div className="pt-4">
              <h4 className="font-serif text-text-primary mb-3">Core Values</h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-terracotta mt-1">•</span>
                  <span>Client-centric approach with personalized solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terracotta mt-1">•</span>
                  <span>Sustainable and eco-friendly design practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terracotta mt-1">•</span>
                  <span>Attention to detail and quality craftsmanship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terracotta mt-1">•</span>
                  <span>Timeless design that transcends trends</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
