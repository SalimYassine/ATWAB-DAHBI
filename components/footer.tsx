import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Tapisserie & Décoration</h3>
            <p className="text-sm text-muted-foreground">
              Services professionnels de tapisserie, décoration et réparation pour votre salon marocain authentique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contactez-Nous</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://wa.me/212660728660" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={16} className="text-primary" />
                  <span>+212 6 60 72 86 60</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/%D8%A3%D8%AB%D9%88%D8%A7%D8%A8+%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%E2%80%AD/@32.3415524,-6.3648528,17z/data=!3m1!4b1!4m6!3m5!1s0xda3878ec70aeda1:0x664769c380215031!8m2!3d32.3415524!4d-6.3648528!16s%2Fg%2F11k224_gby!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Voir sur Google Maps</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2024 Tapisserie & Décoration Marocaine. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
