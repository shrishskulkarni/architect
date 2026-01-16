import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Premium Architecture & Interior Design | Luxury Spaces in India',
  description: 'Transform your space with premium architecture and interior design. Specializing in residential architecture, interior design, and turnkey project execution across India.',
  keywords: 'architect, interior designer, architecture, interior design, residential design, India',
  authors: [{ name: 'Architect Portfolio' }],
  openGraph: {
    title: 'Premium Architecture & Interior Design',
    description: 'Luxury architecture and interior design services in India',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
