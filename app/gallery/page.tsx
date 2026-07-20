'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Salon Marocain Classique',
      category: 'decoration',
      description: 'Salon marocain complet avec canapés, coussins et tapis traditionnels',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.04%284%29-Fm8LjjsRoQrzk7fu0WlEjziLgJzjxX.jpeg',
    },
    {
      id: 2,
      title: 'Restauration de Canapé',
      category: 'tapisserie',
      description: 'Restauration complète d\'un ancien canapé marocain',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.07%287%29-YLoWiwPdZbnEM2WmgpfoULysEGjS7W.jpeg',
    },
    {
      id: 3,
      title: 'Réparation d\'Urgence',
      category: 'reparation',
      description: 'Réparation structurelle d\'un fauteuil traditionnel',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.05%282%29-r67jQHFubucuHomc6R1d3XCXSH2s7j.jpeg',
    },
    {
      id: 4,
      title: 'Salon de Luxe',
      category: 'decoration',
      description: 'Création d\'un salon marocain haut de gamme avec accessoires premium',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.07%282%29-faUQMj6MyNflERMqrehHpTNC6DGuqJ.jpeg',
    },
    {
      id: 5,
      title: 'Restauration Textiles',
      category: 'tapisserie',
      description: 'Remplacement complet des tissus avec motifs authentiques',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.07%283%29-UJjbk3ua8aQE0PVzU5nuwTnQdQBibl.jpeg',
    },
    {
      id: 6,
      title: 'Maintenance Complète',
      category: 'reparation',
      description: 'Maintenance annuelle d\'un ensemble de meubles marocains',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.05%281%29-eQ5Z58XIvNywg0svtvPrZXAkWTRVXC.jpeg',
    },
    {
      id: 7,
      title: 'Salon Moderne Marocain',
      category: 'decoration',
      description: 'Fusion de style traditionnel marocain et décoration moderne',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.07%286%29-TxXyB054iYpNkuGg1f0TuDSzifhAkE.jpeg',
    },
    {
      id: 8,
      title: 'Restauration Ancienne',
      category: 'tapisserie',
      description: 'Restauration d\'une pièce antique datant des années 50',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.07%284%29-wwJRrZAgLV3kWoiIAb4hp2heCm8l6C.jpeg',
    },
  ]

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'decoration', label: 'Décoration' },
    { id: 'tapisserie', label: 'Tapisserie' },
    { id: 'reparation', label: 'Réparation' },
  ]

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category === selectedFilter)

  return (
    <>
      <Navigation />
      <main className="w-full">
        {/* Hero Section */}
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
                Notre Galerie
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez nos réalisations et projets antérieurs. Chaque création est une preuve de notre expertise et de notre passion pour l&apos;artisanat marocain.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition ${
                    selectedFilter === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-border'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-lg overflow-hidden border border-border hover:border-primary/50 transition cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-card">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">Aucun projet trouvé dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-16">Nos chiffres clés</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">100+</p>
                <p className="text-muted-foreground">Projets complétés</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">500+</p>
                <p className="text-muted-foreground">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">15+</p>
                <p className="text-muted-foreground">Ans d&apos;expérience</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">98%</p>
                <p className="text-muted-foreground">Satisfaction client</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Vous avez un projet ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous pour discuter de votre projet et découvrez comment nous pouvons transformer votre intérieur.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
            >
              Nous contacter
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
