export interface Project {
  slug: string
  title: string
  description: string
  location: string
  year: string
  tags: string[]
  images: string[]
  requirements: string
  solution: string
}

export const projects: Project[] = [
  {
    slug: 'luxury-villa-mumbai',
    title: 'Luxury Villa in Mumbai',
    description:
      'A contemporary 5-bedroom villa that seamlessly blends modern architecture with traditional Indian design elements.',
    location: 'Mumbai, Maharashtra',
    year: '2023',
    tags: ['Residential', 'Exterior', 'Interior'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    requirements:
      'The client wanted a spacious family home that reflected their love for both modern minimalism and traditional Indian aesthetics. They needed 5 bedrooms, a large living area, a home office, and outdoor spaces for entertaining.',
    solution:
      'We designed a villa with clean lines and open spaces, incorporating subtle Indian motifs through jaali work on windows and traditional patterns in flooring. The color palette uses warm neutrals with terracotta and gold accents. Large windows ensure natural light throughout, while private courtyards provide intimate outdoor spaces.',
  },
  {
    slug: 'modern-apartment-delhi',
    title: 'Modern Apartment Interior - Delhi',
    description:
      'Complete interior transformation of a 3BHK apartment with smart space optimization and luxury finishes.',
    location: 'Delhi NCR',
    year: '2023',
    tags: ['Residential', 'Interior'],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
    ],
    requirements:
      'A young professional couple needed to maximize space in their compact 3BHK apartment. They wanted a modern, minimalist design with storage solutions and a home office space.',
    solution:
      'We created a flexible layout with built-in storage solutions, sliding partitions, and multi-functional furniture. The design uses a neutral palette with pops of color through artwork and textiles. Custom cabinetry maximizes every inch of space while maintaining a clean, uncluttered aesthetic.',
  },
  {
    slug: 'heritage-home-renovation',
    title: 'Heritage Home Renovation',
    description:
      'Sensitive restoration and modernization of a 100-year-old heritage home, preserving its character while adding modern amenities.',
    location: 'Bangalore, Karnataka',
    year: '2022',
    tags: ['Residential', 'Interior', 'Exterior'],
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    requirements:
      'The owners wanted to preserve the heritage character of their ancestral home while making it suitable for modern living. They needed updated electrical and plumbing systems, better natural light, and contemporary kitchen and bathrooms.',
    solution:
      'We carefully restored original architectural elements like wooden beams, traditional flooring, and decorative motifs. Modern amenities were seamlessly integrated without compromising the heritage aesthetic. New skylights and larger windows improved natural light, while the kitchen and bathrooms were redesigned with modern fixtures that complement the traditional style.',
  },
  {
    slug: 'commercial-office-space',
    title: 'Commercial Office Space',
    description:
      'A contemporary office design that promotes productivity while reflecting the company\'s values of innovation and sustainability.',
    location: 'Pune, Maharashtra',
    year: '2023',
    tags: ['Commercial', 'Interior'],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    ],
    requirements:
      'A tech company needed a flexible office space for 50 employees with collaborative areas, private meeting rooms, and a breakout space. The design should reflect their innovative culture.',
    solution:
      'We created an open-plan layout with flexible work zones, soundproof meeting pods, and a vibrant breakout area. The design uses sustainable materials and incorporates biophilic elements with indoor plants. Ergonomic furniture and ample natural light create a healthy, productive work environment.',
  },
  {
    slug: 'penthouse-luxury',
    title: 'Penthouse Luxury Design',
    description:
      'Ultra-luxury penthouse interior with panoramic city views, featuring bespoke furniture and premium finishes.',
    location: 'Gurgaon, Haryana',
    year: '2023',
    tags: ['Residential', 'Interior'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
    ],
    requirements:
      'A high-net-worth individual wanted a luxurious penthouse that showcased their art collection and provided spaces for both entertaining and relaxation. The design should be sophisticated yet comfortable.',
    solution:
      'We designed a sophisticated interior with gallery-like spaces for art display, a grand living area for entertaining, and intimate private spaces. Premium materials like marble, brass, and custom woodwork create a luxurious atmosphere. The design maximizes the stunning city views while creating cozy, comfortable living spaces.',
  },
  {
    slug: 'compact-studio-optimization',
    title: 'Compact Studio Space Optimization',
    description:
      'Smart design solutions for a 400 sq ft studio apartment, creating multiple functional zones in a small space.',
    location: 'Mumbai, Maharashtra',
    year: '2022',
    tags: ['Residential', 'Interior'],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    ],
    requirements:
      'A young professional needed to transform a small studio into a functional home with separate areas for sleeping, working, cooking, and relaxing. Storage was a major concern.',
    solution:
      'We used sliding partitions, loft beds, and multi-functional furniture to create distinct zones. Custom-built storage solutions utilize vertical space and hidden compartments. The design uses light colors and mirrors to create an illusion of space, while smart lighting defines different areas throughout the day.',
  },
]
