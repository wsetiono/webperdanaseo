import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Globe, Smartphone, Palette, CheckCircle, ArrowRight, Users, Award, Clock, DollarSign } from "lucide-react"

export default function LayananPage() {
  const services = [
    {
      id: "web-development",
      icon: Globe,
      title: "Jasa Pembuatan Website SEO Friendly",
      subtitle: "Website Profesional yang Teroptimasi SEO",
      description:
        "Kami menyediakan jasa pembuatan website yang sudah dioptimasi SEO dari awal. Website Anda akan memiliki struktur yang baik, loading cepat, dan mudah ditemukan di mesin pencari Google.",
      features: [
        "Website Responsive (Mobile, Tablet, Desktop)",
        "Optimasi SEO On-Page dan Technical SEO",
        "Loading Speed di bawah 3 detik",
        "SSL Certificate dan Keamanan Berlapis",
        "Content Management System (CMS)",
        "Google Analytics dan Search Console Setup",
        "Meta Tags dan Schema Markup",
        "Sitemap XML dan Robots.txt",
      ],
      benefits: [
        "Ranking tinggi di Google",
        "Traffic organik meningkat",
        "Konversi penjualan lebih baik",
        "Brand awareness yang kuat",
      ],
      pricing: "Mulai dari Rp 2.500.000",
      duration: "7-14 hari kerja",
      image: "jasa-pembuatan-website-seo-friendly.jpg",
    },
    {
      id: "website-redesign",
      icon: Palette,
      title: "Jasa Redesign Website",
      subtitle: "Perbaikan Website untuk User Experience yang Lebih Baik",
      description:
        "Layanan redesign website untuk meningkatkan tampilan, performa, dan user experience. Kami akan menganalisis website lama Anda dan memberikan solusi terbaik untuk meningkatkan konversi.",
      features: [
        "Analisis Website dan Kompetitor",
        "UI/UX Design Modern dan Menarik",
        "Optimasi Kecepatan Loading",
        "Mobile-First Responsive Design",
        "Perbaikan Struktur SEO",
        "A/B Testing untuk Konversi",
        "Integrasi dengan Tools Marketing",
        "Backup dan Migrasi Data Aman",
      ],
      benefits: [
        "User experience yang lebih baik",
        "Bounce rate menurun drastis",
        "Conversion rate meningkat",
        "Tampilan modern dan profesional",
      ],
      pricing: "Mulai dari Rp 1.800.000",
      duration: "5-10 hari kerja",
      image: "jasa-redesign-website.jpg",
    },
    {
      id: "mobile-development",
      icon: Smartphone,
      title: "Jasa Pembuatan Aplikasi Mobile",
      subtitle: "Aplikasi Android & iOS Profesional dan Berkualitas",
      description:
        "Pengembangan aplikasi mobile native dan cross-platform dengan kualitas tinggi. Aplikasi yang kami buat user-friendly, performa tinggi, dan sesuai dengan kebutuhan bisnis Anda.",
      features: [
        "Native Android dan iOS Development",
        "Cross-Platform dengan React Native/Flutter",
        "UI/UX Design yang Menarik",
        "Integrasi API dan Database",
        "Push Notification System",
        "In-App Purchase dan Payment Gateway",
        "Analytics dan Crash Reporting",
        "App Store dan Play Store Submission",
      ],
      benefits: [
        "Jangkauan customer lebih luas",
        "Engagement user meningkat",
        "Brand loyalty yang kuat",
        "Revenue stream baru",
      ],
      pricing: "Mulai dari Rp 8.500.000",
      duration: "30-60 hari kerja",
      image: "jasa-pembuatan-mobile-app.jpg",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Konsultasi & Analisis",
      description:
        "Diskusi kebutuhan, analisis kompetitor, dan perencanaan strategi digital yang tepat untuk bisnis Anda.",
    },
    {
      step: "02",
      title: "Design & Prototype",
      description:
        "Pembuatan mockup dan prototype untuk memastikan design sesuai dengan ekspektasi dan kebutuhan user.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Proses coding dan development dengan testing menyeluruh untuk memastikan kualitas dan performa optimal.",
    },
    {
      step: "04",
      title: "Launch & Maintenance",
      description: "Go-live website/aplikasi dan dukungan maintenance untuk memastikan performa tetap optimal.",
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: "Tim Berpengalaman",
      description: "Developer dan designer berpengalaman 5+ tahun di industri digital",
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Komitmen menyelesaikan project sesuai timeline yang disepakati",
    },
    {
      icon: DollarSign,
      title: "Harga Kompetitif",
      description: "Harga terjangkau dengan kualitas premium dan hasil yang memuaskan",
    },
    {
      icon: Users,
      title: "Support 24/7",
      description: "Dukungan teknis dan konsultasi kapan saja Anda membutuhkan",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Layanan Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Layanan <span className="text-primary">Digital</span> Terlengkap
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Solusi lengkap untuk kebutuhan digital bisnis Anda. Dari pembuatan website SEO friendly, redesign website,
              hingga pengembangan aplikasi mobile profesional dengan harga terjangkau.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{service.subtitle}</Badge>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-balance">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Harga</div>
                      <div className="text-2xl font-bold text-primary">{service.pricing}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Durasi</div>
                      <div className="text-lg font-semibold">{service.duration}</div>
                    </div>
                  </div>

                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/kontak">
                      Konsultasi Sekarang <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative z-10">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Proses Kerja
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Bagaimana Kami <span className="text-primary">Bekerja</span>?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Proses kerja yang terstruktur dan transparan untuk memastikan hasil yang optimal dan sesuai ekspektasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Keunggulan Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Mengapa Memilih <span className="text-primary">Web Perdana SEO</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Siap Memulai Project Digital Anda?</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto leading-relaxed">
            Konsultasikan kebutuhan website atau aplikasi mobile Anda dengan tim ahli kami. Dapatkan penawaran khusus
            dan solusi terbaik untuk bisnis Anda.
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
    </div>
  )
}
