'use client'

import { Mail, Phone, MapPin, Zap, Shield, Award } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Page() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Navigation />
      <main className="w-full">

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
                Transformez votre intérieur marocain
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Services professionnels d&apos;upholsterie, décoration et réparation de salons marocains authentiques. Nous redonnons vie à vos meubles avec expertise et passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Demander un devis
                </button>
                <a href="https://wa.me/212660728660" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition text-center">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-muted">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏘️</div>
                  <p className="text-muted-foreground">Galerie de projets à venir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour sublimer et préserver vos salons marocains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Tapisserie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Restauration complète de vos canapés et fauteuils marocains avec des tissus authentiques et durables.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-accent w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Décoration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Création et aménagement d&apos;espaces salons marocains avec coussins, tapis et accessoires traditionnels.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Réparation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maintenance et réparation d&apos;urgence de vos meubles marocains pour prolonger leur durée de vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Réalisations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos projets les plus récents et nos transformations d&apos;intérieurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Salon Marocain Luxe', img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.04%284%29-Fm8LjjsRoQrzk7fu0WlEjziLgJzjxX.jpeg' },
              { title: 'Salon Moderne', img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.07%282%29-faUQMj6MyNflERMqrehHpTNC6DGuqJ.jpeg' },
              { title: 'Restauration Complète', img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.05%281%29-eQ5Z58XIvNywg0svtvPrZXAkWTRVXC.jpeg' },
              { title: 'Rénovation Salon', img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2022.09.07%283%29-UJjbk3ua8aQE0PVzU5nuwTnQdQBibl.jpeg' },
            ].map((project, i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden bg-muted border border-border group cursor-pointer">
                <img 
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end justify-start p-6">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Prenez contact</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Téléphone / WhatsApp</p>
                    <a href="https://wa.me/212660728660" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+212 6 60 72 86 60</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Localisation</p>
                    <a href="https://www.google.com/maps/place/%D8%A3%D8%AB%D9%88%D8%A7%D8%A8+%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%E2%80%AD/@32.3415524,-6.3648528,17z/data=!3m1!4b1!4m6!3m5!1s0xda3878ec70aeda1:0x664769c380215031!8m2!3d32.3415524!4d-6.3648528!16s%2Fg%2F11k224_gby!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Voir sur Google Maps</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Téléphone / WhatsApp</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+212 6XX XXX XXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
                    placeholder="Décrivez votre projet..."
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
                >
                  {submitted ? '✓ Message envoyé!' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}
