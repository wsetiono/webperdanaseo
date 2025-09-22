import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Calendar, Users, Globe, Smartphone } from "lucide-react"

export default function PortofolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Fashion Trendy",
      category: "Website Toko Online",
      type: "web",
      client: "Fashion Store Indonesia",
      year: "2024",
      description:
        "Website toko online fashion dengan design modern, fitur lengkap seperti shopping cart, payment gateway, dan sistem inventory management. Dilengkapi dengan optimasi SEO untuk meningkatkan visibility di mesin pencari.",
      image: "/modern-fashion-ecommerce.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "PostgreSQL"],
      features: [
        "Responsive Design",
        "Payment Gateway Integration",
        "Inventory Management",
        "SEO Optimized",
        "Admin Dashboard",
        "Customer Reviews",
      ],
      results: [
        "Traffic meningkat 300%",
        "Conversion rate 15%",
        "Loading speed 2.1 detik",
        "Mobile-friendly score 98%",
      ],
      url: "#",
    },
    {
      id: 2,
      title: "Aplikasi Delivery Food",
      category: "Mobile Application",
      type: "mobile",
      client: "FoodGo Indonesia",
      year: "2024",
      description:
        "Aplikasi mobile untuk layanan delivery makanan dengan UI yang menarik dan user experience yang optimal. Dilengkapi dengan sistem tracking real-time, payment gateway, dan notifikasi push.",
      image: "/food-delivery-app.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Google Maps API"],
      features: [
        "Real-time Tracking",
        "Push Notifications",
        "Multiple Payment Methods",
        "Rating & Review System",
        "Order History",
        "Promo & Discount System",
      ],
      results: ["10,000+ downloads", "Rating 4.8/5 di Play Store", "Order completion rate 95%", "User retention 80%"],
      url: "#",
    },
    {
      id: 3,
      title: "Website Corporate PT. Teknologi Maju",
      category: "Company Profile",
      type: "web",
      client: "PT. Teknologi Maju",
      year: "2024",
      description:
        "Website company profile dengan design profesional dan elegan. Menampilkan informasi perusahaan, layanan, portofolio, dan tim dengan layout yang clean dan modern.",
      image: "/professional-corporate-website.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      features: [
        "Professional Design",
        "Interactive Animations",
        "Multi-language Support",
        "Contact Form Integration",
        "Blog System",
        "SEO Optimized",
      ],
      results: [
        "Brand awareness meningkat 250%",
        "Lead generation 40+ per bulan",
        "Page load speed 1.8 detik",
        "SEO score 95/100",
      ],
      url: "#",
    },
    {
      id: 4,
      title: "Sistem Manajemen Bisnis",
      category: "Web Application",
      type: "web",
      client: "CV. Maju Bersama",
      year: "2023",
      description:
        "Aplikasi web untuk manajemen bisnis dengan dashboard yang informatif. Mencakup manajemen inventory, penjualan, keuangan, dan laporan bisnis yang komprehensif.",
      image: "/business-management-dashboard.png",
      technologies: ["React", "Node.js", "Express", "MySQL", "Chart.js"],
      features: [
        "Dashboard Analytics",
        "Inventory Management",
        "Sales Tracking",
        "Financial Reports",
        "User Management",
        "Data Export/Import",
      ],
      results: [
        "Efisiensi operasional +60%",
        "Waktu pembuatan laporan -80%",
        "Akurasi data 99.5%",
        "User satisfaction 4.9/5",
      ],
      url: "#",
    },
    {
      id: 5,
      title: "Platform Pembelajaran Online",
      category: "Educational Platform",
      type: "web",
      client: "EduTech Indonesia",
      year: "2023",
      description:
        "Platform pembelajaran online dengan fitur interaktif untuk mendukung proses belajar mengajar. Dilengkapi dengan sistem quiz, video streaming, dan progress tracking.",
      image: "/online-learning-platform-website.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3", "WebRTC"],
      features: [
        "Video Streaming",
        "Interactive Quiz System",
        "Progress Tracking",
        "Discussion Forum",
        "Certificate Generation",
        "Mobile Responsive",
      ],
      results: ["5,000+ siswa aktif", "Completion rate 85%", "Student satisfaction 4.7/5", "Course engagement +120%"],
      url: "#",
    },
    {
      id: 6,
      title: "Aplikasi Kesehatan Telemedicine",
      category: "Healthcare App",
      type: "mobile",
      client: "HealthCare Plus",
      year: "2023",
      description:
        "Aplikasi mobile untuk layanan kesehatan dengan fitur telemedicine, booking dokter, dan medical records. Design yang user-friendly untuk semua kalangan usia.",
      image: "/healthcare-mobile-app.png",
      technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL", "WebRTC"],
      features: [
        "Video Consultation",
        "Doctor Booking System",
        "Medical Records",
        "Prescription Management",
        "Health Tracking",
        "Emergency Contact",
      ],
      results: [
        "15,000+ pengguna aktif",
        "Consultation success rate 98%",
        "App rating 4.9/5",
        "Doctor satisfaction 4.8/5",
      ],
      url: "#",
    },
  ]

  const categories = [
    "Semua",
    "Website Toko Online",
    "Mobile Application",
    "Company Profile",
    "Web Application",
    "Educational Platform",
    "Healthcare App",
  ]

  const stats = [
    { number: "100+", label: "Project Selesai" },
    { number: "50+", label: "Klien Puas" },
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Portofolio Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Project <span className="text-primary">Terbaik</span> Kami
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Lihat berbagai project website dan aplikasi mobile yang telah kami kerjakan dengan hasil yang memuaskan
              klien. Setiap project dikerjakan dengan standar kualitas tinggi dan fokus pada hasil yang optimal.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Lihat Detail
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      {item.type === "web" ? (
                        <Globe className="h-4 w-4 text-primary" />
                      ) : (
                        <Smartphone className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {item.client}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.year}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {item.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Lihat Detail Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Siap Membuat Project Seperti Ini?</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto leading-relaxed">
            Konsultasikan ide project Anda dengan tim ahli kami. Kami siap membantu mewujudkan website atau aplikasi
            impian Anda dengan kualitas terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontak">Konsultasi Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/layanan">Lihat Layanan</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
