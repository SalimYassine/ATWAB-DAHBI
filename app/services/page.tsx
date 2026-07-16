'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Zap, Award, Shield, Zap as ZapIcon, CheckCircle2, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Tapisserie',
      icon: Zap,
      description: 'Restauration professionnelle de vos canapés et fauteuils marocains',
      details: [
        'Nettoyage en profondeur et préparation des structures',
        'Remplacement du rembourrage avec matériaux de qualité',
        'Utilisation de tissus authentiques et traditionnels',
        'Finitions décoratives et clous dorés',
        'Restauration des motifs originaux',
      ],
      process: [
        { step: 1, title: 'Consultation', description: 'Visite à domicile pour évaluer le projet' },
        { step: 2, title: 'Sélection', description: 'Choix des tissus et des matériaux' },
        { step: 3, title: 'Restauration', description: 'Travail en atelier avec expertise' },
        { step: 4, title: 'Livraison', description: 'Installation et mise en place' },
      ],
      color: 'primary',
    },
    {
      title: 'Décoration',
      icon: Award,
      description: 'Création et aménagement d\'espaces salons marocains uniques',
      details: [
        'Design personnalisé de salons marocains',
        'Coussins et poufs sur mesure',
        'Sélection de tapis authentiques',
        'Accessoires et éléments de décoration',
        'Harmonisation des couleurs et textures',
      ],
      process: [
        { step: 1, title: 'Conception', description: 'Création d\'un projet personnalisé' },
        { step: 2, title: 'Budget', description: 'Établissement d\'un devis détaillé' },
        { step: 3, title: 'Approvisionnement', description: 'Sourcing des meilleurs matériaux' },
        { step: 4, title: 'Installation', description: 'Mise en place professionnelle' },
      ],
      color: 'accent',
    },
    {
      title: 'Réparation',
      icon: Shield,
      description: 'Maintenance et réparation rapide de vos meubles marocains',
      details: [
        'Réparation de structures endommagées',
        'Correction des déchirures et usures',
        'Restauration des motifs usés',
        'Remplacement des éléments détériorés',
        'Maintenance régulière recommandée',
      ],
      process: [
        { step: 1, title: 'Diagnostic', description: 'Évaluation des dégâts et devis' },
        { step: 2, title: 'Priorité', description: 'Réparations d\'urgence possibles' },
        { step: 3, title: 'Exécution', description: 'Travail rapide et efficace' },
        { step: 4, title: 'Vérification', description: 'Contrôle qualité et garantie' },
      ],
      color: 'primary',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="w-full">
        {/* Hero Section */}
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
                Nos Services Professionnels
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Des solutions complètes et sur mesure pour transformer, restaurer et maintenir vos salons marocains avec excellence et authenticité.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <div key={idx} className="grid md:grid-cols-2 gap-12 items-start">
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          service.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      <h2 className="text-4xl font-bold text-foreground">{service.title}</h2>
                    </div>

                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-6">Qu&apos;inclut ce service :</h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/#contact"
                      className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
                    >
                      Demander un devis
                    </Link>
                  </div>

                  <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
                      <h3 className="text-xl font-semibold text-foreground mb-8">Notre processus</h3>
                      <div className="space-y-6">
                        {service.process.map((p) => (
                          <div key={p.step} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white ${
                                service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                              }`}>
                                {p.step}
                              </div>
                              {p.step < 4 && <div className="w-0.5 h-12 bg-border my-2" />}
                            </div>
                            <div className="pb-6">
                              <p className="font-semibold text-foreground">{p.title}</p>
                              <p className="text-sm text-muted-foreground">{p.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-16">Pourquoi nous choisir ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg border border-border text-center">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Expertise</h3>
                <p className="text-muted-foreground">
                  Années d&apos;expérience dans l&apos;art traditionnel marocain et la restauration de meubles.
                </p>
              </div>
              <div className="p-8 rounded-lg border border-border text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Qualité</h3>
                <p className="text-muted-foreground">
                  Utilisation exclusive de matériaux authentiques et de finitions professionnelles.
                </p>
              </div>
              <div className="p-8 rounded-lg border border-border text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Rapidité</h3>
                <p className="text-muted-foreground">
                  Délais respectés et service client réactif pour tous vos besoins urgents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Prêt à transformer votre intérieur ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous pour une consultation gratuite et un devis sans engagement.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
