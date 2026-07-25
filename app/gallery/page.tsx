'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, X, LogOut } from 'lucide-react'

const ADMIN_PASSWORD = 'ATWAB2026'

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [customProjects, setCustomProjects] = useState([])
  const [formData, setFormData] = useState({ title: '', category: 'decoration', description: '', imageUrl: '' })

  // Check if admin is logged in
  useEffect(() => {
    const savedAdmin = localStorage.getItem('isAdmin')
    if (savedAdmin === 'true') setIsAdmin(true)
  }, [])

  // Load custom projects from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('customProjects')
    if (saved) setCustomProjects(JSON.parse(saved))
  }, [])

  const handleAddProject = () => {
    if (formData.title && formData.description && formData.imageUrl) {
      const newProject = {
        id: Date.now(),
        ...formData
      }
      const updated = [...customProjects, newProject]
      setCustomProjects(updated)
      localStorage.setItem('customProjects', JSON.stringify(updated))
      setFormData({ title: '', category: 'decoration', description: '', imageUrl: '' })
      setIsModalOpen(false)
    }
  }

  const handleDeleteProject = (id) => {
    const updated = customProjects.filter(p => p.id !== id)
    setCustomProjects(updated)
    localStorage.setItem('customProjects', JSON.stringify(updated))
  }

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true)
      localStorage.setItem('isAdmin', 'true')
      setAdminPassword('')
      setIsLoginOpen(false)
    } else {
      alert('Mot de passe incorrect')
    }
  }

  const handleAdminLogout = () => {
    setIsAdmin(false)
    localStorage.removeItem('isAdmin')
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({...formData, imageUrl: reader.result})
      }
      reader.readAsDataURL(file)
    }
  }

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

  const allProjects = [...projects, ...customProjects]
  const filteredProjects = selectedFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === selectedFilter)

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
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Nos Projets</h2>
              <div className="flex items-center gap-2">
                {isAdmin ? (
                  <>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                    >
                      <Plus size={20} />
                      Ajouter une photo
                    </button>
                    <button
                      onClick={handleAdminLogout}
                      className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-border transition"
                    >
                      <LogOut size={20} />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="text-xs text-muted-foreground hover:text-foreground transition"
                  >
                    Admin
                  </button>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-lg overflow-hidden border border-border hover:border-primary/50 transition cursor-pointer relative"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <img 
                      src={project.image || project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    {isAdmin && customProjects.some(p => p.id === project.id) && (
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="absolute top-2 right-2 p-1 bg-red-500/90 hover:bg-red-600 text-white rounded opacity-0 group-hover:opacity-100 transition"
                      >
                        <X size={16} />
                      </button>
                    )}
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
                <p className="text-5xl font-bold text-primary mb-2">200+</p>
                <p className="text-muted-foreground">Projets complétés</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">500+</p>
                <p className="text-muted-foreground">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">20+</p>
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

        {/* Admin Login Modal */}
        {isLoginOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg p-8 max-w-sm w-full border border-border">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Connexion Admin</h2>
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="p-1 hover:bg-muted rounded transition"
                >
                  <X size={24} className="text-foreground" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mot de passe</label>
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                    placeholder="Entrez le mot de passe"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setIsLoginOpen(false)}
                    className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleAdminLogin}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                  >
                    Se connecter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Photo Modal */}
        {isModalOpen && isAdmin && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg p-8 max-w-md w-full border border-border">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Ajouter une photo</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-muted rounded transition"
                >
                  <X size={24} className="text-foreground" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Titre</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Titre du projet"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Catégorie</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Description du projet..."
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Photo</label>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground file:bg-primary file:text-primary-foreground file:border-0 file:rounded file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {formData.imageUrl && (
                    <div className="mt-2 relative w-full h-32 rounded-lg overflow-hidden border border-border">
                      <img src={formData.imageUrl} alt="preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">Sélectionnez une image PNG ou JPG</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleAddProject}
                    disabled={!formData.title || !formData.description || !formData.imageUrl}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </main>
    </>
  )
}
