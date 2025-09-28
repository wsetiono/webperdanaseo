import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Globe, Smartphone, Palette, Search, Shield, Zap, Users, CheckCircle, ArrowRight, Star } from "lucide-react"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { StructuredData } from "@/components/structured-data"

export const metadata = {
  title: "Web Perdana - Jasa Pembuatan Website, Custom Aplikasi Web & Custom Aplikasi Mobile Profesional",
  description:
    "Jasa pembuatan website, redesign website, dan pengembangan aplikasi mobile profesional. Website menarik, loading cepat, keamanan terjamin. Hubungi kami untuk konsultasi gratis!",
  keywords:
    "jasa pembuatan website, jasa pembuatan website murah dan profesional, jasa redesign website, pembuatan aplikasi professional dan berkualitas, jasa pembuatan aplikasi murah, web development jakarta, aplikasi mobile indonesia",
  openGraph: {
    title: "Web Perdana - Jasa Pembuatan Website, Custom Aplikasi Web & Custom Aplikasi Mobile Profesional",
    description:
      "Jasa pembuatan website, redesign website, dan pengembangan aplikasi mobile profesional. Website menarik, loading cepat, keamanan terjamin. Hubungi kami untuk konsultasi gratis!",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "id_ID",
    siteName: "Web Perdana",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Perdana - Jasa Pembuatan Website, Custom Aplikasi Web & Custom Aplikasi Mobile Profesional",
    description: "Jasa pembuatan website, redesign website, dan pengembangan aplikasi mobile profesional. Website menarik, loading cepat, keamanan terjamin. Hubungi kami untuk konsultasi gratis!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://webperdana.com",
  },
}

