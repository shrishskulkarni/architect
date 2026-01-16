import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin } from 'lucide-react'
import { projects } from '@/data/projects'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-terracotta mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-accent-terracotta/10 text-accent-terracotta rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl">{project.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent-terracotta mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Location</h3>
                <p className="text-text-secondary">{project.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-accent-terracotta mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Year</h3>
                <p className="text-text-secondary">{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-serif text-text-primary mb-4">Client Requirements</h2>
          <p className="text-text-secondary mb-6">{project.requirements}</p>
          <h2 className="text-2xl font-serif text-text-primary mb-4">Our Solution</h2>
          <p className="text-text-secondary">{project.solution}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="bg-background-light border border-accent-terracotta/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-text-primary mb-4">
            Love This Design?
          </h3>
          <p className="text-text-secondary mb-6">
            Get a similar design tailored to your space and requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-accent-terracotta text-white rounded-lg hover:bg-accent-terracotta/90 transition-colors font-medium"
          >
            Get a Similar Design
          </Link>
        </div>
      </div>
    </div>
  )
}
