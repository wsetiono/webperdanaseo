import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">WP</span>
              </div>
              <span className="font-bold text-lg text-primary">Web Perdana SEO</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Solusi terpercaya untuk jasa pembuatan website SEO friendly, redesign website, dan pengembangan aplikasi
              mobile profesional yang membantu bisnis Anda berkembang di era digital.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/webperdanaseo"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook Web Perdana SEO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/webperdanaseo"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram Web Perdana SEO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/webperdanaseo"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Web Perdana SEO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/webperdanaseo"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter Web Perdana SEO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.youtube.com/@webperdanaseo"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube Web Perdana SEO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Layanan Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/layanan" className="text-muted-foreground hover:text-primary transition-colors">
                  Pembuatan Website SEO
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-muted-foreground hover:text-primary transition-colors">
                  Redesign Website
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-muted-foreground hover:text-primary transition-colors">
                  Aplikasi Mobile
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-muted-foreground hover:text-primary transition-colors">
                  Optimasi SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tentang-kami" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/portofolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <Link
                  href="mailto:info@webperdanaseo.id"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@webperdanaseo.id
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <Link href="tel:+6281234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +62 812-3456-7890
                </Link>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span className="text-muted-foreground">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Web Perdana SEO. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