export default function HomePage() {
  const services = [
    {
      icon: Globe,
      title: "Pembuatan Website, Custom Aplikasi Web & Custom Aplikasi Mobile Profesional",
      description:
        "Jasa pembuatan website, redesign website, dan pengembangan aplikasi mobile profesional. Website menarik, loading cepat, keamanan terjamin. Hubungi kami untuk konsultasi gratis!",
      features: ["Responsive Design", "Loading Secepat Kilat", "Tampilan"],
    },
    {
      icon: Palette,
      title: "Redesign Website",
      description:
        "Perbaikan tampilan dan performa website untuk user experience yang lebih baik dan conversion rate yang tinggi",
      features: ["UI/UX Modern", "Mobile Friendly", "Optimasi Kecepatan"],
    },
    {
      icon: Smartphone,
      title: "Aplikasi Mobile",
      description:
        "Pengembangan aplikasi Android dan iOS yang berkualitas dan profesional dengan fitur lengkap sesuai kebutuhan bisnis",
      features: ["Native App", "Cross Platform", "User Friendly"],
    },
  ]

  const portfolioItems = [
    {
      title: "E-Commerce Fashion",
      category: "Website Toko Online",
      image: "/modern-fashion-ecommerce.png",
      description:
        "Website toko online fashion dengan fitur lengkap dan design modern yang meningkatkan penjualan online",
    },
    {
      title: "Aplikasi Delivery Food",
      category: "Mobile App",
      image: "/food-delivery-app.png",
      description:
        "Aplikasi mobile untuk layanan delivery makanan dengan UI yang menarik dan sistem pemesanan yang mudah",
    },
    {
      title: "Website Corporate",
      category: "Company Profile",
      image: "/professional-corporate-website.png",
      description:
        "Website company profile dengan design profesional dan elegan yang meningkatkan kredibilitas perusahaan",
    },
    {
      title: "Sistem Manajemen",
      category: "Web Application",
      image: "/business-management-dashboard.png",
      description: "Aplikasi web untuk manajemen bisnis dengan dashboard yang informatif dan fitur lengkap",
    },
    {
      title: "Website Pendidikan",
      category: "Educational Platform",
      image: "/online-learning-platform-website.jpg",
      description: "Platform pembelajaran online dengan fitur interaktif yang memudahkan proses belajar mengajar",
    },
    {
      title: "Aplikasi Kesehatan",
      category: "Mobile App",
      image: "/healthcare-mobile-app.png",
      description: "Aplikasi mobile untuk layanan kesehatan dengan fitur telemedicine dan manajemen pasien",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Loading Cepat",
      description:
        "Website dengan performa tinggi dan loading time di bawah 3 detik untuk pengalaman pengguna yang optimal",
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description:
        "Sistem keamanan berlapis dengan SSL certificate dan backup otomatis untuk melindungi data bisnis Anda",
    },
    {
      icon: Search,
      title: "Responsive Design",
      description:
        "Website dibuat sedemikian rupa sehingga responsive pada PC, tablet, smartphone",
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Design yang mudah digunakan dan responsive di semua device untuk meningkatkan kepuasan pengguna",
    },
  ]

  const testimonials = [
    {
      name: "Budi Santoso",
      company: "CV. Maju Jaya",
      rating: 5,
      text: "Website yang dibuat sangat profesional dan membantu meningkatkan penjualan online kami hingga 200%. Tim Web Perdana SEO sangat responsif dan memahami kebutuhan bisnis dengan baik.",
    },
    {
      name: "Sari Dewi",
      company: "Toko Bunga Indah",
      rating: 5,
      text: "Aplikasi mobile yang dikembangkan sangat user-friendly dan memudahkan pelanggan untuk memesan. Omzet meningkat signifikan setelah menggunakan aplikasi ini. Terima kasih Web Perdana SEO!",
    },
    {
      name: "Ahmad Rahman",
      company: "PT. Teknologi Maju",
      rating: 5,
      text: "Redesign website kami berhasil meningkatkan traffic hingga 300% dan conversion rate naik 150%. Hasilnya melebihi ekspektasi dan sangat puas dengan layanan profesional yang diberikan.",
    },
  ]

  return (
    <div className="min-h-screen">
      <StructuredData type="organization" data={{}} />
      <StructuredData type="website" data={{}} />
      <StructuredData
        type="service"
        data={{
          name: "Jasa Pembuatan Website SEO Friendly",
          description:
            "Layanan pembuatan website profesional yang sudah dioptimasi SEO untuk meningkatkan ranking di Google dan mendatangkan lebih banyak pelanggan",
        }}
      />
      <StructuredData type="breadcrumb" data={[{ name: "Home", url: "https://webperdanaseo.id" }]} />

      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
        <header className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Jasa Pembuatan Website SEO Friendly
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Website <span className="text-primary">SEO Friendly</span> & Aplikasi Mobile{" "}
                  <span className="text-secondary">Profesional</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Tingkatkan bisnis Anda dengan website yang menarik, loading cepat, keamanan terjamin, dan sudah
                  dioptimasi SEO. Kami juga menyediakan jasa pembuatan aplikasi mobile berkualitas tinggi yang dapat
                  meningkatkan omzet dan memperluas jangkauan pasar Anda. Dengan pengalaman lebih dari 5 tahun, kami
                  telah membantu ratusan bisnis berkembang di era digital.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/kontak">
                    Konsultasi Gratis <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portofolio">Lihat Portofolio</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Project Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Klien Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5★</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/modern-website-development-illustration.jpg"
                  alt="Jasa pembuatan website SEO friendly dan aplikasi mobile profesional - Web Perdana SEO"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </header>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <header className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Layanan Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Solusi Digital Terlengkap untuk <span className="text-primary">Bisnis Anda</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Kami menyediakan layanan pembuatan website SEO friendly, redesign website, dan pengembangan aplikasi
              mobile dengan kualitas profesional dan harga terjangkau. Semua layanan kami dirancang untuk meningkatkan
              omzet dan memperluas jangkauan bisnis Anda di era digital. Tim ahli kami berpengalaman dalam berbagai
              industri dan siap membantu mewujudkan visi digital Anda.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href="/layanan">Pelajari Lebih Lanjut</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <header className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Portofolio Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Project <span className="text-primary">Terbaru</span> Kami
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Lihat berbagai project website dan aplikasi mobile yang telah kami kerjakan dengan hasil yang memuaskan
              klien dan memberikan dampak positif bagi pertumbuhan bisnis mereka. Setiap project dikerjakan dengan
              standar kualitas tinggi dan disesuaikan dengan kebutuhan spesifik klien.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} - ${item.category} oleh Web Perdana SEO`}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      Lihat Detail
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <Badge variant="outline" className="w-fit">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/portofolio">
                Lihat Semua Portofolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <header className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Keunggulan Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Mengapa Memilih <span className="text-primary">Web Perdana SEO</span>?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Kami berkomitmen memberikan layanan terbaik dengan standar kualitas tinggi dan hasil yang terukur untuk
              kesuksesan bisnis Anda. Dengan metodologi yang terbukti dan tim yang berpengalaman, kami memastikan setiap
              project memberikan ROI yang maksimal bagi klien.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <header className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Testimoni Klien
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Apa Kata <span className="text-primary">Klien Kami</span>?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Kepuasan klien adalah prioritas utama kami. Lihat testimoni dari berbagai klien yang telah merasakan
              manfaat layanan kami dan mengalami peningkatan signifikan dalam bisnis mereka setelah menggunakan website
              dan aplikasi yang kami buat.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">{testimonial.text}</p>
                <div className="space-y-1">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Siap Memulai Project Anda?</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto leading-relaxed">
            Konsultasikan kebutuhan website atau aplikasi mobile Anda dengan tim ahli kami. Dapatkan penawaran terbaik
            dan solusi yang tepat untuk mengembangkan bisnis Anda di era digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontak">
                Konsultasi Gratis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="tel:+6281234567890">Hubungi Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
